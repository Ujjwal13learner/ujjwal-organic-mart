"use client";
import React from 'react';
import Link from 'next/link';

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-green-100">
        
        {/* Logo / Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-green-800 tracking-tight">
            Organic <span className="text-emerald-600">Mart</span>
          </h1>
          <p className="text-gray-500 mt-2 text-sm">Naya account banayein aur shuddh samaan payein</p>
        </div>

        {/* Form */}
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Pura Naam (Full Name)</label>
            <input 
              type="text" 
              placeholder="Ujjwal Kumar" 
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all text-gray-800 text-sm"
              required 
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
            <input 
              type="email" 
              placeholder="naam@example.com" 
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all text-gray-800 text-sm"
              required 
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all text-gray-800 text-sm"
              required 
            />
          </div>

          <div className="flex items-center space-x-2 text-xs text-gray-600 py-1">
            <input type="checkbox" className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500" required />
            <span>Main saari <span className="text-emerald-600 font-semibold cursor-pointer">Terms & Conditions</span> manane ko taiyar hun.</span>
          </div>

          <button 
            type="submit" 
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2.5 px-4 rounded-lg transition-colors shadow-md shadow-emerald-200 text-sm"
          >
            Account Banayein
          </button>
        </form>

        {/* Footer */}
        <div className="text-center mt-6 pt-4 border-t border-gray-100 text-xs text-gray-500">
          Pehle se account hai?{' '}
          <Link href="/login" className="text-emerald-600 hover:underline font-semibold">
            Sign In Karein
          </Link>
        </div>

      </div>
    </div>
  );
}