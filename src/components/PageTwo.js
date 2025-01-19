import React from 'react';
import './PageTwo.css';

function PageTwo({ transitionClass }) {
  return <div className={`page page-two ${transitionClass}`}>
    <h1>Page Two - Skills</h1>
    <p>This is some dummy text for the Skills section of the CV.</p>
    </div>;
}



export default PageTwo;
