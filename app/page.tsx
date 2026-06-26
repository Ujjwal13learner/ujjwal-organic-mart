import Link from 'next/link';
import React from 'react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white text-gray-800">
      <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-green-700">
          Organic <span className="text-emerald-600">Mart</span>
        </h1>
        <Link href="/login" className="bg-emerald-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-emerald-700 transition-colors shadow-sm">
          Sign In
        </Link>
      </nav>

      <div className="flex flex-col items-center justify-center text-center px-4 py-24 max-w-3xl mx-auto">
        <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
          100% Shuddh aur Natural
        </span>
        <h2 className="text-5xl font-extrabold text-gray-900 leading-tight">
          Apki Sehat Ke Liye <br />
          <span className="text-emerald-600">Sabse Behtareen Organic Samaan</span>
        </h2>
        <p className="text-gray-600 mt-6 text-lg max-w-xl">
          Bina kisi chemical aur milawat ke, seedhe khet se aapke ghar tak taaza organic products.
        </p>
        <div className="mt-10">
          <Link href="/login" className="bg-emerald-600 text-white px-8 py-3.5 rounded-xl font-bold text-lg hover:bg-emerald-700 shadow-lg shadow-emerald-200 transition-all transform hover:-translate-y-0.5 inline-block">
            Dukan Ke Andar Chalein 🚀
          </Link>
        </div>
      </div>
    </div>
  );
}