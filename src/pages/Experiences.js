import React from 'react';
import './Experiences.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Experience from '../components/Experience/Experience';
import avemLogo from '../assets/images/avem_logo.png';
import clickAndMoiLogo from '../assets/images/click_and_moi_logo.png';
import techInfoTutoLogo from '../assets/images/tech_info_tuto_logo.png';
import experiencesDiversesLogo from '../assets/images/experiences-diverses-logo.png';

const Experiences = () => {
    const experiences = [
        {
            titre: "Technicien Support et Monétique",
            entreprise: "AVEM",
            lieu: "Villeneuve-Loubet (06270)",
            periode: "Juillet 2024 - Présent",
            description: "Responsable de l'installation, maintenance et support des systèmes monétiques et informatiques pour une clientèle professionnelle variée.",
            realisations: [
                "Installation et configuration de plus de 50 terminaux de paiement et systèmes monétiques",
                "Réduction des temps d'intervention de 30% grâce à l'optimisation des processus de maintenance",
                "Formation de plus de 100 clients sur l'utilisation des équipements",
                "Mise en place d'un système de maintenance préventive réduisant les incidents de 20%"
            ],
            competences: ["Support Technique", "Monétique", "Formation", "Maintenance", "Dépannage", "Service Client"],
            logoUrl: avemLogo
            
        },
        {
            titre: "Formateur Numérique Seniors",
            entreprise: "Click& Moi",
            lieu: "Alpes-Maritimes",
            periode: "Novembre 2023 - Présent",
            description: "Animation d'ateliers numériques pour seniors, visant à réduire la fracture numérique et à favoriser l'autonomie digitale.",
            realisations: [
                "Formation de 107 seniors avec un taux de satisfaction de 90%",
                "Création de 15 supports pédagogiques adaptés",
                "Amélioration moyenne de 25% des compétences numériques",
                "Augmentation de 30% du taux de participation aux ateliers"
            ],
            competences: ["Formation", "Pédagogie", "Outils Numériques", "Communication", "Patience", "Adaptabilité"],
            logoUrl: clickAndMoiLogo
        },
        {
            titre: "Technicien Informatique",
            entreprise: "Tech Info Tuto",
            lieu: "Nice",
            periode: "Septembre 2021 - Présent",
            description: "Entrepreneur indépendant spécialisé dans le support informatique, la maintenance et la formation pour particuliers et professionnels.",
            realisations: [
                "Gestion d'un portefeuille de plus de 127 clients fidèles",
                "Formation de 235 utilisateurs aux outils numériques",
                "Réduction de 40% des temps d'intervention",
                "Taux de satisfaction client de 98%",
                "Amélioration de la sécurité des données pour 95% des clients"
            ],
            competences: ["Dépannage", "Maintenance", "Réseaux", "Sécurité", "Formation", "Gestion de Projet"],
            logoUrl: techInfoTutoLogo
        },
        {
            titre: "Expériences Diverses",
            entreprise: "Plusieurs entreprises",
            lieu: "Nice",
            periode: "Juin 2021 - Décembre 2023",
            description: "Diverses expériences professionnelles ayant permis de développer polyvalence et adaptabilité.",
            realisations: [
                "Manutentionnaire : Gestion efficace des stocks et respect des délais de livraison",
                "Livreur : Optimisation des itinéraires et satisfaction client élevée",
                "Cuisinier : Gestion du stress et travail d'équipe en environnement exigeant",
                "Aide Plombier : Assistance technique et apprentissage rapide des compétences"
            ],
            competences: ["Polyvalence", "Adaptabilité", "Travail d'équipe", "Gestion du stress", "Organisation", "Service client"],
            logoUrl: experiencesDiversesLogo
        }
    ];

    return (
        <div className="experiences">
            <Header />
            <div className="experiences-content">
                <h1>Mes Expériences Professionnelles</h1>
                <div className="experiences-container">
                    {experiences.map((experience, index) => (
                        <Experience 
                            key={index}
                            {...experience}
                        />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Experiences;
