import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

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
                        <li>
                            <Link to="/">Accueil</Link>
                        </li>
                        <li>
                            <Link to="/projects">Projets</Link>
                        </li>
                        <li>
                            <Link to="/experiences">Expériences</Link>
                        </li>
                        <li>
                            <Link to="/competences">Compétences</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
