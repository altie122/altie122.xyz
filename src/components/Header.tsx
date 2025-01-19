import { ModeToggle } from "./ModeToggle";
import { NavDrawer } from "./NavDrawer";
import { Button } from "./ui/button";
// import UserButton from "./UserButton";

export default function Header() {
  const handleClick = (url: string) => {
    window.location.href = url;
  };
  return (
    <header className="bg-secondary text-secondary-foreground h-16 flex p-5">
      <div className="basis-1/3 flex justify-start items-center"></div>
      <div className=" basis-1/3 flex justify-center items-center">
        <NavDrawer />
        <Button variant="outline" onClick={() => handleClick("/")} size="lg">
          Altie122
        </Button>
        <ModeToggle />
      </div>
      <div className="basis-1/3 flex justify-end items-center">
        {/* <UserButton /> */}
      </div>
    </header>
  );
}
