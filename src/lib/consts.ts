export const pages = [ // All STATIC pages, dynamic pages like blog posts are not included here
  {
    name: 'Home',
    href: '/',
    isExternal: false,
  },
  {
    name: 'Blog',
    href: '/blog/',
    isExternal: false,
  },
  {
    name: 'Video List',
    href: '/videos',
    isExternal: false,
  },
  {
    name: 'SoundBoard',
    href: '/soundboard/',
    isExternal: false,
  },
  {
    name: 'Minecraft Mods',
    href: 'https://mods.altie122.xyz/',
    isExternal: true,
  },
  {
    name: 'YT to YT No Cookie',
    href: 'https://yt-to-ytnocookie.xyz/',
    isExternal: true,
  },
]

export const socialButtons = [
  {
    name: 'Twitch'
  },
  {
    name: 'Youtube'
  },
  {
    name: 'Discord'
  },
  {
    name: 'Github'
  },
];

export const socketServerUrl = import.meta.env.PUBLIC_SOCKETIO_SERVER;