import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import config from "../lib/config";

export default function CallButton() {
  const [showBadge, setShowBadge] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowBadge(true), 1200);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!showBadge) return;
    const t = setTimeout(() => setShowBadge(false), 3000);
    return () => clearTimeout(t);
  }, [showBadge]);

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-3">
      <AnimatePresence>
        {showBadge && (
          <motion.span
            className="rounded-full bg-white/90 backdrop-blur-md px-4 py-2 text-[12px] tracking-[0.15em] uppercase text-black shadow-lg shadow-black/30"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ type: "tween", duration: 0.3 }}
            style={{ whiteSpace: "nowrap" }}
          >
            <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2" />
            Available for New Projects
          </motion.span>
        )}
      </AnimatePresence>
      <motion.a
        href={`tel:${config.contact.phone}`}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-black shadow-lg shadow-black/30"
        aria-label="Call now"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 320, damping: 22 }}
        whileHover={{ scale: 1.08, backgroundColor: "#e2e2e6" }}
        whileTap={{ scale: 0.92 }}
      >
        <i className="bi bi-telephone text-[20px]" />
      </motion.a>
    </div>
  );
}
