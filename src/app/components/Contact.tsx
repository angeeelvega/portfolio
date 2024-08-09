import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Section from "./Section";

export default function Contact() {
  return (
    <Section className="bg-primaryBase p-8" id='contact' >
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="mb-6 text-2xl font-bold">Contact me</h2>
        <div className="flex justify-center space-x-6">
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
    </Section>
  );
}