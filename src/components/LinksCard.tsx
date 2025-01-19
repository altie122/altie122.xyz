import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "./ui/input";
import { useState, useEffect } from "react";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

interface Link {
  id: number;
  title: string;
  url: string;
  description: string;
  icon: string;
}
interface OtherProps {
  isAdmin: boolean;
}
interface Props {
  link: Link;
  isAdmin: boolean;
}

export default function LinksCard({ link, isAdmin }: Props) {
  // const [isEditing, setIsEditing] = useState(false);
  // const [isEditingMethod, setIsEditingMethod] = useState("POST");
  // const [isEditingIcon, setIsEditingIcon] = useState(link.icon);
  // const [isEditingTitle, setIsEditingTitle] = useState(link.title);
  // const [isEditingDescription, setIsEditingDescription] = useState(
  //   link.description
  // );
  // const [isEditingUrl, setIsEditingUrl] = useState(link.url);
  // if (isEditing) {
  //   if (isAdmin) {
  //     return (
  //       <form method="POST">
  //         <Input type="hidden" name="method" value={isEditingMethod} />
  //         <Input type="hidden" name="id" value={link.id} />
  //         <Input type="hidden" name="mode" value="edit" />
  //         <Card>
  //           <CardHeader className="flex flex-row items-center ">
  //             <img src={isEditingIcon} alt={link.title} className="w-16 h-16" />
  //             <div>
  //               <CardTitle>
  //                 <Label htmlFor="title">Title</Label>
  //                 <Input
  //                   type="text"
  //                   name="title"
  //                   id="title"
  //                   value={isEditingTitle}
  //                   onChange={(e) => setIsEditingTitle(e.target.value)}
  //                   required
  //                 />
  //               </CardTitle>
  //               <CardDescription>
  //                 <Label htmlFor="description">Description</Label>
  //                 <Textarea
  //                   name="description"
  //                   id="description"
  //                   value={isEditingDescription}
  //                   onChange={(e) => setIsEditingDescription(e.target.value)}
  //                   required
  //                 />
  //               </CardDescription>
  //             </div>
  //           </CardHeader>
  //           <CardContent>
  //             <Label htmlFor="icon">Icon</Label>
  //             <Input
  //               type="text"
  //               name="icon"
  //               id="icon"
  //               value={isEditingIcon}
  //               onChange={(e) => setIsEditingIcon(e.target.value)}
  //             />
  //             <Label htmlFor="url">URL</Label>
  //             <Input
  //               type="text"
  //               name="url"
  //               id="url"
  //               value={isEditingUrl}
  //               onChange={(e) => setIsEditingUrl(e.target.value)}
  //               required
  //             />
  //           </CardContent>
  //           <CardFooter className="flex flex-row justify-evenly">
  //             <Button type="submit">
  //               Save
  //             </Button>
  //             {isAdmin && (
  //               <form method="POST">
  //                 <Input type="hidden" name="method" value="DELETE" />
  //                 <Input type="hidden" name="id" value={link.id} />
  //                 <Button variant="destructive" type="submit">
  //                   Delete
  //                 </Button>
  //               </form>
  //             )}
  //           </CardFooter>
  //         </Card>
  //       </form>
  //     );
  //   } else {
  //     setIsEditing(false);
  //   }
  // }
  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-4">
        <img src={link.icon} alt={link.title} className="w-16 h-16" />
        <div>
          <CardTitle>{link.title}</CardTitle>
          <CardDescription>{link.description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter className="flex flex-row justify-evenly">
        <Button asChild>
          <a href={link.url}>Visit</a>
        </Button>
        {isAdmin && (
          <form method="POST">
            <Input type="hidden" name="method" value="DELETE" />
            <Input type="hidden" name="id" value={link.id} />
            <Button variant="destructive" type="submit">
              Delete
            </Button>
          </form>
        )}
        {/* {isAdmin && <Button onClick={() => setIsEditing(true)}>Edit</Button>} */}
      </CardFooter>
    </Card>
  );
}
