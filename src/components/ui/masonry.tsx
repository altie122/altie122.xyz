"use client";

import dynamic from "next/dynamic";

const ResponsiveMasonry = dynamic(
  () => import("react-responsive-masonry").then((mod) => mod.ResponsiveMasonry),
  {
    loading: () => <p>Loading...</p>,
    ssr: false,
  }
);
const Masonry = dynamic(
  () => import("react-responsive-masonry").then((mod) => mod.default),
  {
    loading: () => <p>Loading...</p>,
    ssr: false,
  }
);

export {
  Masonry,
  ResponsiveMasonry
}