import { useState } from "react";
import { motion } from "framer-motion";
import SynapseXLogo from "./SynapseXLogo";
import ScrambleText from "./ScrambleText";
import LazyBackgroundVideo from "./LazyBackgroundVideo";
import config from "../lib/config";
import { scrollToSection } from "../lib/scroll";

const VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_080203_fd7f4f85-3a86-4837-8192-85e7bfe68e75.mp4";

const NAV_LINKS = [
  { label: "Home", href: "#top" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const SERVICE_LINKS = [
  "Web Development",
  "App Development",
  "Mobile & Responsive",
  "Performance & SEO",
];

const SOCIALS = [
  { label: "Email", icon: "bi-envelope", href: `mailto:${config.contact.email}` },
  { label: "GitHub", icon: "bi-github", href: config.contact.github },
  { label: "LinkedIn", icon: "bi-linkedin", href: config.contact.linkedin },
  { label: "Twitter", icon: "bi-twitter-x", href: config.contact.twitter },
  { label: "Dribbble", icon: "bi-dribbble", href: config.contact.dribbble },
].filter((s) => s.href);

const colHeading = "text-white/40 text-[12px] tracking-[0.2em] uppercase mb-6";

function scrollToFooterSection(href: string) {
  if (href === "#top") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  scrollToSection(href);
}

export default function Footer() {
  return (
    <footer className="relative bg-black overflow-hidden">
      {/* Background video + overlays */}
      <div className="absolute inset-0">
        <LazyBackgroundVideo src={VIDEO} />
        <div className="absolute inset-0 bg-black/65" />
        <div
          className="absolute inset-x-0 top-0 h-40"
          style={{ background: "linear-gradient(180deg, #000 0%, transparent 100%)" }}
        />
      </div>

      {/* Watermark */}
      <div
        className="absolute left-1/2 top-0 pointer-events-none select-none whitespace-nowrap"
        style={{
          transform: "translateX(-50%)",
          fontSize: "clamp(60px, 22vw, 380px)",
          letterSpacing: "clamp(-2px, -0.5vw, -4px)",
          textTransform: "uppercase",
          fontFamily: '"Anton SC", sans-serif',
          opacity: 0.05,
          background: "radial-gradient(circle, rgba(142,127,148,0) 0%, #8E7F94 70%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        {config.name}
      </div>

      <div className="relative z-10">
        {/* CTA */}
        <div className="px-6 sm:px-12 pt-28 pb-20 text-center">
          <motion.p
            className="text-white/40 text-[13px] sm:text-[14px] tracking-[0.2em] uppercase mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            Have a project in mind?
          </motion.p>

          <motion.h2
            className="text-white font-light text-[clamp(34px,7vw,64px)] leading-[1.0] tracking-[-0.03em] mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.0 }}
          >
            Let&apos;s Build
            <br />
            Something Great
          </motion.h2>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, delay: 0.15 }}
          >
            <motion.button
              onClick={() => scrollToFooterSection("#contact")}
              className="h-14 px-6 sm:px-8 bg-white rounded-full text-black text-[15px] inline-flex items-center gap-3 cursor-pointer font-normal"
              whileHover={{ scale: 1.03, backgroundColor: "#e2e2e6" }}
              whileTap={{ scale: 0.97 }}
            >
              <CtaText text="Start a Project" />
              <i className="bi bi-arrow-right" />
            </motion.button>
            <a
              href={`mailto:${config.contact.email}`}
              className="h-14 px-6 sm:px-8 border border-white/25 rounded-full text-white text-[15px] inline-flex items-center gap-3 hover:border-white/50 transition-colors"
            >
              <CtaText text="Email Me" />
            </a>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="max-w-6xl mx-auto px-6 sm:px-12">
          <div className="h-px bg-white/10" />
        </div>

        {/* Columns */}
        <div className="max-w-6xl mx-auto px-6 sm:px-12 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 flex items-center gap-2">
              <SynapseXLogo size={18} className="text-white" />
              <span className="text-[15px] font-medium text-white tracking-tight">
                {config.name}
              </span>
            </div>
            <p className="text-white/45 text-[13px] leading-relaxed mb-6">{config.tagline}</p>
            <div className="flex gap-2.5">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-white/15 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:border-white/45 hover:bg-white/5 transition-colors"
                  aria-label={s.label}
                >
                  <i className={`bi ${s.icon} text-[15px]`} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.08 }}
          >
            <h3 className={colHeading}>Navigation</h3>
            <div className="flex flex-col items-start gap-3.5">
              {NAV_LINKS.map((l) => (
                <LinkItem key={l.label} text={l.label} onClick={() => scrollToFooterSection(l.href)} />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.16 }}
          >
            <h3 className={colHeading}>Services</h3>
            <div className="flex flex-col items-start gap-3.5">
              {SERVICE_LINKS.map((s) => (
                <LinkItem key={s} text={s} onClick={() => scrollToFooterSection("#services")} />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.24 }}
          >
            <h3 className={colHeading}>Contact</h3>
            <div className="flex flex-col items-start gap-4 text-[14px]">
              <a href={`mailto:${config.contact.email}`} className="text-white/70 hover:text-white transition-colors">
                {config.contact.email}
              </a>
              <a href={`tel:${config.contact.phone}`} className="text-white/70 hover:text-white transition-colors">
                {config.contact.phone}
              </a>
              <span className="text-white/50">{config.contact.location}</span>

            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="max-w-6xl mx-auto px-6 sm:px-12 pb-8">
          <div className="h-px bg-white/10 mb-6" />
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/25 text-[12px] text-center sm:text-left">
              &copy; 2026 {config.name}. All rights reserved.
            </p>
            <p className="text-white/25 text-[12px] text-center">
              Designed &amp; built with <span className="text-white/50">precision</span>
            </p>
            <button
              onClick={() => scrollToFooterSection("#top")}
              className="w-10 h-10 border border-white/15 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:border-white/45 transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <i className="bi bi-arrow-up" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

function LinkItem({ text, onClick }: { text: string; onClick: () => void }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="text-white/70 hover:text-white text-[14px] transition-colors cursor-pointer"
    >
      <ScrambleText text={text} isHovered={hovered} />
    </button>
  );
}

function CtaText({ text }: { text: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <span onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <ScrambleText text={text} isHovered={hovered} />
    </span>
  );
}
