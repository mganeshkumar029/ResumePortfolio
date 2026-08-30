import { useEffect, useState } from "react";
import { SCRAMBLE_CHARS } from "../lib/scramble";

interface ScrambleTextProps {
  text: string;
  isHovered: boolean;
  className?: string;
}

export default function ScrambleText({ text, isHovered, className }: ScrambleTextProps) {
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    if (!isHovered) {
      setDisplay(text);
      return;
    }

    let frame = 0;
    const initial = 8;
    const intervalId = window.setInterval(() => {
      frame += 1;
      const revealed = Math.max(0, Math.floor((frame - initial) / 4));
      let out = "";
      for (let i = 0; i < text.length; i++) {
        const ch = text[i];
        if (ch === " ") out += " ";
        else if (i < revealed) out += ch;
        else out += SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
      }
      setDisplay(out);
      if (revealed >= text.length) {
        window.clearInterval(intervalId);
        setDisplay(text);
      }
    }, 25);

    return () => window.clearInterval(intervalId);
  }, [isHovered, text]);

  return <span className={className}>{display}</span>;
}
