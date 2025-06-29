import type { APIRoute } from "astro";
import { getMetaData } from "~/lib/ProjectsMetadata";

export const GET: APIRoute = async ({ request }) => {
  // Get the Referer header
  const referer = request.headers.get("referer");

  if (!referer) {
    return new Response(JSON.stringify({ error: "Missing Referer header" }), {
      status: 403,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  try {
    // Extract the domain from the Referer header
    const refererUrl = new URL(referer);
    const refererDomain = refererUrl.hostname;

    // Extract the domain of the current request
    const currentUrl = new URL(request.url);
    const currentDomain = currentUrl.hostname;

    // Compare the domains
    if (refererDomain !== currentDomain && refererDomain !== "altonrose.dev") {
      return new Response(
        JSON.stringify({ error: "Referer domain does not match" }),
        {
          status: 403,
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
    }
  } catch (error) {
    return new Response(JSON.stringify({ error: "Invalid Referer header" }), {
      status: 400,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  // Proceed with the rest of the logic
  const url = new URL(request.url).searchParams.get("url");

  if (!url) {
    return new Response(JSON.stringify({ error: "No URL provided" }), {
      status: 400,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  const MetaData = await getMetaData(url);

  return new Response(JSON.stringify(MetaData), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
