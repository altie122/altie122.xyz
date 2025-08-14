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

interface LinksCardProps {
  link: Doc<"links">;
}

interface MetaData {
  favicon?: string;
}

export function LinksCard({ link }: LinksCardProps) {
  const [metaData, setMetaData] = useState<MetaData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMetaData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `/api/links?url=${encodeURIComponent(link.url)}`
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
  }, [link.url]);

  if (loading) {
    return (
      <Card className="w-full">
        <CardHeader className="flex flex-row items-center gap-4">
          <div className="w-16 h-16 bg-gray-200 rounded animate-pulse" />
          <div className="flex-1">
            <div className="h-6 bg-gray-200 rounded animate-pulse mb-2" />
            <div className="h-4 bg-gray-200 rounded animate-pulse" />
          </div>
        </CardHeader>
        <CardContent></CardContent>
        <CardFooter className="flex flex-row justify-evenly">
          <div className="h-10 w-16 bg-gray-200 rounded animate-pulse" />
        </CardFooter>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="w-full">
        <CardHeader className="flex flex-row items-center gap-4">
          <div className="w-16 h-16 bg-gray-100 rounded flex items-center justify-center">
            <span className="text-gray-400 text-xs">?</span>
          </div>
          <div className="flex-1">
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

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center gap-4">
        {metaData?.favicon ? (
          <img 
            src={metaData.favicon} 
            alt={link.title} 
            className="w-16 h-16"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        ) : (
          <div className="w-16 h-16 bg-gray-100 rounded flex items-center justify-center">
            <span className="text-gray-400 text-xs">No Icon</span>
          </div>
        )}
        <div className="flex-1">
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