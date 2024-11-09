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
import weatherIcon from '../assets/img/svg/weather.svg';
import reactIcon from '../assets/img/tech/react.svg';
import nodejsIcon from '../assets/img/tech/nodejs.svg';
import arduinoIcon from '../assets/img/tech/arduino.svg';
import htmlIcon from '../assets/img/tech/html.svg';
import cssIcon from '../assets/img/tech/css.svg';
import javascriptIcon from '../assets/img/tech/javascript.svg';
import pythonIcon from '../assets/img/tech/python.svg';



const Projects = () => {
    return (
        <div className="projects">
            <Header />
            <div className="projects-content">
                <h1>Mes Projets</h1>
                <div className="projects-cards-container">
                    <div className="project-card">
                        <Project
                            titleOfProject={"Station Météo Embarquée"}
                            subtitleOfProject={"Application IoT & Monitoring"}
                            iconOfProjectSvg={<img className="icon" src={weatherIcon} alt="icon" />}
                            descriptionOfProject={"La Station Météo Embarquée est une solution innovante qui combine matériel Arduino et logiciel de gestion pour offrir un système complet de surveillance météorologique. Cette application permet aux utilisateurs de déployer facilement des stations météo autonomes et de gérer efficacement la collecte et l'analyse des données environnementales."}
                            linkWebSite={"https://mr22206.github.io/3W_Electron_App/"}
                            linkGitHub={"https://github.com/mr22206/3W_Electron_App"}
                            linkDoc={"https://github.com/mr22206/3W_Electron_App/blob/main/README.md"}
                            linkMail={"mailto:techinfotuto@gmail.com"}
                            technologies={[
                                { name: "React", icon: reactIcon },
                                { name: "Node.js", icon: nodejsIcon },
                                { name: "Arduino", icon: arduinoIcon }
                            ]}
                        />
                    </div>
                    <div className="project-card">
                        <Project
                            titleOfProject={"DATA-X"}
                            subtitleOfProject={"Application Environnementale"}
                            iconOfProjectSvg={<img className="icon" src={giecIcon} alt="icon" />}
                            descriptionOfProject={"Application pour gérer les données sur la qualité de l'air pour le Ministère de l'Écologie. Gères capteurs et publie des rapports météorologiques."}
                            linkWebSite={"https://mr22206.github.io/Air-Quality-Data-Management-Tool/"}
                            linkGitHub={"https://github.com/mr22206/Air-Quality-Data-Management-Tool.git"}
                            linkDoc={"https://github.com/mr22206/Air-Quality-Data-Management-Tool/blob/main/README.md"}
                            linkMail={"mailto:techinfotuto@gmail.com"}
                            technologies={[
                                { name: "React", icon: reactIcon },
                                { name: "Node.js", icon: nodejsIcon },
                                { name: "Arduino", icon: arduinoIcon }
                            ]}
                        />
                    </div>
                    <div className="project-card">
                        <Project
                            titleOfProject={"Dépannageinfo06"}
                            subtitleOfProject={"Plateforme Support IT"}
                            iconOfProjectSvg={<img className="icon" src={troubleshootingIcon} alt="icon" />}
                            descriptionOfProject={"Site web offrant des services de support technique, dépannage informatique et formations personnalisées. Intègre la maintenance proactive et le support à distance. Développé en HTML, CSS, et JavaScript."}
                            linkWebSite={"https://mr22206.github.io/Computer-troubleshooting-site/"}
                            linkGitHub={"https://github.com/mr22206/Computer-troubleshooting-site"}
                            linkDoc={"https://github.com/mr22206/Computer-troubleshooting-site/blob/main/README.md"}
                            linkMail={"mailto:techinfotuto@gmail.com"}
                            technologies={[
                                { name: "HTML", icon: htmlIcon },
                                { name: "CSS", icon: cssIcon },
                                { name: "JavaScript", icon: javascriptIcon }
                            ]}
                        />
                    </div>
                    <div className="project-card">
                        <Project
                            titleOfProject={"Quiz TDMK"}
                            subtitleOfProject={"Application Web Interactive"}
                            iconOfProjectSvg={<img className="icon" src={quizIcon} alt="icon" />}
                            descriptionOfProject={"Le projet Quiz TDMK est un quiz personnalisé conçu en plusieurs étapes avec des contributions spécifiques de chaque membre du groupe. Ce projet inclut des composants en HTML, CSS, JavaScript et Python, et fait appel à des technologies comme WebAssembly pour une meilleure optimisation. Le quiz est accessible en ligne via un lien public."}
                            linkWebSite={"https://mr22206.github.io/Quiz-TDMK-Site-Web-du-Projet/"}
                            linkGitHub={"https://github.com/mr22206/Quiz-TDMK-Site-Web-du-Projet"}
                            linkDoc={"https://github.com/mr22206/Quiz-TDMK-Site-Web-du-Projet/blob/main/README.md"}
                            linkMail={"mailto:techinfotuto@gmail.com"}
                            technologies={[
                                { name: "HTML", icon: htmlIcon },
                                { name: "CSS", icon: cssIcon },
                                { name: "JavaScript", icon: javascriptIcon },
                                { name: "Python", icon: pythonIcon }
                            ]}
                        />
                    </div>
                    <div className="project-card">
                        <Project
                            titleOfProject={"Projet SI"}
                            subtitleOfProject={"Projet Pédagogique"}
                            iconOfProjectSvg={<img className="icon" src={engineeringIcon} alt="icon" />}
                            descriptionOfProject={"Projet éducatif pour expliquer des notions clés en sciences de l'ingénieur. Contient des ressources pédagogiques sur la modélisation 3D, la création de sites web, et la programmation."}
                            linkWebSite={"https://mr22206.github.io/SI-Engineering-Sciences-Project-Presentation/"}
                            linkGitHub={"https://github.com/mr22206/SI-Engineering-Sciences-Project-Presentation"}
                            linkDoc={"https://github.com/mr22206/SI-Engineering-Sciences-Project-Presentation/blob/main/README.md"}
                            linkMail={"mailto:techinfotuto@gmail.com"}
                            technologies={[
                                { name: "React", icon: reactIcon },
                                { name: "Node.js", icon: nodejsIcon },
                                { name: "Arduino", icon: arduinoIcon }
                            ]}
                        />
                    </div>
                    <div className="project-card">
                        <Project
                            titleOfProject={"PCS Plumbing Website"}
                            subtitleOfProject={"Site Vitrine Professionnel"}
                            iconOfProjectSvg={<img className="icon" src={plumbingIcon} alt="icon" />}
                            descriptionOfProject={"Site web professionnel pour une entreprise de plomberie à Carros, France, fournissant des informations sur les services de plomberie, chauffage et climatisation. Construit avec HTML, CSS, et JavaScript."}
                            linkWebSite={"https://mr22206.github.io/Plumbing-website/"}
                            linkGitHub={"https://github.com/mr22206/Plumbing-website"}
                            linkDoc={"https://github.com/mr22206/Plumbing-website/blob/main/README.md"}
                            linkMail={"mailto:techinfotuto@gmail.com"}
                            technologies={[
                                { name: "HTML", icon: htmlIcon },
                                { name: "CSS", icon: cssIcon },
                                { name: "JavaScript", icon: javascriptIcon }
                            ]}
                        />
                    </div>
                    <div className="project-card">
                        <Project
                            titleOfProject={"CryptoMentor"}
                            subtitleOfProject={"Bot Discord Finance"}
                            iconOfProjectSvg={<img className="icon" src={cryptoIcon} alt="icon" />}
                            descriptionOfProject={"Bot Discord pour obtenir des informations sur les cryptomonnaies. Affiche les avatars et la variation de prix des cryptomonnaies en temps réel."}
                            linkWebSite={"https://github.com/mr22206/CryptoMentor/"}
                            linkGitHub={"https://github.com/mr22206/CryptoMentor"}
                            linkDoc={"https://github.com/mr22206/CryptoMentor/blob/main/README.md"}
                            linkMail={"mailto:techinfotuto@gmail.com"}
                            technologies={[
                                { name: "React", icon: reactIcon },
                                { name: "Node.js", icon: nodejsIcon },
                                { name: "Arduino", icon: arduinoIcon }
                            ]}
                        />
                    </div>
                    <div className="project-card">
                        <Project
                            titleOfProject={"LES EUCALYPTUS COURS"}
                            subtitleOfProject={"Bot Discord Pédagogique"}
                            iconOfProjectSvg={<img className="icon" src={educationIcon} alt="icon" />}
                            descriptionOfProject={"Bot pour gérer les ressources scolaires et organiser les élèves sur un serveur Discord. Gère les rôles et publie automatiquement des ressources pédagogiques."}
                            linkWebSite={"https://github.com/mr22206/Eucalyptus-Helper"}
                            linkGitHub={"https://github.com/mr22206/Eucalyptus-Helper"}
                            linkDoc={"https://github.com/mr22206/Eucalyptus-Helper/blob/main/README.md"}
                            linkMail={"mailto:techinfotuto@gmail.com"}
                            technologies={[
                                { name: "React", icon: reactIcon },
                                { name: "Node.js", icon: nodejsIcon },
                                { name: "Arduino", icon: arduinoIcon }
                            ]}
                        />
                    </div>
                    <div className="project-card">
                        <Project
                            titleOfProject={"Convert_pdf_to_image"}
                            subtitleOfProject={"Utilitaire de Conversion"}
                            iconOfProjectSvg={<img className="icon" src={convertIcon} alt="icon" />}
                            descriptionOfProject={"Logiciel simple mais puissant qui permet de convertir des fichiers PDF en images sans effort. Il vous permet d'éviter l'usage d'applications tierces ou de services en ligne. Le programme est disponible sous forme de fichier exécutable pour Windows."}
                            linkWebSite={"https://github.com/mr22206/convert_pdf_to_image_public"}
                            linkGitHub={"https://github.com/mr22206/convert_pdf_to_image_public"}
                            linkDoc={"https://github.com/mr22206/convert_pdf_to_image_public/blob/main/README.md"}
                            linkMail={"mailto:techinfotuto@gmail.com"}
                            technologies={[
                                { name: "React", icon: reactIcon },
                                { name: "Node.js", icon: nodejsIcon },
                                { name: "Arduino", icon: arduinoIcon }
                            ]}
                        />
                    </div>
                    <div className="project-card">
                        <Project
                            titleOfProject={"MyServeur"}
                            subtitleOfProject={"Serveur Web Personnel"}
                            iconOfProjectSvg={<img className="icon" src={serverIcon} alt="icon" />}
                            descriptionOfProject={"Serveur personnel hébergé sur Raspberry Pi avec interface web pour le partage de fichiers. Intégré avec Discord pour des interactions en temps réel."}
                            linkWebSite={"https://github.com/mr22206/Personal-Server"}
                            linkGitHub={"https://github.com/mr22206/Personal-Server"}
                            linkDoc={"https://github.com/mr22206/Personal-Server/blob/main/README.md"}
                            linkMail={"mailto:techinfotuto@gmail.com"}
                            technologies={[
                                { name: "React", icon: reactIcon },
                                { name: "Node.js", icon: nodejsIcon },
                                { name: "Arduino", icon: arduinoIcon }
                            ]}
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Projects;
