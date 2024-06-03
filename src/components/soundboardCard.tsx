;import { Button } from "@/components/ui/button";
import { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Data {
  id: number;
  title: string;
  description: string;
  created: Date;
  audioFile: string;
  thumbnailFile: string;
  length: number;
  cooldown: number;
  inCooldownUntil: Date | null;
}

export function SoundCard( data: Data ) {
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);
  const [audioBuffer, setAudioBuffer] = useState<AudioBuffer | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      // Create an AudioContext
      const context = new (window.AudioContext || (window as any).webkitAudioContext)();
      setAudioContext(context);

      // Fetch the audio file
      const response = await fetch(data.audioFile);
      const arrayBuffer = await response.arrayBuffer();
      
      // Decode the audio data
      const buffer = await context.decodeAudioData(arrayBuffer);
      setAudioBuffer(buffer);
    };

    fetchData();
  }, []);

  const playSound = () => {
    if (audioContext && audioBuffer) {
      const source = audioContext.createBufferSource();
      source.buffer = audioBuffer;
      source.connect(audioContext.destination);
      source.start(0);
    }
  };
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{data.title}</CardTitle>
        <CardDescription>{data.description}</CardDescription>
        {/* <CardDescription>{data.date.toString().slice(0, 15)} | {data.author}</CardDescription> */}
      </CardHeader>
      <CardContent>
        <img src={data.thumbnailFile} alt='thumbnail' className=" rounded-lg w-full"/>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={() => playSound()}>Play locally</Button>
        {/* <Button variant="outline" onClick={() => playSound()}>Play on Stream</Button> */}
      </CardFooter>
    </Card>
  )
}