import React from 'react';
import './Experience.css';

const Experience = ({ 
    titre,
    entreprise,
    lieu,
    periode,
    description,
    realisations,
    competences,
    logoUrl
}) => {
    return (
        <div className="experience-card">
            <div className="experience-header">
                <div className="experience-logo">
                    <img src={logoUrl} alt={entreprise} />
                </div>
                <div className="experience-title">
                    <h2>{titre}</h2>
                    <div className="experience-subtitle">
                        <h3>{entreprise}</h3>
                        <div className="experience-metadata">
                            <span className="location">📍 {lieu}</span>
                            <span className="periode">🗓 {periode}</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="experience-body">
                <div className="description-section">
                    <p className="description">{description}</p>
                </div>
                
                <div className="realisations-section">
                    <h4>Réalisations clés</h4>
                    <div className="realisations-grid">
                        {realisations.map((realisation, index) => (
                            <div key={index} className="realisation-item">
                                <div className="realisation-number">{index + 1}</div>
                                <p>{realisation}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="competences-section">
                    {competences.map((competence, index) => (
                        <span key={index} className="competence-tag">
                            {competence}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;
