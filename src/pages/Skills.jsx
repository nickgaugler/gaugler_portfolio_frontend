import React from 'react'

const Skills = () => (
    <div className="bg-gray-800 p-8 rounded-2xl shadow-lg">
      <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 mb-6">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Programming Languages */}
        <div className="bg-gray-700 p-6 rounded-xl border border-gray-600">
          <h3 className="text-xl font-semibold mb-3">Programming Languages</h3>
          <ul className="flex flex-wrap gap-2">
            {['Python', 'R', 'SQL', 'JavaScript'].map((skill) => (
              <li key={skill} className="px-3 py-1 bg-gray-600 rounded-full text-sm font-medium">
                {skill}
              </li>
            ))}
          </ul>
        </div>
  
        {/* Data Science & ML */}
        <div className="bg-gray-700 p-6 rounded-xl border border-gray-600">
          <h3 className="text-xl font-semibold mb-3">Data Science & ML</h3>
          <ul className="flex flex-wrap gap-2">
            {[
              'Scikit-learn', 'Pandas', 'NumPy', 'TensorFlow', 'PyTorch', 'NLTK',
              'Computer Vision', 'A/B Testing', 'Causal Inference',
              'Statistical Modeling', 'Experimentation Design', 'Machine Learning', 'AI Integration'].map((skill) => (
              <li key={skill} className="px-3 py-1 bg-gray-600 rounded-full text-sm font-medium">
                {skill}
              </li>
            ))}
          </ul>
        </div>
  
        {/* Tools & Frameworks */}
        <div className="bg-gray-700 p-6 rounded-xl border border-gray-600">
          <h3 className="text-xl font-semibold mb-3">Tools & Frameworks</h3>
          <ul className="flex flex-wrap gap-2">
            {['Jupyter', 'Git', 'Docker', 'AWS', 'Tableau', 'Power BI', 'Looker',
              'dbt', 'Google Cloud Dataflow', 'Visual Basic'].map((skill) => (
              <li key={skill} className="px-3 py-1 bg-gray-600 rounded-full text-sm font-medium">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

export default Skills;