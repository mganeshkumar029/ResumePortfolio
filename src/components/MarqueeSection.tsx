import { useEffect, useRef, useState } from 'react';
import { marqueeRow1, marqueeRow2 } from '../data/portfolio';

type MarqueeRowProps = {
  images: string[];
  offset: number;
  reverse?: boolean;
};

function MarqueeRow({ images, offset, reverse }: MarqueeRowProps) {
  const tripled = [...images, ...images, ...images];
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
          alt=""
          loading="lazy"
          className="w-[240px] h-[160px] sm:w-[340px] sm:h-[220px] md:w-[420px] md:h-[270px] object-cover rounded-2xl shrink-0"
        />
      ))}
    </div>
  );
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const update = () => {
      const el = sectionRef.current;
      if (!el) return;
      const sectionTop = el.offsetTop;
      const computed =
        (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(computed);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);

    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden flex flex-col gap-3"
    >
      <MarqueeRow images={marqueeRow1} offset={offset} />
      <MarqueeRow images={marqueeRow2} offset={offset} reverse />
    </section>
  );
}
