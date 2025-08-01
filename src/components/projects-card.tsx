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
import Link from "next/link";
import { getMetaData } from "@/lib/projectsMetadata";

interface ProjectsCardProps {
  project: Doc<"projects">;
}

export async function ProjectsCard({ project }: ProjectsCardProps) {
  const metaData = await getMetaData(project.url);
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{metaData.title}</CardTitle>
        <CardDescription>{metaData.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <img
          src={metaData.image ?? ""}
          alt={metaData.title ?? "Project Image"}
          className="w-full rounded-lg"
        />
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" asChild>
          <Link href={project.url}>Visit</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
