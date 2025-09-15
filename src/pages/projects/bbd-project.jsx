import React from 'react';

const BbdWebsiteProject = () => (
    <div className="bg-gray-800 p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 mb-6">
            Blue Dolphins Club Website: Volunteer work for local youth club
        </h2>
        <div className="mb-6 flex justify-between items-center">
        <p className="text-gray-300 text-lg">
            Single-page web app used for recruiting/marketing, managing team roster and automating select coach-responsibilities
        </p>
        </div>
        <div className="aspect-w-16 aspect-h-9 w-full h-auto" style={{ height: '70vh' }}>
            <div>
                <iframe
                    src="https://www.bluedolphins.club/"
                    title="Blue Dolphins Website"
                    width="1280"
                    height="720"
                    style={{ border: 'none' }}
                ></iframe>
            </div>
        </div>
    </div>
);

export default BbdWebsiteProject;