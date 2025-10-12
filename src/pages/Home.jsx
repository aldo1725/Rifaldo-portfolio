import React from "react";
import { motion } from "framer-motion";
import avatar from "../assets/avatar.svg";

export default function Home() {
  return (
    <section id="home" className="bg-gray-50 scroll-mt-[140px]">
      <div className="max-w-6xl mx-auto px-6 py-24 md:py-28 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Bagian kiri - teks */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Hi, I’m <span className="text-brand">Rifaldo</span> 👋
          </h1>

          <p className="text-lg text-gray-600 mb-6">
            Mahasiswa Teknik Elektro yang fokus pada <b>Internet of Things</b>, <b>Robotika</b>, dan{" "}
            <b>Otomasi</b>. Saat ini mengerjakan proyek <i>Weather Station IoT</i> Camber.
          </p>

          {/* Tombol aksi */}
          <div className="flex flex-wrap gap-3">
            {/* Tombol Lihat Projects */}
            <a
              href="#projects"
              className="btn btn-primary transition-transform hover:scale-105"
            >
              🚀 Lihat Projects
            </a>

            {/* Tombol Lihat CV */}
            <a
              href="/CV/CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn border border-gray-400 text-gray-700 hover:bg-blue-50 hover:border-blue-400 transition-transform hover:scale-105"
            >
              📄 Lihat CV
            </a>

            {/* Tombol Kontak */}
            <a
              href="#contact"
              className="btn border border-gray-400 text-gray-700 hover:bg-blue-50 hover:border-blue-400 transition-transform hover:scale-105"
            >
              ✉️ Kontak
            </a>
          </div>
        </motion.div>

        {/* Bagian kanan - gambar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center"
        >
          <img
            src={avatar}
            alt="Avatar"
            className="w-64 md:w-80 drop-shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
