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
  versionId: string | null;
}

interface Project {
  id: number;
  url: string;
}

interface Props {
  isAdmin: boolean;
  project: Project;
}

export function ProjectsCard({ isAdmin, project }: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const [isEditingUrl, setIsEditingUrl] = useState(project.url);
  const [metaData, setMetaData] = useState<MetaData | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchMetaData() {
      try {
        const response = await fetch(
          `/api/projects/getmetadata.json?url=${encodeURIComponent(isEditingUrl)}`,
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
  }, [isEditingUrl]); // Trigger re-fetch when the URL changes

  if (error) {
    return <p>Error loading project</p>;
  }

  if (!metaData) {
    return <p>Loading...</p>;
  }

  if (isEditing) {
    return (
      <form method="POST">
        <Input type="hidden" name="method" value="POST" />
        <Input type="hidden" name="id" value={project.id} />
        <Input type="hidden" name="mode" value="edit" />
        <Card className="w-full">
          <CardHeader>
            <CardTitle>{metaData.title}</CardTitle>
            <CardDescription>{metaData.description}</CardDescription>
            <CardDescription>Version ID: {metaData.versionId}</CardDescription>
          </CardHeader>
          <CardContent>
            <img
              src={metaData.image || ""}
              alt={metaData.title || "Project Image"}
              className="rounded-lg w-full"
            />
            <div>
              <Label htmlFor="url">URL</Label>
              <Input
                type="text"
                name="url"
                id="url"
                value={isEditingUrl}
                onChange={(e) => setIsEditingUrl(e.target.value)}
                required
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" asChild>
              <a href={isEditingUrl}>Visit</a>
            </Button>
            {isAdmin && (
              <form method="POST">
                <Input type="hidden" name="method" value="DELETE" />
                <Input type="hidden" name="id" value={project.id} />
                <Button variant="destructive" type="submit">
                  Delete
                </Button>
              </form>
            )}
            <Button
              onClick={() => {
                setIsEditing(false);
                // Optionally, update the project.url here if needed
              }}
            >
              Save
            </Button>
          </CardFooter>
        </Card>
      </form>
    );
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{metaData.title}</CardTitle>
        <CardDescription>{metaData.description}</CardDescription>
        <CardDescription>Version ID: {metaData.versionId}</CardDescription>
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
        {isAdmin && (
          <form method="POST">
            <Input type="hidden" name="method" value="DELETE" />
            <Input type="hidden" name="id" value={project.id} />
            <Button variant="destructive" type="submit">
              Delete
            </Button>
          </form>
        )}
        {isAdmin && (
          <Button onClick={() => setIsEditing(!isEditing)}>Edit</Button>
        )}
      </CardFooter>
    </Card>
  );
}
