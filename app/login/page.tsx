"use client";
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Page badalne ke liye

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Abhi backend nahi hai, toh direct entry de rahe hain
    router.push('/shop'); 
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-green-100">
        
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-green-800 tracking-tight">
            Organic <span className="text-emerald-600">Mart</span>
          </h1>
          <p className="text-gray-500 mt-2 text-sm">Apne swasthya ke liye shuddh aur taaza chunein</p>
        </div>

        <form className="space-y-5" onSubmit={handleLogin}>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address</label>
            <input type="email" placeholder="naam@example.com" className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all text-gray-800 text-sm" required />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Password</label>
            <input type="password" placeholder="••••••••" className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all text-gray-800 text-sm" required />
          </div>

          <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors shadow-md shadow-emerald-200 text-sm">
            Sign In (Dukan Mein Ghusein)
          </button>
        </form>

        <div className="text-center mt-6 pt-6 border-t border-gray-100 text-xs text-gray-500">
          Naye hain yahan?{' '}
          <Link href="/register" className="text-emerald-600 hover:underline font-semibold">
            Naya Account Banayein
          </Link>
        </div>

      </div>
    </div>
  );
}