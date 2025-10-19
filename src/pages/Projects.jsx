import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    year: 2022,
    title: "Kontes Robot Indonesia (KRI) 2022",
    desc: "Berpartisipasi dalam Kontes Robot Indonesia (KRI) 2022 sebagai perwakilan Universitas Negeri Padang di Divisi ABU Robocon. Acara diselenggarakan oleh Pusat Prestasi Nasional di ITS Surabaya pada 29 Juni – 4 Juli 2022. Terlibat dalam perancangan teknis, pemrograman, dan kolaborasi tim untuk bersaing di tingkat nasional.",
    bidang: "Hardware dan Mekanikal",
    tags: ["KRI 2022", "ABU Robocon", "Robotika"],
    image: "/images/kri2022.jpg",
  },
  {
    year: 2023,
    title: "Kontes Robot Indonesia (KRI) 2023",
    desc: "Mengikuti Kontes Robot Indonesia (KRI) 2023 yang diselenggarakan di Universitas Semarang pada 21–26 Juni. Mengangkat tema ABU Robocon 2023 Cambodia: 'Casting Flowers over Angkor Wat', di mana robot harus melempar bunga buatan ke menara simbolik. Berperan dalam desain mekanisme pelemparan presisi, perhitungan lintasan, serta koordinasi strategi selama pertandingan.",
    bidang: "Hardware dan Mekanikal",
    tags: ["KRI 2023", "ABU Robocon", "Robotika"],
    image: "/images/kri2023.jpg",
  },
  {
    year: 2023,
    title: "Program Kreativitas Mahasiswa - Karsa Cipta (PKM-KC)",
    desc: "Berpartisipasi dalam PKM-KC 2023 yang diselenggarakan oleh Ditjen Diktiristek. Bekerja sama dengan tim lintas disiplin dari Universitas Negeri Padang untuk mengembangkan headphone getar berbasis Android dengan teknologi Speech-to-Text, guna membantu penyandang tuli dan tunarungu dalam komunikasi real-time. Proyek ini berhasil memperoleh pendanaan pemerintah dan berfokus pada teknologi inklusif dan inovasi sosial.",
    bidang: "Hardware",
    tags: ["PKM-KC", "Inovasi", "Android", "Assistive Tech"],
    image: "/images/pkmkc2023.jpg",
  },
  {
    year: 2024,
    title: "Kontes Robot Indonesia (KRI) 2024",
    desc: "Finalis nasional Kontes Robot Indonesia (KRI) 2024 yang diselenggarakan di Universitas Muhammadiyah Surakarta pada 1–6 Juli. Tema lomba mengadaptasi ABU Robocon 2024 Vietnam: 'Harvest Day', di mana robot secara otonom memanen dan mengangkut hasil pertanian. Berperan sebagai anggota inti tim Do’a Mande dalam pengembangan algoritma navigasi otonom, sistem mekanik penanganan, dan strategi integratif.",
    bidang: "Hardware dan Mekanikal",
    tags: ["KRI 2024", "Robot Otonom", "STM32"],
    image: "/images/kri2024.jpg",
  },
  {
    year: 2024,
    title: "MSIB Batch 7 – PT Stechoq Robotika",
    desc: "Menjadi peserta Magang dan Studi Independen Bersertifikat (MSIB) Batch 7 di PT Stechoq Robotika Indonesia. Berfokus pada pembuatan proyek akhir berupa perancangan ventilator berbasis Internet of Things (IoT) untuk kebutuhan medis.",
    bidang: "Hardware",
    tags: ["MSIB", "IoT", "Ventilator"],
    image: "/images/msib2024.jpg",
  },
  {
    year: 2025,
    title: "Proyek Tugas Akhir – Stasiun Cuaca Berbasis LoRa",
    desc: "Membuat sistem stasiun cuaca berbasis LoRa RA02 menggunakan mikrokontroler STM32. Sistem ini dirancang untuk mengukur kelembapan tanah, suhu, kecepatan angin, dan curah hujan, dengan integrasi IoT untuk pemantauan jarak jauh.",
    bidang: "Hardware, Mekanikal, dan Pemrograman",
    tags: ["LoRa", "STM32", "IoT", "Weather Station"],
    image: "/images/weather2025.jpg",
  },
  {
    year: 2025,
    title: "Proyek – Cold and Heat Chamber",
    desc: "Membangun sistem uji suhu otomatis (Cold & Heat Chamber) menggunakan mikrokontroler untuk mengontrol suhu ekstrem secara presisi. Sistem ini digunakan untuk pengujian perangkat elektronik pada kondisi ekstrem.",
    bidang: "Hardware, Pemrograman",
    tags: ["IoT", "Automation", "Testing"],
    image: "/images/chamber2025.jpg",
  },
];

export default function Projects() {
  const [selected, setSelected] = useState(projects[0]);
  const topRef = useRef(null);

  const handleSelect = (p) => {
    setSelected(p);

    // 🪄 Scroll dengan offset agar konten muncul tepat di tengah
    const element = topRef.current;
    const navbarHeight = 140; // kira-kira tinggi navbar
    const yOffset =
      element.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 80;

    window.scrollTo({ top: yOffset, behavior: "smooth" });
  };

  return (
    <section id="projects" className="bg-gray-50 py-16 md:py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Judul */}
        <motion.h2
          ref={topRef}
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
          Kumpulan proyek yang menunjukkan keahlian saya dalam bidang robotika, Internet of Things (IoT), dan sistem tertanam.
        </motion.p>

        {/* Proyek utama */}
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
                Proyek Tahun {selected.year}
              </p>
              <h3 className="text-2xl font-bold mb-3">{selected.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{selected.desc}</p>
              <p className="text-sm text-gray-500 mb-3">
                <strong>Bidang:</strong> {selected.bidang}
              </p>
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

        {/* Daftar proyek */}
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {projects.map((p, i) => (
            <motion.div
              key={i}
              onClick={() => handleSelect(p)}
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className={`cursor-pointer p-5 bg-white border rounded-xl shadow-sm transition ${
                selected.title === p.title ? "border-blue-500 shadow-md" : ""
              }`}
            >
              <p className="text-sm text-gray-500 mb-1">{p.year}</p>
              <h4 className="font-bold mb-2">{p.title}</h4>
              <p className="text-gray-600 text-sm mb-3 line-clamp-3">{p.desc}</p>
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
