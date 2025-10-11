import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    year: 2024,
    title: "Ventilator Berbasis IoT",
    desc: "Sistem ventilator pintar dengan monitoring real-time menggunakan sensor dan konektivitas IoT untuk aplikasi medis.",
    tags: ["ESP32", "Sensor", "Blynk"],
    image: "https://images.unsplash.com/photo-1581091215367-59ab6e9e54d9",
  },
  {
    year: 2023,
    title: "Sistem Transmisi Sensor Berbasis LoRa",
    desc: "Implementasi komunikasi data jarak jauh menggunakan modul LoRa dengan integrasi Google Sheet untuk monitoring.",
    tags: ["LoRa", "Google Sheets", "Arduino"],
    image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7",
  },
  {
    year: 2023,
    title: "Sistem Absensi RFID Berbasis Python",
    desc: "Aplikasi absensi berbasis RFID dan database menggunakan Python serta antarmuka berbasis Tkinter.",
    tags: ["Python", "RFID", "MySQL"],
    image: "https://images.unsplash.com/photo-1581092334471-45b4c4fdf7b2",
  },
];

export default function Projects() {
  const [selected, setSelected] = useState(projects[0]);

  return (
    <section id="projects" className="bg-gray-50 py-16 md:py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold text-center mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Proyek Unggulan
        </motion.h2>
        <motion.p
          className="text-center text-gray-600 mb-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Koleksi proyek yang mendemonstrasikan keahlian saya dalam hardware engineering dan IoT.
        </motion.p>

        {/* Bagian atas: Project Unggulan */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selected.title}
            className="flex flex-col md:flex-row items-center bg-white shadow-md rounded-2xl overflow-hidden mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <motion.img
              src={selected.image}
              alt={selected.title}
              className="w-full md:w-1/2 h-64 object-cover"
              initial={{ scale: 1.05 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />
            <div className="p-6 md:w-1/2">
              <p className="text-sm text-blue-600 font-semibold mb-1">
                Proyek Unggulan • {selected.year}
              </p>
              <h3 className="text-2xl font-bold mb-3">{selected.title}</h3>
              <p className="text-gray-600 mb-4">{selected.desc}</p>
              <div className="flex flex-wrap gap-2">
                {selected.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Daftar project lainnya */}
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {projects.map((p, i) => (
            <motion.div
              key={i}
              onClick={() => setSelected(p)}
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className={`cursor-pointer p-5 bg-white border rounded-xl shadow-sm transition ${
                selected.title === p.title ? "border-blue-500 shadow-md" : ""
              }`}
            >
              <p className="text-sm text-gray-500 mb-1">{p.year}</p>
              <h4 className="font-bold mb-2">{p.title}</h4>
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                {p.desc}
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                {p.tags.map((t, j) => (
                  <span
                    key={j}
                    className="text-xs px-2 py-1 rounded-full bg-blue-50 text-blue-600 border border-blue-100"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <p className="text-blue-600 hover:underline text-sm font-medium">
                Lihat Detail →
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
