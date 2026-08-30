import { motion } from "framer-motion";

const VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_095750_32a52ce0-2005-45c9-9093-41f03fde9530.mp4";

const SERVICES = [
  {
    icon: "bi-code-slash",
    title: "Web Development",
    desc: "Fast, responsive, production-grade websites and web apps built with modern tooling.",
  },
  {
    icon: "bi-palette",
    title: "App Development",
    desc: "Clean interfaces and experiences designed around your users and your goals.",
  },
  {
    icon: "bi-phone",
    title: "Mobile & Responsive",
    desc: "Flawless experiences across every screen, from phones to large displays.",
  },
  {
    icon: "bi-graph-up-arrow",
    title: "Performance & SEO",
    desc: "Fast load times, accessible markup, and search-friendly structure that converts.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={VIDEO}
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-28">
        <motion.p
          className="text-white/40 text-[13px] sm:text-[14px] tracking-[0.2em] uppercase mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          What I Do
        </motion.p>

        <motion.h2
          className="text-white font-light text-[clamp(36px,8vw,72px)] leading-[0.95] tracking-[-0.03em] text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.0 }}
        >
          Services
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              className="h-64 border border-white/10 rounded-2xl bg-black/40 backdrop-blur-md p-6 flex flex-col justify-between cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              whileHover={{ y: -6, borderColor: "rgba(255,255,255,0.4)" }}
            >
              <div>
                <i className={`bi ${s.icon} text-[28px] text-white/80`} />
                <h3 className="text-white text-[16px] font-normal mt-8">{s.title}</h3>
              </div>
              <p className="text-white/40 text-[12px] sm:text-[13px] leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
