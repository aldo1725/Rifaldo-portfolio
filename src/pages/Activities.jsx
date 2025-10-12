import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";

// Import gambar kegiatan
import kegiatan1 from "./slide/kegiatan1.jpg";
import kegiatan2 from "./slide/kegiatan2.jpg";
import kegiatan3 from "./slide/kegiatan3.jpg";
import kegiatan4 from "./slide/kegiatan4.jpg";

export default function Activities() {
  const slides = [
    { img: kegiatan1, caption: "Lomba KRI 2022 - Kontes Robot Indonesia" },
    { img: kegiatan2, caption: "Workshop IoT di Universitas Negeri Padang" },
    { img: kegiatan3, caption: "Riset Pengembangan Sensor Cuaca Cerdas" },
    { img: kegiatan4, caption: "Demo Proyek AI & IoT Terapan 2024" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    fade: false, // efek slide kiri-kanan
    speed: 800,
    autoplaySpeed: 3500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "50px",
    pauseOnHover: true,
    arrows: false,
    cssEase: "ease-in-out",
    swipe: true,
    swipeToSlide: true,
    touchMove: true,
  };

  return (
    <motion.section
      id="Activities"
      className="py-20 bg-white flex justify-center scroll-mt-[120px]"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }} // animasi hanya muncul sekali saat di-scroll
    >
      <div className="w-full max-w-3xl px-6">
        {/* Judul */}
        <motion.h2
          className="text-3xl font-bold text-center mb-2"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Dokumentasi Kegiatan
        </motion.h2>

        {/* Deskripsi */}
        <motion.p
          className="text-center text-gray-600 mb-10"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Kumpulan dokumentasi kegiatan dan proyek pengembangan teknologi IoT dan AI.
        </motion.p>

        {/* Slider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Slider {...settings}>
            {slides.map((s, i) => (
              <div
                key={i}
                className="relative flex justify-center cursor-grab active:cursor-grabbing"
              >
                <img
                  src={s.img}
                  alt={s.caption}
                  className="rounded-2xl shadow-lg w-[90%] h-[280px] object-cover transition-transform duration-700 hover:scale-[1.02]"
                />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] bg-black bg-opacity-50 text-white text-center p-3 rounded-b-2xl">
                  <p className="text-sm md:text-base">{s.caption}</p>
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </motion.section>
  );
}
