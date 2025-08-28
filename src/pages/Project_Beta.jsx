import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import HomepageHero from "../components/HpHero.jsx"
import AboutMe from './AboutMe';
import Skills from './Skills';
import Projects from './Projects';
import realtimeImage from "../assets/images/icon-realtime.jpg"
import collaborationImage from "../assets/images/icon-collaboration.jpg"
import analyticsImage from "../assets/images/icon-analytics.jpg"
import { XCircle } from 'lucide-react';

const Home = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activePlacard, setActivePlacard] = useState(null);
  
    // Placard data with content components
    const placards = [
      { id: 'about', title: 'About Me', image: 'https://placehold.co/400x200/4F46E5/FFFFFF?text=About%20Me', component: <AboutMe /> },
      { id: 'skills', title: 'Skills', image: 'https://placehold.co/400x200/A855F7/FFFFFF?text=Skills', component: <Skills /> },
      { id: 'projects', title: 'Projects', image: 'https://placehold.co/400x200/EC4899/FFFFFF?text=Projects', component: <Projects /> },
    ];
  
    // Effect to handle hero banner collapse on scroll
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
      <div className="flex flex-col min-h-screen">
        {/* Hero Banner that collapses on scroll */}
        <div
          className={`fixed top-0 left-0 w-full z-50 bg-gray-900 bg-opacity-95 backdrop-blur-md shadow-lg transition-all duration-300 ease-in-out
            ${isScrolled ? 'h-16' : 'h-64'}
          `}
        >
          <div className={`container mx-auto px-6 py-4 flex flex-col justify-center items-center h-full transition-all duration-300 ease-in-out
            ${isScrolled ? 'md:flex-row md:justify-start md:space-x-4' : 'flex-col'}
          `}>
            <div className="flex items-center">
              <h1 className={`font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 transition-all duration-300 ease-in-out
                ${isScrolled ? 'text-2xl' : 'text-5xl'}
              `}>
                Nick Gaugler
              </h1>
              <span className={`text-gray-400 ml-4 font-light transition-all duration-300 ease-in-out
                ${isScrolled ? 'text-lg' : 'text-3xl'}
              `}>
                Data Scientist
              </span>
            </div>
            <p className={`text-center text-gray-300 mt-2 transition-all duration-300 ease-in-out
              ${isScrolled ? 'hidden' : 'block'}
            `}>
              A highly experienced data professional with over 10 years in analytics and engineering.
            </p>
          </div>
        </div>
  
        {/* Main Content with Placards */}
        <div className="flex-1 mt-72 mb-12 flex flex-col items-center justify-center space-y-8 px-6 md:px-12">
          {/* Render placards with dynamic sizing and content */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 w-full max-w-7xl justify-center items-center">
            {placards.map((item) => (
              <div
                key={item.id}
                onClick={() => setActivePlacard(item.id === activePlacard ? null : item.id)}
                className={`relative cursor-pointer rounded-2xl shadow-xl transition-all duration-500 ease-in-out overflow-hidden
                  ${activePlacard === item.id ? 'w-full h-auto md:w-3/4' : 'w-full h-auto md:w-1/4'}
                  ${activePlacard !== null && activePlacard !== item.id ? 'opacity-50' : ''}
                `}
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  minHeight: '200px',
                }}
              >
                {/* Content overlay */}
                <div
                  className={`absolute inset-0 bg-gray-900 transition-all duration-500 ease-in-out
                    ${activePlacard === item.id ? 'bg-opacity-80' : 'bg-opacity-95 hover:bg-opacity-80'}
                  `}
                >
                  {/* Placard Title */}
                  <div className={`absolute inset-0 flex items-center justify-center p-4 transition-all duration-500 ease-in-out
                    ${activePlacard === item.id ? 'opacity-0' : 'opacity-100'}
                  `}>
                    <h3 className="text-xl font-bold text-center text-white">{item.title}</h3>
                  </div>
  
                  {/* Expanded content */}
                  <div className={`p-8 h-full transition-all duration-500 ease-in-out
                    ${activePlacard === item.id ? 'opacity-100' : 'opacity-0 scale-95'}
                  `}>
                    <div className="flex justify-end">
                      <button onClick={(e) => { e.stopPropagation(); setActivePlacard(null); }} className="text-white text-xl">
                        <XCircle size={32} />
                      </button>
                    </div>
                    {item.component}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

export default Home