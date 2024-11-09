import React from 'react';
import './Card_of_project.css';

const Card = ({titleOfProject, subtitleOfProject, iconOfProjectSvg, technologies}) => {
  return (
      <div className="e-card playing">
        <div className="image" />
        <div className="wave" />
        <div className="wave" />
        <div className="wave" />
        <div className="infotop">
          {iconOfProjectSvg}
          <br />      
          {titleOfProject}
          <br />
          <div className="name">{subtitleOfProject}</div>
          {technologies && (
            <div className="technologies">
              {technologies.map((tech, index) => (
                <img 
                  key={index} 
                  src={tech.icon} 
                  alt={tech.name} 
                  className="tech-icon" 
                  title={tech.name}
                />
              ))}
            </div>
          )}
        </div>
      </div>
  );
}

export default Card;
