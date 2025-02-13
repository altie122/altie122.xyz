export const pages = [
  // All STATIC pages, dynamic pages like blog posts are not included here
  {
    name: "Home",
    href: "/",
    isExternal: false,
  },
  {
    name: "Blog",
    href: "/blog/",
    isExternal: false,
  },
  {
    name: "Links",
    href: "/links",
    isExternal: false,
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
  },
  {
    name: "Minecraft Mods",
    href: "https://mods.altie122.xyz/",
    isExternal: true,
  },
  {
    name: "YT to YT No Cookie",
    href: "https://yt-to-ytnocookie.xyz/",
    isExternal: true,
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
