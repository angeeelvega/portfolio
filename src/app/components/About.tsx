"use client";
import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Section from "./Section";

export default function About() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 5000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative h-screen">
      {showIntro ? (
        <div className="flex h-full items-center justify-center">
          <div className="intro-text max-w-5xl text-center">
            Hi, I'm Ángel Vega
          </div>
        </div>
      ) : (
        <Section
          id="about"
          className="animate-fadeIn flex flex-col items-center justify-between py-6 md:flex-row md:py-52"
        >
          <div className="animate-fadeInUp p-4 text-center md:w-1/2 md:p-8 md:text-left">
            <h3 className="text-3xl font-bold md:text-4xl">Ángel Vega</h3>
            <p className="text-lg md:text-xl">Software Developer</p>
            <br />
            <p className="my-4 text-lg md:text-xl">
              I craft modern, responsive, and visually engaging web applications
              with a focus on accessibility
            </p>

            <div className="text-left">
              <div className="mx-auto my-5 max-w-7xl text-center md:text-left">
                <div className="flex justify-center space-x-6 md:justify-start">
                  <a
                    href="https://github.com/angeeelvega"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="text-3xl text-white hover:text-indigo-500" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/angelvega1/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className="text-3xl text-white hover:text-indigo-500" />
                  </a>
                  <a
                    href="https://www.instagram.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className="text-3xl text-white hover:text-indigo-500" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex animate-fadeInUp items-center justify-center p-4 md:w-1/2 md:p-8">
            <img
              src="https://avatars.githubusercontent.com/u/72453759?v=4"
              alt="Ángel Vega"
              className="h-auto max-w-full rounded-full"
            />
          </div>
        </Section>
      )}
    </div>
  );
}
