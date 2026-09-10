import { motion } from "framer-motion";
import LazyBackgroundVideo from "./LazyBackgroundVideo";
import config from "../lib/config";

const VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_092455_089c54f8-3b03-4966-9df1-e9746063d0ef.mp4";

const SKILLS = [
  "React / TypeScript",
  "App Development",
  "Node.js",
  "Tailwind CSS",
  "Framer Motion",
  "Brand Identity",
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-20 sm:py-28 overflow-hidden">
      <LazyBackgroundVideo src={VIDEO} />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
        <motion.p
          className="text-white/40 text-[13px] sm:text-[14px] tracking-[0.2em] uppercase mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          About
        </motion.p>

        <motion.h2
          className="text-white font-light text-[clamp(36px,8vw,72px)] leading-[0.95] tracking-[-0.03em] mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.0 }}
        >
          {config.name}
        </motion.h2>

        <div className="flex flex-col gap-10 max-w-xl">
          <motion.p
            className="text-white/70 text-[15px] sm:text-[17px] leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.0, delay: 0.2 }}
          >
            {config.bio}
          </motion.p>

          <div>
            <div className="text-white/40 text-[12px] tracking-[0.2em] uppercase mb-5">Skills</div>
            <div className="flex flex-wrap gap-2">
              {SKILLS.map((s, i) => (
                <motion.span
                  key={s}
                  className="px-3.5 py-1.5 border border-white/15 rounded-full text-white/70 text-[12px]"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
