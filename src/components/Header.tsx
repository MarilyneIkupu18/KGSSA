'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/',        label: 'Home'    },
  { href: '/about',   label: 'About Us'   },
  { href: '/events',  label: 'Events'  },
  { href: '/contact', label: 'Contact Us' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-gray-900 border-b border-white/5 text-white shadow-xl sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition shrink-0" onClick={() => setIsOpen(false)}>
          <div className="w-11 h-11 relative rounded-full overflow-hidden ring-2 ring-yellow-400">
            <Image src="/kai-goi_logo.jpeg" alt="KGSSA Logo" fill sizes="44px" className="object-contain bg-white p-0.5" />
          </div>
          <div>
            <div className="font-black text-lg leading-tight">KGSSA</div>
            <div className="text-xs text-gray-400 leading-tight">Student &amp; Staff Association</div>
          </div>
        </Link>

        {/* Desktop nav — right corner */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`px-5 py-2.5 rounded-xl text-sm tracking-wide transition-all duration-200 font-black uppercase
                  ${active
                    ? 'bg-yellow-400 text-black'
                    : 'text-gray-300 hover:text-yellow-400 hover:bg-white/5'
                  }`}
              >
                {label}
              </Link>
            );
          })}
        </div>

        {/* UOT Logo — far right */}
        <div className="hidden md:flex items-center pl-4 border-l border-white/10 ml-2">
          <div className="relative w-10 h-10">
            <Image src="/UOT_logo.jpg" alt="PNG University of Technology" fill sizes="40px" className="object-contain" />
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-yellow-400 transition-all duration-200 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-yellow-400 transition-all duration-200 ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-yellow-400 transition-all duration-200 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile nav */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 border-t border-white/5 px-4 py-3 space-y-1">
          {navLinks.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-xl text-sm font-black uppercase tracking-wide transition-all duration-200
                  ${active
                    ? 'bg-yellow-400 text-black'
                    : 'text-gray-300 hover:text-yellow-400 hover:bg-white/5'
                  }`}
              >
                {label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
