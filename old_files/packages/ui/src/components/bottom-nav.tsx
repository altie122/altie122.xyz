// "use client";
// import { Package, Home, Link, Newspaper } from "lucide-react";
// import { useState, useEffect } from "react";

// export function BottomNav() {
//   const [host, setHost] = useState("");
//   useEffect(() => {
//     setHost(window.location.href);
//   }, []);
//   const isDev = process.env.NODE_ENV === "development";
//   if (host === "") {
//     return (
//       <div className='flex h-12 flex-row border-t border-sidebar-border bg-sidebar text-sidebar-foreground bottom-0 z-50 sticky w-full justify-center items-start gap-6'>
//         <a
//           href={isDev ? "http://localhost:3000" : "https://altie122.xyz"}
//           className='flex flex-col h-full items-center justify-center'
//         >
//           <Home className='h-6 w-6 text-sidebar-foreground' />
//           <p className='text-xs text-center text-sidebar-foreground'>Home</p>
//         </a>
//         <a
//           href={
//             isDev ? "http://blog.localhost:4321" : "https://blog.altie122.xyz"
//           }
//           className='flex flex-col h-full items-center justify-center'
//         >
//           <Newspaper className='h-6 w-6 m-auto text-sidebar-foreground' />
//           <p className='text-xs text-center text-sidebar-foreground'>Blog</p>
//         </a>
//         <a
//           href={
//             isDev ? "http://localhost:3000/links" : "https://altie122.xyz/links"
//           }
//           className='flex flex-col h-full items-center justify-center'
//         >
//           <Link className='h-6 w-6 m-auto text-sidebar-foreground' />
//           <p className='text-xs text-center text-sidebar-foreground'>Links</p>
//         </a>
//         <a
//           href={
//             isDev
//               ? "http://localhost:3000/projects"
//               : "https://altie122.xyz/projects"
//           }
//           className='flex flex-col h-full items-center justify-center'
//         >
//           <Package className='h-6 w-6 m-auto text-sidebar-foreground' />
//           <p className='text-xs text-center text-sidebar-foreground'>
//             Projects
//           </p>
//         </a>
//       </div>
//     );
//   }
//   const pathname = new URL(host).pathname;
//   const subdomain = new URL(host).hostname.split(".")[0];
//   const currentPageTitle =
//     subdomain === "blog"
//       ? "Blog"
//       : pathname === "/"
//       ? "Home"
//       : pathname.includes("/links")
//       ? "Links"
//       : pathname.includes("/projects")
//       ? "Projects"
//       : "Other";
//   return (
//     <div className='flex h-12 flex-row border-t border-sidebar-border bg-sidebar text-sidebar-foreground bottom-0 z-50 sticky w-full justify-center items-start gap-6'>
//       {currentPageTitle === "Home" ? (
//         <a
//           href={isDev ? "http://localhost:3000" : "https://altie122.xyz"}
//           className='flex flex-col border-t border-accent h-full -m-px pt-px items-center justify-center'
//         >
//           <Home className='h-6 w-6 text-accent' />
//           <p className='text-xs text-center text-accent font-black'>Home</p>
//         </a>
//       ) : (
//         <a
//           href={isDev ? "http://localhost:3000" : "https://altie122.xyz"}
//           className='flex flex-col h-full items-center justify-center'
//         >
//           <Home className='h-6 w-6 text-sidebar-foreground' />
//           <p className='text-xs text-center text-sidebar-foreground'>Home</p>
//         </a>
//       )}
//       {currentPageTitle === "Blog" ? (
//         <a
//           href={
//             isDev ? "http://blog.localhost:4321" : "https://blog.altie122.xyz"
//           }
//           className='flex flex-col border-t border-accent h-full -m-px pt-px items-center justify-center'
//         >
//           <Newspaper className='h-6 w-6 m-auto text-accent' />
//           <p className='text-xs text-center text-accent font-black'>Blog</p>
//         </a>
//       ) : (
//         <a
//           href={
//             isDev ? "http://blog.localhost:4321" : "https://blog.altie122.xyz"
//           }
//           className='flex flex-col h-full items-center justify-center'
//         >
//           <Newspaper className='h-6 w-6 m-auto text-sidebar-foreground' />
//           <p className='text-xs text-center text-sidebar-foreground'>Blog</p>
//         </a>
//       )}
//       {currentPageTitle === "Links" ? (
//         <a
//           href={
//             isDev ? "http://localhost:3000/links" : "https://altie122.xyz/links"
//           }
//           className='flex flex-col border-t border-accent h-full -m-px pt-px items-center justify-center'
//         >
//           <Link className='h-6 w-6 m-auto text-accent' />
//           <p className='text-xs text-center text-accent font-black'>Links</p>
//         </a>
//       ) : (
//         <a
//           href={
//             isDev ? "http://localhost:3000/links" : "https://altie122.xyz/links"
//           }
//           className='flex flex-col h-full items-center justify-center'
//         >
//           <Link className='h-6 w-6 m-auto text-sidebar-foreground' />
//           <p className='text-xs text-center text-sidebar-foreground'>Links</p>
//         </a>
//       )}
//       {currentPageTitle === "Projects" ? (
//         <a
//           href={
//             isDev
//               ? "http://localhost:3000/projects"
//               : "https://altie122.xyz/projects"
//           }
//           className='flex flex-col border-t border-accent h-full -m-px pt-px items-center justify-center'
//         >
//           <Package className='h-6 w-6 m-auto text-accent' />
//           <p className='text-xs text-center text-accent font-black'>Projects</p>
//         </a>
//       ) : (
//         <a
//           href={
//             isDev
//               ? "http://localhost:3000/projects"
//               : "https://altie122.xyz/projects"
//           }
//           className='flex flex-col h-full items-center justify-center'
//         >
//           <Package className='h-6 w-6 m-auto text-sidebar-foreground' />
//           <p className='text-xs text-center text-sidebar-foreground'>
//             Projects
//           </p>
//         </a>
//       )}
//     </div>
//   );
// }

import { Package, Home, Link, Newspaper } from "lucide-react";

interface BottomNavProps {
  currentPage?: string;
}

export function BottomNav({ currentPage = "/" }: BottomNavProps) {
  const currentPageTitle =
    currentPage === "/"
      ? "Home"
      : currentPage.includes("/blog")
        ? "Blog"
        : currentPage.includes("/links")
          ? "Links"
          : currentPage.includes("/projects")
            ? "Projects"
            : "Other";
  return (
    <div className="flex h-12 flex-row border-t border-sidebar-border bg-sidebar text-sidebar-foreground bottom-0 z-50 sticky w-full justify-center items-start gap-6">
      {currentPageTitle === "Home" ? (
        <a
          href="/"
          className="flex flex-col border-t border-teal-300 dark:border-teal-600 h-full -m-px pt-px items-center justify-center"
        >
          <Home className="h-6 w-6 text-teal-300 dark:text-teal-600" />
          <p className="text-xs text-center text-teal-300 dark:text-teal-600 font-black">
            Home
          </p>
        </a>
      ) : (
        <a href="/" className="flex flex-col h-full items-center justify-center">
          <Home className="h-6 w-6 text-sidebar-foreground" />
          <p className="text-xs text-center text-sidebar-foreground">Home</p>
        </a>
      )}
      {currentPageTitle === "Blog" ? (
        <a
          href="/blog"
          className="flex flex-col border-t border-teal-600 h-full -m-px pt-px items-center justify-center"
        >
          <Newspaper className="h-6 w-6 m-auto text-teal-600" />
          <p className="text-xs text-center text-teal-600 font-black">Blog</p>
        </a>
      ) : (
        <a href="/blog" className="flex flex-col h-full items-center justify-center">
          <Newspaper className="h-6 w-6 m-auto text-sidebar-foreground" />
          <p className="text-xs text-center text-sidebar-foreground">Blog</p>
        </a>
      )}
      {currentPageTitle === "Links" ? (
        <a
          href="/links"
          className="flex flex-col border-t border-teal-600 h-full -m-px pt-px items-center justify-center"
        >
          <Link className="h-6 w-6 m-auto text-teal-600" />
          <p className="text-xs text-center text-teal-600 font-black">Links</p>
        </a>
      ) : (
        <a href="/links" className="flex flex-col h-full items-center justify-center">
          <Link className="h-6 w-6 m-auto text-sidebar-foreground" />
          <p className="text-xs text-center text-sidebar-foreground">Links</p>
        </a>
      )}
      {currentPageTitle === "Projects" ? (
        <a
          href="/projects"
          className="flex flex-col border-t border-teal-600 h-full -m-px pt-px items-center justify-center"
        >
          <Package className="h-6 w-6 m-auto text-teal-600" />
          <p className="text-xs text-center text-teal-600 font-black">
            Projects
          </p>
        </a>
      ) : (
        <a href="/projects" className="flex flex-col h-full items-center justify-center">
          <Package className="h-6 w-6 m-auto text-sidebar-foreground" />
          <p className="text-xs text-center text-sidebar-foreground">
            Projects
          </p>
        </a>
      )}
    </div>
  );
}