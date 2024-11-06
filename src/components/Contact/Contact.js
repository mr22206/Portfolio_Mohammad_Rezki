import React from 'react';
import './Contact.css';

const ContactCard = ({ 
    titre,
    description,
    icon,
    lien,
    btnText
}) => {
    return (
        <div className="contact-card">
            <div className="contact-icon">
                {icon}
            </div>
            <div className="contact-content">
                <h2>{titre}</h2>
                <p>{description}</p>
                <a href={lien} target="_blank" rel="noopener noreferrer" className="contact-button">
                    {btnText}
                </a>
            </div>
        </div>
    );
};

export default ContactCard;
