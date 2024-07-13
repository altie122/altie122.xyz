import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Button } from "./ui/button";
import { Separator } from "@/components/ui/separator";
import { Suspense } from "react";

interface VideoSortButtonsProps {
  by?: string;
  direction?: string;
}

function VideoSortButtons({ by, direction }: VideoSortButtonsProps) {
  const handleClick = (url: string) => {
    window.location.href = url;
  };

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Sorting</AccordionTrigger>
        <AccordionContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-5">
            <Button
              variant="outline"
              onClick={() => handleClick("/videos/sort/date/desc")}
              size="lg"
              disabled={by === "date" && direction === "desc"}
            >
              Date Descending
            </Button>
            <Button
              variant="outline"
              onClick={() => handleClick("/videos/sort/date/asc")}
              size="lg"
              disabled={by === "date" && direction === "asc"}
            >
              Date Ascending
            </Button>
            <Button
              variant="outline"
              onClick={() => handleClick("/videos/sort/views/desc")}
              size="lg"
              disabled={by === "views" && direction === "desc"}
            >
              Views Descending
            </Button>
            <Button
              variant="outline"
              onClick={() => handleClick("/videos/sort/views/asc")}
              size="lg"
              disabled={by === "views" && direction === "asc"}
            >
              Views Ascending
            </Button>
            <Button
              variant="outline"
              onClick={() => handleClick("/videos/sort/likes/desc")}
              size="lg"
              disabled={by === "likes" && direction === "desc"}
            >
              Likes Descending
            </Button>
            <Button
              variant="outline"
              onClick={() => handleClick("/videos/sort/likes/asc")}
              size="lg"
              disabled={by === "likes" && direction === "asc"}
            >
              Likes Ascending
            </Button>
            <Button
              variant="outline"
              onClick={() => handleClick("/videos/sort/title/desc")}
              size="lg"
              disabled={by === "title" && direction === "desc"}
            >
              Title Descending
            </Button>
            <Button
              variant="outline"
              onClick={() => handleClick("/videos/sort/title/asc")}
              size="lg"
              disabled={by === "title" && direction === "asc"}
            >
              Title Ascending
            </Button>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default function VideoSortButtonsSuspense({
  by,
  direction,
}: VideoSortButtonsProps) {
  return (
    <Suspense fallback="Loading...">
      <Separator />
      <VideoSortButtons by={by} direction={direction} />
    </Suspense>
  );
}
