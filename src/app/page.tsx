import { Button } from "@/components/ui/button";
import * as Card from "@/components/ui/card";
import { api } from "@convex/_generated/api";
import { fetchQuery } from "convex/nextjs";
import Link from "next/link";

export default async function HomePage() {
  const link = await fetchQuery(api.www.links.random, {});
  const project = await fetchQuery(api.www.projects.random, {});
  if (!link || !project) {
    return;
  }
  return (
    <main className="flex h-dvh flex-col items-center justify-center">
      <Card.Card>
        <Card.CardHeader>
          <Card.CardTitle>Not Found</Card.CardTitle>
          <Card.CardDescription>
            Could not find the requested resource
          </Card.CardDescription>
        </Card.CardHeader>
        <Card.CardFooter>
          <Button asChild>
            <Link href="https://altie122.xyz/">Return Home</Link>
          </Button>
        </Card.CardFooter>
      </Card.Card>
    </main>
  );
}
