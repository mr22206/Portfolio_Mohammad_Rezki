import React from 'react';
import './Contact.css';
import { Link } from 'react-router-dom';

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
                <Link to={lien} target="_blank" rel="noopener noreferrer" className="contact-button">
                    {btnText}
                </Link>
            </div>
        </div>
    );
};

export default ContactCard;
