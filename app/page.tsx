'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const images = [
    '/images/Picture1.jpg',
    '/images/Picture2.jpg',
    '/images/Picture3.jpg',
    '/images/Picture4.jpg',
    '/images/Picture5.jpg',
    '/images/Picture6.jpg',
    '/images/Picture7.jpg',
    '/images/Picture8.jpg',
];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-gradient-to-br from-teal-500 to-emerald-200 text-gray-800 font-sans">

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-10 bg-gradient-to-r from-teal-600 to-emerald-400 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg transition duration-300 hover:text-teal-100">Selamat Datang di Dara Kost</h1>
        <p className="text-lg max-w-xl mb-6 opacity-90 transition duration-300 hover:opacity-100">Kos eksklusif dan nyaman, cocok untuk mahasiswa atau pekerja. Tersedia pilihan kamar Fan dan AC, full furnished, dan siap huni.</p>
        <a href="#fasilitas" className="bg-teal-600 text-white px-6 py-3 rounded-full text-lg hover:bg-teal-700 transition-all">Cek Kamar & Harga</a>
      </section>

      {/* Fasilitas Kamar */}
      <section className="py-16 px-6 bg-white" id="fasilitas">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
          <p className="text-lg mb-4">Nikmati kenyamanan tinggal di kamar yang luas, bersih, dan modern. Fasilitas lengkap untuk menunjang produktivitas dan istirahatmu setiap hari.</p>
            <h2 className="text-3xl font-semibold mb-4 text-teal-700">Fasilitas Kamar</h2>
              <ul className="list-disc list-inside text-lg space-y-1 text-teal-600">
              <li>Kamar luas & terang</li>
              <li>Kasur springbed + bantal</li>
              <li>Lemari pakaian besar</li>
              <li>Meja belajar + kursi</li>
              <li>AC / Fan + TV</li>
              <li>Akses Wi-Fi cepat</li>
              <li>Kamar mandi dalam (shower)</li>
            </ul>

            <h2 className="text-3xl font-semibold mt-6 mb-4 text-teal-700">Fasilitas Umum</h2>
            <ul className="list-disc list-inside text-lg space-y-1 text-teal-600">
              <li>Lobi nyaman untuk bersantai</li>
              <li>Dapur bersama bersih</li>
              <li>Kulkas dan dispenser tersedia di area umum</li>
            </ul>
          </div>

          {/* Gambar Carousel */}
          <div className="w-72 h-128 mx-auto relative overflow-hidden rounded-2xl shadow-md">
            <Image
              src={images[currentImage]}
              alt={`Gambar kamar ${currentImage + 1}`}
              fill
              className="object-cover transition-opacity duration-1000 ease-in-out"
            />
            {/* Dot Navigation */}
            <div className="absolute bottom-4 w-full flex justify-center gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-3 h-3 rounded-full transition-all ${index === currentImage ? 'bg-teal-600' : 'bg-white/50 hover:bg-teal-400'}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pilihan Kamar & Harga */}
      <section className="py-16 px-6 bg-teal-50" id="harga">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6 text-teal-700">Pilihan Kamar & Harga</h2>
          <div className="bg-gradient-to-r from-teal-600 to-emerald-400 p-6 rounded-xl shadow-xl text-sm md:text-base">
            <div className="mb-6">
              <h4 className="font-semibold mb-2 text-2xl text-white">Kamar Fan</h4>
              <ul className="list-disc list-inside space-y-1 text-lg text-white">
                <li>Untuk 1 orang: Rp 800.000 – 900.000 / bulan</li>
                <li>Untuk 2 orang: Rp 1.500.000 / bulan</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-2xl text-white">Kamar AC</h4>
              <ul className="list-disc list-inside space-y-1 text-lg text-white">
                <li>Untuk 1 orang: Rp 1.350.000 – 1.500.000 / bulan</li>
                <li>Untuk 2 orang: Rp 2.200.000 / bulan</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimoni */}
      <section className="py-16 px-6 bg-teal-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6 text-teal-700">Apa Kata Penghuni?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-xl">
              <p className="italic text-teal-600">"Kamarnya lega dan bersih. Fasilitasnya lengkap, tinggal bawa koper aja!"</p>
              <p className="mt-2 font-bold text-teal-700">— Rina, Mahasiswa</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-xl">
              <p className="italic text-teal-600">"Kos ini bikin kerja remote nyaman. WiFi kencang dan ada dapur bareng juga!"</p>
              <p className="mt-2 font-bold text-teal-700">— Dimas, Freelancer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lokasi */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6 text-teal-700">Lokasi Strategis</h2>
          <p className="text-lg mb-6">Dekat kampus, minimarket, dan halte. Lingkungan aman dan akses mudah ke transportasi umum.</p>
          <div className="w-full h-72 rounded-xl overflow-hidden border-2 border-teal-600">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d990.0662627650424!2d110.40616119841992!3d-6.978021045301834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwNTgnNDAuMiJTIDExMMKwMjQnMjIuOSJF!5e0!3m2!1sid!2sid!4v1746333503663!5m2!1sid!2sid"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Kontak */}
      <section className="py-16 px-6 bg-teal-600 text-white text-center">
        <h2 className="text-3xl font-semibold mb-4">Tertarik Ngekos di Sini?</h2>
        <p className="text-lg mb-6">Hubungi kami sekarang untuk cek kamar atau tanya-tanya dulu. Klik tombol di bawah untuk langsung WhatsApp.</p>
        <a
          href="https://wa.me/628156538900"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-teal-700 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition"
        >
          Chat via WhatsApp
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-teal-700 text-white py-6 text-center">
        <p>&copy; 2025 Dara Kost. All rights reserved.</p>
      </footer>
    </main>
  );
}
