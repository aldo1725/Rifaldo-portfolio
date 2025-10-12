import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const experiences = [
  {
    year: "2022 - 2025",
    title: "Anggota Teknis",
    desc: "Berperan aktif sebagai anggota teknis di Unit Kegiatan Robotika Universitas Negeri Padang. Fokus utama pada bidang hardware dengan melakukan berbagai riset dan pengembangan sistem elektronika. Terlibat dalam pembuatan serta perancangan rangkaian menggunakan KiCad dan Arduino untuk mendukung kebutuhan robotika dan proyek IoT kampus.",
    bidang: "Riset Hardware & Perancangan Elektronika",
  },
  {
    year: "2023 - 2024",
    title: "Wakil Ketua Bidang Manajemen (Periode 1)",
    desc: "Menjabat sebagai Wakil Ketua Bidang Manajemen selama periode 2023/2024 di Unit Kegiatan Robotika UNP. Bertanggung jawab mengelola sistem manajemen organisasi serta mengarahkan dan melakukan tindak lanjut (follow up) kepada dua kepala departemen, yaitu PSDA dan PUBDOKMAS. Berperan dalam memastikan kinerja organisasi berjalan efektif serta komunikasi lintas departemen tetap terjaga.",
    bidang: "Manajemen Organisasi & Pengembangan SDM",
  },
  {
    year: "2024 - 2025",
    title: "Wakil Ketua Bidang Manajemen (Periode 2)",
    desc: "Melanjutkan peran sebagai Wakil Ketua Bidang Manajemen pada periode kedua dengan struktur organisasi yang lebih besar, mencakup lima departemen: PSDA, Kestrasi, Infokom, Humas, dan IT. Bertanggung jawab dalam mengoordinasi seluruh departemen agar berkolaborasi dalam perencanaan kegiatan, dokumentasi, publikasi, serta pengembangan sistem informasi internal UKRO UNP.",
    bidang: "Kepemimpinan & Koordinasi Multi-Departemen",
  },
  {
    year: "2025 - Sekarang",
    title: "Dewan Pertimbangan Pengurus",
    desc: "Bertugas sebagai anggota Dewan Pertimbangan Pengurus di UKRO UNP dengan tanggung jawab memantau dan memberikan masukan strategis terhadap kebijakan organisasi. Berperan dalam menilai arah kebijakan, mendukung pengurus aktif, serta menjaga keberlanjutan visi dan misi organisasi melalui pengawasan yang objektif dan konstruktif.",
    bidang: "Konsultatif & Pengawasan Organisasi",
  },
];

export default function Experience() {
  const [selected, setSelected] = useState(experiences[0]);

  return (
    <section
      id="Experience"
      className="py-16 md:py-24 bg-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Judul */}
        <motion.h2
          className="text-3xl font-bold text-center mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Pengalaman Organisasi
        </motion.h2>

        <motion.p
          className="text-center text-gray-600 mb-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Riwayat pengalaman dan kontribusi saya dalam kegiatan organisasi dan
          kepemimpinan di Unit Kegiatan Robotika Universitas Negeri Padang.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Daftar Pengalaman */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                onClick={() => setSelected(exp)}
                whileHover={{ x: 5, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 180, damping: 15 }}
                className={`cursor-pointer p-5 border rounded-xl shadow-sm transition ${
                  selected.title === exp.title
                    ? "border-blue-500 shadow-md bg-blue-50"
                    : "bg-white"
                }`}
              >
                <p className="text-sm text-gray-500">{exp.year}</p>
                <h4 className="font-semibold text-lg text-gray-800">
                  {exp.title}
                </h4>
                <p className="text-sm text-gray-600 line-clamp-2 mt-2">
                  {exp.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Detail Pengalaman */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selected.title}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="bg-gray-50 p-6 rounded-2xl shadow-md"
            >
              <h3 className="text-xl font-bold mb-2 text-blue-700">
                {selected.title}
              </h3>
              <p className="text-sm text-gray-500 mb-2">{selected.year}</p>
              <p className="text-gray-700 leading-relaxed mb-3">
                {selected.desc}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Bidang: </strong>
                {selected.bidang}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
