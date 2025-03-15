import {
  Box,
  Home,
  Link,
  Newspaper,
  Package,
  Palette,
  TvMinimalPlay,
} from "lucide-react";

export const pages = [
  // All STATIC pages, dynamic pages like blog posts are not included here
  {
    name: "Home",
    href: "/",
    isExternal: false,
    icon: Home,
  },
  {
    name: "Blog",
    href: "/blog/",
    isExternal: false,
    icon: Newspaper,
  },
  {
    name: "Links",
    href: "/links",
    isExternal: false,
    icon: Link,
  },
  {
    name: "Projects",
    href: "/projects",
    isExternal: false,
    icon: Package,
  },
  // {
  // name: "Video List",
  // href: "/videos",
  // isExternal: false,
  // },
  // {
  //   name: "SoundBoard",
  //   href: "https://soundboard.altie122.xyz/",
  //   isExternal: true,
  // },
  {
    name: "The Canvas",
    href: "https://thecanvas.altie122.xyz",
    isExternal: true,
    icon: Palette,
  },
  {
    name: "Minecraft Mods",
    href: "https://mods.altie122.xyz/",
    isExternal: true,
    icon: Box,
  },
  {
    name: "YT to YT No Cookie",
    href: "https://yt-to-ytnocookie.altie122.xyz/",
    isExternal: true,
    icon: TvMinimalPlay,
  },
];

export const socialButtons = [
  {
    name: "Twitch",
  },
  {
    name: "Youtube",
  },
  {
    name: "Discord",
  },
  {
    name: "Github",
  },
  {
    name: "Rss",
  },
];

// Type safety stuff
export interface VideoInterface {
  id: string;
  title: string;
  description: string;
  views: number;
  likes: number;
  published: Date;
  thumbnails: {
    [key: string]: {
      url: string;
      width: number;
      height: number;
    };
  };
}

export type VideoType = {
  id: string;
  title: string;
  description: string;
  views: number;
  likes: number;
  published: Date;
  thumbnails: {
    [key: string]: {
      url: string;
      width: number;
      height: number;
    };
  };
};

export interface VideoThumbnailInterface {
  url: string;
  width: number;
  height: number;
}
export interface VideoThumbnailsInterface {
  default?: VideoThumbnailInterface;
  medium?: VideoThumbnailInterface;
  high?: VideoThumbnailInterface;
  standard?: VideoThumbnailInterface;
  maxres?: VideoThumbnailInterface;
}

export type VideoThumbnailType = {
  url: string;
  width: number;
  height: number;
};

export type VideoThumbnailsType = {
  default?: VideoThumbnailType;
  medium?: VideoThumbnailType;
  high?: VideoThumbnailType;
  standard?: VideoThumbnailType;
  maxres?: VideoThumbnailType;
};
