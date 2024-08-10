import React from "react";
import About from "@components/About/About";
import Projects from "@components/Projects/Projects";
import Skills from "@components/Skills/Skills";

export default function HomePage() {
  return (
    <main className="bg-primaryBase flex min-h-screen flex-col items-center text-white">
      <div className="grid w-full max-w-7xl gap-16 p-4">
        <About />
        <Skills />
        <Projects />
      </div>
    </main>
  );
}