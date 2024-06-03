import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const getThemePreference = () => {
  if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
    return localStorage.getItem('theme');
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'theme-light';
};

export function ModeToggle() {
  const [theme, setThemeState] = React.useState<"theme-light" | "dark" | "system">(getThemePreference() as "theme-light" | "dark" | "system");

  // Initial theme setup based on existing class or localStorage/system preference
  React.useEffect(() => {
    const savedTheme = getThemePreference();
    const isDarkMode = savedTheme === 'dark' || (savedTheme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    document.documentElement.classList[isDarkMode ? 'add' : 'remove']('dark');
    setThemeState(savedTheme as "theme-light" | "dark" | "system");
  }, []);

  // Update class and localStorage based on theme state
  React.useEffect(() => {
    const isDark = theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList[isDark ? "add" : "remove"]("dark");
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setThemeState("theme-light")}>Light</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setThemeState("dark")}>Dark</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setThemeState("system")}>System</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}