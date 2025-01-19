import { motion } from "framer-motion";

export default function GlowingMargin() {
  const lineVariants = {
    hidden: { strokeDasharray: 0, strokeDashoffset: 0 },
    animate: { 
      strokeDasharray: 300, // Adjust based on SVG length
      strokeDashoffset: [300, 0], 
      transition: { 
        duration: 2, 
        ease: "easeInOut", 
        repeat: Infinity, 
        repeatType: "reverse" 
      }
    }
  };

  return (
    <div style={{ height: "100vh", width: "100vw", position: "relative" }}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 200 100"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: "absolute", top: 0, left: 0 }}
      >
        {/* Top-left to 23% of top */}
        <motion.path
          d="M10,10 L130,10"
          stroke="gold"
          strokeWidth="0.5"
          fill="none"
          variants={lineVariants}
          initial="hidden"
          animate="animate"
          style={{ filter: "drop-shadow(0px 0px 3px gold)" }}
        />


        ag<br/>
        cd
        {/* Left-top to 40% of bottom */}
        <motion.path
          d="M10,10 L10,40" /* starting point left, starting top-to-bot wise, */
          stroke="gold"     /* ending left-right wise, ending top-bot wise*/
          strokeWidth="0.5"
          fill="none"
          variants={lineVariants}
          initial="hidden"
          animate="animate"
          style={{ filter: "drop-shadow(0px 0px 3px gold)" }}
        />
        {/* Bottom-right to 30% of top-right */}
        <motion.path
          d="M190,90 L190,60"
          stroke="gold"
          strokeWidth="0.5"
          fill="none"
          variants={lineVariants}
          initial="hidden"
          animate="animate"
          style={{ filter: "drop-shadow(0px 0px 3px gold)" }}
        />
        {/* Right-bottom to 40% of left-bottom */}
        <motion.path
          d="M190,90 L60,90"
          stroke="gold"
          strokeWidth="0.5"
          fill="none"
          variants={lineVariants}
          initial="hidden"
          animate="animate"
          style={{ filter: "drop-shadow(0px 0px 3px gold)" }}
        />
      </svg>
    </div>
  );
}
