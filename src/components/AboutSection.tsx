import { motion } from "framer-motion";
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

const EXPERIENCE = [
  { role: "Role / Title", org: "Company or Studio Name", period: "2022 — Present", desc: "A short line about what you did and the impact you had." },
  { role: "Role / Title", org: "Company or Studio Name", period: "2019 — 2022", desc: "A short line about what you did and the impact you had." },
  { role: "Role / Title", org: "Company or Studio Name", period: "2017 — 2019", desc: "A short line about what you did and the impact you had." },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-28 overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={VIDEO}
        autoPlay
        muted
        loop
        playsInline
      />

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="flex flex-col gap-10">
            <motion.p
              className="text-white/70 text-[15px] sm:text-[17px] leading-relaxed max-w-xl"
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

          <div>
            <div className="text-white/40 text-[12px] tracking-[0.2em] uppercase mb-5">Experience</div>
            <div className="flex flex-col">
              {EXPERIENCE.map((e, i) => (
                <motion.div
                  key={i}
                  className="border-l border-white/15 pl-6 pb-10 last:pb-0 relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  <span className="absolute left-0 top-1.5 -translate-x-1/2 w-2.5 h-2.5 bg-white/60 rounded-full" />
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="text-white text-[16px] sm:text-[17px] font-normal">{e.role}</span>
                    <span className="text-white/40 text-[13px]">{e.org} · {e.period}</span>
                  </div>
                  <p className="text-white/45 text-[13px] leading-relaxed mt-2 max-w-md">{e.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
