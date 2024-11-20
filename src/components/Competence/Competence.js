import React from 'react';
import './Competence.css';

const Competence = ({ 
    categorie,
    description,
    competences
}) => {
    return (
        <div className="competence-card">
            <div className="competence-header">
                <h2 className="competence-title">{categorie}</h2>
                <p className="competence-description">{description}</p>
            </div>
            
            <div className="skills-container">
                {competences.map((skill, index) => (
                    <div key={index} className="skill-item">
                        <h3 className="skill-name">{skill.nom}</h3>
                        <p className="skill-details">{skill.details}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Competence;
