import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

interface MetaData {
  title: string | null;
  description: string | null;
  image: string | null;
  imageSize: {
    width: string | null;
    height: string | null;
  };
}

interface Project {
  id: string;
  url: string;
}

export function ProjectsCard({ project }: {project: Project}) {
  const [metaData, setMetaData] = useState<MetaData | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchMetaData() {
      try {
        const response = await fetch(
          `/api/projects/getmetadata.json?url=${encodeURIComponent(project.url)}`,
        );
        if (!response.ok) {
          throw new Error("Failed to fetch metadata");
        }
        const data: MetaData = await response.json();
        setMetaData(data);
        setError(false); // Reset error state on successful fetch
      } catch (err) {
        console.error("Error fetching metadata:", err);
        setError(true);
      }
    }

    fetchMetaData();
  }, [project.url]);

  if (error) {
    return <p>Error loading project</p>;
  }

  if (!metaData) {
    return <p>Loading...</p>;
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{metaData.title}</CardTitle>
        <CardDescription>{metaData.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <img
          src={metaData.image || ""}
          alt={metaData.title || "Project Image"}
          className="rounded-lg w-full"
        />
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" asChild>
          <a href={project.url}>Visit</a>
        </Button>
      </CardFooter>
    </Card>
  );
}
