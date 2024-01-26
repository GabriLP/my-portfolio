import React from 'react';

const skills = [
  'HTML', 'CSS', 'JavaScript', 'React', 'Next.js',
  'Redux', 'Bootstrap', 'Tailwind CSS', 'Material-UI'
];

const Skills: React.FC = () => {
  return (
    <div className="h-screen flex-grow p-3">
      <h2 className="text-3xl font-bold mb-4">
        MY TECH STACK
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {skills.map((skill, index) => (
          <div key={index} className="bg-gray-800 p-2 text-center rounded shadow-lg">
            <h6 className="text-lg">{skill}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;