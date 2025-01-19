import React from 'react';
import './RecentAchievement.css';

function RecentAchievements({ transitionClass }) {
  const certificates = [
    {
      title: "3rd Position in Painting Competition",
      organizer: "IIM Rohtak",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7257992884186992640/",
    },
    {
      title: "Runners-Up in TRUST TRAP Competition",
      organizer: "Christ University, NCR Delhi",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7257981063442931712/",
    },
    {
      title: "Participation in Fundamental Analysis",
      organizer: "IIT Guwahati",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7229134586977353729/",
    },
    {
      title: "Participation in Employee Lifecycle Quiz",
      organizer: "IIM Rohtak",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7257991373847482369/",
    },
  ];

  return (
    <div className={`recent-achievements-page ${transitionClass}`}>
      <h2>Recent Achievements & Participations</h2><br/><br/>
      <ul className="achievements-list">
        {certificates.map((cert, index) => (
          <li
            key={index}
            className="achievement-item"
            onClick={() => window.open(cert.link, "_blank")}
          >
            <h3>{cert.title}</h3>
            <p>{cert.organizer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecentAchievements;
