import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import ScrambleIn from "./ScrambleIn";
import config from "../lib/config";
import { scrollToSection } from "../lib/scroll";

const HERO_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_083515_290e5a10-0b95-41af-a5e2-32b6389baa4d.mp4";

interface HeroProps {
  entranceComplete: boolean;
}

export default function Hero({ entranceComplete }: HeroProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const lastX = { value: 0, set: false };
    const acc = { value: 0 };
    let seeking = false;

    const initiateSeek = () => {
      if (seeking) return;
      const duration = video.duration || 0;
      if (duration <= 0) return;
      const clamped = Math.max(0, Math.min(duration, acc.value));
      if (Math.abs(video.currentTime - clamped) < 0.001) {
        seeking = false;
        return;
      }
      seeking = true;
      video.currentTime = clamped;
    };

    const onMove = (e: MouseEvent) => {
      if (!lastX.set) {
        lastX.value = e.clientX;
        lastX.set = true;
        return;
      }
      const dx = e.clientX - lastX.value;
      lastX.value = e.clientX;
      acc.value += dx * 0.8;
      initiateSeek();
    };

    const onSeeked = () => {
      seeking = false;
      initiateSeek();
    };

    window.addEventListener("mousemove", onMove);
    video.addEventListener("seeked", onSeeked);

    return () => {
      window.removeEventListener("mousemove", onMove);
      video.removeEventListener("seeked", onSeeked);
    };
  }, []);

  const scrollToHref = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollToSection(href);
  };

  return (
    <section className="relative h-[100dvh] overflow-hidden">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src={HERO_VIDEO}
        muted
        playsInline
        preload="auto"
      />

      {/* Dark overlay for text contrast */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.3) 100%)",
        }}
      />

      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.05,
          backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Watermark */}
      {config.watermark && (
        <div
          className="absolute left-1/2 top-1/2 pointer-events-none select-none whitespace-nowrap"
          style={{
            transform: "translate(-50%, calc(-50% + 50px))",
            fontSize: "clamp(80px, 30vw, 521px)",
            letterSpacing: "clamp(-2px, -0.5vw, -4px)",
            textTransform: "uppercase",
            fontFamily: '"Anton SC", sans-serif',
            opacity: 0.1,
            background: "radial-gradient(circle, rgba(142,127,148,0) 0%, #8E7F94 70%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          {config.watermark}
        </div>
      )}

      <motion.div
        className="relative flex flex-col px-4 sm:px-6 md:px-8 pt-20 sm:pt-24 pb-8 sm:pb-12 h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: entranceComplete ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <div className="flex-1" />

        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-4 max-w-2xl">
            <div className="text-[12px] sm:text-[13px] uppercase tracking-[0.28em] text-white/85">
              <ScrambleIn text={config.role} delay={400} triggered={entranceComplete} />
            </div>

            <h1 className="font-light leading-[0.95] tracking-[-0.03em] text-[clamp(36px,9vw,88px)] text-white">
              <ScrambleIn text={config.name} delay={200} triggered={entranceComplete} />
            </h1>

            <p
              className="max-w-md text-[13px] sm:text-[15px] text-white/85 leading-relaxed"
            >
              {config.tagline}
            </p>

            <motion.div
              className="flex flex-wrap items-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={entranceComplete ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.35 }}
            >
              <a
                href="#work"
                onClick={(e) => scrollToHref(e, "#work")}
                className="h-12 px-6 bg-white rounded-full text-black inline-flex items-center gap-3 text-[14px]"
              >
                <span>View Work</span>
                <i className="bi bi-arrow-right" />
              </a>
              <a
                href="#contact"
                onClick={(e) => scrollToHref(e, "#contact")}
                className="h-12 px-6 border border-white/45 rounded-full text-white inline-flex items-center gap-3 text-[14px]"
              >
                <span>Get in Touch</span>
              </a>
            </motion.div>
          </div>

          <div className="hidden md:flex flex-col items-end gap-3 text-right">
            <div className="text-white/75 text-[12px] tracking-[0.2em] uppercase">Available for</div>
            <div className="text-white text-[15px]">New Projects</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
