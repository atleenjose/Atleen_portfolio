"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-xl border-b border-white/10 text-white z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="font-semibold text-base tracking-tight text-white hover:text-gray-300 transition">
          Atleen Jose
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          <Link href="/" className="px-3 py-1.5 text-sm text-gray-400 hover:text-white transition rounded-lg hover:bg-white/5">
            Home
          </Link>
          <Link href="/#work" className="px-3 py-1.5 text-sm text-gray-400 hover:text-white transition rounded-lg hover:bg-white/5">
            Work
          </Link>
          <Link href="/credentials" className="px-3 py-1.5 text-sm text-gray-400 hover:text-white transition rounded-lg hover:bg-white/5">
            Credentials
          </Link>
          <Link href="/#contact" className="px-3 py-1.5 text-sm text-gray-400 hover:text-white transition rounded-lg hover:bg-white/5">
            Contact
          </Link>
          <a
            href="/Resume_AtleenJose.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 px-4 py-1.5 text-sm font-medium bg-white text-black rounded-lg hover:bg-gray-200 transition"
          >
            Resume ↗
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 text-gray-400 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-white/10 bg-black/95 px-6 py-4 flex flex-col gap-2">
          <Link href="/" onClick={() => setMenuOpen(false)} className="py-2 text-sm text-gray-300 hover:text-white transition">Home</Link>
          <Link href="/#work" onClick={() => setMenuOpen(false)} className="py-2 text-sm text-gray-300 hover:text-white transition">Work</Link>
          <Link href="/credentials" onClick={() => setMenuOpen(false)} className="py-2 text-sm text-gray-300 hover:text-white transition">Credentials</Link>
          <Link href="/#contact" onClick={() => setMenuOpen(false)} className="py-2 text-sm text-gray-300 hover:text-white transition">Contact</Link>
          <a href="/Resume_AtleenJose.pdf" target="_blank" rel="noopener noreferrer" className="py-2 text-sm text-white font-medium">Resume ↗</a>
        </div>
      )}
    </header>
  );
}
