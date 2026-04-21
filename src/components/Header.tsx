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
    <header className="bg-gray-900 border-b-2 border-yellow-400 text-white shadow-xl sticky top-0 z-50">
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
          className="md:hidden flex items-center gap-2 bg-yellow-400 px-4 py-2.5 rounded-xl"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1.5">
            <span className={`block w-6 h-[3px] bg-gray-900 transition-all duration-200 ${isOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block w-6 h-[3px] bg-gray-900 transition-all duration-200 ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-[3px] bg-gray-900 transition-all duration-200 ${isOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </div>
          <span className="text-gray-900 font-black text-sm uppercase tracking-widest">{isOpen ? 'Close' : 'Menu'}</span>
        </button>
      </nav>

      {/* Mobile nav */}
      {isOpen && (
        <div className="md:hidden bg-gray-950 border-t-2 border-yellow-400 px-4 py-4 space-y-2">
          {navLinks.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between px-5 py-4 rounded-2xl text-base font-black uppercase tracking-widest transition-all duration-200
                  ${active
                    ? 'bg-yellow-400 text-black'
                    : 'bg-gray-800 text-white hover:bg-yellow-400 hover:text-black'
                  }`}
              >
                {label}
                <span className={`text-lg ${active ? 'text-black' : 'text-yellow-400'}`}>→</span>
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
