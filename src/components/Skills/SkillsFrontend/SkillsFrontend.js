// SkillsFrontend.js
import React from 'react';
import './SkillsFrontend.css';
//import htmlLogo from '../../Assets/html.png'; // Replace with actual path to your HTML logo
//import reactLogo from '../../Assets/react.png'; // Replace with actual path to your React logo
//import cssLogo from '../../Assets/css.png'; // Replace with actual path to your CSS logo

function SkillsFrontend({ transitionClass }) {
  return (
    <div className={`skills-page frontend ${transitionClass}`}>
      <h2>Frontend Technologies</h2>
      <br />
      <br />
      <div className="skills-container">
        <div className="skill-item" > {/*data-logo={htmlLogo}  {/*data-logo={reactLogo}*/}
          <p>HTML</p>
        </div>
        <div className="skill-item"  >
          <p>REACTJS</p>
        </div>
        <div className="skill-item" >{/*data-logo={cssLogo}*/}
          <p>CSS</p>
        </div>
      </div>
    </div>
  );
}

export default SkillsFrontend;




// // SkillsFrontend.js
// import React from 'react';
// import './SkillsFrontend.css';
// // import reactLogo from '../../Assets/react.png';
// // import htmlLogo from '../../Assets/html.png';
// // import cssLogo from '../../Assets/css.png';
// // SkillsFrontend.js

// function SkillsFrontend({transitionClass}) {
//   return (
//     <div className={`skills-page frontend ${transitionClass}`}>
//       <h2>Frontend Technologies</h2><br/><br/>
//       <div className="skills-container">
//         <div className="skill-item">
//           {/* <img src={reactLogo} alt="React" /> */}
          
//           <p>REACTJS</p>
//         </div>
//         <div className="skill-item">
//           {/* <img src={htmlLogo} alt="HTML" /> */}
//            <p>HTML</p>
//         </div>
//         <div className="skill-item">
//           {/* <img src={cssLogo} alt="CSS" /> */}
          
//           <p>CSS</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SkillsFrontend;
