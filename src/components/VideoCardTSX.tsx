import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { type VideoInterface } from "@/lib/consts";
import React from "react";

interface Thumbnail {
  url: string;
  width: number;
  height: number;
}
interface Thumbnails {
  default?: Thumbnail;
  medium?: Thumbnail;
  high?: Thumbnail;
  standard?: Thumbnail;
  maxres?: Thumbnail;
}

function getBiggestThumbnail(thumbnails: Thumbnails): string | null {
  if (thumbnails.maxres !== undefined) {
    return thumbnails.maxres.url;
  } else if (thumbnails.standard) {
    return thumbnails.standard.url;
  } else if (thumbnails.high) {
    return thumbnails.high.url;
  } else if (thumbnails.medium) {
    return thumbnails.medium.url;
  } else if (thumbnails.default) {
    return thumbnails.default.url;
  } else {
    return null;
  }
}

interface VideoCardTSXProps {
  data: VideoInterface;
  children: React.ReactNode;
}

export default function VideoCardTSX({ data, children }: VideoCardTSXProps) {
  const thumbnail = getBiggestThumbnail(data.thumbnails);
  const handleClick = (url: string) => {
    window.open(url, "_blank");
  };
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{data.title}</CardTitle>
        <CardDescription>
          Views: {data.views} | Likes: {data.likes}
        </CardDescription>
        <CardDescription>
          {data.published.toString().slice(0, 15)}
        </CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter className="flex justify-between">
        <Button
          variant="outline"
          onClick={() =>
            handleClick(`https://www.youtube.com/watch?v=${data.id}`)
          }
        >
          Watch on YT
        </Button>
      </CardFooter>
    </Card>
  );
}
