import React from "react";
import { GraduationCap, Target } from "lucide-react"; // hapus ikon Award karena tidak digunakan

export default function About() {
  return (
    <section
      id="About"
      className="py-20 md:py-28 scroll-mt-[60 px] bg-white" // ubah margin scroll biar posisinya pas di atas
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Judul */}
        <h2 className="text-3xl font-bold text-center mb-6">About Me</h2>

        {/* Deskripsi singkat */}
        <p className="text-gray-600 text-center leading-relaxed mb-10">
          Lulusan D4 Teknik Elektro Industri Universitas Negeri Padang dengan minat tinggi pada
          pengembangan hardware, otomasi, dan Internet of Things (IoT). Berpengalaman dalam
          pengembangan sistem berbasis Arduino, ESP32, STM32, dan LoRa dengan kemampuan problem
          solving, kepemimpinan, dan manajemen tim yang kuat. Terbiasa bekerja secara analitis,
          kritis, dan adaptif dalam menyelesaikan proyek teknologi terdepan.
        </p>

        {/* Info utama */}
        <div className="space-y-6">
          {/* Pendidikan */}
          <div className="flex items-start gap-4 bg-blue-50 border border-blue-100 p-5 rounded-xl shadow-sm">
            <GraduationCap className="text-blue-500 w-8 h-8" />
            <div>
              <h3 className="font-semibold text-lg text-gray-800">Pendidikan</h3>
              <p className="text-gray-700">D4 Teknik Elektro Industri</p>
              <p className="text-gray-600 text-sm">Universitas Negeri Padang</p>
              <p className="text-gray-500 text-sm mt-1">
                2021 – 2025{" "}
                <span className="ml-2 bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded">
                  IPK: 3.56 / 4.00
                </span>
              </p>
            </div>
          </div>

          {/* Visi Karir */}
          <div className="flex items-start gap-4 bg-purple-50 border border-purple-100 p-5 rounded-xl shadow-sm">
            <Target className="text-purple-500 w-8 h-8" />
            <div>
              <h3 className="font-semibold text-lg text-gray-800">Visi Karir</h3>
              <p className="italic text-gray-700">
                “Siap berkolaborasi untuk mengembangkan sistem tertanam dan solusi IoT yang inovatif dan efisien.”
              </p>
            </div>
          </div>
        </div>

        {/* Statistik */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-6 text-center">
          <div className="flex-1 bg-blue-50 rounded-xl p-4 shadow-sm">
            <p className="text-3xl font-bold text-blue-600">4+</p>
            <p className="text-gray-700 text-sm">Tahun Pengalaman</p>
          </div>
          <div className="flex-1 bg-green-50 rounded-xl p-4 shadow-sm">
            <p className="text-3xl font-bold text-green-600">10+</p>
            <p className="text-gray-700 text-sm">Proyek Selesai</p>
          </div>
          <div className="flex-1 bg-purple-50 rounded-xl p-4 shadow-sm">
            <p className="text-3xl font-bold text-purple-600">3</p>
            <p className="text-gray-700 text-sm">Penghargaan</p>
          </div>
        </div>
      </div>
    </section>
  );
}
