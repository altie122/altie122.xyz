"use client";
import { api } from "@convex/_generated/api";
import { LinksCard } from "@/components/@www/client-links-card";
import { usePaginatedQuery } from "convex/react";
import { useState } from "react";
import InfiniteScroll from "@/components/ui/infinite-scroll";
import { Loader2 } from "lucide-react";
import { Masonry, ResponsiveMasonry } from "@/components/ui/masonry";

const columnsCountBreakPoints = {
  400: 1,
  800: 2,
  1200: 3,
  1600: 4,
};

export default function HomePage() {
  const [loading, setLoading] = useState(false);

  const { results, status, loadMore } = usePaginatedQuery(
    api.www.links.list,
    {},
    { initialNumItems: 6 },
  );

  const hasMore = status === "CanLoadMore";

  const next = () => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      loadMore(6);
    } finally {
      setLoading(false);
    }
  };
  return (
    <main className="p-2">
      <ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints}>
        <Masonry gutter="0.5rem">
          {results.map((item) => {
            return <LinksCard key={item._id} link={item} />;
          })}
          <InfiniteScroll
            hasMore={hasMore}
            isLoading={loading}
            next={next}
            threshold={0.8}
          >
            {hasMore && (
              <div className="col-span-full flex justify-center py-4">
                <Loader2 className="h-8 w-8 animate-spin" />
              </div>
            )}
          </InfiniteScroll>
        </Masonry>
      </ResponsiveMasonry>
    </main>
  );
}
