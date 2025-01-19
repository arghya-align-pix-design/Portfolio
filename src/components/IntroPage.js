import React from "react";
import "./IntroPage.css";
import { motion } from "framer-motion";

function IntroPage({ transitionClass }) {
  const lineVariants = {
    hidden: { strokeDasharray: 0, strokeDashoffset: 0 },
    animate: {
      strokeDasharray: 300, // Adjust based on SVG length
      strokeDashoffset: [300, 0],
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };

  return (
    <div className={`page intro-page ${transitionClass}`}>
      {/* SVG Animation */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
        }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 200 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Top-left to 23% of top */}
          <motion.path
            d="M10,10 L130,10"
            stroke="#d4af37" /* Gold color */
            strokeWidth="0.5"
            fill="none"
            variants={lineVariants}
            initial="hidden"
            animate="animate"
            style={{ filter: "drop-shadow(0px 0px 3px #d4af37)" }}
          />
          {/* Left-top to 40% of bottom */}
          <motion.path
            d="M10,10 L10,40"
            stroke="#d4af37"
            strokeWidth="0.5"
            fill="none"
            variants={lineVariants}
            initial="hidden"
            animate="animate"
            style={{ filter: "drop-shadow(0px 0px 3px #d4af37)" }}
          />
          {/* Bottom-right to 30% of top-right */}
          <motion.path
            d="M190,90 L190,60"
            stroke="#d4af37"
            strokeWidth="0.5"
            fill="none"
            variants={lineVariants}
            initial="hidden"
            animate="animate"
            style={{ filter: "drop-shadow(0px 0px 3px #d4af37)" }}
          />
          {/* Right-bottom to 40% of left-bottom */}
          <motion.path
            d="M190,90 L60,90"
            stroke="#d4af37"
            strokeWidth="0.5"
            fill="none"
            variants={lineVariants}
            initial="hidden"
            animate="animate"
            style={{ filter: "drop-shadow(0px 0px 3px #d4af37)" }}
          />
        </svg>
      </div>

      {/* Intro Text */}
      <div
        className="text-container"
        style={{
          position: "relative",
          zIndex: 2, // Ensure the text appears above the SVG
          textAlign: "center",
        }}
      >
        <h1 className="name-title">Arghya Dip Paul</h1>
        <h2 className="subtitle">Aspiring Web Developer</h2>
        <p className="description">
          Motivated and dedicated to putting my skills to work.Excited to
          contribute meaningfully and learn at every step of my professional
          journey.
        </p>
        
      </div>
    </div>
  );
}

export default IntroPage;




// // IntroPage.js
// import React from 'react';
// import './IntroPage.css';
// import { motion } from "framer-motion";

// function IntroPage({ transitionClass }) {

//   const lineVariants = {
//     hidden: { strokeDasharray: 0, strokeDashoffset: 0 },
//     animate: { 
//       strokeDasharray: 300, // Adjust based on SVG length
//       strokeDashoffset: [300, 0], 
//       transition: { 
//         duration: 2, 
//         ease: "easeInOut", 
//         repeat: Infinity, 
//         repeatType: "reverse" 
//       }
//     }
//   };

//   return (
//     <div className={`page intro-page ${transitionClass}`}>
//       <div style={{ height: "100vh", width: "100vw", position: "relative" }}>
//       <svg
//         width="100%"
//         height="100%"
//         viewBox="0 0 200 100"
//         xmlns="http://www.w3.org/2000/svg"
//         style={{ position: "absolute", top: 0, left: 0 }}
//       >
//         {/* Top-left to 23% of top */}
//         <motion.path
//           d="M10,10 L130,10"
//           stroke="gold"
//           strokeWidth="0.5"
//           fill="none"
//           variants={lineVariants}
//           initial="hidden"
//           animate="animate"
//           style={{ filter: "drop-shadow(0px 0px 3px gold)" }}
//         />
//          {/* Left-top to 40% of bottom */}
//        <motion.path
//           d="M10,10 L10,40" /* starting point left, starting top-to-bot wise, */
//           stroke="gold"     /* ending left-right wise, ending top-bot wise*/
//           strokeWidth="0.5"
//           fill="none"
//           variants={lineVariants}
//           initial="hidden"
//           animate="animate"
//           style={{ filter: "drop-shadow(0px 0px 3px gold)" }}
//         />


//       <h1 className="name-title">Arghya Dip Paul</h1>
//       <h2 className="subtitle">Aspiring Professional</h2>
//       <p className="description">
//         Motivated and dedicated to putting my skills to work. Excited to contribute meaningfully and learn in every step of my professional journey.
//       </p>
      
//         {/* Bottom-right to 30% of top-right */}
//         <motion.path
//           d="M190,90 L190,60"
//           stroke="gold"
//           strokeWidth="0.5"
//           fill="none"
//           variants={lineVariants}
//           initial="hidden"
//           animate="animate"
//           style={{ filter: "drop-shadow(0px 0px 3px gold)" }}
//         />
//         {/* Right-bottom to 40% of left-bottom */}
//         <motion.path
//           d="M190,90 L60,90"
//           stroke="gold"
//           strokeWidth="0.5"
//           fill="none"
//           variants={lineVariants}
//           initial="hidden"
//           animate="animate"
//           style={{ filter: "drop-shadow(0px 0px 3px gold)" }}
//         />
//       </svg>
//     </div>
//     </div>
//   );
// }

// export default IntroPage;
