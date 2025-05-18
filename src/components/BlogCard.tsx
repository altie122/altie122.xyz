import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Data {
  title: string;
  description: string;
  author: string;
  date: Date;
  image: {
    url: string;
    alt: string;
  };
  url: string;
}

export function BlogCard(data: Data) {
  const handleClick = () => {
    window.location.href = data.url;
  };
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{data.title}</CardTitle>
        <CardDescription>{data.description}</CardDescription>
        <CardDescription>
          {data.date.toLocaleDateString()} | {data.author}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <img
          src={data.image.url}
          alt={data.image.alt}
          className=" rounded-lg w-full"
        />
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={() => handleClick()}>
          Read
        </Button>
      </CardFooter>
    </Card>
  );
}
