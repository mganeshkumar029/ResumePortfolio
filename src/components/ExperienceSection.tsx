import { motion } from "framer-motion";
import LazyBackgroundVideo from "./LazyBackgroundVideo";
import config from "../lib/config";

const VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_095750_32a52ce0-2005-45c9-9093-41f03fde9530.mp4";

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <LazyBackgroundVideo src={VIDEO} />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-20 sm:py-28">
        <motion.p
          className="text-white/75 text-[13px] sm:text-[14px] tracking-[0.2em] uppercase mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          Experience
        </motion.p>

        <motion.h2
          className="text-white font-light text-[clamp(36px,8vw,72px)] leading-[0.95] tracking-[-0.03em] mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.0 }}
        >
          Where I&apos;ve Worked
        </motion.h2>

        <div className="flex flex-col gap-12">
          {config.experience.map((exp, i) => (
            <motion.div
              key={`${exp.org}-${exp.period}`}
              className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-4 md:gap-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
            >
              <div className="flex flex-col gap-2">
                <span className="text-white/75 text-[12px] sm:text-[13px] tracking-[0.1em] uppercase">
                  {exp.period}
                </span>
                <span className="text-white/70 text-[12px] sm:text-[13px]">{exp.location}</span>
              </div>

              <div className="border border-white/10 rounded-2xl bg-black/40 backdrop-blur-md p-6 sm:p-8">
                <h3 className="text-white text-[18px] sm:text-[20px] font-light tracking-[-0.01em]">
                  {exp.role}
                </h3>
                <div className="text-white/80 text-[13px] sm:text-[14px] mb-5">{exp.org}</div>
                <ul className="flex flex-col gap-3">
                  {exp.highlights.map((h) => (
                    <li key={h} className="flex gap-3 text-white/85 text-[13px] sm:text-[14px] leading-relaxed">
                      <i className="bi bi-dash text-white/50 mt-1" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}