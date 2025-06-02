import { Package, Home, Link, Newspaper } from "lucide-react";

interface BottomNavProps {
  currentPage: string;
}

export function BottomNav({ currentPage }: BottomNavProps) {
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
