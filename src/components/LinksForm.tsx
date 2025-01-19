import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { useState } from "react";
import { Textarea } from "./ui/textarea";
import LinksCard from "./LinksCard";

type Link = {
  id: number;
  title: string;
  url: string;
  description: string;
  icon: string;
};

export default function LinksForm() {
  const [title, setTitle] = useState("Title");
  const [url, setUrl] = useState("URL");
  const [description, setDescription] = useState("Description");
  const [icon, setIcon] = useState("https://www.altie122.xyz/icon.png");
  return (
    <div className="flex flex-row gap-4 p-4 bg-accent-foreground/10 rounded-lg">
      <form method="POST" className="basis-2/3 flex flex-col gap-4">
        <Input type="hidden" name="mode" value="create" />
        <Input type="hidden" name="method" value="POST" />
        <Label htmlFor="title">Title</Label>
        <Input
          type="text"
          name="title"
          id="title"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Label htmlFor="url">URL</Label>
        <Input
          type="text"
          name="url"
          id="url"
          required
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <Label htmlFor="description">Description</Label>
        <Textarea
          name="description"
          id="description"
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Label htmlFor="icon">Icon</Label>
        <Input
          type="text"
          name="icon"
          id="icon"
          value={icon}
          onChange={(e) => setIcon(e.target.value)}
        />
        <Button type="submit">Add Link</Button>
      </form>
      <div className="basis-1/3">
        <LinksCard
          link={{
            id: -1,
            title: title,
            url: url,
            description: description,
            icon: icon,
          }}
          isAdmin={false}
        />
      </div>
    </div>
  );
}
