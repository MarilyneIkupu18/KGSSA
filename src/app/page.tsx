'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <Image
          src="/2025_Independence_celebration_event.jpeg"
          alt="Independence Celebration"
          fill
          priority
          className="object-cover"
        />
        {/* dark + red gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/60 to-black/75" />

        {/* yellow top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-yellow-400" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left text */}
            <div className="space-y-8">
              {/* Badge */}
              <span className="inline-block bg-yellow-400 text-black text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full">
                PNG University of Technology
              </span>

              <div>
                <h1 className="text-7xl md:text-8xl font-black text-white leading-none tracking-tight">
                  KG<span className="text-yellow-400">SSA</span>
                </h1>
                <p className="text-xl md:text-2xl text-yellow-300 font-semibold mt-3">
                  Kairuku-Goilala Student &amp; Staff Association
                </p>
              </div>

              <p className="text-lg text-white/80 leading-relaxed max-w-lg border-l-4 border-yellow-400 pl-5">
                To shape a united and empowered community where every student and staff member rises into leadership and contributes meaningfully to our district.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link href="/about"
                  className="bg-rose-800 hover:bg-rose-700 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-black/40">
                  Learn More
                </Link>
                <Link href="/contact"
                  className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-yellow-900/30">
                  Get Involved
                </Link>
              </div>
            </div>

            {/* Right logo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full ring-4 ring-yellow-400 ring-offset-4 ring-offset-transparent shadow-2xl overflow-hidden bg-white">
                <Image
                  src="/kai-goi_logo.jpeg"
                  alt="KGSSA Logo"
                  fill
                  sizes="384px"
                  className="object-contain p-4"
                />
              </div>
            </div>
          </div>
        </div>

        {/* bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60L1440 60L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20L0 60Z" fill="#111827"/>
          </svg>
        </div>
      </section>

      {/* ── STATS BANNER ── */}
      <section className="bg-gray-900 py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { num: '10+', label: 'Events Organized', color: 'text-rose-400' },
            { num: '35+', label: 'Active Members',   color: 'text-yellow-400' },
            { num: '20+', label: 'Years Active',     color: 'text-green-400' },
            { num: '12',  label: 'Executive Roles',  color: 'text-yellow-400' },
          ].map(({ num, label, color }) => (
            <div key={label} className="bg-gray-800 rounded-2xl py-8 px-4 border border-white/5">
              <div className={`text-5xl font-black ${color}`}>{num}</div>
              <p className="text-gray-400 mt-2 text-sm font-medium">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── MISSION ── */}
      <section className="bg-gray-900 py-24 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-stretch">

          {/* Mission card */}
          <div className="bg-gradient-to-br from-rose-900 to-gray-900 rounded-3xl p-10 text-white shadow-2xl flex flex-col justify-between border border-rose-900/50">
            <div>
              <span className="text-yellow-300 text-xs font-bold uppercase tracking-widest">Who We Are</span>
              <h2 className="text-4xl font-black mt-3 mb-6">Our Mission</h2>
              <p className="text-red-100 text-lg leading-relaxed">
                To bring students and staff together each year to support one another, run awareness programs, and organize activities that create opportunities and benefit our communities.
              </p>
            </div>
            <div className="mt-8 h-1 w-16 bg-yellow-400 rounded-full" />
          </div>

          {/* Objectives grid */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { title: 'Promote Unity',       color: 'border-rose-700',   dot: 'bg-rose-700' },
              { title: 'Support Development', color: 'border-yellow-400', dot: 'bg-yellow-400' },
              { title: 'Accountability',      color: 'border-green-500',  dot: 'bg-green-500' },
              { title: 'Cultural Activities', color: 'border-yellow-400', dot: 'bg-yellow-400' },
              { title: 'Organize Events',     color: 'border-rose-700',   dot: 'bg-rose-700' },
              { title: 'Represent District',  color: 'border-green-500',  dot: 'bg-green-500' },
            ].map(({ title, color, dot }) => (
              <div key={title} className={`bg-gray-800 rounded-2xl p-5 border-l-4 ${color} hover:bg-gray-700 transition-colors`}>
                <div className={`w-3 h-3 rounded-full ${dot} mb-3`} />
                <p className="text-white font-semibold text-sm">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY JOIN ── */}
      <section className="bg-gray-950 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-yellow-400 text-xs font-bold uppercase tracking-widest">Benefits</span>
            <h2 className="text-4xl font-black text-white mt-2">Why Join KGSSA?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Unity & Support',
                desc: 'Build meaningful relationships with fellow Kairuku-Goilala students and staff in a supportive community.',
                accent: 'bg-rose-800',
                bar: 'bg-rose-800',
              },
              {
                title: 'Leadership Growth',
                desc: 'Develop leadership skills, personal growth, and academic excellence through diverse opportunities.',
                accent: 'bg-yellow-400',
                bar: 'bg-yellow-400',
              },
              {
                title: 'Community Impact',
                desc: 'Make a positive difference through awareness programs, outreach activities, and meaningful contributions.',
                accent: 'bg-green-600',
                bar: 'bg-green-600',
              },
            ].map(({ title, desc, accent, bar }) => (
              <div key={title} className="bg-gray-800 rounded-3xl p-8 hover:scale-105 transition-transform duration-200 shadow-xl">
                <div className={`w-12 h-12 ${accent} rounded-2xl mb-6`} />
                <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
                <p className="text-gray-400 leading-relaxed">{desc}</p>
                <div className={`mt-6 h-1 w-10 ${bar} rounded-full`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EVENTS PROMO ── */}
      <section className="bg-gray-900 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-rose-950 via-gray-900 to-gray-900 rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl border border-rose-900/40">
            <div className="max-w-xl">
              <span className="text-yellow-400 text-xs font-bold uppercase tracking-widest">Gallery & Events</span>
              <h2 className="text-4xl font-black text-white mt-2 mb-4">See What We&apos;ve Been Up To</h2>
              <p className="text-red-100 leading-relaxed">
                From fundraising carwashes to independence celebrations and graduation nights — browse our full photo gallery and event history from 2021 to 2026.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Link href="/events"
                className="inline-block bg-yellow-400 hover:bg-yellow-300 text-black font-black px-10 py-5 rounded-2xl transition-all duration-200 shadow-xl text-lg whitespace-nowrap">
                View Events &amp; Gallery
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP ── */}
      <section className="bg-gray-900 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-yellow-400 text-xs font-bold uppercase tracking-widest">Structure</span>
            <h2 className="text-4xl font-black text-white mt-2">Leadership Structure</h2>
            <p className="text-gray-400 mt-3 max-w-xl mx-auto">
              12 dedicated executive positions working together to serve our community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {[
              { role: 'President',                      desc: 'Overall leadership and direction',              border: 'border-t-rose-700' },
              { role: 'Vice President',                 desc: 'Assists president, leads in absence',           border: 'border-t-rose-700' },
              { role: 'Chairman',                       desc: 'Presides over meetings impartially',            border: 'border-t-yellow-400' },
              { role: 'Secretary',                      desc: 'Records, minutes & correspondence',             border: 'border-t-yellow-400' },
              { role: 'Treasurer',                      desc: 'Manages finances & reports',                    border: 'border-t-green-500' },
              { role: 'Events Coordinator',             desc: 'Plans and executes all events',                 border: 'border-t-green-500' },
              { role: 'Male Fundraising Coordinator',   desc: 'Develops fundraising strategies',               border: 'border-t-rose-700' },
              { role: 'Female Fundraising Coordinator', desc: 'Identifies sponsors & manages funds',           border: 'border-t-rose-700' },
              { role: 'Male Media Coordinator',         desc: 'Manages media presence & content',              border: 'border-t-yellow-400' },
              { role: 'Female Media Coordinator',       desc: 'Promotions, photos & social media',             border: 'border-t-yellow-400' },
              { role: 'Patron',                         desc: 'Strategic guidance & mentorship',               border: 'border-t-green-500' },
              { role: 'Matron',                         desc: 'Supports female members & inclusivity',         border: 'border-t-green-500' },
            ].map(({ role, desc, border }) => (
              <div key={role} className={`bg-gray-800 rounded-2xl p-5 border-t-4 ${border}`}>
                <h3 className="font-bold text-white mb-1 text-sm">{role}</h3>
                <p className="text-gray-400 text-xs">{desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/about"
              className="inline-block bg-white text-gray-900 font-bold px-10 py-4 rounded-xl hover:bg-yellow-400 transition-colors duration-200">
              Learn More About Our Organization
            </Link>
          </div>
        </div>
      </section>

      {/* ── JOIN / MEMBERSHIP CTA ── */}
      <section className="relative bg-gray-950 py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-950/30 via-transparent to-yellow-950/10" />
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-yellow-400 text-xs font-bold uppercase tracking-widest">Membership</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-2 mb-4">Are You From Kairuku-Goilala?</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              If you are a student or staff member at PNG University of Technology from the Kairuku-Goilala district, KGSSA is your home. Join us and be part of something bigger.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gray-800 rounded-2xl p-6 border-l-4 border-rose-800">
              <h3 className="text-white font-bold mb-2">Who Can Join</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Any student or staff member at PNG University of Technology from the Kairuku or Goilala districts of Central Province — or any Unitech student faithful to the association.</p>
            </div>
            <div className="bg-gray-800 rounded-2xl p-6 border-l-4 border-yellow-400">
              <h3 className="text-white font-bold mb-2">Elections</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Executive elections are held annually. Members in their 2nd, 3rd, or final year are eligible to contest for leadership positions.</p>
            </div>
            <div className="bg-gray-800 rounded-2xl p-6 border-l-4 border-green-500">
              <h3 className="text-white font-bold mb-2">How to Connect</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Reach out via email, follow us on social media, or approach any executive member on campus to get started.</p>
            </div>
          </div>

          <div className="text-center">
            <Link href="/contact"
              className="inline-block bg-rose-800 hover:bg-rose-700 text-white font-bold px-12 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-black/30 mr-4">
              Contact Us
            </Link>
            <Link href="/about"
              className="inline-block bg-gray-700 hover:bg-gray-600 text-white font-bold px-12 py-4 rounded-xl transition-all duration-200">
              Read the Constitution
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
