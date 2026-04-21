export default function About() {
  return (
    <div className="bg-gray-950 min-h-screen">

      {/* ── HERO ── */}
      <section className="bg-gray-900 border-b border-white/5 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-yellow-400 text-black text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            Who We Are
          </span>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4">
            About <span className="text-yellow-400">KGSSA</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Kairuku-Goilala Student &amp; Staff Association — PNG University of Technology
          </p>
        </div>
      </section>

      {/* ── MISSION / VISION / GOALS ── */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

          <div className="bg-gray-800 rounded-3xl p-8 border-t-4 border-rose-700">
            <h2 className="text-xl font-black text-white mb-4 uppercase tracking-wide">Mission</h2>
            <p className="text-gray-400 leading-relaxed">
              To bring students and staff together each year to support one another, run awareness programs, and organize activities that create opportunities and benefit our communities.
            </p>
          </div>

          <div className="bg-gray-800 rounded-3xl p-8 border-t-4 border-yellow-400">
            <h2 className="text-xl font-black text-white mb-4 uppercase tracking-wide">Vision</h2>
            <p className="text-gray-400 leading-relaxed">
              To shape a united and empowered community where every student and staff member rises into leadership, carries themselves with purpose, and contributes meaningfully to the development of our people and our districts.
            </p>
          </div>

          <div className="bg-gray-800 rounded-3xl p-8 border-t-4 border-green-600">
            <h2 className="text-xl font-black text-white mb-4 uppercase tracking-wide">Goals</h2>
            <ul className="text-gray-400 space-y-2 text-sm leading-relaxed">
              {[
                'Foster cultural identity and pride',
                'Organize meaningful community events',
                'Provide peer support and mentorship',
                'Advocate for member welfare',
                'Promote academic excellence',
                'Represent our districts with pride',
              ].map(g => (
                <li key={g} className="flex items-start gap-2">
                  <span className="text-yellow-400 font-bold mt-0.5">—</span>
                  {g}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── MEMBERSHIP ── */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-yellow-400 text-xs font-bold uppercase tracking-widest">Membership</span>
            <h2 className="text-4xl font-black text-white mt-2">Who Can Join?</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-800 rounded-2xl p-7 border-l-4 border-yellow-400">
              <h3 className="text-white font-bold mb-3">Primary Members</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Any student or staff member at PNG University of Technology who originates from the Kairuku or Goilala districts of Central Province — including Kairuku-Roro LLG, Mekeo-Kui LLG, Nara-Gabadi LLG, Waitape LLG, and Tapini LLG.
              </p>
            </div>
            <div className="bg-gray-800 rounded-2xl p-7 border-l-4 border-green-500">
              <h3 className="text-white font-bold mb-3">Open Membership</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Membership is also open to any PNG University of Technology student who is faithful and committed to the association, its values, and the wellbeing of its community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT THE DISTRICTS ── */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-yellow-400 text-xs font-bold uppercase tracking-widest">Our Roots</span>
            <h2 className="text-4xl font-black text-white mt-2">Kairuku &amp; Goilala Districts</h2>
            <p className="text-gray-500 text-sm mt-1">Central Province, Papua New Guinea</p>
          </div>

          <div className="bg-gray-800 rounded-3xl p-10 mb-8">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              KGSSA represents students and staff from two districts within <span className="text-yellow-400 font-semibold">Central Province, Papua New Guinea</span> — the <span className="text-white font-semibold">Kairuku District</span> and the <span className="text-white font-semibold">Goilala District</span>. Together, these districts form the heart of our association.
            </p>
            <p className="text-gray-400 leading-relaxed">
              KGSSA exists to maintain these connections, support one another in our educational journey, and represent our districts with pride. We celebrate our diverse cultural backgrounds while working together towards shared academic and personal goals.
            </p>
          </div>

          {/* LLGs */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="text-yellow-400 text-xs font-bold uppercase tracking-widest mb-3">Kairuku District</p>
              <div className="space-y-2">
                {['Kairuku-Roro LLG', 'Mekeo-Kuni LLG', 'Nara-Gabadi LLG'].map(llg => (
                  <div key={llg} className="bg-gray-800 rounded-xl px-5 py-3 text-gray-300 text-sm font-medium border border-white/5">
                    {llg}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-yellow-400 text-xs font-bold uppercase tracking-widest mb-3">Goilala District</p>
              <div className="space-y-2">
                {['Waitape LLG', 'Tapini LLG', 'Guari Rural LLG'].map(llg => (
                  <div key={llg} className="bg-gray-800 rounded-xl px-5 py-3 text-gray-300 text-sm font-medium border border-white/5">
                    {llg}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXECUTIVE STRUCTURE ── */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-yellow-400 text-xs font-bold uppercase tracking-widest">Leadership</span>
            <h2 className="text-4xl font-black text-white mt-2">Executive Structure</h2>
            <p className="text-gray-400 mt-3 max-w-xl mx-auto text-sm">
              The executive body consists of 12 positions elected annually by eligible members.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { role: 'President',                      desc: 'Overall leadership and direction. Chairs meetings and approves major initiatives.',         border: 'border-t-rose-700' },
              { role: 'Vice President',                 desc: 'Assists the President and acts in their absence. Coordinates teamwork among executives.',   border: 'border-t-rose-700' },
              { role: 'Chairman',                       desc: 'Presides over general assemblies impartially and ensures meetings follow formal protocol.',  border: 'border-t-yellow-400' },
              { role: 'Secretary',                      desc: 'Prepares agendas, records minutes, maintains member records and official documents.',        border: 'border-t-yellow-400' },
              { role: 'Treasurer',                      desc: 'Manages all financial matters, keeps accurate records and prepares financial reports.',      border: 'border-t-green-500' },
              { role: 'Events Coordinator',             desc: 'Plans, organises and executes all association events and activities.',                       border: 'border-t-green-500' },
              { role: 'Male Fundraising Coordinator',   desc: 'Develops fundraising strategies, identifies sponsors and manages fundraising income.',       border: 'border-t-rose-700' },
              { role: 'Female Fundraising Coordinator', desc: 'Develops fundraising strategies, identifies sponsors and manages fundraising income.',       border: 'border-t-rose-700' },
              { role: 'Male Media Coordinator',         desc: 'Manages media presence, social media updates, promotional materials and event coverage.',    border: 'border-t-yellow-400' },
              { role: 'Female Media Coordinator',       desc: 'Manages media presence, social media updates, promotional materials and event coverage.',    border: 'border-t-yellow-400' },
              { role: 'Patron',                         desc: 'Provides strategic guidance and mentorship to the executive team.',                          border: 'border-t-green-500' },
              { role: 'Matron',                         desc: 'Supports female members, promotes inclusivity and a positive association environment.',      border: 'border-t-green-500' },
            ].map(({ role, desc, border }) => (
              <div key={role} className={`bg-gray-800 rounded-2xl p-6 border-t-4 ${border}`}>
                <h3 className="font-black text-white mb-2 text-sm uppercase tracking-wide">{role}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          {/* Election eligibility */}
          <div className="mt-10 bg-gray-800 rounded-2xl p-8 border border-white/5">
            <h3 className="text-white font-black mb-4 uppercase tracking-wide text-sm">Election Eligibility</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-400">
              <div className="border-l-2 border-yellow-400 pl-4">
                <p className="text-white font-semibold mb-1">President &amp; Vice President</p>
                <p>Must be in 3rd or final year of study.</p>
              </div>
              <div className="border-l-2 border-green-500 pl-4">
                <p className="text-white font-semibold mb-1">Other Executive Positions</p>
                <p>Must be in 2nd, 3rd, or final year of study.</p>
              </div>
              <div className="border-l-2 border-gray-500 pl-4">
                <p className="text-white font-semibold mb-1">First-Year Exception</p>
                <p>First-year students may be considered if no eligible senior students contest.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONSTITUTION ── */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-yellow-400 text-xs font-bold uppercase tracking-widest">Governance</span>
          <h2 className="text-4xl font-black text-white mt-2 mb-4">Our Constitution</h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            KGSSA operates under a formal constitution that outlines our governance structure, member rights, executive responsibilities, and organisational principles.
          </p>
          <a
            href="/PNG-UOT KGSSA 2ST CONSTITUTION DRAFT 2026.pdf"
            download
            className="inline-block bg-yellow-400 hover:bg-yellow-300 text-black font-black px-10 py-4 rounded-xl transition-all duration-200 shadow-lg"
          >
            Download Constitution (PDF)
          </a>
        </div>
      </section>

    </div>
  );
}
