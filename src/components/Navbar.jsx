import React from "react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <nav className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <a href="#home" className="font-extrabold text-xl text-brand">Rifaldo</a>
        <ul className="hidden md:flex items-center gap-8 font-medium">
          <li><a href="#home" className="hover:text-brand">Home</a></li>
          <li><a href="#About" className="hover:text-brand">About</a></li>
          <li><a href="#Activities" className="hover:text-brand">Activities</a></li>
          <li><a href="#projects" className="hover:text-brand">Projects</a></li>
          <li><a href="#contact" className="hover:text-brand">Contact</a></li>
        </ul>
        <a href="#contact" className="btn btn-primary md:inline-block">Hire Me</a>
      </nav>
    </header>
  );
}
