"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-primaryBase w-full border-b p-4 text-white">
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex items-center justify-between">
          <h1>Portafolio</h1>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white">
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              )}
            </button>
          </div>
          <div className="hidden md:flex md:space-x-4">
            <Link href="#about">About</Link>
            <Link href="#skills">Skills</Link>
            <Link href="#projects">Projects</Link>
          </div>
        </div>
        {isOpen && (
          <div className="mt-4 flex items-center flex-col space-y-4 md:hidden">
            <Link href="#about">About</Link>
            <Link href="#skills">Skills</Link>
            <Link href="#projects">Projects</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
