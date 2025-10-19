import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[#0f172a] text-gray-300 py-10 px-6 mt-20 border-t border-gray-700 scroll-mt-[80px]"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Kolom 1: Profil */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">
            Rifaldo Saputra
          </h3>
          <p className="text-sm text-gray-400 mb-3">
            <span className="font-medium text-blue-400">
              Hardware & Embedded System Engineer
            </span>
          </p>
          <p className="text-sm text-gray-400 leading-relaxed mb-4">
            Lulusan D4 Teknik Elektro Industri Universitas Negeri Padang dengan
            minat tinggi pada pengembangan hardware, otomasi, dan IoT.
            Berpengalaman dalam pengembangan sistem berbasis Arduino, ESP32, dan STM32.
          </p>
          
        </div>

        {/* Kolom 2: Navigasi Cepat */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Navigasi Cepat</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#About" className="hover:text-blue-400 transition-colors">
                Tentang
              </a>
            </li>
            <li>
              <a href="#Experience" className="hover:text-blue-400 transition-colors">
                Pengalaman
              </a>
            </li>
            <li>
              <a href="#Projects" className="hover:text-blue-400 transition-colors">
                Proyek
              </a>
            </li>
            <li>
              <a href="#Skills" className="hover:text-blue-400 transition-colors">
                Keahlian
              </a>
            </li>
            <li>
              <a href="#Achievements" className="hover:text-blue-400 transition-colors">
                Penghargaan
              </a>
            </li>
          </ul>
        </div>

        {/* Kolom 3: Kontak */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Kontak</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:rifaldo.s1704@gmail.com"
                className="text-blue-400 hover:underline"
              >
                rifaldo.s1704@gmail.com
              </a>
            </li>
            <li>
              <strong>LinkedIn:</strong>{" "}
              <a
                href="https://linkedin.com/in/rifaldosaputra"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline break-words"
              >
                linkedin.com/in/rifaldosaputra
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Garis bawah & hak cipta */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-5"
      >
        © {new Date().getFullYear()}{" "}
        <span className="text-gray-300 font-medium">Rifaldo Saputra.</span>{" "}

      </motion.div>
    </footer>
  );
}
