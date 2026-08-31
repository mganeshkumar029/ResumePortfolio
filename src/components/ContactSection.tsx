import { useState } from "react";
import { motion } from "framer-motion";

const VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_080203_fd7f4f85-3a86-4837-8192-85e7bfe68e75.mp4";

export default function ContactSection() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  const field =
    "w-full bg-white/5 border border-white/15 rounded-lg px-4 py-3 text-white text-[16px] sm:text-[14px] placeholder:text-white/35 focus:outline-none focus:border-white/40";

  return (
    <section id="contact" className="relative min-h-screen py-20 sm:py-28 overflow-hidden">
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
          className="text-white/40 text-[13px] sm:text-[14px] tracking-[0.2em] uppercase mb-4 text-center"
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
          Let's Build Together
        </motion.h2>

        <motion.div
          className="w-full max-w-3xl mx-auto border border-white/15 rounded-2xl bg-black/40 backdrop-blur-md p-8 sm:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          {sent ? (
            <div className="flex flex-col items-center justify-center text-center py-16">
              <i className="bi bi-check2-circle text-[40px] text-white/80" />
              <p className="text-white text-[18px] mt-5">Message sent.</p>
              <p className="text-white/40 text-[13px] mt-2">I'll get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-white/50 text-[12px] tracking-[0.15em] uppercase">Name</label>
                  <input type="text" required placeholder="Your name" className={field} />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-white/50 text-[12px] tracking-[0.15em] uppercase">Email</label>
                  <input type="email" required placeholder="you@email.com" className={field} />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-white/50 text-[12px] tracking-[0.15em] uppercase">Message</label>
                <textarea required rows={5} placeholder="Tell me about your project" className={field} />
              </div>
              <button
                type="submit"
                className="h-12 px-6 bg-white rounded-full text-black text-[14px] inline-flex items-center justify-center gap-3 cursor-pointer"
              >
                <span>Send Message</span>
                <i className="bi bi-send" />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}