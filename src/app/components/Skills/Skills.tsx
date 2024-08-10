"use client";
import React from "react";
import { FaAngular, FaReact, FaDatabase } from "react-icons/fa";
import { SiFigma, SiSpringboot } from "react-icons/si";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skillsData = [
  { name: "Angular", icon: <FaAngular className="text-4xl text-red-600" /> },
  { name: "React", icon: <FaReact className="text-4xl text-blue-600" /> },
  { name: "SQL", icon: <FaDatabase className="text-4xl text-gray-600" /> },
  { name: "Figma", icon: <SiFigma className="text-4xl text-purple-600" /> },
  {
    name: "Spring Boot",
    icon: <SiSpringboot className="text-4xl text-green-600" />,
  },
];

export default function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="p-8" ref={ref}>
      <h2 className="mb-4 text-2xl font-bold">Skills</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            className="flex items-center bg-base-100 p-4 shadow-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="mr-4 flex h-16 w-16 items-center justify-center">
              {skill.icon}
            </div>
            <span className="text-lg font-medium">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
