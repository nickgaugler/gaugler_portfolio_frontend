import React from 'react';
import { Github } from 'lucide-react';
import AiImageToCalEmbed from '../../components/AiCalendarFromImage';

// function App() {
const AiAgentProject = () => (
    <div className="bg-gray-800 p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 mb-6">
        AI Agent Project: Create calendar file from image
        </h2>
        <div className="mb-6 flex justify-between items-center">
        <p className="text-gray-300 text-lg">
            This project explores implementing a simple AI agent that will extract event details from an uploaded image and generate a downloadable calendar file.
        </p>
            {/* <a
                href="https://github.com/nickgaugler/gaugler_portfolio_backend"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:underline flex items-center space-x-2"
            >
                <Github size={20} />
                <span>GitHub Repository</span>
            </a> */}
        </div>
        <div className="aspect-w-16 aspect-h-9 w-full h-auto" style={{ height: '70vh' }}>
            <AiImageToCalEmbed />
        </div>
    </div>
);

export default AiAgentProject;