import { motion } from "framer-motion";

interface SquashHamburgerProps {
  open: boolean;
  mobile?: boolean;
}

const spring = { type: "spring", stiffness: 300, damping: 20 } as const;

export default function SquashHamburger({ open, mobile = false }: SquashHamburgerProps) {
  const width = mobile ? 15 : 18;
  const height = mobile ? 10 : 12;
  const barH = mobile ? 1.2 : 1.5;
  const travel = (height - barH) / 2;

  const baseBar: React.CSSProperties = {
    position: "absolute",
    left: 0,
    width: "100%",
    height: barH,
    background: "currentColor",
  };

  return (
    <div style={{ width, height, position: "relative" }}>
      <motion.span
        style={{ ...baseBar, top: 0, transformOrigin: "center" }}
        animate={open ? { rotate: 45, y: travel } : { rotate: 0, y: 0 }}
        transition={spring}
      />
      <motion.span
        style={{ ...baseBar, top: (height - barH) / 2 }}
        animate={open ? { opacity: 0, scale: 0 } : { opacity: 1, scale: 1 }}
        transition={spring}
      />
      <motion.span
        style={{ ...baseBar, bottom: 0, transformOrigin: "center" }}
        animate={open ? { rotate: -45, y: -travel } : { rotate: 0, y: 0 }}
        transition={spring}
      />
    </div>
  );
}
