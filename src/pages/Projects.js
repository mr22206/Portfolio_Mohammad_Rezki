import React from 'react';
import './Projects.css';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import quizIcon from '../assets/img/svg/quiz.svg'; 
import giecIcon from '../assets/img/svg/giec.svg';
import plumbingIcon from '../assets/img/svg/plumbing.svg';
import Project from '../components/Project/Project';
import troubleshootingIcon from '../assets/img/svg/troubleshooting.svg';
import engineeringIcon from '../assets/img/svg/engineering.svg';
import cryptoIcon from '../assets/img/svg/crypto.svg';
import educationIcon from '../assets/img/svg/education.svg';
import convertIcon from '../assets/img/svg/convert.svg';
import serverIcon from '../assets/img/svg/server.svg';



const Projects = () => {
    return (
        <div className="projects">
            <Header />
            <div className="projects-content">
                <h1>Mes Projets</h1>
                <div className="project-card">
                    <Project
                        titleOfProject={"PCS Plumbing Website"}
                        subtitleOfProject={"Site Web Professionnel"}
                        iconOfProjectSvg={<img className="icon" src={plumbingIcon} alt="icon" />}
                        descriptionOfProject={"Site web professionnel pour une entreprise de plomberie à Carros, France, fournissant des informations sur les services de plomberie, chauffage et climatisation. Construit avec HTML, CSS, et JavaScript."}
                        linkWebSite={"https://mr22206.github.io/pcs-plumbing/"}
                        linkGitHub={"https://github.com/mr22206/pcs-plumbing"}
                        linkDoc={"https://github.com/mr22206/pcs-plumbing/blob/main/README.md"}
                        linkMail={"mailto:techinfotuto@gmail.com"}
                    />
                </div>
                <div className="project-card">
                    <Project
                        titleOfProject={"Dépannageinfo06"}
                        subtitleOfProject={"Support Technique IT"}
                        iconOfProjectSvg={<img className="icon" src={troubleshootingIcon} alt="icon" />}
                        descriptionOfProject={"Site web offrant des services de support technique, dépannage informatique et formations personnalisées. Intègre la maintenance proactive et le support à distance. Développé en HTML, CSS, et JavaScript."}
                        linkWebSite={"https://mr22206.github.io/depannageinfo06/"}
                        linkGitHub={"https://github.com/mr22206/depannageinfo06"}
                        linkDoc={"https://github.com/mr22206/depannageinfo06/blob/main/README.md"}
                        linkMail={"mailto:techinfotuto@gmail.com"}
                    />
                </div>
                <div className="project-card">
                    <Project
                        titleOfProject={"DATA-X"}
                        subtitleOfProject={"Tech Info Tuto"}
                        iconOfProjectSvg={<img className="icon" src={giecIcon} alt="icon" />}
                        descriptionOfProject={"Application pour gérer les données sur la qualité de l'air pour le Ministère de l'Écologie. Gères capteurs et publie des rapports météorologiques."}
                        linkWebSite={"https://mr22206.github.io/Air-Quality-Data-Management-Tool/"}
                        linkGitHub={"https://github.com/mr22206/Air-Quality-Data-Management-Tool.git"}
                        linkDoc={"https://github.com/mr22206/Air-Quality-Data-Management-Tool/blob/main/README.md"}
                        linkMail={"mailto:techinfotuto@gmail.com"}
                    />
                </div>
                <div className="project-card">
                    <Project
                        titleOfProject={"Quiz TDMK"}
                        subtitleOfProject={"Tech Info Tuto"}
                        iconOfProjectSvg={<img className="icon" src={quizIcon} alt="icon" />}
                        descriptionOfProject={"Le projet Quiz TDMK est un quiz personnalisé conçu en plusieurs étapes avec des contributions spécifiques de chaque membre du groupe. Ce projet inclut des composants en HTML, CSS, JavaScript et Python, et fait appel à des technologies comme WebAssembly pour une meilleure optimisation. Le quiz est accessible en ligne via un lien public."}
                        linkWebSite={"https://mr22206.github.io/Quiz-TDMK-Site-Web-du-Projet/"}
                        linkGitHub={"https://github.com/mr22206/Quiz-TDMK-Site-Web-du-Projet"}
                        linkDoc={"https://github.com/mr22206/Quiz-TDMK-Site-Web-du-Projet/blob/main/README.md"}
                        linkMail={"mailto:techinfotuto@gmail.com"}
                    />
                </div>
                <div className="project-card">
                    <Project
                        titleOfProject={"Projet SI"}
                        subtitleOfProject={"Sciences de l'Ingénieur"}
                        iconOfProjectSvg={<img className="icon" src={engineeringIcon} alt="icon" />}
                        descriptionOfProject={"Projet éducatif pour expliquer des notions clés en sciences de l'ingénieur. Contient des ressources pédagogiques sur la modélisation 3D, la création de sites web, et la programmation."}
                        linkWebSite={"https://mr22206.github.io/projet-si/"}
                        linkGitHub={"https://github.com/mr22206/projet-si"}
                        linkDoc={"https://github.com/mr22206/projet-si/blob/main/README.md"}
                        linkMail={"mailto:techinfotuto@gmail.com"}
                    />
                </div>
                <div className="project-card">
                    <Project
                        titleOfProject={"CryptoMentor"}
                        subtitleOfProject={"Bot Discord Crypto"}
                        iconOfProjectSvg={<img className="icon" src={cryptoIcon} alt="icon" />}
                        descriptionOfProject={"Bot Discord pour obtenir des informations sur les cryptomonnaies. Affiche les avatars et la variation de prix des cryptomonnaies en temps réel."}
                        linkWebSite={"https://mr22206.github.io/crypto-mentor/"}
                        linkGitHub={"https://github.com/mr22206/crypto-mentor"}
                        linkDoc={"https://github.com/mr22206/crypto-mentor/blob/main/README.md"}
                        linkMail={"mailto:techinfotuto@gmail.com"}
                    />
                </div>
                <div className="project-card">
                    <Project
                        titleOfProject={"LES EUCALYPTUS COURS"}
                        subtitleOfProject={"Bot Discord Éducatif"}
                        iconOfProjectSvg={<img className="icon" src={educationIcon} alt="icon" />}
                        descriptionOfProject={"Bot pour gérer les ressources scolaires et organiser les élèves sur un serveur Discord. Gère les rôles et publie automatiquement des ressources pédagogiques."}
                        linkWebSite={"https://mr22206.github.io/eucalyptus-cours-bot/"}
                        linkGitHub={"https://github.com/mr22206/eucalyptus-cours-bot"}
                        linkDoc={"https://github.com/mr22206/eucalyptus-cours-bot/blob/main/README.md"}
                        linkMail={"mailto:techinfotuto@gmail.com"}
                    />
                </div>
                <div className="project-card">
                    <Project
                        titleOfProject={"Convert PDF to Image"}
                        subtitleOfProject={"Outil de Conversion"}
                        iconOfProjectSvg={<img className="icon" src={convertIcon} alt="icon" />}
                        descriptionOfProject={"Outil Python pour convertir des fichiers PDF en images. Utilise la bibliothèque Pillow pour le traitement d'images."}
                        linkWebSite={"https://mr22206.github.io/convert-pdf-to-image/"}
                        linkGitHub={"https://github.com/mr22206/convert-pdf-to-image"}
                        linkDoc={"https://github.com/mr22206/convert-pdf-to-image/blob/main/README.md"}
                        linkMail={"mailto:techinfotuto@gmail.com"}
                    />
                </div>
                <div className="project-card">
                    <Project
                        titleOfProject={"MyServeur"}
                        subtitleOfProject={"Interface Web Raspberry Pi"}
                        iconOfProjectSvg={<img className="icon" src={serverIcon} alt="icon" />}
                        descriptionOfProject={"Serveur personnel hébergé sur Raspberry Pi avec interface web pour le partage de fichiers. Intégré avec Discord pour des interactions en temps réel."}
                        linkWebSite={"https://mr22206.github.io/my-serveur/"}
                        linkGitHub={"https://github.com/mr22206/my-serveur"}
                        linkDoc={"https://github.com/mr22206/my-serveur/blob/main/README.md"}
                        linkMail={"mailto:techinfotuto@gmail.com"}
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Projects;
