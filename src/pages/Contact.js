import React from 'react';
import './Contact.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ContactCard from '../components/Contact/Contact';
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from 'react-icons/fa';

const Contact = () => {
    const contactMethods = [
        {
            titre: "Email",
            description: "N'hésitez pas à me contacter par email pour toute question ou proposition",
            icon: <FaEnvelope />,
            lien: "mailto:rezki.mohammad@gmail.com",
            btnText: "Envoyer un email"
        },
        {
            titre: "LinkedIn",
            description: "Connectons-nous sur LinkedIn pour échanger professionnellement",
            icon: <FaLinkedin />,
            lien: "https://www.linkedin.com/in/mohammad-rezki/",
            btnText: "Me suivre sur LinkedIn"
        },
        {
            titre: "GitHub",
            description: "Découvrez mes projets et contributions sur GitHub",
            icon: <FaGithub />,
            lien: "https://github.com/mr22206",
            btnText: "Voir mon GitHub"
        },
        {
            titre: "Téléphone",
            description: "Disponible pour un échange téléphonique sur rendez-vous",
            icon: <FaPhone />,
            lien: "tel:+33661388374",
            btnText: "Appeler"
        }
    ];

    return (
        <div className="contact">
            <Header />
            <div className="contact-content">
                <h1>Contactez-moi</h1>
                <div className="contact-cards-container">
                    {contactMethods.map((method, index) => (
                        <ContactCard 
                            key={index}
                            {...method}
                        />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;
