import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experiences from './pages/Experiences';
import Contact from './pages/Contact';
import Competences from './pages/Competences';
const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/experiences" element={<Experiences />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/competences" element={<Competences />} />
            </Routes>
        </Router>
    );
};

export default App;
