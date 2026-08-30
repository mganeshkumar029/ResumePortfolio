import { useEffect, useState } from "react";
import { SCRAMBLE_CHARS } from "../lib/scramble";

interface ScrambleInProps {
  text: string;
  delay: number;
  triggered: boolean;
}

export default function ScrambleIn({ text, delay, triggered }: ScrambleInProps) {
  const [display, setDisplay] = useState<string | null>(null);

  useEffect(() => {
    if (!triggered) {
      setDisplay(null);
      return;
    }

    let intervalId: number | undefined;
    const timeoutId = window.setTimeout(() => {
      let frame = 0;
      intervalId = window.setInterval(() => {
        frame += 1;
        const cursor = frame * 0.5;
        const revealed = Math.floor(cursor);
        let out = "";
        for (let i = 0; i < text.length; i++) {
          const ch = text[i];
          if (ch === " ") {
            out += " ";
          } else if (i < revealed) {
            out += ch;
          } else if (i <= revealed + 3) {
            out += SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
          }
        }
        setDisplay(out);
        if (revealed >= text.length) {
          if (intervalId !== undefined) window.clearInterval(intervalId);
          setDisplay(text);
        }
      }, 25);
    }, delay);

    return () => {
      window.clearTimeout(timeoutId);
      if (intervalId !== undefined) window.clearInterval(intervalId);
    };
  }, [triggered, delay, text]);

  if (display === null) {
    return <span>&nbsp;</span>;
  }

  return <span>{display}</span>;
}
