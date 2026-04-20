'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Events() {
  const events = {
    2026: [
      {
        src: '2026_central_graduants_night_event.jpeg',
        title: 'Central Graduation Night Event',
        description: 'Celebrating the achievements of our graduates in a memorable evening filled with joy and pride',
        tall: false,
      },
      {
        src: '2026_Kai-Goi_President_Vice-President_and_Patron.jpeg',
        title: 'Leadership Team 2026',
        description: 'The 2026 KGSSA Leadership — President, Vice-President, and Patron guiding our community',
        tall: false,
      },
      {
        src: 'Kai-goi_2026_orientation.jpeg',
        title: '2026 Orientation Program',
        description: 'Welcoming new members to KGSSA and introducing them to our vibrant community',
        tall: false,
      },
      {
        src: '2026_Kai-Goi_Volleyball_team_with_new_Kai-Goi_Uniforms.jpeg',
        title: 'KGSSA Volleyball Team 2026',
        description: 'The KGSSA volleyball team after a game, proudly sporting their Kairuku-Goilala jerseys',
        tall: true,
      },
    ],
    2025: [
      {
        src: '2025_Independence_celebration_event.jpeg',
        title: 'Independence Celebration Event',
        description: 'Celebrating our national pride with cultural performances and community gathering',
        tall: false,
      },
      {
        src: '2025_Kai-Goi_orientation_event.jpeg',
        title: 'Orientation Event 2025',
        description: 'Introducing new students to KGSSA and fostering community bonds',
        tall: false,
      },
    ],
    2024: [
      {
        src: '2024_Kai-Goi_fundraising_Uni_games.jpeg',
        title: 'University Games Fundraising',
        description: 'Raising funds through sports and games at the university championships',
        tall: false,
      },
      {
        src: '2024_Kai-Goi_orientation_program.jpeg',
        title: 'Orientation Program 2024',
        description: 'New member integration and community building activities',
        tall: false,
      },
    ],
    2023: [
      {
        src: '2023_kai_goi Mainohana Awaeness program day session.jpeg',
        title: 'Mainohana Awareness Program - Day Session',
        description: 'Community awareness program at Mainohana Secondary School during daytime',
        tall: false,
      },
      {
        src: '2023_kai_goi Mainohana Awaeness program event after shopping.jpeg',
        title: 'Mainohana Awareness Program - After Shopping',
        description: 'Outreach program conducted after community shopping activities',
        tall: false,
      },
      {
        src: '2023_kai_goi Mainohana Awaeness program event group photo at the school gate.jpeg',
        title: 'Mainohana School Gate Group Photo',
        description: 'Group gathering at the school gate during our awareness program',
        tall: false,
      },
      {
        src: '2023_kai_goi Mainohana Awaeness program event group photo.jpeg',
        title: 'Mainohana Awareness Program - Group Photo',
        description: 'Community members and students united for awareness campaign',
        tall: false,
      },
    ],
    2022: [
      {
        src: '2022 Kai-Goi Awareness program at Mainohana sec combine with all university kai-goi students.jpeg',
        title: 'Awareness Program - Secondary & University Students',
        description: 'Joint awareness initiative bringing together secondary and university students',
        tall: false,
      },
      {
        src: '2022 Kai-Goi Awareness program at Mainohana- all university kai-goi students grup phto.jpeg',
        title: 'University Students Group Photo',
        description: 'KGSSA university members gathered for community awareness mission',
        tall: false,
      },
    ],
    2021: [
      {
        src: '2021_Kai_Goi Carwash_event_fundraising.jpeg',
        title: 'Carwash Fundraising Event',
        description: 'Community service and fundraising through our popular carwash event',
        tall: false,
      },
      {
        src: '2021_Kai_Goi Carwash_event_fundraising_banner.jpeg',
        title: 'Carwash Event Banner',
        description: 'Official banner from our successful fundraising carwash initiative',
        tall: false,
      },
    ],
  };

  const [selectedYear, setSelectedYear] = useState<keyof typeof events | null>(null);
  const years = Object.keys(events).sort((a, b) => parseInt(b) - parseInt(a)) as unknown as Array<keyof typeof events>;

  return (
    <div className="bg-gray-950 min-h-screen">

      {/* Header */}
      <section className="bg-gray-900 border-b border-white/5 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-yellow-400 text-black text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            Gallery
          </span>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4">
            Events &amp; <span className="text-yellow-400">Gallery</span>
          </h1>
          <p className="text-gray-400 text-lg">Celebrating moments, building memories</p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">

          {/* Year Tabs */}
          <div className="flex flex-wrap gap-3 mb-14 justify-center">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(selectedYear === year ? null : year)}
                className={`px-6 py-3 rounded-xl font-black text-sm uppercase tracking-wide transition-all duration-200 ${
                  selectedYear === year
                    ? 'bg-yellow-400 text-black shadow-lg'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white border border-white/5'
                }`}
              >
                {year}
              </button>
            ))}
          </div>

          {/* Events Grid */}
          <div className="space-y-14">
            {years.map((year) => (
              <div key={year}>
                {(!selectedYear || selectedYear === year) && (
                  <div>
                    <h2 className="text-3xl font-black text-white mb-8 pb-4 border-b-2 border-yellow-400/40">
                      {year} <span className="text-yellow-400">Events</span>
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                      {events[year as keyof typeof events].map((event, idx) => (
                        <div
                          key={idx}
                          className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-200 border border-white/5"
                        >
                          <div className={`relative w-full ${event.tall ? 'h-[480px]' : 'h-64'}`}>
                            <Image
                              src={`/${event.src}`}
                              alt={event.title}
                              fill
                              className={event.tall ? 'object-contain' : 'object-cover'}
                              style={event.tall ? { background: '#111827' } : {}}
                            />
                          </div>
                          <div className="p-6">
                            <h3 className="text-xl font-black text-white mb-2">{event.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{event.description}</p>
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

      {/* Stats */}
      <section className="py-16 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black text-white mb-10">Our Event Impact</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-800 rounded-2xl py-8 px-4 border border-white/5">
              <div className="text-5xl font-black text-rose-400 mb-2">10+</div>
              <p className="text-gray-400 font-medium">Events Per Year</p>
            </div>
            <div className="bg-gray-800 rounded-2xl py-8 px-4 border border-white/5">
              <div className="text-5xl font-black text-yellow-400 mb-2">35+</div>
              <p className="text-gray-400 font-medium">Active Members</p>
            </div>
            <div className="bg-gray-800 rounded-2xl py-8 px-4 border border-white/5">
              <div className="text-5xl font-black text-green-400 mb-2">20+</div>
              <p className="text-gray-400 font-medium">Years Running</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
