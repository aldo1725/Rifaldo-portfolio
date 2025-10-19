import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";

export default function Activities() {
  const slides = [
    {
      img: "/slide/kri1.jpg",
      caption: "Lomba KRI 2022 - Kontes Robot Indonesia",
    },
    {
      img: "/slide/kri2.jpg",
      caption: "Lomba KRI 2023 - Kontes Robot Indonesia",
    },
    {
      img: "/slide/kri3.jpg",
      caption: "Lomba KRI 2024 - Kontes Robot Indonesia",
    },
    {
      img: "/slide/msib.jpg",
      caption: "Studi Independen Hardware Engineer- PT.Stechoq Robotika Indonesia",
    },
    {
      img: "/slide/manajemen2.jpg",
      caption: "Kepanitiaan- UKRO UNP",
    },

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
    centerMode: false, // biar foto rata tengah
    centerPadding: "0px",
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
      className="py-10 bg-white overflow-hidden scroll-mt-[60px]"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto px-6">
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
          Kumpulan dokumentasi kegiatan organisasi dan proyek .
        </motion.p>

        {/* Slider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex justify-center mx-auto"
        >
          <Slider {...settings} className="w-full md:w-[90%]">
            {slides.map((s, i) => (
              <div
                key={i}
                className="relative flex justify-center cursor-grab active:cursor-grabbing"
              >
                <img
                  src={s.img}
                  alt={s.caption}
                  className="rounded-2xl shadow-lg w-full h-[260px] sm:h-[300px] md:h-[360px] object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
                  style={{
                    objectPosition: "center top",
                    backgroundColor: "#000", // area kosong jadi hitam, bukan putih
                  }}
                />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full bg-black bg-opacity-50 text-white text-center p-3 rounded-b-2xl">
                  <p className="text-sm md:text-base font-medium">
                    {s.caption}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </motion.section>
  );
}
