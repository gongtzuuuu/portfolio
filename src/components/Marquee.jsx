import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

function Marquee() {
  const { scrollY } = useScroll();
  const [marqueePosition, setMarqueePosition] = useState(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setMarqueePosition(latest);
  });

  return (
    <div className="marquee">
      <motion.h1
        className="marquee-title"
        animate={{ x: marqueePosition - 2000 }}
        initial={{ x: 0 }}
        transition={{ ease: "easeOut", duration: 3 }}
      >
        Interested in working together? Feel free to contact me at anytime!
      </motion.h1>
      <motion.h1
        className="marquee-title"
        animate={{ x: 1000 - marqueePosition }}
        initial={{ x: 1000 }}
        transition={{ ease: "easeOut", duration: 3 }}
      >
        Interested in working together? Feel free to contact me at anytime!
      </motion.h1>
    </div>
  );
}

export default Marquee;
