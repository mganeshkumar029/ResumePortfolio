import { useEffect, useRef, useState } from "react";

type Props = {
  src: string;
  className?: string;
  overlay?: string;
};

export default function LazyBackgroundVideo({
  src,
  className = "absolute inset-0 w-full h-full object-cover",
  overlay = "rgba(0,0,0,0.68)",
}: Props) {
  const ref = useRef<HTMLVideoElement | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!loaded) setLoaded(true);
            el.play().catch(() => {});
          } else {
            el.pause();
          }
        });
      },
      { rootMargin: "200px 0px", threshold: 0 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [loaded]);

  return (
    <>
      <video
        ref={ref}
        className={className}
        src={loaded ? src : undefined}
        autoPlay
        muted
        loop
        playsInline
        preload={loaded ? "auto" : "none"}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: overlay, position: "absolute" }}
      />
    </>
  );
}
