import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="header">
            <div className="left">
                <nav>
                    <ul>
                        <li className="desktop-title">Portfolio de Mohammad Rezki</li>
                        <li className="mobile-title">MR</li>
                    </ul>
                </nav>
            </div>
            
            <button className="hamburger" onClick={toggleMenu}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </button>

            <div className={`right ${isOpen ? 'active' : ''}`}>
                <nav>
                    <ul>
                        <li><Link to="/" onClick={toggleMenu}>Accueil</Link></li>
                        <li><Link to="/projects" onClick={toggleMenu}>Projets</Link></li>
                        <li><Link to="/experiences" onClick={toggleMenu}>Expériences</Link></li>
                        <li><Link to="/competences" onClick={toggleMenu}>Compétences</Link></li>
                        <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
