import { motion } from "framer-motion";
import LazyBackgroundVideo from "./LazyBackgroundVideo";
import config from "../lib/config";

const VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_080203_fd7f4f85-3a86-4837-8192-85e7bfe68e75.mp4";

const CONTACT_ITEMS = [
  {
    icon: "bi-envelope",
    label: "Email",
    value: config.contact.email,
    href: `mailto:${config.contact.email}`,
  },
  {
    icon: "bi-telephone",
    label: "Phone",
    value: "+91 7000118008",
    href: `tel:${config.contact.phone}`,
  },
  {
    icon: "bi-geo-alt",
    label: "Location",
    value: config.contact.location,
    href: "",
  },
  {
    icon: "bi-linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/ganesh-kumar-47681b33b",
    href: config.contact.linkedin,
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="relative min-h-screen flex flex-col justify-center py-20 sm:py-28 overflow-hidden">
      <LazyBackgroundVideo src={VIDEO} />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
        <motion.p
          className="text-white/75 text-[13px] sm:text-[14px] tracking-[0.2em] uppercase mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          Contact
        </motion.p>

        <motion.h2
          className="text-white font-light text-[clamp(36px,8vw,72px)] leading-[0.95] tracking-[-0.03em] text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.0 }}
        >
          Get in Touch
        </motion.h2>

        <motion.div
          className="w-full max-w-4xl mx-auto border border-white/15 rounded-2xl bg-black/40 backdrop-blur-md p-8 sm:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 mb-10">
            <div className="h-20 w-20 shrink-0 rounded-full border border-white/20 flex items-center justify-center text-white/80 text-[26px] font-light tracking-tight">
              {config.watermark}
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-white text-[26px] sm:text-[30px] font-light tracking-[-0.02em]">{config.name}</h3>
              <p className="text-white/50 text-[13px] sm:text-[14px] mt-1">{config.role}</p>
            </div>
          </div>

          <div className="h-px bg-white/10 mb-8" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {CONTACT_ITEMS.map((c, i) => {
              const inner = (
                <>
                  <i className={`bi ${c.icon} text-[20px] text-white/90`} />
                  <div className="flex flex-col gap-1 overflow-hidden">
                    <span className="text-white/75 text-[11px] tracking-[0.2em] uppercase">{c.label}</span>
                    <span className="text-white text-[13px] sm:text-[14px] break-words">{c.value}</span>
                  </div>
                </>
              );
              const classes =
                "flex items-start gap-4 border border-white/10 rounded-xl bg-white/[0.03] p-4 sm:p-5 transition-colors";
              const motionProps = {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true, amount: 0.3 },
                transition: { duration: 0.5, delay: 0.1 + i * 0.08 },
              } as const;

              return c.href ? (
                <motion.a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("mailto") || c.href.startsWith("tel") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className={`${classes} hover:border-white/40`}
                  whileHover={{ y: -3 }}
                  {...motionProps}
                >
                  {inner}
                </motion.a>
              ) : (
                <motion.div key={c.label} className={classes} {...motionProps}>
                  {inner}
                </motion.div>
              );
            })}
          </div>

          <div className="h-px bg-white/10 my-8" />

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href={config.resume}
              download
              className="h-14 px-8 bg-white rounded-full text-black text-[15px] inline-flex items-center gap-3 font-normal"
              whileHover={{ scale: 1.03, backgroundColor: "#e2e2e6" }}
              whileTap={{ scale: 0.97 }}
            >
              <i className="bi bi-download" />
              <span>Download Resume</span>
            </motion.a>
            <a
              href={`mailto:${config.contact.email}`}
              className="h-14 px-8 border border-white/25 rounded-full text-white text-[15px] inline-flex items-center gap-3 hover:border-white/50 transition-colors"
            >
              <i className="bi bi-envelope" />
              <span>Email Me</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}