import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { useState } from "react";
import { ProjectsCard } from "./ProjectsCard";

export default function ProjectsForm() {
  const [url, setUrl] = useState("URL");
  return (
    <div className="flex flex-row gap-4 p-4 bg-accent-foreground/10 rounded-lg">
      <form method="POST" className="basis-2/3 flex flex-col gap-4">
        <Input type="hidden" name="mode" value="create" />
        <Input type="hidden" name="method" value="POST" />
        <Label htmlFor="url">URL</Label>
        <Input
          type="text"
          name="url"
          id="url"
          required
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <Button type="submit">Add Project</Button>
      </form>
      <div className="basis-1/3">
        <ProjectsCard
          project={{
            id: -1,
            url: url,
          }}
          isAdmin={false}
        />
      </div>
    </div>
  );
}
