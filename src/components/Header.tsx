import { NavDrawer } from "./NavDrawer";
import { Button } from "./ui/button";

export default function Header() {
  const handleClick = (url: string) => {
    window.location.href = url;
  };
  return (
    <header className="bg-secondary text-secondary-foreground h-16 flex items-center p-5">
      <Button variant="outline" onClick={() => handleClick("/")} size='lg'>Altie122</Button>
      <NavDrawer />
    </header>
  );
}