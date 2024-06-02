import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { pages } from "~/lib/consts";

export function NavDrawer() {
  const handleClick = (url: string) => {
    window.location.href = url;
  };
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline" size={'icon'}><Menu /></Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Navigation</DrawerTitle>
          </DrawerHeader>
          <div className="p-4 pb-0 flex flex-wrap gap-2">
            {
			      	pages.map((data) => (
                data.isExternal ? (
                  <Button variant={'outline'} onClick={() => handleClick(data.href)} key={data.href}><span className="after:content-['_↗']">{data.name}</span></Button>
                ) : (
                  <Button variant={'outline'} onClick={() => handleClick(data.href)} key={data.href}>{data.name}</Button>
                )
			      	))
			      }
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}