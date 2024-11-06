import React from 'react';
import './Competences.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Competence from '../components/Competence/Competence';

const Competences = () => {
    const competencesData = [
        {
            categorie: "ITSM et Support Technique",
            description: "Gestion des services IT et support utilisateur",
            competences: [
                {
                    nom: "ITSM",
                    niveau: 75,
                    details: "Gestion des incidents, des problèmes et des changements"
                },
                {
                    nom: "Dépannage Matériel",
                    niveau: 85,
                    details: "Diagnostic et réparation hardware"
                },
                {
                    nom: "Maintenance Préventive",
                    niveau: 80,
                    details: "Planification et exécution de maintenance proactive"
                }
            ]
        },
        {
            categorie: "Réseaux et Monétique",
            description: "Configuration et maintenance des systèmes de paiement",
            competences: [
                {
                    nom: "TPE/Monétique",
                    niveau: 90,
                    details: "Installation et maintenance des terminaux de paiement"
                },
                {
                    nom: "Configuration Réseaux",
                    niveau: 70,
                    details: "TCP/IP, DHCP, DNS, routage basique"
                },
                {
                    nom: "Sécurité Réseaux",
                    niveau: 65,
                    details: "Pare-feu, VPN, sécurisation des accès"
                }
            ]
        },
        {
            categorie: "Systèmes et Sécurité",
            description: "Administration et sécurisation des systèmes d'exploitation",
            competences: [
                {
                    nom: "Windows",
                    niveau: 85,
                    details: "Administration, GPO, Active Directory"
                },
                {
                    nom: "Linux",
                    niveau: 60,
                    details: "Administration basique, shell scripting"
                },
                {
                    nom: "Android",
                    niveau: 75,
                    details: "Configuration et sécurisation des appareils mobiles"
                }
            ]
        },
        {
            categorie: "Développement Web",
            description: "Création d'interfaces web modernes",
            competences: [
                {
                    nom: "HTML/CSS",
                    niveau: 80,
                    details: "Responsive design, Flexbox, Grid"
                },
                {
                    nom: "JavaScript",
                    niveau: 70,
                    details: "ES6+, manipulation DOM, événements"
                },
                {
                    nom: "React.js",
                    niveau: 65,
                    details: "Composants, hooks, state management"
                }
            ]
        },
        {
            categorie: "Technologies Domotiques",
            description: "Installation et configuration de solutions domotiques",
            competences: [
                {
                    nom: "Smart Home",
                    niveau: 75,
                    details: "Configuration d'appareils connectés"
                },
                {
                    nom: "Automatisation",
                    niveau: 70,
                    details: "Scénarios et routines domotiques"
                },
                {
                    nom: "Intégration IoT",
                    niveau: 65,
                    details: "Connexion et gestion des objets connectés"
                }
            ]
        },
        {
            categorie: "Logiciels Bureautiques",
            description: "Maîtrise des outils de productivité",
            competences: [
                {
                    nom: "Microsoft Office",
                    niveau: 90,
                    details: "Word, Excel, PowerPoint, Outlook"
                },
                {
                    nom: "Gestion des accès",
                    niveau: 80,
                    details: "Droits utilisateurs, partage de ressources"
                },
                {
                    nom: "Outils collaboratifs",
                    niveau: 85,
                    details: "Teams, SharePoint, OneDrive"
                }
            ]
        }
    ];

    return (
        <div className="competences">
            <Header />
            <div className="competences-content">
                <h1>Mes Compétences</h1>
                {competencesData.map((categorie, index) => (
                    <Competence key={index} {...categorie} />
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default Competences;

