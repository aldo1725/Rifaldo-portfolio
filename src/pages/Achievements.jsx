import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Slider from "react-slick";

const achievements = [
  {
    year: "2022",
    title: "Kontes Robotika Indonesia 2022",
    desc: "Menjadi finalis nasional pada Divisi KRAI (Kontes Robot ABU Indonesia) setelah berhasil lolos seleksi tingkat wilayah. Berpartisipasi sebagai tim inti dalam pengembangan sistem mekanik dan pengendalian robot di ITS Surabaya.",
    kategori: "Kompetisi Nasional Robotika",
    images: [
      "/certificates/kri2022_wilayah.jpg",
      "/certificates/kri2022_final.jpg",
    ],
  },
  {
    year: "2023",
    title: "Kontes Robotika Indonesia 2023",
    desc: "Mewakili Universitas Negeri Padang dalam KRI 2023 Divisi KRAI. Berhasil lolos seleksi wilayah dan menjadi finalis nasional dengan tema 'Casting Flowers over Angkor Wat'.",
    kategori: "Kompetisi Nasional Robotika",
    images: [
      "/certificates/kri2023_wilayah.jpg",
      "/certificates/kri2023_final.jpg",
    ],
  },
  {
    year: "2023",
    title: "Lolos Skema Pendanaan PKM-KC",
    desc: "Proyek 'Vibrating Headphone with Speech-to-Text Technology' berhasil lolos skema pendanaan PKM-KC 2023 dari Ditjen Diktiristek. Fokus pada teknologi inklusif dan inovasi sosial.",
    kategori: "Inovasi & Penelitian",
    images: ["/certificates/pkmkc.jpg"],
  },
  {
    year: "2024",
    title: "Kontes Robotika Indonesia 2024",
    desc: "Finalis nasional KRI 2024 Divisi KRAI di Universitas Muhammadiyah Surakarta dengan tema 'Harvest Day'. Mengembangkan robot otonom pemanen hasil pertanian.",
    kategori: "Kompetisi Nasional Robotika",
    images: [
      "/certificates/kri2024_wilayah.jpg",
      "/certificates/kri2024_final.jpg",
    ],
  },
  {
    year: "2024",
    title: "Program MSIB Batch 7 – PT Stechoq Robotika Indonesia",
    desc: "Mengikuti program Magang dan Studi Independen Bersertifikat (MSIB) Batch 7 di PT Stechoq Robotika Indonesia pada bidang Hardware Engineering. Mengembangkan proyek akhir berupa ventilator berbasis Internet of Things (IoT) untuk kebutuhan medis. Juga menerima penghargaan sebagai The Most Knowledgeable Mentee.",
    kategori: "Studi Independen & Profesional",
    images: [
      "/certificates/stechoq1.jpg",
      "/certificates/stechoq2.jpg",
      "/certificates/stechoq3.jpg",
      "/certificates/stechoq4.jpg",
    ],
  },
  {
    year: "2025",
    title: "Bintang Aktivis – Wisuda ke-140 Universitas Negeri Padang",
    desc: "Dianugerahi penghargaan 'Bintang Aktivis' sebagai pengakuan atas kontribusi dan kepemimpinan di Unit Kegiatan Robotika Universitas Negeri Padang.",
    kategori: "Penghargaan Kemahasiswaan",
    images: ["/certificates/bintangAktivis.jpg"],
  },
];

export default function Achievements() {
  const [selected, setSelected] = useState(achievements[0]);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true,
          arrows: false,
          speed: 400,
          autoplaySpeed: 3000,
        },
      },
    ],
  };

  return (
    <section
      id="Achievements"
      className="py-12 sm:py-16 md:py-24 bg-gray-50 overflow-hidden scroll-mt-[80px]"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Judul */}
        <motion.h2
          className="text-3xl font-bold text-center mb-2"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Reward & Pencapaian
        </motion.h2>

        <motion.p
          className="text-center text-gray-600 mb-10"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Kumpulan penghargaan dan pencapaian yang mencerminkan dedikasi dalam
          bidang robotika, inovasi, dan pengembangan teknologi.
        </motion.p>

        {/* Grid utama */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Daftar kiri */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {achievements.map((item, i) => (
              <motion.div
                key={i}
                onClick={() => setSelected(item)}
                whileHover={{ x: 5, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 180, damping: 15 }}
                className={`cursor-pointer p-5 border rounded-xl shadow-sm transition ${
                  selected.title === item.title
                    ? "border-blue-500 shadow-md bg-blue-50"
                    : "bg-white hover:shadow-md"
                }`}
              >
                <p className="text-sm text-gray-500">{item.year}</p>
                <h4 className="font-semibold text-lg text-gray-800">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600 line-clamp-2 mt-2">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Detail kanan */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selected.title}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center text-center"
            >
              <h3 className="text-xl font-bold mb-2 text-blue-700">
                {selected.title}
              </h3>
              <p className="text-sm text-gray-500 mb-2">{selected.year}</p>
              <p className="text-gray-700 leading-relaxed mb-4">
                {selected.desc}
              </p>
              <p className="text-sm text-gray-600 mb-6">
                <strong>Kategori: </strong>
                {selected.kategori}
              </p>

              {/* Slider Sertifikat */}
              <Slider {...sliderSettings} className="w-full max-w-md">
                {selected.images.map((img, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <img
                      src={img}
                      alt={`Sertifikat ${selected.title}`}
                      className="rounded-xl shadow-lg w-full h-[240px] sm:h-[320px] object-contain bg-gray-100"
                    />
                  </motion.div>
                ))}
              </Slider>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
