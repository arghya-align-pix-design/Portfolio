import React from 'react';
import { motion } from 'framer-motion';
import './Academics.css';

function AcademicQualifications({ transitionClass }) {
  return (
    <div className={`academic-qualifications ${transitionClass}`}>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >Academic Qualifications
      </motion.h2>
      <ul>
      <motion.li
          initial={{ x: '-100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <strong>B.Tech in Applied Electronics and Instrumentation Engineering</strong>
          <br />
          Institution: Asansol Engineering College <br />
          Year of Graduation: 2023
          </motion.li>
          <motion.li
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <strong>High School (12th Standard)</strong>
          <br />
          Stream: Science <br />
          Institution: D.A.V. Public School,Koyla Nagar,Dhanbad. <br />
          Year of Passing: 2018
          </motion.li>
          <motion.li
          initial={{ x: '100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <strong>Secondary School (10th Standard)</strong>
          <br />
          Institution: D.A.V. Public School,Koyla Nagar,Dhanbad. <br />
          Year of Passing: 2016
          </motion.li>
      </ul>
    </div>
  );
}

export default AcademicQualifications;
