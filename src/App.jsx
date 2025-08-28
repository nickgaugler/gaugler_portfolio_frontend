import React, { useEffect, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import {
    User,
    Lightbulb,
    Briefcase,
    Mail
  } from 'lucide-react';

import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Sidebar from './components/SideNavigation';
// import FooterMenu from './components/Footer';

import './index.css';

// const { enableAutoPageviews } = Plausible({
//     domain: 'livecodeinterviews.io',
//     apiHost: 'https://www.livecodeinterviews.io',
//     trackLocalhost: true
// });

// enableAutoPageviews();

// console.log
// What are you doing here?! you sneaky developer...
// ThreejsJourney.js:131 Do you want to learn how this portfolio has been made?
// ThreejsJourney.js:132 Checkout Three.js Journey 👉 https://threejs-journey.com?c=p2
// ThreejsJourney.js:133 — Bruno

function App() {
    const [activeSection, setActiveSection] = useState('about');

    const navItems = [
        { id: 'about', label: 'About Me', path: '/about', icon: <User size={20} /> },
        { id: 'skills', label: 'Skills', path: '/skills', icon: <Lightbulb size={20} /> },
        { id: 'projects', label: 'Projects', path: '/projects', icon: <Briefcase size={20} /> },
        { id: 'contact', label: 'Contact', path: '/contact', icon: <Mail size={20} /> },
      ];

    return (
        <div className="flex min-h-screen bg-gray-900 text-gray-200 font-sans antialiased">
            
            <Sidebar navItems={navItems} activeSection={activeSection} setActiveSection={setActiveSection} />

            <div className="flex-1 p-8 md:p-12 overflow-y-auto">

            <Routes>
                <Route index path="/" element={<Home />} />
                <Route path="/about" element={<AboutMe />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                {/* <Route path="code">
                    <Route path="demo" element={<Demo />} />
                    <Route path="join" element={<Join />} />
                    <Route path="interview" element={<Interview />} />
                    <Route path="zoom-test" element={<ZoomSampleTestPage />} />
                </Route> */}
            </Routes>

            </div>

            {/* <FooterMenu /> */}

        </div>
    );
}

export default App;
