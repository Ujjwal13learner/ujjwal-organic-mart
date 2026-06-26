"use client";
import React, { useState } from 'react';
import Link from 'next/link';

// Dummy Organic Products Data
const PRODUCTS = [
  { id: 1, name: 'Taaza Organic Seb (Apples)', price: '₹180/kg', image: '🍎', category: 'Fruits', rating: 4.8 },
  { id: 2, name: 'Desi Tamatar (Tomatoes)', price: '₹60/kg', image: '🍅', category: 'Vegetables', rating: 4.5 },
  { id: 3, name: 'Shuddh Prakritik Honey (Shahad)', price: '₹350/bottle', image: '🍯', category: 'Groceries', rating: 4.9 },
  { id: 4, name: 'Khet Ka Taaza Palak (Spinach)', price: '₹40/bunch', image: '🥬', category: 'Vegetables', rating: 4.7 },
  { id: 5, name: 'Organic Kaju (Cashews)', price: '₹450/250g', image: '🫘', category: 'Dry Fruits', rating: 4.6 },
  { id: 6, name: 'A2 Desi Gaay Ka Doodh (Milk)', price: '₹90/litre', image: '🥛', category: 'Dairy', rating: 5.0 },
];

export default function ShopPage() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Shop Header / Navbar */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-green-700">
            Organic <span className="text-emerald-600">Mart</span>
          </Link>
          
          {/* Cart Status Button */}
          <div className="relative cursor-pointer bg-emerald-50 text-emerald-700 px-4 py-2 rounded-xl flex items-center space-x-2 font-semibold border border-emerald-100">
            <span>🛒 Jholaa (Cart)</span>
            <span className="bg-emerald-600 text-white rounded-full text-xs px-2 py-0.5">{cartCount}</span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-10">
        <div className="mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Hamare Shuddh Products 🌿</h2>
          <p className="text-gray-500 mt-1">Bina chemical, seedhe khet se aapki rasoi tak.</p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                {/* Product Emoji Image Placeholder */}
                <div className="bg-green-50 rounded-xl h-40 flex items-center justify-center text-6xl mb-4">
                  {product.image}
                </div>
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md uppercase">
                  {product.category}
                </span>
                <h3 className="text-lg font-bold text-gray-900 mt-2">{product.name}</h3>
                <div className="flex items-center text-sm text-amber-500 mt-1">
                  ⭐ <span className="text-gray-600 font-medium ml-1">{product.rating}</span>
                </div>
              </div>

              <div className="mt-6 flex justify-between items-center pt-4 border-t border-gray-50">
                <span className="text-xl font-extrabold text-gray-900">{product.price}</span>
                <button 
                  onClick={() => setCartCount(cartCount + 1)}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold px-4 py-2 rounded-xl transition-all shadow-sm active:scale-95"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}