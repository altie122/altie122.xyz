import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useStore } from "@nanostores/react";
import { $authStore, $userStore } from "@clerk/astro/client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SignOutButton, SignInButton } from "@clerk/astro/react";
// import { data } from "~/server/queries";

function Link(props: any) {
  return <a {...props}>{props.children}</a>;
}

export default async function UserButton() {
  const { userId } = useStore($authStore);
  if (!userId) {
    return (
      <div>
        <SignInButton mode="modal" />
      </div>
    );
  }
  const user = await useStore($userStore);
  if (user == null || user == undefined) {
    return (
      <div>
        <SignInButton mode="modal" />
      </div>
    );
  }
  return (
    <div className="flex flex-row items-center gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage src={user.imageUrl} />
            <AvatarFallback>
              {user.username
                ? user.username.charAt(0) +
                  user.username.charAt(1) +
                  user.username.charAt(2)
                : ""}
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>hi {user.username}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {/* <DropdownMenuItem asChild>
            <Link href={`/user/${user}`}>Profile</Link>
          </DropdownMenuItem> */}
          <DropdownMenuItem asChild>
            <Link href="/account/settings">Settings</Link>
          </DropdownMenuItem>
          <SignOutButton>
            <DropdownMenuItem>Sign Out</DropdownMenuItem>
          </SignOutButton>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
