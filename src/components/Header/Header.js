import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="left">
                <nav>
                    <ul>
                        <li>Portfolio de Mohammad Rezki</li>
                    </ul>
                </nav>
            </div>
            <div>
                <nav>
                    <ul>
                        <li><a href="/">Accueil</a></li>    
                        <li><a href="/projects">Projet</a></li>
                        <li><a href="/experiences">Expérience</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/competences">Compétences</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
