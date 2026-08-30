import { useState } from "react";
import { motion } from "framer-motion";
import ScrambleText from "./ScrambleText";
import SynapseXLogo from "./SynapseXLogo";
import SquashHamburger from "./SquashHamburger";
import config from "../lib/config";

const spring = { type: "spring", stiffness: 350, damping: 28 } as const;

interface NavbarProps {
  entranceComplete: boolean;
}

const NAV_LINKS = [
  { text: "Services", href: "#services" },
  { text: "Work", href: "#work" },
  { text: "About", href: "#about" },
  { text: "Contact", href: "#contact" },
];

function scrollToSection(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar({ entranceComplete }: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 h-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: entranceComplete ? 1 : 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="h-full w-full px-2 sm:px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Desktop */}
          <div className="hidden sm:flex items-center gap-2">
            <motion.div
              className="hidden md:flex h-12 px-5 bg-white/15 backdrop-blur-md rounded-[14px] items-center justify-center gap-2 cursor-pointer"
              whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.22)" }}
              whileTap={{ scale: 0.98 }}
              style={{ overflow: "hidden" }}
              animate={{ width: open ? 0 : "auto", paddingLeft: open ? 0 : 20, paddingRight: open ? 0 : 20, opacity: open ? 0 : 1 }}
              transition={spring}
            >
              <SynapseXLogo size={18} className="text-white" />
              <span className="text-[16px] font-medium tracking-tight text-white whitespace-nowrap">
                {config.name}
              </span>
            </motion.div>

            <motion.div
              className="h-12 rounded-[14px] bg-white/15 backdrop-blur-md flex items-center"
              animate={{ width: open ? 360 : 48 }}
              transition={spring}
              style={{ overflow: "hidden" }}
            >
              <motion.button
                className="rounded-[14px] flex items-center justify-center text-white cursor-pointer shrink-0"
                animate={{
                  width: open ? 36 : 48,
                  height: open ? 36 : 48,
                  borderRadius: open ? 11 : 14,
                  marginLeft: open ? 6 : 0,
                  backgroundColor: open ? "rgba(255,255,255,0.10)" : "rgba(255,255,255,0)",
                  marginRight: open ? 8 : 0,
                }}
                whileHover={{ backgroundColor: "rgba(255,255,255,0.20)" }}
                transition={spring}
                onClick={() => setOpen((o) => !o)}
                aria-label="Menu"
              >
                <SquashHamburger open={open} />
              </motion.button>

              {open && (
                <motion.nav
                  className="flex items-center gap-5"
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  {NAV_LINKS.map((l) => (
                    <NavLink key={l.text} text={l.text} onClick={() => scrollToSection(l.href)} />
                  ))}
                </motion.nav>
              )}
            </motion.div>
          </div>

          {/* Mobile */}
          <div className="sm:hidden flex items-center gap-2 w-full">
            <motion.div
              className="h-9 bg-white/15 backdrop-blur-md rounded-[10px] flex items-center justify-center overflow-hidden"
              animate={{ width: open ? 0 : "auto", paddingLeft: open ? 0 : 14, paddingRight: open ? 0 : 14, opacity: open ? 0 : 1 }}
              transition={spring}
            >
              <SynapseXLogo size={14} className="text-white" />
              <span className="text-[13px] font-medium tracking-tight text-white whitespace-nowrap ml-1.5">
                {config.name}
              </span>
            </motion.div>

            <motion.div
              className="h-9 rounded-[10px] bg-white/15 backdrop-blur-md flex items-center"
              animate={{ width: open ? "100%" : 36 }}
              transition={spring}
              style={{ overflow: "hidden", flexShrink: 0 }}
            >
              <motion.button
                className="rounded-[8px] flex items-center justify-center text-white cursor-pointer shrink-0"
                animate={{
                  width: open ? 27 : 36,
                  height: open ? 27 : 36,
                  marginLeft: open ? 4 : 0,
                  backgroundColor: open ? "rgba(255,255,255,0.10)" : "rgba(255,255,255,0)",
                  marginRight: open ? 8 : 0,
                }}
                whileHover={{ backgroundColor: "rgba(255,255,255,0.20)" }}
                transition={spring}
                onClick={() => setOpen((o) => !o)}
                aria-label="Menu"
              >
                <SquashHamburger open={open} mobile />
              </motion.button>

              {open && (
                <motion.nav
                  className="flex items-center gap-4 whitespace-nowrap"
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  {NAV_LINKS.map((l) => (
                    <NavLink key={l.text} text={l.text} mobile onClick={() => scrollToSection(l.href)} />
                  ))}
                </motion.nav>
              )}
            </motion.div>
          </div>
        </div>

        {/* CTA */}
        <div className="hidden sm:block">
          <motion.button
            className="h-12 px-6 bg-white rounded-full text-black flex items-center gap-3 cursor-pointer"
            whileHover={{ scale: 1.03, backgroundColor: "#e2e2e6" }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollToSection("#contact")}
          >
            <i className="bi bi-chat-dots text-[16px]" />
            <CtaLabel />
          </motion.button>
        </div>
        <div className="sm:hidden">
          <motion.button
            className="h-9 px-3.5 bg-white rounded-full text-black flex items-center gap-2 cursor-pointer"
            whileHover={{ scale: 1.03, backgroundColor: "#e2e2e6" }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollToSection("#contact")}
          >
            <i className="bi bi-chat-dots text-[13px]" />
            <CtaLabel mobile />
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
}

function NavLink({ text, onClick, mobile = false }: { text: string; onClick: () => void; mobile?: boolean }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      className={`${mobile ? "text-[13px]" : "text-[16px]"} font-normal text-white/85 hover:text-white cursor-pointer`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      <ScrambleText text={text} isHovered={hovered} />
    </button>
  );
}

function CtaLabel({ mobile = false }: { mobile?: boolean }) {
  const [hovered, setHovered] = useState(false);
  return (
    <span
      className={mobile ? "text-[13px]" : "text-[16px]"}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <ScrambleText text="Let's Talk" isHovered={hovered} />
    </span>
  );
}
