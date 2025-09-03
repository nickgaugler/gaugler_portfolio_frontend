import React from 'react';
import { Github } from 'lucide-react';

const RProject = () => (
    <div className="bg-gray-800 p-8 rounded-2xl shadow-lg">
      <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 mb-6">
        R Project: Old Faithful Geyser Dashboard
      </h2>
      <div className="mb-6 flex justify-between items-center">
        <p className="text-gray-300 text-lg">
          This project explores waiting times between eruptions created using the R Shiny framework.
        </p>
        <a
          href="https://github.com/nickgaugler/r_personal_project"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-400 hover:underline flex items-center space-x-2"
        >
          <Github size={20} />
          <span>GitHub Repository</span>
        </a>
      </div>
      <div className="aspect-w-16 aspect-h-9 w-full h-auto" style={{ height: '70vh' }}>
        <iframe
          src="https://gaugler.shinyapps.io/myshinyapp/"
          className="w-full h-full rounded-lg shadow-md border-0"
          title="R Shiny Project"
        ></iframe>
      </div>
    </div>
  );

  export default RProject;