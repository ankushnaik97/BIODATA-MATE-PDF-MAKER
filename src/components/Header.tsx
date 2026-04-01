"use client";

import Link from "next/link";
import { Heart } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <Heart className="w-8 h-8 text-red-500 fill-red-500" />
            <span className="text-2xl font-bold text-gray-900">
              Biodata<span className="text-red-500">Mate</span>
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-600 hover:text-red-500 transition">
              Home
            </Link>
            <Link href="/create" className="text-gray-600 hover:text-red-500 transition">
              Create Biodata
            </Link>
            <Link href="/templates" className="text-gray-600 hover:text-red-500 transition">
              Templates
            </Link>
          </nav>
          <Link
            href="/create"
            className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-full text-sm font-semibold transition shadow-md hover:shadow-lg"
          >
            Create Now
          </Link>
        </div>
      </div>
    </header>
  );
}
