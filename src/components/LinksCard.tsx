import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Link {
  id: string;
  title: string;
  url: string;
  description: string;
  icon: string;
}

export default function LinksCard({ link }: {link: Link}) {
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
      </CardFooter>
    </Card>
  );
}
