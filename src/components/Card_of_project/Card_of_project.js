import React from 'react';
import './Card_of_project.css';

const Card = ({titleOfProject, subtitleOfProject, iconOfProjectSvg}) => {
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
        </div>
      </div>
  );
}


export default Card;
