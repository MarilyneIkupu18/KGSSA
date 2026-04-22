'use client';

import Image from 'next/image';
import { useState } from 'react';

const yearlyEvents = {
  2026: [
    {
      src: '2026_central_graduants_night_event.jpeg',
      title: 'Central Graduation Night Event',
      description: 'Celebrating the achievements of our graduates in a memorable evening filled with joy and pride.',
      tall: false,
    },
    {
      src: '2026_Kai-Goi_President_Vice-President_and_Patron.jpeg',
      title: 'Leadership Team 2026',
      description: 'The 2026 KGSSA leadership team guiding and supporting our community.',
      tall: false,
    },
    {
      src: 'Kai-goi_2026_orientation.jpeg',
      title: '2026 Orientation Program',
      description: 'Welcoming new members to KGSSA and introducing them to our vibrant community.',
      tall: false,
    },
    {
      src: '2026_Kai-Goi_Volleyball_team_with_new_Kai-Goi_Uniforms.jpeg',
      title: 'KGSSA Volleyball Team 2026',
      description: 'The KGSSA volleyball team after a game, proudly wearing their Kairuku-Goilala jerseys.',
      tall: true,
    },
  ],
  2025: [
    {
      src: '2025_Independence_celebration_event.jpeg',
      title: 'Independence Celebration Event',
      description: 'Celebrating national pride with cultural performances, community gathering and traditional attire.',
      tall: false,
    },
    {
      src: '2025_Kai-Goi_orientation_event.jpeg',
      title: 'Orientation Event 2025',
      description: 'Introducing new students to KGSSA and strengthening community bonds.',
      tall: false,
    },
    {
      src: '2025_CULTURAL_DANCE_PHOTO.jpeg',
      title: 'Cultural Group Photo Before the 50th Anniversary Independence Dance',
      description: 'A cultural group photo captured before the 50th anniversary independence dance celebration.',
      tall: false,
    },
  ],
  2024: [
    {
      src: '2024_Kai-Goi_fundraising_Uni_games.jpeg',
      title: 'University Games Fundraising',
      description: 'Raising funds through sports and games at the university championships.',
      tall: false,
    },
    {
      src: '2024_Kai-Goi_orientation_program.jpeg',
      title: 'Orientation Program 2024',
      description: 'New member integration and community building activities.',
      tall: false,
    },
  ],
  2023: [
    {
      src: '2023_kai_goi Mainohana Awaeness program day session.jpeg',
      title: 'Mainohana Awareness Program - Day Session',
      description: 'Community awareness program at Mainohana Secondary School during the daytime session.',
      tall: false,
    },
    {
      src: '2023_kai_goi Mainohana Awaeness program event after shopping.jpeg',
      title: 'Mainohana Awareness Program - After Shopping',
      description: 'Outreach program conducted after community shopping activities.',
      tall: false,
    },
    {
      src: '2023_kai_goi Mainohana Awaeness program event group photo at the school gate.jpeg',
      title: 'Mainohana School Gate Group Photo',
      description: 'Group gathering at the school gate during our awareness program.',
      tall: false,
    },
    {
      src: '2023_kai_goi Mainohana Awaeness program event group photo.jpeg',
      title: 'Mainohana Awareness Program - Group Photo',
      description: 'Community members and students united for an awareness campaign.',
      tall: false,
    },
  ],
  2022: [
    {
      src: '2022 Kai-Goi Awareness program at Mainohana sec combine with all university kai-goi students.jpeg',
      title: 'Awareness Program - Secondary and University Students',
      description: 'Joint awareness initiative bringing together secondary and university students.',
      tall: false,
    },
    {
      src: '2022 Kai-Goi Awareness program at Mainohana- all university kai-goi students grup phto.jpeg',
      title: 'University Students Group Photo',
      description: 'KGSSA university members gathered for a community awareness mission.',
      tall: false,
    },
  ],
  2021: [
    {
      src: '2021_Kai_Goi Carwash_event_fundraising.jpeg',
      title: 'Carwash Fundraising Event',
      description: 'Community service and fundraising through our popular carwash event.',
      tall: false,
    },
    {
      src: '2021_Kai_Goi Carwash_event_fundraising_banner.jpeg',
      title: 'Carwash Event Banner',
      description: 'Official banner from our successful fundraising carwash initiative.',
      tall: false,
    },
  ],
};

const culturalAlbum = [
  {
    src: '2025_Independence_celebration_event.jpeg',
    title: 'Independence Celebration Cultural Attire',
    description: 'Members dressed in cultural attire during the 2025 independence celebration.',
  },
  {
    src: '2025_CULTURAL_DANCE_PHOTO.jpeg',
    title: 'Traditional Group Photo Before the Independence Dance',
    description: 'Traditional and cultural attire captured before the 50th anniversary independence dance.',
  },
];

export default function Events() {
  const [selectedYear, setSelectedYear] = useState<keyof typeof yearlyEvents | null>(null);
  const years = Object.keys(yearlyEvents)
    .sort((a, b) => parseInt(b) - parseInt(a)) as Array<keyof typeof yearlyEvents>;

  return (
    <div className="min-h-screen bg-gray-950">
      <section className="border-b border-white/5 bg-gray-900 px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <span className="mb-6 inline-block rounded-full bg-yellow-400 px-4 py-2 text-xs font-bold uppercase tracking-widest text-black">
            Gallery
          </span>
          <h1 className="mb-4 text-5xl font-black text-white md:text-6xl">
            Events &amp; <span className="text-yellow-400">Gallery</span>
          </h1>
          <p className="text-lg text-gray-400">Celebrating moments, building memories</p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-wrap justify-center gap-3">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(selectedYear === year ? null : year)}
                className={`rounded-xl px-6 py-3 text-sm font-black uppercase tracking-wide transition-all duration-200 ${
                  selectedYear === year
                    ? 'bg-yellow-400 text-black shadow-lg'
                    : 'border border-white/5 bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {year}
              </button>
            ))}
          </div>

          <div className="space-y-14">
            {years.map((year) => (
              <div key={year}>
                {(!selectedYear || selectedYear === year) && (
                  <div>
                    <h2 className="mb-8 border-b-2 border-yellow-400/40 pb-4 text-3xl font-black text-white">
                      {year} <span className="text-yellow-400">Events</span>
                    </h2>
                    <div className="grid gap-8 md:grid-cols-2">
                      {yearlyEvents[year].map((event, idx) => (
                        <div
                          key={`${year}-${idx}`}
                          className="overflow-hidden rounded-2xl border border-white/5 bg-gray-800 shadow-lg transition-all duration-200 hover:scale-[1.02] hover:shadow-2xl"
                        >
                          <div className={`relative w-full ${event.tall ? 'h-[480px]' : 'h-64'}`}>
                            <Image
                              src={`/${event.src}`}
                              alt={event.title}
                              fill
                              className={event.tall ? 'object-contain' : 'object-cover'}
                              style={event.tall ? { background: '#111827' } : undefined}
                            />
                          </div>
                          <div className="p-6">
                            <h3 className="mb-2 text-xl font-black text-white">{event.title}</h3>
                            <p className="text-sm leading-relaxed text-gray-400">{event.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-900 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-yellow-400">Special Album</span>
            <h2 className="mt-2 text-4xl font-black text-white">Traditional &amp; Cultural Attires</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-gray-400">
              A dedicated album for the traditional and cultural looks that represent the pride, identity and celebration of our people.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {culturalAlbum.map((item) => (
              <article key={item.src} className="overflow-hidden rounded-3xl border border-white/5 bg-gray-800 shadow-xl">
                <div className="relative h-72 w-full">
                  <Image src={`/${item.src}`} alt={item.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-2xl font-black text-white">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-400">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-900 px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-10 text-4xl font-black text-white">Our Event Impact</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/5 bg-gray-800 px-4 py-8">
              <div className="mb-2 text-5xl font-black text-rose-400">10+</div>
              <p className="font-medium text-gray-400">Events Per Year</p>
            </div>
            <div className="rounded-2xl border border-white/5 bg-gray-800 px-4 py-8">
              <div className="mb-2 text-5xl font-black text-yellow-400">35+</div>
              <p className="font-medium text-gray-400">Active Members</p>
            </div>
            <div className="rounded-2xl border border-white/5 bg-gray-800 px-4 py-8">
              <div className="mb-2 text-5xl font-black text-green-400">20+</div>
              <p className="font-medium text-gray-400">Years Running</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
