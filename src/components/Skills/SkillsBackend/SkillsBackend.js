// SkillsBackend.js
import React from 'react';
import './SkillsBackend.css';
// import nodeLogo from '../../Assets/node.png';
// import expressLogo from '../../Assets/express.png';
// import mongodbLogo from '../../Assets/mongodb.png';

function SkillsBackend({ transitionClass }) {
  return (
    <div className={`skills-page backend ${transitionClass}`}>
      <h2>Backend Technologies</h2><br/><br/>
      <div className="skills-container">
        <div className="skill-item">
          {/* <img src={nodeLogo} alt="Node.js" /> */}
          <p>Node.js</p>
        </div>
        <div className="skill-item">
          {/* <img src={expressLogo} alt="Express.js" /> */}
          <p>Express.js</p>
        </div>
        <div className="skill-item">
          {/* <img src={mongodbLogo} alt="MongoDB" /> */}
          <p>MongoDB</p>
        </div>
      </div>
    </div>
  );
}

export default SkillsBackend;
