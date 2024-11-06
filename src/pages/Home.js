import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt, FaDownload } from 'react-icons/fa';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <Header />
            <div className="hero-section">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1>Mohammad Rezki</h1>
                        <h2>Étudiant Ingénieur en Informatique</h2>
                        <div className="hero-buttons">
                            <a href="/contact" className="primary-button">Me Contacter</a>
                            <a href="https://cvdesignr.com/p/6708f95e56332" className="secondary-button">
                                <FaDownload /> Télécharger CV
                            </a>
                        </div>
                    </div>
                    <div className="hero-image">
                        <img src="/images/mohammad_rezki.jpg" alt="Mohammad Rezki" />
                    </div>
                </div>
            </div>

            <div className="about-section">
                <div className="about-content">
                    <div className="about-text">
                        <h3>À Propos</h3>
                        <p>Passionné par l'informatique et l'innovation technologique, je poursuis actuellement mon cycle ingénieur à CESI. Mon parcours combine expertise technique et engagement social.</p>
                    </div>
                    <div className="key-points">
                        <div className="point">
                            <h4>Formation</h4>
                            <p>Cycle Ingénieur Informatique à CESI</p>
                        </div>
                        <div className="point">
                            <h4>Expérience</h4>
                            <p>3+ ans en tant qu'Auto-entrepreneur</p>
                        </div>
                        <div className="point">
                            <h4>Spécialités</h4>
                            <p>Support Technique, Développement Web, Formation</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="social-section">
                <div className="social-links">
                    <a href="https://github.com/mr22206" className="social-link">
                        <FaGithub /> GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/mohammad-rezki/" className="social-link">
                        <FaLinkedin /> LinkedIn
                    </a>
                    <a href="mailto:rezki.mohammad@gmail.com" className="social-link">
                        <FaEnvelope /> Email
                    </a>
                    <a href="https://cvdesignr.com/p/6708f95e56332" className="social-link">
                        <FaFileAlt /> CV
                    </a>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
