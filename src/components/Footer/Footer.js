import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h4>Mes Réalisations</h4>
                    <Link to="https://mr22206.github.io/Computer-troubleshooting-site/">
                        <p>Site de Dépannage</p>
                    </Link>
                    <Link to="https://github.com/mr22206">
                        <p>Projets GitHub</p>
                    </Link>
                    <Link to="https://cvdesignr.com/p/6708f95e56332">
                        <p>Mon CV</p>
                    </Link>
                </div>
                <div className="footer-section">
                    <h4>Mes Services</h4>
                    <Link to="/experiences">
                        <p>Support Informatique</p>
                    </Link>
                    <Link to="/experiences">
                        <p>Formation Seniors</p>
                    </Link>
                    <Link to="/experiences">
                        <p>Dépannage à Distance</p>
                    </Link>
                </div>
                <div className="footer-section">
                    <h4>Navigation</h4>
                    <Link to="/">
                        <p>Accueil</p>
                    </Link>
                    <Link to="/experiences">
                        <p>Expériences</p>
                    </Link>
                    <Link to="/competences">
                        <p>Compétences</p>
                    </Link>
                    <Link to="/contact">
                        <p>Contact</p>
                    </Link>
                </div>
                <div className="footer-section">
                    <h4>Newsletter</h4>
                    <div className="newsletter-container">
                        <input type="email" placeholder="Votre email" className="email-input" />
                        <button className="subscribe-button">S'abonner</button>
                    </div>
                    <div className="contact-info">
                        <p>📱 06 61 38 83 74</p>
                        <p>📧 rezki.mohammad.222@gmail.com</p>
                    </div>
                    <div className="social-icons">
                        <Link to="https://www.linkedin.com/in/mohammad-rezki" target="_blank" rel="noopener noreferrer">
                            <img src="/images/linkedin.svg" alt="LinkedIn" />
                        </Link>
                        <Link to="https://github.com/mr22206" target="_blank" rel="noopener noreferrer">
                            <img src="/images/github.svg" alt="GitHub" />
                        </Link>
                        <Link to="https://cvdesignr.com/p/6708f95e56332" target="_blank" rel="noopener noreferrer">
                            <img src="/images/cv.svg" alt="CV" />
                        </Link>
                        <Link to="https://mr22206.github.io/Computer-troubleshooting-site/" target="_blank" rel="noopener noreferrer">
                            <img src="/images/website.svg" alt="Site Web" />
                        </Link>
                        <Link to="https://wa.me/33661388374" target="_blank" rel="noopener noreferrer">
                            <img src="/images/discord.svg" alt="WhatsApp" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
