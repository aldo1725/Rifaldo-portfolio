import React from "react";
import { motion } from "framer-motion";
import avatar from "../assets/avatar.svg";

export default function Home() {
  return (
    <section id="home" className="bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-24 md:py-28 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Hi, I’m <span className="text-brand">Rifaldo</span> 👋
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Mahasiswa Teknik yang fokus pada <b>Internet of Things</b>, <b>Artificial Intelligence</b>, dan{" "}
            <b>Web Development</b>. Saat ini mengerjakan proyek <i>Weather Station IoT</i> untuk pertanian cerdas.
          </p>
          <div className="flex gap-3">
            <a href="#projects" className="btn btn-primary">Lihat Projects</a>
            <a href="#contact" className="btn border">Kontak</a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center"
        >
          <img src={avatar} alt="Avatar" className="w-64 md:w-80" />
        </motion.div>
      </div>
    </section>
  );
}
