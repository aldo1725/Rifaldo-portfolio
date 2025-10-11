import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Activities from "./pages/Activities";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="text-gray-800">
      <Navbar />
      <main>
        <Home />
        <About />
        <Activities />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
