import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LazyBackgroundVideo from "./LazyBackgroundVideo";
import digitalMarketingPreview from "../lib/Screenshot 2026-08-30 214927.webp";
import mehandiBusinessPreview from "../lib/Screenshot 2026-08-30 215138.webp";
import docimagePreview from "../lib/image.webp";
import hospitaldemo2 from "../lib/hospitaldemo-2.webp";
import hoteldemo1 from "../lib/hoteldemo1.webp";
import hoteldemo2 from "../lib/hoteldemo2.webp";
import hoteldemo3 from "../lib/hoteldemo3.webp";

const VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_095810_ecea3dd2-fc5e-4e41-8696-4219290b6589.mp4";

type Category = "All" | "Marketing" | "Hospitals" | "Full Stack";

const CATEGORIES: Category[] = ["All", "Marketing", "Hospitals", "Full Stack"];

const PROJECTS = [
  {
    num: "01",
    title: "Digital Marketing",
    type: "Web App / Brand",
    category: "Marketing" as Category,
    desc: "A modern digital marketing website designed to showcase digital marketing services, build a strong online presence, and help businesses attract, engage, and convert their target audience through effective digital strategies.",
    tags: ["Digital Marketing", "Web Design", "SEO"],
    link: "https://ashxglobalnetwork.com/",
    image: digitalMarketingPreview,
  },
  {
    num: "02",
    title: "Mehandi Business",
    type: "Website",
    category: "Marketing" as Category,
    desc: "A beautiful and elegant Mehndi business website designed to showcase bridal and traditional mehndi designs, highlight services and packages, and make it easy for customers to explore designs and get in touch for bookings.",
    tags: ["Henna", "Artist", "Scale"],
    link: "https://mehandi-business.vercel.app/",
    image: mehandiBusinessPreview,
  },
  {
    num: "03",
    title: "Dining Experience",
    type: "Demo-1",
    category: "Marketing" as Category,
    desc: "A visually engaging restaurant website designed to showcase the brand, menu, signature dishes, ambience, and dining experience. With an elegant and responsive interface, the website makes it easy for customers to explore the menu, discover the restaurant, and connect for reservations or enquiries.",
    tags: ["Restaurant", "Food & Dining", "Menu"],
    link: "https://restaurantdemo-1.netlify.app/",
    image: hoteldemo1,
  },
    {
    num: "04",
    title: "Dining Experience",
    type: "Demo-2",
    category: "Marketing" as Category,
    desc: "A visually engaging restaurant website designed to showcase the brand, menu, signature dishes, ambience, and dining experience. With an elegant and responsive interface, the website makes it easy for customers to explore the menu, discover the restaurant, and connect for reservations or enquiries.",
    tags: ["Restaurant", "Food & Dining", "Menu"],
    link: "https://restaurantdemo-two.netlify.app/",
    image: hoteldemo2,
  },
    {
    num: "05",
    title: "Dining Experience",
    type: "Demo-3",
    category: "Marketing" as Category,
    desc: "A visually engaging restaurant website designed to showcase the brand, menu, signature dishes, ambience, and dining experience. With an elegant and responsive interface, the website makes it easy for customers to explore the menu, discover the restaurant, and connect for reservations or enquiries.",
    tags: ["Restaurant", "Food & Dining", "Menu"],
    link: "https://restaurantdemo-3.netlify.app/",
    image: hoteldemo3,
  },
  {
    num: "06",
    title: "Modern Healthcare & Clinic Website",
    type: "Demo-1",
    category: "Hospitals" as Category,
    desc: "A modern, patient-focused clinic website designed to establish a strong digital presence for healthcare providers. It features a clean and trustworthy interface for showcasing medical services, doctors, facilities, and clinic information, with intuitive navigation that helps patients easily find the information they need and connect with the clinic.",
    tags: ["Hospital", "Doctors", "Care"],
    link: "https://clinicwebsitedemo-1.netlify.app/",
    image: docimagePreview,
  },
  {
    num: "07",
    title: "Modern Healthcare & Clinic Website",
    type: "Demo-2",
    category: "Hospitals" as Category,
    desc: "A modern, patient-focused clinic website designed to establish a strong digital presence for healthcare providers. It features a clean and trustworthy interface for showcasing medical services, doctors, facilities, and clinic information, with intuitive navigation that helps patients easily find the information they need and connect with the clinic.",
    tags: ["Hospital", "Doctors", "Care"],
    link: "https://hospitaldemo-2.netlify.app/",
    image: hospitaldemo2,
  },

  {
    num: "08",
    title: "EduTrack",
    type: "Smart Education Management",
    category: "Full Stack" as Category,
    desc: "A modern education management platform designed to simplify and streamline academic operations. EduTrack provides a centralized solution for managing students, courses, attendance, academic records, and day-to-day educational workflows through an intuitive and user-friendly interface.",
    tags: ["Education", "School Management", "Academic Management"],
    link: "https://gtrack-dev.netlify.app/login",
  },
  {
    num: "09",
    title: "DineTrack",
    type: "Smart Restaurant Management",
    category: "Full Stack" as Category,
    desc: "A modern restaurant management platform designed to streamline day-to-day operations and enhance the dining experience. DineTrack provides an intuitive solution for managing menus, orders, tables, customers, and restaurant workflows through a centralized digital platform.",
    tags: ["Restaurant Management", "Food & Dining", "Business Solution"],
    link: "https://gtrack-dev.netlify.app/login",
  },
  {
    num: "10",
    title: "MediTrack",
    type: "Smart Healthcare Management",
    category: "Full Stack" as Category,
    desc: "MediTrack is a comprehensive healthcare management platform designed to digitize and streamline clinical operations. It provides an integrated solution for managing patient information, appointments, medical records, and day-to-day healthcare workflows, enabling healthcare professionals to access and manage critical information efficiently through a secure and user-friendly interface.",
    tags: ["Healthcare", "Clinic Management", "Appointment Management"],
  },
];

export default function ProjectsSection() {
  const [active, setActive] = useState<Category>("All");
  const filtered =
    active === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  return (
    <section id="work" className="relative min-h-screen py-20 sm:py-28 overflow-hidden">
      <LazyBackgroundVideo src={VIDEO} />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <motion.h2
            className="text-white font-light text-[clamp(36px,8vw,72px)] leading-[0.95] tracking-[-0.03em]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.0 }}
          >
            Project Works
            <br />
          </motion.h2>
        </div>

        <div className="flex flex-wrap gap-2 mb-12">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setActive(c)}
              className={`relative px-5 py-2 rounded-full border text-[12px] tracking-[0.15em] uppercase transition-colors ${
                active === c
                  ? "border-white/60 text-white"
                  : "border-white/10 text-white/50 hover:text-white hover:border-white/30"
              }`}
            >
              {active === c && (
                <motion.span
                  layoutId="category-pill"
                  className="absolute inset-0 rounded-full bg-white/10"
                  transition={{ type: "spring", stiffness: 400, damping: 35 }}
                />
              )}
              <span className="relative z-10">{c}</span>
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
          {filtered.map((p, i) => {
            const hasLink = !!p.link;
            const cardContent = (
              <>
                {p.image && (
                  <>
                    <img
                      src={p.image}
                      alt={`${p.title} preview`}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 h-full w-full scale-105 object-cover object-top opacity-65 blur-sm transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-slate-950/70 transition-colors duration-200 group-hover:bg-slate-950/60" />
                  </>
                )}
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-10">
                    <span className="text-white/30 text-[12px] tracking-[0.2em] uppercase">{p.num}</span>
                    {hasLink ? (
                      <i className="bi bi-arrow-up-right text-white/40 group-hover:text-white transition-colors" />
                    ) : (
                      <span className="text-white/30 text-[11px] tracking-[0.1em] uppercase border border-white/15 rounded-full px-2.5 py-0.5">Coming Soon</span>
                    )}
                  </div>

                  <div className="text-white/60 text-[12px] tracking-[0.15em] uppercase mb-2">{p.type}</div>
                  <h3 className="text-white text-[22px] sm:text-[26px] font-light tracking-[-0.02em] mb-4">
                    {p.title}
                  </h3>
                  <p className="text-white/65 text-[13px] leading-relaxed max-w-md mb-6">{p.desc}</p>

                  {(p.tags ?? []).length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {p.tags?.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 border border-white/10 rounded-full text-white/60 text-[12px]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </>
            );

            const sharedClasses = "group relative block border border-white/10 rounded-2xl bg-black/40 backdrop-blur-md p-5 sm:p-8 overflow-hidden";

            return hasLink ? (
              <motion.a
                key={p.num}
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className={sharedClasses}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                whileHover={{ y: -6, borderColor: "rgba(255,255,255,0.4)" }}
              >
                {cardContent}
              </motion.a>
            ) : (
              <motion.div
                key={p.num}
                className={sharedClasses}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                {cardContent}
              </motion.div>
            );
          })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
