import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { type Doc } from "@convex/_generated/dataModel";
import { getMetaData } from "@/lib/@www/linksMetadata";
import Link from "next/link";

interface LinksCardProps {
  link: Doc<"links">;
}

export async function LinksCard({ link }: LinksCardProps) {
  const metaData = await getMetaData(link.url);
  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-4">
        <img src={metaData.favicon} alt={link.title} className="w-16 h-16" />
        <div>
          <CardTitle>{link.title}</CardTitle>
          <CardDescription>{link.description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter className="flex flex-row justify-evenly">
        <Button asChild>
          <Link href={link.url}>Visit</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
