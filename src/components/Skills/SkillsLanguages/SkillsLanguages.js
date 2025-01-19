// SkillsLanguages.js
import React from 'react';
import './SkillsLanguages.css';
// import jsLogo from '../../Assets/javascript.png';
// import pythonLogo from '../../Assets/python.png';
// import javaLogo from '../../Assets/java.png';

function SkillsLanguages({ transitionClass }) {
  return (
    <div className={`skills-page languages ${transitionClass}`}>
      <h2>Programming Languages</h2><br/><br/>
      <div className="skills-container">
        <div className="skill-item">
          {/* <img src={jsLogo} alt="JavaScript" /> */}
          <p>Java</p>
        </div>
        <div className="skill-item">
          {/* <img src={pythonLogo} alt="Python" /> */}
          <p>JavaScript</p>
        </div>
        <div className="skill-item">
          {/* <img src={javaLogo} alt="Java" /> */}
          <img src="" />
          <p>Python</p>
        </div>
      </div>
    </div>
  );
}

export default SkillsLanguages;
