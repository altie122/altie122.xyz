import { Children } from "react";

interface Props {
  title: string;
  type: "Warning" | "Info" | "Caution" | undefined;
  children: React.ReactNode;
}

export function Banner({ title, type = "Info", children }: Props) {
  const description = children;
  if (type === "Warning") {
    return (
      <div className="bg-warning border-l-4 border-warning-border p-4 w-full bg-diagonal-lines-warning rounded-lg">
        <div className="flex flex-col text-warning-foreground">
          <h2 className="prose-h2">{title}</h2>
          <p className="prose-p">{description}</p>
        </div>
      </div>
    );
  } else if (type === "Info") {
    return (
      <div className="bg-info border-l-4 border-info-border p-4 w-full bg-diagonal-lines-info rounded-lg">
        <div className="flex flex-col text-info-foreground">
          <h2 className="prose-h2">{title}</h2>
          <p className="prose-p">{description}</p>
        </div>
      </div>
    );
  } else if (type === "Caution") {
    return (
      <div className="bg-caution border-l-4 border-caution-border p-4 w-full bg-diagonal-lines-caution rounded-lg">
        <div className="flex flex-col text-caution-foreground">
          <h2 className="prose-h2">{title}</h2>
          <p className="prose-p">{description}</p>
        </div>
      </div>
    );
  }
}
