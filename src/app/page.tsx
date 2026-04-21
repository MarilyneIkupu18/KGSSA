'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <Image src="/2025_Independence_celebration_event.jpeg" alt="Independence Celebration" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/60 to-black/75" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-yellow-400" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
          <div className="grid lg:grid-cols-2 gap-10 items-center">

            <div className="space-y-6">
              <span className="inline-block bg-yellow-400 text-black text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full">
                PNG University of Technology
              </span>
              <div>
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-none tracking-tight">
                  KG<span className="text-yellow-400">SSA</span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-yellow-300 font-semibold mt-3">
                  Kairuku-Goilala Student &amp; Staff Association
                </p>
              </div>
              <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-lg border-l-4 border-yellow-400 pl-4">
                To shape a united and empowered community where every student and staff member rises into leadership and contributes meaningfully to our district.
              </p>
              <div className="flex flex-wrap gap-3 pt-1">
                <Link href="/about" className="bg-rose-800 hover:bg-rose-700 text-white font-bold px-6 py-3 rounded-xl transition-all duration-200 text-sm">
                  Learn More
                </Link>
                <Link href="/contact" className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-6 py-3 rounded-xl transition-all duration-200 text-sm">
                  Get Involved
                </Link>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full ring-4 ring-yellow-400 ring-offset-4 ring-offset-transparent shadow-2xl overflow-hidden bg-white">
                <Image src="/kai-goi_logo.jpeg" alt="KGSSA Logo" fill sizes="384px" className="object-contain p-4" />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60L1440 60L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20L0 60Z" fill="#111827"/>
          </svg>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-gray-900 py-12 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { num: '10+', label: 'Events Organized', color: 'text-rose-400' },
            { num: '35+', label: 'Active Members',   color: 'text-yellow-400' },
            { num: '20+', label: 'Years Active',     color: 'text-green-400' },
            { num: '12',  label: 'Executive Roles',  color: 'text-yellow-400' },
          ].map(({ num, label, color }) => (
            <div key={label} className="bg-gray-800 rounded-2xl py-6 px-3 border border-white/5">
              <div className={`text-4xl sm:text-5xl font-black ${color}`}>{num}</div>
              <p className="text-gray-400 mt-2 text-xs sm:text-sm font-medium">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── MISSION ── */}
      <section className="bg-gray-900 py-16 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-stretch">
          <div className="bg-gradient-to-br from-rose-900 to-gray-900 rounded-3xl p-8 text-white shadow-2xl flex flex-col justify-between border border-rose-900/50">
            <div>
              <span className="text-yellow-300 text-xs font-bold uppercase tracking-widest">Who We Are</span>
              <h2 className="text-3xl font-black mt-3 mb-4">Our Mission</h2>
              <p className="text-red-100 leading-relaxed">
                To bring students and staff together each year to support one another, run awareness programs, and organize activities that create opportunities and benefit our communities.
              </p>
            </div>
            <div className="mt-6 h-1 w-16 bg-yellow-400 rounded-full" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              { title: 'Promote Unity',       color: 'border-rose-700',   dot: 'bg-rose-700' },
              { title: 'Support Development', color: 'border-yellow-400', dot: 'bg-yellow-400' },
              { title: 'Accountability',      color: 'border-green-500',  dot: 'bg-green-500' },
              { title: 'Cultural Activities', color: 'border-yellow-400', dot: 'bg-yellow-400' },
              { title: 'Organize Events',     color: 'border-rose-700',   dot: 'bg-rose-700' },
              { title: 'Represent District',  color: 'border-green-500',  dot: 'bg-green-500' },
            ].map(({ title, color, dot }) => (
              <div key={title} className={`bg-gray-800 rounded-2xl p-4 border-l-4 ${color}`}>
                <div className={`w-2.5 h-2.5 rounded-full ${dot} mb-2`} />
                <p className="text-white font-semibold text-xs sm:text-sm">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY JOIN ── */}
      <section className="bg-gray-950 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-yellow-400 text-xs font-bold uppercase tracking-widest">Benefits</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-2">Why Join KGSSA?</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { title: 'Unity & Support',    desc: 'Build meaningful relationships with fellow Kairuku-Goilala students and staff in a supportive community.', accent: 'bg-rose-800',   bar: 'bg-rose-800' },
              { title: 'Leadership Growth',  desc: 'Develop leadership skills, personal growth, and academic excellence through diverse opportunities.',        accent: 'bg-yellow-400', bar: 'bg-yellow-400' },
              { title: 'Community Impact',   desc: 'Make a positive difference through awareness programs, outreach activities, and meaningful contributions.',  accent: 'bg-green-600',  bar: 'bg-green-600' },
            ].map(({ title, desc, accent, bar }) => (
              <div key={title} className="bg-gray-800 rounded-3xl p-7 shadow-xl">
                <div className={`w-10 h-10 ${accent} rounded-xl mb-5`} />
                <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                <div className={`mt-5 h-1 w-8 ${bar} rounded-full`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EVENTS PROMO ── */}
      <section className="bg-gray-900 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-rose-950 via-gray-900 to-gray-900 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl border border-rose-900/40">
            <div className="max-w-xl text-center md:text-left">
              <span className="text-yellow-400 text-xs font-bold uppercase tracking-widest">Gallery &amp; Events</span>
              <h2 className="text-3xl font-black text-white mt-2 mb-3">See What We&apos;ve Been Up To</h2>
              <p className="text-red-100 text-sm leading-relaxed">
                From fundraising carwashes to independence celebrations and graduation nights — browse our full photo gallery from 2021 to 2026.
              </p>
            </div>
            <div className="shrink-0">
              <Link href="/events" className="inline-block bg-yellow-400 hover:bg-yellow-300 text-black font-black px-8 py-4 rounded-2xl transition-all duration-200 shadow-xl whitespace-nowrap">
                View Events &amp; Gallery
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP ── */}
      <section className="bg-gray-900 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-yellow-400 text-xs font-bold uppercase tracking-widest">Structure</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-2">Leadership Structure</h2>
            <p className="text-gray-400 mt-2 max-w-xl mx-auto text-sm">12 dedicated executive positions working together to serve our community.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
            {[
              { role: 'President',                      desc: 'Overall leadership and direction',    border: 'border-t-rose-700' },
              { role: 'Vice President',                 desc: 'Assists president, leads in absence', border: 'border-t-rose-700' },
              { role: 'Chairman',                       desc: 'Presides over meetings impartially',  border: 'border-t-yellow-400' },
              { role: 'Secretary',                      desc: 'Records, minutes & correspondence',   border: 'border-t-yellow-400' },
              { role: 'Treasurer',                      desc: 'Manages finances & reports',          border: 'border-t-green-500' },
              { role: 'Events Coordinator',             desc: 'Plans and executes all events',       border: 'border-t-green-500' },
              { role: 'Male Fundraising Coordinator',   desc: 'Develops fundraising strategies',     border: 'border-t-rose-700' },
              { role: 'Female Fundraising Coordinator', desc: 'Manages funds & sponsors',            border: 'border-t-rose-700' },
              { role: 'Male Media Coordinator',         desc: 'Manages media & content',             border: 'border-t-yellow-400' },
              { role: 'Female Media Coordinator',       desc: 'Promotions & social media',           border: 'border-t-yellow-400' },
              { role: 'Patron',                         desc: 'Strategic guidance & mentorship',     border: 'border-t-green-500' },
              { role: 'Matron',                         desc: 'Supports female members',             border: 'border-t-green-500' },
            ].map(({ role, desc, border }) => (
              <div key={role} className={`bg-gray-800 rounded-2xl p-4 border-t-4 ${border}`}>
                <h3 className="font-bold text-white mb-1 text-xs sm:text-sm">{role}</h3>
                <p className="text-gray-400 text-xs">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/about" className="inline-block bg-white text-gray-900 font-bold px-8 py-3 rounded-xl hover:bg-yellow-400 transition-colors duration-200 text-sm">
              Learn More About Our Organization
            </Link>
          </div>
        </div>
      </section>

      {/* ── CHATBOT CALLOUT ── */}
      <section className="bg-gray-900 py-10 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 bg-gray-800 rounded-2xl px-8 py-6 border border-yellow-400/20">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <div>
              <p className="text-white font-black text-base">Need help navigating? Ask our chatbot!</p>
              <p className="text-gray-400 text-xs mt-0.5">Ask about KGSSA, membership, events — or learn words in Kairuku-Roro, Mekeo-Kuni &amp; Nara-Gabadi</p>
            </div>
          </div>
          <div className="shrink-0">
            <p className="text-yellow-400 font-black text-sm uppercase tracking-widest animate-pulse">↘ Chat with us</p>
          </div>
        </div>
      </section>

      {/* ── MEMBERSHIP CTA ── */}
      <section className="relative bg-gray-950 py-16 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-950/30 via-transparent to-yellow-950/10" />
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-yellow-400 text-xs font-bold uppercase tracking-widest">Membership</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-2 mb-3">Are You From Kairuku-Goilala?</h2>
            <p className="text-gray-400 text-sm max-w-2xl mx-auto leading-relaxed">
              If you are a student or staff member at PNG University of Technology from the Kairuku-Goilala district, KGSSA is your home.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mb-10">
            <div className="bg-gray-800 rounded-2xl p-5 border-l-4 border-rose-800">
              <h3 className="text-white font-bold mb-2 text-sm">Who Can Join</h3>
              <p className="text-gray-400 text-xs leading-relaxed">Any student or staff from Kairuku or Goilala districts — or any Unitech student faithful to the association.</p>
            </div>
            <div className="bg-gray-800 rounded-2xl p-5 border-l-4 border-yellow-400">
              <h3 className="text-white font-bold mb-2 text-sm">Elections</h3>
              <p className="text-gray-400 text-xs leading-relaxed">Held annually. Members in 2nd, 3rd, or final year are eligible to contest for leadership positions.</p>
            </div>
            <div className="bg-gray-800 rounded-2xl p-5 border-l-4 border-green-500">
              <h3 className="text-white font-bold mb-2 text-sm">How to Connect</h3>
              <p className="text-gray-400 text-xs leading-relaxed">Reach out via email, follow us on social media, or approach any executive member on campus.</p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-rose-800 hover:bg-rose-700 text-white font-bold px-8 py-3 rounded-xl transition-all duration-200 text-sm">
              Contact Us
            </Link>
            <Link href="/about" className="bg-gray-700 hover:bg-gray-600 text-white font-bold px-8 py-3 rounded-xl transition-all duration-200 text-sm">
              Read the Constitution
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
