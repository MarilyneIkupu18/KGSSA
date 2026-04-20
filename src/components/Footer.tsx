'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-yellow-400 font-bold text-lg mb-4">KGSSA</h3>
            <p className="text-gray-300">
              Kairuku-Goilala Student & Staff Association at PNG University of Technology
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-yellow-400 font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/about" className="hover:text-yellow-400 transition">About Us</Link></li>
              <li><Link href="/events" className="hover:text-yellow-400 transition">Events</Link></li>
              <li><Link href="/contact" className="hover:text-yellow-400 transition">Contact</Link></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-yellow-400 font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61575377257618"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-700 p-3 rounded-full transition"
              >
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.39v-1.2h-2.84v8.4h2.85V12.9c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v5.2h2.85m-7.74-6.16a1.4 1.4 0 0 1-1.4-1.4 1.4 1.4 0 0 1 1.4-1.4 1.4 1.4 0 0 1 1.4 1.4 1.4 1.4 0 0 1-1.4 1.4M5.5 7a1.5 1.5 0 0 1 0 3 1.5 1.5 0 0 1 0-3m8.16 4.3a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/_kgssa?igsh=MWR3cDI4bTZlM3l0dg=="
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-700 p-3 rounded-full transition"
              >
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4c0 3.2-2.6 5.8-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2m-.3 2c-2.1 0-3.5 1.4-3.5 3.5v8.4c0 2.1 1.4 3.5 3.5 3.5h8.4c2.1 0 3.5-1.4 3.5-3.5V7.5c0-2.1-1.4-3.5-3.5-3.5H7.5m11 1.5a.9.9 0 0 1 .9-.9.9.9 0 0 1 .9.9.9.9 0 0 1-.9.9.9.9 0 0 1-.9-.9m-5 1.5a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6" />
                </svg>
              </a>
              <a
                href="https://facebook.com/groups/506427326771552/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-700 p-3 rounded-full transition"
                title="Facebook Group"
              >
                <span className="sr-only">Facebook Group</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Email */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <p className="text-center text-gray-300">
            📧 Email: <a href="mailto:kgssa.pngut@gmail.com" className="text-yellow-400 hover:text-yellow-300">kgssa.pngut@gmail.com</a>
          </p>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Kairuku-Goilala Student & Staff Association. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
