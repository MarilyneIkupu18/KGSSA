'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const heroImages = [
  '/2025_Independence_celebration_event.jpeg',
  '/2025_CULTURAL_DANCE_PHOTO.jpeg',
];

export default function Home() {
  const [activeHeroImage, setActiveHeroImage] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveHeroImage((current) => (current + 1) % heroImages.length);
    }, 60000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      <section className="relative flex min-h-screen items-center overflow-hidden">
        {heroImages.map((src, index) => (
          <Image
            key={src}
            src={src}
            alt="KGSSA cultural celebration"
            fill
            priority={index === 0}
            className={`object-cover transition-opacity duration-1000 ${
              index === activeHeroImage ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/60 to-black/75" />
        <div className="absolute left-0 right-0 top-0 h-1 bg-yellow-400" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="space-y-6">
              <span className="inline-block rounded-full bg-yellow-400 px-4 py-2 text-xs font-bold uppercase tracking-widest text-black">
                PNG University of Technology
              </span>
              <div>
                <h1 className="text-5xl font-black leading-none tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
                  KG<span className="text-yellow-400">SSA</span>
                </h1>
                <p className="mt-3 text-base font-semibold text-yellow-300 sm:text-lg md:text-xl">
                  Kairuku-Goilala Student &amp; Staff Association
                </p>
              </div>
              <p className="max-w-lg border-l-4 border-yellow-400 pl-4 text-sm leading-relaxed text-white/80 sm:text-base">
                To shape a united and empowered community where every student and staff member rises into leadership and contributes meaningfully to our district.
              </p>
              <div className="flex flex-wrap gap-3 pt-1">
                <Link
                  href="/about"
                  className="rounded-xl bg-rose-800 px-6 py-3 text-sm font-bold text-white transition-all duration-200 hover:bg-rose-700"
                >
                  Learn More
                </Link>
                <Link
                  href="/contact"
                  className="rounded-xl bg-yellow-400 px-6 py-3 text-sm font-bold text-black transition-all duration-200 hover:bg-yellow-300"
                >
                  Get Involved
                </Link>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative h-44 w-44 overflow-hidden rounded-full bg-white shadow-2xl ring-4 ring-yellow-400 ring-offset-4 ring-offset-transparent sm:h-56 sm:w-56 md:h-72 md:w-72 lg:h-96 lg:w-96">
                <Image src="/kai-goi_logo.jpeg" alt="KGSSA Logo" fill sizes="384px" className="object-contain p-4" />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60L1440 60L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20L0 60Z" fill="#111827" />
          </svg>
        </div>
      </section>

      <section className="bg-gray-900 px-6 py-12">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 text-center md:grid-cols-4">
          {[
            { num: '10+', label: 'Events Organized', color: 'text-rose-400' },
            { num: '35+', label: 'Active Members', color: 'text-yellow-400' },
            { num: '20+', label: 'Years Active', color: 'text-green-400' },
            { num: '12', label: 'Executive Roles', color: 'text-yellow-400' },
          ].map(({ num, label, color }) => (
            <div key={label} className="rounded-2xl border border-white/5 bg-gray-800 px-3 py-6">
              <div className={`text-4xl font-black sm:text-5xl ${color}`}>{num}</div>
              <p className="mt-2 text-xs font-medium text-gray-400 sm:text-sm">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-900 px-6 py-16">
        <div className="mx-auto grid max-w-6xl items-stretch gap-8 lg:grid-cols-2">
          <div className="flex flex-col justify-between rounded-3xl border border-rose-900/50 bg-gradient-to-br from-rose-900 to-gray-900 p-8 text-white shadow-2xl">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-yellow-300">Who We Are</span>
              <h2 className="mt-3 mb-4 text-3xl font-black">Our Mission</h2>
              <p className="leading-relaxed text-red-100">
                To bring students and staff together each year to support one another, run awareness programs, and organize activities that create opportunities and benefit our communities.
              </p>
            </div>
            <div className="mt-6 h-1 w-16 rounded-full bg-yellow-400" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              { title: 'Promote Unity', color: 'border-rose-700', dot: 'bg-rose-700' },
              { title: 'Support Development', color: 'border-yellow-400', dot: 'bg-yellow-400' },
              { title: 'Accountability', color: 'border-green-500', dot: 'bg-green-500' },
              { title: 'Cultural Activities', color: 'border-yellow-400', dot: 'bg-yellow-400' },
              { title: 'Organize Events', color: 'border-rose-700', dot: 'bg-rose-700' },
              { title: 'Represent District', color: 'border-green-500', dot: 'bg-green-500' },
            ].map(({ title, color, dot }) => (
              <div key={title} className={`rounded-2xl border-l-4 bg-gray-800 p-4 ${color}`}>
                <div className={`mb-2 h-2.5 w-2.5 rounded-full ${dot}`} />
                <p className="text-xs font-semibold text-white sm:text-sm">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-950 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-yellow-400">Benefits</span>
            <h2 className="mt-2 text-3xl font-black text-white sm:text-4xl">Why Join KGSSA?</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
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
              <div key={title} className="rounded-3xl bg-gray-800 p-7 shadow-xl">
                <div className={`mb-5 h-10 w-10 rounded-xl ${accent}`} />
                <h3 className="mb-2 text-lg font-bold text-white">{title}</h3>
                <p className="text-sm leading-relaxed text-gray-400">{desc}</p>
                <div className={`mt-5 h-1 w-8 rounded-full ${bar}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-900 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center justify-between gap-8 rounded-3xl border border-rose-900/40 bg-gradient-to-r from-rose-950 via-gray-900 to-gray-900 p-8 shadow-2xl md:flex-row md:p-12">
            <div className="max-w-xl text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-yellow-400">Gallery &amp; Events</span>
              <h2 className="mt-2 mb-3 text-3xl font-black text-white">See What We&apos;ve Been Up To</h2>
              <p className="text-sm leading-relaxed text-red-100">
                From fundraising carwashes to independence celebrations and graduation nights, browse our full photo gallery from 2021 to 2026.
              </p>
            </div>
            <div className="shrink-0">
              <Link
                href="/events"
                className="inline-block whitespace-nowrap rounded-2xl bg-yellow-400 px-8 py-4 font-black text-black shadow-xl transition-all duration-200 hover:bg-yellow-300"
              >
                View Events &amp; Gallery
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-yellow-400">Structure</span>
            <h2 className="mt-2 text-3xl font-black text-white sm:text-4xl">Leadership Structure</h2>
            <p className="mx-auto mt-2 max-w-xl text-sm text-gray-400">
              12 dedicated executive positions working together to serve our community.
            </p>
          </div>
          <div className="mb-10 grid grid-cols-2 gap-4 md:grid-cols-3">
            {[
              { role: 'President', desc: 'Overall leadership and direction', border: 'border-t-rose-700' },
              { role: 'Vice President', desc: 'Assists president, leads in absence', border: 'border-t-rose-700' },
              { role: 'Chairman', desc: 'Presides over meetings impartially', border: 'border-t-yellow-400' },
              { role: 'Secretary', desc: 'Records, minutes and correspondence', border: 'border-t-yellow-400' },
              { role: 'Treasurer', desc: 'Manages finances and reports', border: 'border-t-green-500' },
              { role: 'Events Coordinator', desc: 'Plans and executes all events', border: 'border-t-green-500' },
              { role: 'Male Fundraising Coordinator', desc: 'Develops fundraising strategies', border: 'border-t-rose-700' },
              { role: 'Female Fundraising Coordinator', desc: 'Manages funds and sponsors', border: 'border-t-rose-700' },
              { role: 'Male Media Coordinator', desc: 'Manages media and content', border: 'border-t-yellow-400' },
              { role: 'Female Media Coordinator', desc: 'Promotions and social media', border: 'border-t-yellow-400' },
              { role: 'Patron', desc: 'Strategic guidance and mentorship', border: 'border-t-green-500' },
              { role: 'Matron', desc: 'Supports female members', border: 'border-t-green-500' },
            ].map(({ role, desc, border }) => (
              <div key={role} className={`rounded-2xl border-t-4 bg-gray-800 p-4 ${border}`}>
                <h3 className="mb-1 text-xs font-bold text-white sm:text-sm">{role}</h3>
                <p className="text-xs text-gray-400">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/about"
              className="inline-block rounded-xl bg-white px-8 py-3 text-sm font-bold text-gray-900 transition-colors duration-200 hover:bg-yellow-400"
            >
              Learn More About Our Organization
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 bg-gray-900 px-6 py-10">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-6 rounded-2xl border border-yellow-400/20 bg-gray-800 px-8 py-6 sm:flex-row">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-yellow-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <div>
              <p className="text-base font-black text-white">Need help navigating? Ask our chatbot!</p>
              <p className="mt-0.5 text-xs text-gray-400">
                Ask about KGSSA, membership, events, or learn words in Kairuku-Roro, Mekeo-Kuni and Nara-Gabadi.
              </p>
            </div>
          </div>
          <div className="shrink-0">
            <button
              onClick={() => {
                const event = new CustomEvent('openKGSSAChat');
                window.dispatchEvent(event);
              }}
              className="text-sm font-black uppercase tracking-widest text-yellow-400 transition-colors hover:text-yellow-300"
            >
              Open chat
            </button>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gray-950 px-6 py-16">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-950/30 via-transparent to-yellow-950/10" />
        <div className="relative z-10 mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-yellow-400">Membership</span>
            <h2 className="mt-2 mb-3 text-3xl font-black text-white sm:text-4xl">Are You From Kairuku-Goilala?</h2>
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-gray-400">
              If you are a student or staff member at PNG University of Technology from the Kairuku-Goilala district, KGSSA is your home.
            </p>
          </div>
          <div className="mb-10 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
            <div className="rounded-2xl border-l-4 border-rose-800 bg-gray-800 p-5">
              <h3 className="mb-2 text-sm font-bold text-white">Who Can Join</h3>
              <p className="text-xs leading-relaxed text-gray-400">
                Any student or staff from Kairuku or Goilala districts, or any Unitech student faithful to the association.
              </p>
            </div>
            <div className="rounded-2xl border-l-4 border-yellow-400 bg-gray-800 p-5">
              <h3 className="mb-2 text-sm font-bold text-white">Elections</h3>
              <p className="text-xs leading-relaxed text-gray-400">
                Held annually. Members in 2nd, 3rd, or final year are eligible to contest for leadership positions.
              </p>
            </div>
            <div className="rounded-2xl border-l-4 border-green-500 bg-gray-800 p-5">
              <h3 className="mb-2 text-sm font-bold text-white">How to Connect</h3>
              <p className="text-xs leading-relaxed text-gray-400">
                Reach out via email, follow us on social media, or approach any executive member on campus.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-xl bg-rose-800 px-8 py-3 text-sm font-bold text-white transition-all duration-200 hover:bg-rose-700"
            >
              Contact Us
            </Link>
            <Link
              href="/about"
              className="rounded-xl bg-gray-700 px-8 py-3 text-sm font-bold text-white transition-all duration-200 hover:bg-gray-600"
            >
              Read the Constitution
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
