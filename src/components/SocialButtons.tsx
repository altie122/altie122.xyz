import type React from "react";
import { Button } from "./ui/button";

export type SocialType = "Discord" | "Youtube" | "Twitch" | "Github" | null;

interface SocialButtonsProps {
  social: SocialType;
}

export function SocialButtons({ social }: SocialButtonsProps): JSX.Element | null {
  switch (social) {
    case "Discord":
      return <DiscordButton />;
    case "Youtube":
      return <YoutubeButton />;
    case "Twitch":
      return <TwitchButton />;
    case "Github":
      return <GithubButton />;
    default:
      console.log("Unknown social: " + social);
      return null;
  }
}

// Buttons
export function DiscordButton() {
  const handleClick = () => {
    window.location.href = 'https://discord.gg/UmNRqRUpRe';
  };
  return(
    <Button variant={'outline'} size="icon" onClick={() => handleClick()}><TablerBrandDiscord /></Button>
  )
}

export function YoutubeButton() {
  const handleClick = () => {
    window.location.href = "https://youtube.com/@altie122";
  };
  return(
    <Button variant={'outline'} size="icon" onClick={() => handleClick()}><TablerBrandYoutube /></Button>
  )
}

export function TwitchButton() {
  const handleClick = () => {
    window.location.href = "https://www.twitch.tv/altie122";
  };
  return(
    <Button variant={'outline'} size="icon" onClick={() => handleClick()}><TablerBrandTwitch /></Button>
  )
}

export function GithubButton() {
  const handleClick = () => {
    window.location.href = "https://github.com/altie122-youtube";
  };
  return(
    <Button variant={'outline'} size="icon" onClick={() => handleClick()}><TablerBrandGithub /></Button>
  )
}

// Icons
function TablerBrandDiscord(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" viewBox="0 0 24 24" {...props}><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M8 12a1 1 0 1 0 2 0a1 1 0 0 0-2 0m6 0a1 1 0 1 0 2 0a1 1 0 0 0-2 0"></path><path d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833-1.667 3.5-3c.667-1.667.5-5.833-1.5-11.5c-1.457-1.015-3-1.34-4.5-1.5l-.972 1.923a11.9 11.9 0 0 0-4.053 0L9 4c-1.5.16-3.043.485-4.5 1.5c-2 5.667-2.167 9.833-1.5 11.5c.667 1.333 2 3 3.5 3c.5 0 2-2 2-3"></path><path d="M7 16.5c3.5 1 6.5 1 10 0"></path></g></svg>
  )
}


function TablerBrandYoutube(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" viewBox="0 0 24 24" {...props}><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M2 8a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z"></path><path d="m10 9l5 3l-5 3z"></path></g></svg>
  )
}


export function TablerBrandTwitch(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" viewBox="0 0 24 24" {...props}><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5v11a1 1 0 0 0 1 1h2v4l4-4h5.584c.266 0 .52-.105.707-.293l2.415-2.414c.187-.188.293-.442.293-.708V5a1 1 0 0 0-1-1h-14a1 1 0 0 0-1 1zm12 3v4m-4-4v4"></path></svg>
  )
}

export function TablerBrandGithub(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" viewBox="0 0 24 24" {...props}><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2c2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2a4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6c-.6.6-.6 1.2-.5 2V21"></path></svg>
  )
}