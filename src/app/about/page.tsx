import Image from 'next/image';

const homelandHighlights = [
  {
    title: 'Hiritano Highway',
    image: '/HIRITANO_HIGHWAY.jpeg',
    description:
      'The Hiritano Highway is one of the most recognisable routes connected to our home region in Central Province and reflects the journey many of our members identify with.',
  },
  {
    title: 'Yule Island',
    image: '/YULE_ISLAND_KAIRUKU.jpeg',
    description:
      'Yule Island is the only island in Kairuku and is an important part of the district identity that KGSSA proudly represents.',
  },
  {
    title: 'Goilala Mountains',
    image: '/GOILALA_MOUNTAINS.webp',
    description:
      'The cold mountain landscapes of Goilala are a powerful part of our roots and remind us of the strength, resilience and uniqueness of our people.',
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-gray-950">
      <section className="border-b border-white/5 bg-gray-900 px-6 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <span className="mb-6 inline-block rounded-full bg-yellow-400 px-4 py-2 text-xs font-bold uppercase tracking-widest text-black">
            Who We Are
          </span>
          <h1 className="mb-4 text-5xl font-black text-white md:text-6xl">
            About <span className="text-yellow-400">KGSSA</span>
          </h1>
          <p className="text-lg text-gray-400">
            Kairuku-Goilala Student &amp; Staff Association at PNG University of Technology
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          <div className="rounded-3xl border-t-4 border-rose-700 bg-gray-800 p-8">
            <h2 className="mb-4 text-xl font-black uppercase tracking-wide text-white">Mission</h2>
            <p className="leading-relaxed text-gray-400">
              To bring students and staff together each year to support one another, run awareness programs, and organize activities that create opportunities and benefit our communities.
            </p>
          </div>

          <div className="rounded-3xl border-t-4 border-yellow-400 bg-gray-800 p-8">
            <h2 className="mb-4 text-xl font-black uppercase tracking-wide text-white">Vision</h2>
            <p className="leading-relaxed text-gray-400">
              To shape a united and empowered community where every student and staff member rises into leadership, carries themselves with purpose, and contributes meaningfully to the development of our people and our districts.
            </p>
          </div>

          <div className="rounded-3xl border-t-4 border-green-600 bg-gray-800 p-8">
            <h2 className="mb-4 text-xl font-black uppercase tracking-wide text-white">Goals</h2>
            <ul className="space-y-2 text-sm leading-relaxed text-gray-400">
              {[
                'Foster cultural identity and pride',
                'Organize meaningful community events',
                'Provide peer support and mentorship',
                'Advocate for member welfare',
                'Promote academic excellence',
                'Represent our districts with pride',
              ].map((goal) => (
                <li key={goal} className="flex items-start gap-2">
                  <span className="mt-0.5 font-bold text-yellow-400">-</span>
                  {goal}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-yellow-400">Membership</span>
            <h2 className="mt-2 text-4xl font-black text-white">Who Can Join?</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border-l-4 border-yellow-400 bg-gray-800 p-7">
              <h3 className="mb-3 font-bold text-white">Primary Members</h3>
              <p className="text-sm leading-relaxed text-gray-400">
                Any student or staff member at PNG University of Technology who originates from the Kairuku or Goilala districts of Central Province, including Kairuku-Roro LLG, Mekeo-Kuni LLG, Nara-Gabadi LLG, Waitape LLG, Tapini LLG, and Guari Rural LLG.
              </p>
            </div>
            <div className="rounded-2xl border-l-4 border-green-500 bg-gray-800 p-7">
              <h3 className="mb-3 font-bold text-white">Open Membership</h3>
              <p className="text-sm leading-relaxed text-gray-400">
                Membership is also open to any PNG University of Technology student who is faithful and committed to the association, its values, and the wellbeing of its community.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-yellow-400">Our Roots</span>
            <h2 className="mt-2 text-4xl font-black text-white">Kairuku &amp; Goilala Districts</h2>
            <p className="mt-1 text-sm text-gray-500">Central Province, Papua New Guinea</p>
          </div>

          <div className="mb-8 rounded-3xl bg-gray-800 p-10 text-center">
            <p className="mb-6 text-lg leading-relaxed text-gray-300">
              KGSSA represents students and staff from two districts within <span className="font-semibold text-yellow-400">Central Province, Papua New Guinea</span>: the <span className="font-semibold text-white">Kairuku District</span> and the <span className="font-semibold text-white">Goilala District</span>. Together, these districts form the heart of our association.
            </p>
            <p className="leading-relaxed text-gray-400">
              KGSSA exists to maintain these connections, support one another in our educational journey, and represent our districts with pride. We celebrate our diverse cultural backgrounds while working together towards shared academic and personal goals.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="text-center">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-yellow-400">Kairuku District</p>
              <div className="space-y-2">
                {['Kairuku-Roro LLG', 'Mekeo-Kuni LLG', 'Nara-Gabadi LLG'].map((llg) => (
                  <div key={llg} className="rounded-xl border border-white/5 bg-gray-800 px-5 py-3 text-sm font-medium text-gray-300">
                    {llg}
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-yellow-400">Goilala District</p>
              <div className="space-y-2">
                {['Waitape LLG', 'Tapini LLG', 'Guari Rural LLG'].map((llg) => (
                  <div key={llg} className="rounded-xl border border-white/5 bg-gray-800 px-5 py-3 text-sm font-medium text-gray-300">
                    {llg}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-yellow-400">Homeland Highlights</span>
            <h2 className="mt-2 text-4xl font-black text-white">Places That Reflect Our Origin</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-gray-400">
              These places connect the association back to the land, routes, coastlines and mountain country that shape the identity of the Kairuku-Goilala people.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {homelandHighlights.map((item) => (
              <article key={item.title} className="overflow-hidden rounded-3xl border border-white/5 bg-gray-800 shadow-xl">
                <div className="relative h-64 w-full">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="mb-3 text-xl font-black text-white">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-400">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-900 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-yellow-400">Leadership</span>
            <h2 className="mt-2 text-4xl font-black text-white">Executive Structure</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-gray-400">
              The executive body consists of 12 positions elected annually by eligible members.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              { role: 'President', desc: 'Overall leadership and direction. Chairs meetings and approves major initiatives.', border: 'border-t-rose-700' },
              { role: 'Vice President', desc: 'Assists the President and acts in their absence. Coordinates teamwork among executives.', border: 'border-t-rose-700' },
              { role: 'Chairman', desc: 'Presides over general assemblies impartially and ensures meetings follow formal protocol.', border: 'border-t-yellow-400' },
              { role: 'Secretary', desc: 'Prepares agendas, records minutes, maintains member records and official documents.', border: 'border-t-yellow-400' },
              { role: 'Treasurer', desc: 'Manages all financial matters, keeps accurate records and prepares financial reports.', border: 'border-t-green-500' },
              { role: 'Events Coordinator', desc: 'Plans, organises and executes all association events and activities.', border: 'border-t-green-500' },
              { role: 'Male Fundraising Coordinator', desc: 'Develops fundraising strategies, identifies sponsors and manages fundraising income.', border: 'border-t-rose-700' },
              { role: 'Female Fundraising Coordinator', desc: 'Develops fundraising strategies, identifies sponsors and manages fundraising income.', border: 'border-t-rose-700' },
              { role: 'Male Media Coordinator', desc: 'Manages media presence, social media updates, promotional materials and event coverage.', border: 'border-t-yellow-400' },
              { role: 'Female Media Coordinator', desc: 'Manages media presence, social media updates, promotional materials and event coverage.', border: 'border-t-yellow-400' },
              { role: 'Patron', desc: 'Provides strategic guidance and mentorship to the executive team.', border: 'border-t-green-500' },
              { role: 'Matron', desc: 'Supports female members, promotes inclusivity and a positive association environment.', border: 'border-t-green-500' },
            ].map(({ role, desc, border }) => (
              <div key={role} className={`rounded-2xl border-t-4 bg-gray-800 p-6 ${border}`}>
                <h3 className="mb-2 text-sm font-black uppercase tracking-wide text-white">{role}</h3>
                <p className="text-xs leading-relaxed text-gray-400">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-white/5 bg-gray-800 p-8">
            <h3 className="mb-4 text-sm font-black uppercase tracking-wide text-white">Election Eligibility</h3>
            <div className="grid gap-4 text-sm text-gray-400 md:grid-cols-3">
              <div className="border-l-2 border-yellow-400 pl-4">
                <p className="mb-1 font-semibold text-white">President &amp; Vice President</p>
                <p>Must be in 3rd or final year of study.</p>
              </div>
              <div className="border-l-2 border-green-500 pl-4">
                <p className="mb-1 font-semibold text-white">Other Executive Positions</p>
                <p>Must be in 2nd, 3rd, or final year of study.</p>
              </div>
              <div className="border-l-2 border-gray-500 pl-4">
                <p className="mb-1 font-semibold text-white">First-Year Exception</p>
                <p>First-year students may be considered if no eligible senior students contest.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-yellow-400">Governance</span>
          <h2 className="mt-2 mb-4 text-4xl font-black text-white">Our Constitution</h2>
          <p className="mb-8 leading-relaxed text-gray-400">
            KGSSA operates under a formal constitution that outlines our governance structure, member rights, executive responsibilities, and organisational principles.
          </p>
          <a
            href="/PNG-UOT KGSSA FINAL CONSTITUTION DRAFT 2026.pdf"
            download
            className="inline-block rounded-xl bg-yellow-400 px-10 py-4 font-black text-black shadow-lg transition-all duration-200 hover:bg-yellow-300"
          >
            Download Constitution (PDF)
          </a>
        </div>
      </section>
    </div>
  );
}
