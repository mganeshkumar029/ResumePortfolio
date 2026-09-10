import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { marqueeRow1, marqueeRow2 } from '../data/portfolio';
import LazyBackgroundVideo from './LazyBackgroundVideo';

type MarqueeRowProps = {
  images: string[];
  offset: number;
  reverse?: boolean;
};

function MarqueeRow({ images, offset, reverse }: MarqueeRowProps) {
  const tripled = useMemo(() => [...images, ...images, ...images], [images]);
  const translate = reverse ? -(offset - 200) : offset - 200;

  return (
    <div
      className="flex gap-3"
      style={{
        willChange: 'transform',
        transform: `translateX(${translate}px)`,
      }}
    >
      {tripled.map((src, i) => (
        <img
          key={i}
          src={src}
          alt="Portfolio preview"
          loading="lazy"
          decoding="async"
          className="w-[240px] h-[160px] sm:w-[340px] sm:h-[220px] md:w-[420px] md:h-[270px] object-cover rounded-2xl shrink-0"
        />
      ))}
    </div>
  );
}

const VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_092455_089c54f8-3b03-4966-9df1-e9746063d0ef.mp4";

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);
  const rafRef = useRef<number>(0);
  const dirtyRef = useRef(false);

  const update = useCallback(() => {
    const el = sectionRef.current;
    if (!el) return;
    const sectionTop = el.offsetTop;
    const computed =
      (window.scrollY - sectionTop + window.innerHeight) * 0.3;
    setOffset(computed);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (!dirtyRef.current) {
        dirtyRef.current = true;
        rafRef.current = requestAnimationFrame(() => {
          dirtyRef.current = false;
          update();
        });
      }
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', update);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', update);
      cancelAnimationFrame(rafRef.current);
    };
  }, [update]);

  return (
    <section
      ref={sectionRef}
      className="relative pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden"
    >
      <LazyBackgroundVideo src={VIDEO} />
      <div className="relative z-10 flex flex-col gap-3">
        <MarqueeRow images={marqueeRow1} offset={offset} />
        <MarqueeRow images={marqueeRow2} offset={offset} reverse />
      </div>
    </section>
  );
}
