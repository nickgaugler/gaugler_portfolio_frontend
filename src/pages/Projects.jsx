import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Github } from 'lucide-react';

// 1. The Problem:
// Clearly define the real-world business problem or question you aimed to solve. 
// 2. Your Approach:
// Summarize your technical methods and the steps you took to address the problem. 
// 3. Results & Outcomes:
// Share key findings, insights, and the impact of your solution. 
// 4. Next Steps:

const Projects = () => {

  const projects = [
    {
      id: 'r-project',
      title: 'R: Eruption Waiting Times Dashboard',
      subtitle: 'A Shiny app that visualizes waiting times between eruptions for old faithful geyser.',
      tech: ['R', 'Shiny'],
      image: '../public/r_project_screenshot.svg'
    },
    {
      id: 'python-project-1',
      title: 'Python-Game: ',
      subtitle: 'A brief description of your project. Mention the key technologies used (e.g., Python, TensorFlow, Flask) and the problem it solved.',
      tech: ['Python', 'pygame', 'Data Analytics'],
      image: 'https://placehold.co/400x200/A855F7/FFFFFF?text=Project%201'
    },
    {
      id: 'project-2',
      title: 'Python-Machine Learning:',
      subtitle: 'Another project description highlighting your ML or data science skills. Describe the methodology and the results.',
      tech: ['Python', 'SQL', 'Data Visualization'],
      image: 'https://placehold.co/400x200/EC4899/FFFFFF?text=Project%202'
    },
  ];

  return (
    <div className="bg-gray-800 p-8 rounded-2xl shadow-lg">
      <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 mb-6">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link
            key={project.id}
            to={`/projects/${project.id}`}
            className="group block relative rounded-2xl shadow-xl overflow-hidden transition-all duration-300 transform hover:scale-105"
            style={{
              backgroundImage: `url(${project.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: '200px',
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gray-900 bg-opacity-95 transition-all duration-300 group-hover:bg-opacity-80">
              <div className="absolute inset-0 flex flex-col justify-center items-center p-4 text-center">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-sm text-gray-400">{project.subtitle}</p>
                <div className="flex flex-wrap gap-2 mt-4 justify-center">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="px-2 py-1 bg-indigo-500 text-white text-xs font-semibold rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;