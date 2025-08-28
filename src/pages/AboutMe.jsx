import React, { useEffect, useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { IoIosRemoveCircle } from "react-icons/io";

const AboutMe = () => (
  <div className="bg-gray-800 p-8 rounded-2xl shadow-lg">
  <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 mb-6">About Me</h2>
  <p className="text-gray-300 leading-relaxed text-lg mb-6">
    Hello! I'm a highly experienced data professional with over 10 years in roles spanning analytics and engineering. I am passionate about partnering with business stakeholders to answer critical questions and drive strategy through scalable data models, executive-level dashboards, and actionable insights.
  </p>

  <div className="space-y-8">
    {/* Project & Product Development */}
    <div>
      <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 mb-4">Project & Product Development</h3>
      <ul className="list-disc list-inside space-y-2 text-gray-300 pl-4">
        <li>Constructed and maintained a Random Forest algorithm to improve churn prediction rates of consumer auto insurance policies by up to 85% accuracy.</li>
        <li>Designed and implemented production software (based on Flask framework) for a team of more than 40 analysts, decreasing the internal rate revision process timeframe from 2 weeks to 1 day.</li>
        <li>Developed a vector embedding model to categorize over 10,000 search terms, providing key business metrics to executive leadership on a monthly basis.</li>
      </ul>
    </div>

    {/* Leadership & Mentorship */}
    <div>
      <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 mb-4">Leadership & Mentorship</h3>
      <ul className="list-disc list-inside space-y-2 text-gray-300 pl-4">
        <li>Led, mentored, and managed the technical operations of a division of teams including data scientists and data engineers.</li>
        <li>Mentored junior programmers on the team through code reviews and pair programming, establishing best practices for a scalable codebase.</li>
        <li>Orchestrated the development of an NLP framework using Naive Bayes sentiment analysis.</li>
      </ul>
    </div>
    
    {/* Data Analytics & Optimization */}
    <div>
      <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 mb-4">Data Analytics & Optimization</h3>
      <ul className="list-disc list-inside space-y-2 text-gray-300 pl-4">
        <li>Conducted in-depth sales funnel analysis to identify user drop-off points, uncovering key issues that led to improved conversion.</li>
        <li>Built infrastructure for completing statistical analysis on A/B testing across more than 40,000 web pages.</li>
        <li>Improved efficiency of several processes by reducing analyst input and active computing time by more than 75%.</li>
        <li>Utilized dbt to build and maintain data models for critical accounting data tables, ensuring data integrity for financial analysis.</li>
      </ul>
    </div>
  </div>
</div>
  );
  

export default AboutMe;