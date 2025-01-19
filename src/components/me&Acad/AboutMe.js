import React from 'react';
import { motion } from 'framer-motion';
import './AboutMe.css';

function AboutMe({ transitionClass }) {
  return (
    <div className={`about-me ${transitionClass}`}
    style={{ padding: '50px', textAlign: 'center' }}>

    {/* {/* <div class="glow-box">
   <div class="glow-dot"></div>
    </div> 
   <div class="glowing-border"></div> */}



  <motion.h1
    initial={{ opacity: 0 }}  // Initial opacity 0
    animate={{ opacity: 1 }}   // Animate to opacity 1
    transition={{ duration: 1 }} // Fade in over 1 second
  >
    About Me
  </motion.h1>    
  <motion.p
        initial={{ y: '100%', opacity: 0 }}  // Start off-screen (bottom) with opacity 0
        animate={{ y: 0, opacity: 1 }}      // Slide to its normal position and fade in
        transition={{ duration: 1, delay: 0.5 }} // Slide in after 0.5 seconds, over 1 second
      >
        Hi, I'm Arghya Dip Paul! I am a motivated engineer with a knack for problem-solving and an enthusiasm for building innovative solutions. 
        My core expertise lies in working with technologies like React, Node.js, Express, and MongoDB. My creative background, highlighted by achievements in arts 
        and drawing competitions, allows me to approach challenges with a unique and creative perspective.
      {/* </p>
      <p> */}<br/>
        I am currently exploring new opportunities that leverage my technical and creative skills, while continually learning and growing in a collaborative setting.
        </motion.p>
    </div>
  );
}

export default AboutMe;
