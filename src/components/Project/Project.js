import React from 'react';
import './Project.css';
import Card from '../Card_of_project/Card_of_project';
import Ugly from '../Ugly/Ugly';


const Project = ({titleOfProject, subtitleOfProject, iconOfProjectSvg, descriptionOfProject, linkWebSite, linkGitHub, linkDoc, linkMail, technologies}) => {
  return (
    <div className="oneProject">
        <div className="project-details">
            <div className="project-img">
                <Card 
                titleOfProject={titleOfProject} 
                subtitleOfProject={subtitleOfProject} 
                iconOfProjectSvg={iconOfProjectSvg}
                technologies={technologies}
                />
            </div>
            <div className="project-description">
                <div className="project-description-text">
                    <p className="project-description-text-p" >
                        {descriptionOfProject}
                    </p>
                </div>
                <div className="project-ugly"> 
                    <Ugly 
                    linkWebSite={linkWebSite}
                    linkGitHub={linkGitHub}
                    linkDoc={linkDoc}
                    linkMail={linkMail}
                    />
                </div>
            </div>
        </div>
    </div>
  );
}


export default Project;
