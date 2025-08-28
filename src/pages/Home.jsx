import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import HomepageHero from "../components/HpHero.jsx"
import AboutMe from './AboutMe';
import Skills from './Skills';
import Projects from './Projects';
import realtimeImage from "../assets/images/icon-realtime.jpg"
import collaborationImage from "../assets/images/icon-collaboration.jpg"
import analyticsImage from "../assets/images/icon-analytics.jpg"
import D3Treemap from "../components/Treemap.jsx";
import {
    RadialBarChart,
    RadialBar,
    BarChart,
    Bar,
    // Treemap,
    ResponsiveContainer,
    Tooltip,
    Legend,
    Cell,
    XAxis,
    YAxis,
  } from 'recharts';

const Home = () => {
    // Data for the radial gauge charts, showing experience broken into 2.5-year parts.
    const gaugeData = [
      { name: 'Analytics', value: 2.5, fill: '#8884d8' },
      { name: 'Data Science', value: 5, fill: '#83a6ed' },
      { name: 'Leadership', value: 2.5, fill: '#8dd1e1' },
    ];
  
    // Data for the bar chart
    const barChartData = [
      { name: 'Python', Projects: 12 },
      { name: 'SQL', Projects: 8 },
      { name: 'R', Projects: 4 },
      { name: 'Flask', Projects: 2 },
    ];
  
    // Data for the treemap, representing skills by category
    const treemapData = [
      {
        name: 'Programming',
        children: [
          { name: 'Python', size: 12 },
          { name: 'SQL', size: 8 },
          { name: 'R', size: 5 },
          { name: 'JavaScript', size: 3 },
        ],
      },
      {
        name: 'Data Science',
        children: [
          { name: 'ML/AI', size: 10 },
          { name: 'Analytics', size: 8 },
          { name: 'Modeling', size: 6 },
        ],
      },
      {
        name: 'Tools',
        children: [
          { name: 'Tableau', size: 5 },
          { name: 'Looker', size: 4 },
          { name: 'dbt', size: 3 },
          { name: 'AWS', size: 2 },
        ],
      },
    ];
  
    return (
      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <div className="h-64 flex flex-col items-center justify-center text-center bg-gray-900 bg-opacity-95 backdrop-blur-md shadow-lg rounded-2xl p-8">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 mb-2">
            Nick Gaugler
          </h1>
          <h2 className="text-3xl text-gray-400 mb-4">
            Lead Data Scientist
          </h2>
          <p className="text-gray-300 max-w-2xl">
            A highly experienced data professional with over 10 years in roles spanning analytics and engineering.
          </p>
        </div>
  
        {/* Charts Section */}
        <section className="py-12 px-6 bg-gray-800 rounded-2xl shadow-lg mt-8">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 text-center mb-8">
            Data & Analytics Skills
          </h2>
          
          {/* Radial Gauge Charts */}
          <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8 space-y-8 md:space-y-0 mb-12">
            {gaugeData.map((data, index) => (
              <div key={index} className="flex flex-col items-center">
                <ResponsiveContainer width={200} height={200}>
                  <RadialBarChart
                    cx="50%"
                    cy="50%"
                    innerRadius="50%"
                    outerRadius="100%"
                    barSize={20}
                    data={[data]}
                  >
                    <RadialBar
                      dataKey="value"
                      fill={data.fill}
                      label={{
                        position: 'insideStart',
                        fill: '#fff',
                        formatter: () => `${data.value} Yrs`,
                      }}
                    />
                    <Tooltip />
                  </RadialBarChart>
                </ResponsiveContainer>
                <h3 className="text-xl font-medium text-gray-200 mt-2">{data.name}</h3>
              </div>
            ))}
          </div>
  
          {/* Bar Chart & Treemap */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Bar Chart */}
            <div className="bg-gray-700 p-6 rounded-xl shadow-md">
                
                <Link
                    to='/skills'
                    className={`text-sm text-indigo-400 hover:underline`}
                >
                    View all Projects
                </Link>
                <h3 className="text-xl font-semibold text-gray-200 mb-4 text-center">Projects by Technology</h3>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={barChartData} layout="vertical">
                  <XAxis type="number" stroke="#ccc" />
                  <YAxis type="category" dataKey="name" stroke="#ccc" />
                  <Tooltip />
                  <Bar dataKey="Projects" fill="#8884d8" radius={[10, 10, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
              
            </div>
            
            {/* Treemap */}
            <div className="bg-gray-700 p-6 rounded-xl shadow-md">
                <Link
                    to='/skills'
                    className={`text-sm text-indigo-400 hover:underline`}
                >
                    View all Skills
                </Link>
                <h3 className="text-xl font-semibold text-gray-200 mb-4 text-center">Skills Breakdown</h3>
                <D3Treemap />
            </div>
          </div>
        </section>
      </div>
    );
  };

export default Home