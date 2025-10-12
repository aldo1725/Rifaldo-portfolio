import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Settings, Code, PenTool, Wifi, Brain } from "lucide-react";

export default function Skills() {
  const [activeTab, setActiveTab] = useState("hard");

  const hardSkills = [
    {
      icon: <PenTool className="w-6 h-6 text-pink-500" />,
      title: "PCB Design",
      skills: ["KiCad", "Eagle"],
    },
    {
      icon: <Settings className="w-6 h-6 text-green-600" />,
      title: "PLC & HMI",
      skills: ["CX-One", "Siemens TIA Portal"],
    },
    {
      icon: <Code className="w-6 h-6 text-blue-600" />,
      title: "Programming",
      skills: ["Arduino IDE", "Python"],
    },
    {
      icon: <Cpu className="w-6 h-6 text-indigo-500" />,
      title: "Design",
      skills: ["SolidWorks", "AutoCAD"],
    },
    {
      icon: <Brain className="w-6 h-6 text-yellow-500" />,
      title: "Office Tools",
      skills: ["Microsoft Office"],
    },
  ];

  const softSkills = [
    {
      icon: <Brain className="w-6 h-6 text-blue-500" />,
      title: "Leadership",
      desc: "Mampu memimpin tim dan mengambil keputusan strategis dalam proyek pengembangan teknologi.",
    },
    {
      icon: <Settings className="w-6 h-6 text-green-500" />,
      title: "Team Management",
      desc: "Mengelola dan mengarahkan tim dengan efektif untuk mencapai target bersama.",
    },
    {
      icon: <Wifi className="w-6 h-6 text-purple-500" />,
      title: "Organizational Development",
      desc: "Berperan aktif dalam pengembangan sistem organisasi dan koordinasi antar departemen.",
    },
    {
      icon: <PenTool className="w-6 h-6 text-pink-500" />,
      title: "Fleksibilitas",
      desc: "Mampu beradaptasi dengan cepat terhadap perubahan dan tantangan baru.",
    },
    {
      icon: <Cpu className="w-6 h-6 text-indigo-500" />,
      title: "Project Management",
      desc: "Merencanakan, melaksanakan, dan mengevaluasi proyek dengan pendekatan sistematis.",
    },
    {
      icon: <Code className="w-6 h-6 text-orange-500" />,
      title: "Problem Solving",
      desc: "Menyelesaikan permasalahan teknis dan manajerial dengan analisis dan solusi efektif.",
    },
  ];

  return (
    <section id="Skills" className="py-20 bg-gray-50 scroll-mt-[140px]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Judul */}
        <motion.h2
          className="text-3xl font-bold text-center mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Keahlian & Kompetensi
        </motion.h2>

        <motion.p
          className="text-center text-gray-600 mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Kombinasi keahlian teknis dan soft skills yang mendukung pengembangan solusi hardware dan IoT.
        </motion.p>

        {/* Tombol Switch */}
        <div className="flex justify-center mb-10">
          <div className="flex bg-white border rounded-full shadow-sm overflow-hidden">
            <button
              onClick={() => setActiveTab("hard")}
              className={`px-6 py-2 text-sm font-medium ${
                activeTab === "hard"
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 hover:text-blue-600"
              } transition-all`}
            >
              Technical Skills
            </button>
            <button
              onClick={() => setActiveTab("soft")}
              className={`px-6 py-2 text-sm font-medium ${
                activeTab === "soft"
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 hover:text-blue-600"
              } transition-all`}
            >
              Soft Skills
            </button>
          </div>
        </div>

        {/* Isi Skills */}
        <AnimatePresence mode="wait">
          {activeTab === "hard" ? (
            <motion.div
              key="hard"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
              transition={{ duration: 0.6 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {hardSkills.map((s, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white p-6 rounded-xl shadow-md border border-gray-100 transition"
                >
                  <div className="flex items-center gap-3 mb-2">
                    {s.icon}
                    <h4 className="font-semibold text-lg">{s.title}</h4>
                  </div>
                  <ul className="text-gray-600 text-sm list-disc ml-6">
                    {s.skills.map((skill, j) => (
                      <li key={j}>{skill}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="soft"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.6 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {softSkills.map((s, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white p-6 rounded-xl shadow-md border border-gray-100 transition"
                >
                  <div className="flex items-center gap-3 mb-3">
                    {s.icon}
                    <h4 className="font-semibold text-lg">{s.title}</h4>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
