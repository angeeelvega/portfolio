import React from "react";
import { FaAngular, FaReact, FaDatabase } from "react-icons/fa";
import { SiFigma, SiSpringboot } from "react-icons/si";

const skillsData = [
  { name: "Angular", icon: <FaAngular className="text-red-600 text-4xl" /> },
  { name: "React", icon: <FaReact className="text-blue-600 text-4xl" /> },
  { name: "SQL", icon: <FaDatabase className="text-gray-600 text-4xl" /> },
  { name: "Figma", icon: <SiFigma className="text-purple-600 text-4xl" /> },
  { name: "Spring Boot", icon: <SiSpringboot className="text-green-600 text-4xl" /> },
];

export default function Skills() {
  return (
    <section id="skills" className="p-8">
      <h2 className="mb-4 text-2xl font-bold">Skills</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {skillsData.map((skill, index) => (
          <div key={index} className="flex items-center p-4 bg-base-100 shadow-xl">
            <div className="flex items-center justify-center w-16 h-16 mr-4">{skill.icon}</div>
            <span className="text-lg font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}