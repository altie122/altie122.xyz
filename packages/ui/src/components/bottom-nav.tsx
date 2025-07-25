"use client";
import { Package, Home, Link, Newspaper } from "lucide-react";
import { useState, useEffect } from "react";

export function BottomNav() {
  const [host, setHost] = useState("");
  useEffect(() => {
    setHost(window.location.href);
  }, []);
  if (host === "") {
    return (
      <div className='flex h-12 flex-row border-t border-sidebar-border bg-sidebar text-sidebar-foreground bottom-0 z-50 sticky w-full justify-center items-start gap-6'>
        <a
          href='/'
          className='flex flex-col h-full items-center justify-center'
        >
          <Home className='h-6 w-6 text-sidebar-foreground' />
          <p className='text-xs text-center text-sidebar-foreground'>Home</p>
        </a>
        <a
          href='/blog'
          className='flex flex-col h-full items-center justify-center'
        >
          <Newspaper className='h-6 w-6 m-auto text-sidebar-foreground' />
          <p className='text-xs text-center text-sidebar-foreground'>Blog</p>
        </a>
        <a
          href='/links'
          className='flex flex-col h-full items-center justify-center'
        >
          <Link className='h-6 w-6 m-auto text-sidebar-foreground' />
          <p className='text-xs text-center text-sidebar-foreground'>Links</p>
        </a>
        <a
          href='/projects'
          className='flex flex-col h-full items-center justify-center'
        >
          <Package className='h-6 w-6 m-auto text-sidebar-foreground' />
          <p className='text-xs text-center text-sidebar-foreground'>
            Projects
          </p>
        </a>
      </div>
    );
  }
  const pathname = new URL(host).pathname;
  const subdomain = new URL(host).hostname.split(".")[0];
  const currentPageTitle =
    subdomain === "blog"
      ? "Blog"
      : pathname === "/"
      ? "Home"
      : pathname.includes("/links")
      ? "Links"
      : pathname.includes("/projects")
      ? "Projects"
      : "Other";
  return (
    <div className='flex h-12 flex-row border-t border-sidebar-border bg-sidebar text-sidebar-foreground bottom-0 z-50 sticky w-full justify-center items-start gap-6'>
      {currentPageTitle === "Home" ? (
        <a
          href='/'
          className='flex flex-col border-t border-accent h-full -m-px pt-px items-center justify-center'
        >
          <Home className='h-6 w-6 text-accent' />
          <p className='text-xs text-center text-accent font-black'>Home</p>
        </a>
      ) : (
        <a
          href='/'
          className='flex flex-col h-full items-center justify-center'
        >
          <Home className='h-6 w-6 text-sidebar-foreground' />
          <p className='text-xs text-center text-sidebar-foreground'>Home</p>
        </a>
      )}
      {currentPageTitle === "Blog" ? (
        <a
          href='/blog'
          className='flex flex-col border-t border-accent h-full -m-px pt-px items-center justify-center'
        >
          <Newspaper className='h-6 w-6 m-auto text-accent' />
          <p className='text-xs text-center text-accent font-black'>Blog</p>
        </a>
      ) : (
        <a
          href='/blog'
          className='flex flex-col h-full items-center justify-center'
        >
          <Newspaper className='h-6 w-6 m-auto text-sidebar-foreground' />
          <p className='text-xs text-center text-sidebar-foreground'>Blog</p>
        </a>
      )}
      {currentPageTitle === "Links" ? (
        <a
          href='/links'
          className='flex flex-col border-t border-accent h-full -m-px pt-px items-center justify-center'
        >
          <Link className='h-6 w-6 m-auto text-accent' />
          <p className='text-xs text-center text-accent font-black'>Links</p>
        </a>
      ) : (
        <a
          href='/links'
          className='flex flex-col h-full items-center justify-center'
        >
          <Link className='h-6 w-6 m-auto text-sidebar-foreground' />
          <p className='text-xs text-center text-sidebar-foreground'>Links</p>
        </a>
      )}
      {currentPageTitle === "Projects" ? (
        <a
          href='/projects'
          className='flex flex-col border-t border-accent h-full -m-px pt-px items-center justify-center'
        >
          <Package className='h-6 w-6 m-auto text-accent' />
          <p className='text-xs text-center text-accent font-black'>Projects</p>
        </a>
      ) : (
        <a
          href='/projects'
          className='flex flex-col h-full items-center justify-center'
        >
          <Package className='h-6 w-6 m-auto text-sidebar-foreground' />
          <p className='text-xs text-center text-sidebar-foreground'>
            Projects
          </p>
        </a>
      )}
    </div>
  );
}
