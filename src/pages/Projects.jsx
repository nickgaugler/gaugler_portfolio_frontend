import React from 'react'

// 1. The Problem:
// Clearly define the real-world business problem or question you aimed to solve. 
// 2. Your Approach:
// Summarize your technical methods and the steps you took to address the problem. 
// 3. Results & Outcomes:
// Share key findings, insights, and the impact of your solution. 
// 4. Next Steps:


const Projects = () => (
    <div className="bg-gray-800 p-8 rounded-2xl shadow-lg">
      <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Placeholder Project Card 1 */}
        <div className="bg-gray-700 p-6 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300 cursor-pointer">
          <h3 className="text-2xl font-bold mb-2">Project Title 1</h3>
          <p className="text-gray-300 mb-4">
            A brief description of your project. Mention the key technologies used (e.g., Python, TensorFlow, Flask) and the problem it solved.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-2 py-1 bg-indigo-500 text-white text-xs font-semibold rounded-full">Python</span>
            <span className="px-2 py-1 bg-purple-500 text-white text-xs font-semibold rounded-full">TensorFlow</span>
            <span className="px-2 py-1 bg-pink-500 text-white text-xs font-semibold rounded-full">Data Analytics</span>
          </div>
        </div>
        
        {/* Placeholder Project Card 2 */}
        <div className="bg-gray-700 p-6 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300 cursor-pointer">
          <h3 className="text-2xl font-bold mb-2">Project Title 2</h3>
          <p className="text-gray-300 mb-4">
            Another project description highlighting your ML or data science skills. Describe the methodology and the results.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-2 py-1 bg-indigo-500 text-white text-xs font-semibold rounded-full">Python</span>
            <span className="px-2 py-1 bg-pink-500 text-white text-xs font-semibold rounded-full">SQL</span>
            <span className="px-2 py-1 bg-yellow-500 text-white text-xs font-semibold rounded-full">Data Visualization</span>
          </div>
        </div>
      </div>
    </div>
  );

export default Projects;