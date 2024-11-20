import React from 'react';
import './Competences.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Competence from '../components/Competence/Competence';

const Competences = () => {
    const competencesData = [
        {
            categorie: "Support & ITSM",
            description: "Expertise en gestion des services IT et support utilisateur",
            competences: [
                {
                    nom: "Support Technique",
                    niveau: 90,
                    details: "Résolution d'incidents, maintenance préventive et corrective"
                },
                {
                    nom: "ITSM",
                    niveau: 85,
                    details: "ITIL, gestion des services IT, amélioration continue"
                },
                {
                    nom: "Gestion de Parc",
                    niveau: 80,
                    details: "GLPI, inventaire, maintenance proactive"
                }
            ]
        },
        {
            categorie: "Infrastructure & Réseaux",
            description: "Configuration et maintenance des systèmes de paiement et réseaux",
            competences: [
                {
                    nom: "Monétique",
                    niveau: 90,
                    details: "TPE, systèmes de paiement, sécurité PCI-DSS"
                },
                {
                    nom: "Réseaux",
                    niveau: 75,
                    details: "TCP/IP, DHCP, DNS, VPN, routage"
                },
                {
                    nom: "Sécurité",
                    niveau: 70,
                    details: "Pare-feu, sécurisation des accès, audit"
                }
            ]
        },
        {
            categorie: "Systèmes & Cloud",
            description: "Administration et déploiement des systèmes d'exploitation",
            competences: [
                {
                    nom: "Windows/Linux",
                    niveau: 85,
                    details: "Administration système, GPO, Active Directory"
                },
                {
                    nom: "Cloud Services",
                    niveau: 75,
                    details: "Azure, AWS, solutions cloud hybrides"
                },
                {
                    nom: "Virtualisation",
                    niveau: 70,
                    details: "VMware, Docker, conteneurisation"
                }
            ]
        },
        {
            categorie: "Data & Analytics",
            description: "Gestion et analyse des données d'entreprise",
            competences: [
                {
                    nom: "Bases de données",
                    niveau: 75,
                    details: "SQL, MySQL, MongoDB, conception de BDD"
                },
                {
                    nom: "Business Intelligence",
                    niveau: 70,
                    details: "Power BI, tableaux de bord, KPIs"
                },
                {
                    nom: "Data Analysis",
                    niveau: 65,
                    details: "Excel avancé, analyse statistique, reporting"
                }
            ]
        },
        {
            categorie: "Développement Web",
            description: "Création d'applications web modernes et responsives",
            competences: [
                {
                    nom: "Front-end",
                    niveau: 80,
                    details: "React.js, HTML5/CSS3, JavaScript ES6+"
                },
                {
                    nom: "Back-end",
                    niveau: 70,
                    details: "Node.js, Express, API REST"
                },
                {
                    nom: "DevOps",
                    niveau: 65,
                    details: "Git, CI/CD, déploiement cloud"
                }
            ]
        },
        {
            categorie: "Outils Collaboratifs",
            description: "Maîtrise des solutions de productivité et collaboration",
            competences: [
                {
                    nom: "Microsoft 365",
                    niveau: 90,
                    details: "Office, SharePoint, Teams"
                },
                {
                    nom: "Gestion de Projet",
                    niveau: 80,
                    details: "Jira, Trello, méthodologies agiles"
                },
                {
                    nom: "Outils Cloud",
                    niveau: 85,
                    details: "Google Workspace, solutions collaboratives"
                }
            ]
        }
    ];

    return (
        <div className="competences">
            <Header />
            <div className="competences-content">
                <h1>Mes Compétences</h1>
                <p className="competences-intro">
                    De la gestion des infrastructures à l'analyse de données, 
                    en passant par le développement web et le support technique, 
                    mes compétences couvrent l'ensemble du spectre IT moderne.
                </p>
                <div className="competences-cards-container">
                    {competencesData.map((categorie, index) => (
                        <Competence key={index} {...categorie} />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Competences;

