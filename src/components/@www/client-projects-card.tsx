"use client";

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
import { useEffect, useState } from "react";

interface ProjectsCardProps {
  project: Doc<"projects">;
}

interface MetaData {
  title?: string;
  description?: string;
  image?: string;
}

export function ProjectsCard({ project }: ProjectsCardProps) {
  const [metaData, setMetaData] = useState<MetaData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMetaData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `/api/projects?url=${encodeURIComponent(project.url)}`,
        );
        const result = await response.json();

        if (result.success) {
          setMetaData(result.data);
        } else {
          setError(result.error ?? "Failed to fetch metadata");
        }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        setError("Network error occurred");
      } finally {
        setLoading(false);
      }
    };

    void fetchMetaData();
  }, [project.url]);

  if (loading) {
    return (
      <Card className="w-full">
        <CardHeader>
          <div className="h-6 animate-pulse rounded bg-gray-200" />
          <div className="h-4 animate-pulse rounded bg-gray-200" />
        </CardHeader>
        <CardContent>
          <div className="h-48 w-full animate-pulse rounded-lg bg-gray-200" />
        </CardContent>
        <CardFooter>
          <div className="h-10 w-20 animate-pulse rounded bg-gray-200" />
        </CardFooter>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Error Loading Project</CardTitle>
          <CardDescription>{error}</CardDescription>
        </CardHeader>
        <CardFooter>
          <Button variant="outline" asChild>
            <Link href={project.url}>Visit</Link>
          </Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{metaData?.title ?? "Untitled Project"}</CardTitle>
        <CardDescription>
          {metaData?.description ?? "No description available"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {metaData?.image && (
          <img
            src={metaData.image}
            alt={metaData.title ?? "Project Image"}
            className="w-full rounded-lg"
          />
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" asChild>
          <Link href={project.url}>Visit</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
