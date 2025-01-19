// App.js
import React, { useState } from 'react';
import GlowingMargin from './components/GlowingMargin/GlowingMargin';
import './App.css';
import IntroPage from './components/IntroPage';
//import PageOne from './components/PageOne';
//import PageTwo from './components/PageTwo';
 import PageThree from './components/PageThree';
import SkillsFrontend from './components/Skills/SkillsFrontend/SkillsFrontend';
import SkillsBackend from './components/Skills/SkillsBackend/SkillsBackend';
import SkillsLanguages from "./components/Skills/SkillsLanguages/SkillsLanguages"
import RecentAchievements from './components/RecentAchievements/RecentAchievement';
import Projects from './components/Projects/Projects';
import AboutMe from './components/me&Acad/AboutMe';
import AcademicQualifications from './components/me&Acad/Academics';

function App() {
  const [page, setPage] = useState(1);
  const [transitionClass, setTransitionClass] = useState('entry');

  const nextPage = () => {
    if (page < 8) {
      setTransitionClass('exit');
      setTimeout(() => {
        setPage(page + 1);
        setTransitionClass('entry');
      }, 800);
    }
  };

  const prevPage = () => {
    if (page > 1) {
      setTransitionClass('exit');
      setTimeout(() => {
        setPage(page - 1);
        setTransitionClass('entry');
      }, 800);
    }
  };

  return (
    <div className="App">
      <div className="page-container">
        {/* <GlowingMargin/> */}
         {page === 1 && <IntroPage transitionClass={transitionClass} />}
        {/*page === 2 && <PageOne transitionClass={transitionClass} />*/}
          {page === 2 && <AboutMe transitionClass={transitionClass} />} 
        {page === 3 && <AcademicQualifications transitionClass={transitionClass} />}
        {page === 4 && <SkillsFrontend transitionClass={transitionClass} />}
        {page === 5 && <SkillsBackend transitionClass={transitionClass} />}
        {page === 6 && <SkillsLanguages transitionClass={transitionClass} />}
        {page === 7 && <RecentAchievements transitionClass={transitionClass} />}
        {page === 8 && <Projects transitionClass={transitionClass} />} 
{/*        
        {page === 9 && <PageThree transitionClass={transitionClass} />} */} 
      </div>

      <div className="navigation">
        <button
          className={`nav-button left-arrow ${page === 1 ? 'inactive' : ''}`}
          onClick={prevPage}
          disabled={page === 1}
        >
          &#8592;
        </button>

        <button
          className={`nav-button right-arrow ${page === 8 ? 'inactive' : ''}`}
          onClick={nextPage}
          disabled={page === 8}
        >
          &#8594;
        </button>
      </div>
    </div>
  );
}

export default App;
