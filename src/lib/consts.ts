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
    href: 'https://yt-to-ytnocookie.dovahkiin.xyz/',
    isExternal: true,
  },
  {
    name: 'Schedule',
    href: 'https://altie122.notion.site/459e425befd54b3894c9d282b2aa182f?v=daa59f8502d24644ba93b9aec3c09324&pvs=74',
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