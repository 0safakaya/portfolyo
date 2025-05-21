import React from "react";
import "./Skills.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaCuttlefish,
  FaReact,
  FaRobot,
  FaCalculator,
  FaTools,
  FaSpinner
} from "react-icons/fa";
import { SiQt, SiAutodesk } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "C#", icon: <FaCuttlefish /> },
  { name: "Python", icon: <FaPython /> },
  { name: "Qt Designer", icon: <SiQt /> },
  { name: "Autodesk Fusion", icon: <SiAutodesk /> },
  { name: "Arduino", icon: <FaRobot /> },
  { name: "Matematik", icon: <FaCalculator /> },
  { name: "Yükleniyor...", icon: <FaSpinner className="spin" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">{skill.icon}</div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
      <div className="vertical-label-skills">YETENEKLERİM</div>
    </section>
  );
};

export default Skills;
