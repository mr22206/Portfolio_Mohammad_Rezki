import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h4>Mes Réalisations</h4>
                    <a href="https://mr22206.github.io/Computer-troubleshooting-site/">
                        <p>Site de Dépannage</p>
                    </a>
                    <a href="https://github.com/mr22206">
                        <p>Projets GitHub</p>
                    </a>
                    <a href="https://cvdesignr.com/p/6708f95e56332">
                        <p>Mon CV</p>
                    </a>
                </div>
                <div className="footer-section">
                    <h4>Mes Services</h4>
                    <a href="/experiences">
                        <p>Support Informatique</p>
                    </a>
                    <a href="/experiences">
                        <p>Formation Seniors</p>
                    </a>
                    <a href="/experiences">
                        <p>Dépannage à Distance</p>
                    </a>
                </div>
                <div className="footer-section">
                    <h4>Navigation</h4>
                    <a href="/">
                        <p>Accueil</p>
                    </a>
                    <a href="/experiences">
                        <p>Expériences</p>
                    </a>
                    <a href="/competences">
                        <p>Compétences</p>
                    </a>
                    <a href="/contact">
                        <p>Contact</p>
                    </a>
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
                        <a href="https://www.linkedin.com/in/mohammad-rezki" target="_blank" rel="noopener noreferrer">
                            <img src="/images/linkedin.svg" alt="LinkedIn" />
                        </a>
                        <a href="https://github.com/mr22206" target="_blank" rel="noopener noreferrer">
                            <img src="/images/github.svg" alt="GitHub" />
                        </a>
                        <a href="https://cvdesignr.com/p/6708f95e56332" target="_blank" rel="noopener noreferrer">
                            <img src="/images/cv.svg" alt="CV" />
                        </a>
                        <a href="https://mr22206.github.io/Computer-troubleshooting-site/" target="_blank" rel="noopener noreferrer">
                            <img src="/images/website.svg" alt="Site Web" />
                        </a>
                        <a href="https://wa.me/33661388374" target="_blank" rel="noopener noreferrer">
                            <img src="/images/discord.svg" alt="WhatsApp" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
