import { verifyWebhook } from "@clerk/nextjs/webhooks";
import { type NextRequest } from "next/server";
import { fetchMutation } from "convex/nextjs";
import { api } from "@convex/_generated/api";
import { generateUsername } from "unique-username-generator";

export async function POST(req: NextRequest) {
  try {
    const evt = await verifyWebhook(req);

    // Do something with payload
    // For this guide, log payload to console
    const { id } = evt.data;
    const eventType = evt.type;
    console.log(
      `Received webhook with ID ${id} and event type of ${eventType}`,
    );
    console.log("Webhook payload:", evt.data);

    if (evt.type === "user.created") {
      console.log("userId:", evt.data.id);
      console.log(await fetchMutation(api.users.initUser, {
        clerkID: evt.data.id,
        clerkImage: evt.data.has_image ? evt.data.image_url : undefined,
        clerkName:
          evt.data.username ?? generateUsername("", 2, 19),
      }));
    }

    return new Response("Webhook received", { status: 200 });
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error verifying webhook", { status: 400 });
  }
}
