'use client';

import { useEffect, useRef, useState } from 'react';

type Message = { from: 'user' | 'bot'; text: string };

const langData: Record<string, { kairukuRoro?: string; mekeoKuni?: string; naraGabadi?: string; note?: string }> = {
  girl: { kairukuRoro: 'Uaho', mekeoKuni: 'Iviau', naraGabadi: "Va'isi" },
  boy: { kairukuRoro: 'Hibito,i', note: 'Haue is a swag name for boys in Kairuku-Roro.' },
  'good morning': { kairukuRoro: 'Raurani Namona', mekeoKuni: 'Amagai Felo' },
  'good night': { kairukuRoro: 'Rabi Namona', mekeoKuni: 'Gapi Felo', naraGabadi: 'Vavuga Nonoa' },
  'good evening': { kairukuRoro: 'Rabirabi Namona', mekeoKuni: 'GapiGapi Felo' },
  goodbye: { kairukuRoro: 'Haparua', naraGabadi: 'Kamaeno' },
};

const kgssaFAQ: Record<string, string> = {
  join: 'To join KGSSA, you must be a student or staff at PNG University of Technology from the Kairuku or Goilala districts, or any Unitech student faithful to the association. Reach out via email at kgssa.pngut@gmail.com or approach any executive member on campus.',
  membership: 'To join KGSSA, you must be a student or staff at PNG University of Technology from the Kairuku or Goilala districts, or any Unitech student faithful to the association. Reach out via email at kgssa.pngut@gmail.com or approach any executive member on campus.',
  member: 'To join KGSSA, you must be a student or staff at PNG University of Technology from the Kairuku or Goilala districts, or any Unitech student faithful to the association. Reach out via email at kgssa.pngut@gmail.com or approach any executive member on campus.',
  'if im not from kaigoi': 'If you are not from Kairuku or Goilala, you may still join as a faithful and committed Unitech student who supports the association and its community.',
  "if i'm not from kaigoi": 'If you are not from Kairuku or Goilala, you may still join as a faithful and committed Unitech student who supports the association and its community.',
  'if im not from kai-goi': 'If you are not from Kairuku or Goilala, you may still join as a faithful and committed Unitech student who supports the association and its community.',
  'faithful student': 'Yes. Membership can still be open to a faithful and committed Unitech student who supports KGSSA and its community, even if they are not from Kairuku or Goilala.',
  faithful: 'Yes. Even if you are not from Kairuku or Goilala, membership can still be open to any Unitech student who is faithful and committed to the association and its community.',
  'not from': 'If you are not from Kairuku or Goilala, you may still join as a faithful and committed Unitech student who supports the association and its community.',
  kaigoi: 'KGSSA mainly represents students and staff from Kairuku and Goilala, but membership can also be open to faithful Unitech students who support the association.',
  event: 'Check our Events and Gallery page for all past and upcoming events. We organise fundraising, orientation, awareness programs, cultural events and more.',
  gallery: 'Check our Events and Gallery page for all past and upcoming events from 2021 to 2026.',
  contact: 'You can reach us at kgssa.pngut@gmail.com, on Facebook (KGSSA Page and Group), or on Instagram @_kgssa.',
  email: 'Our email address is kgssa.pngut@gmail.com. Feel free to send us a message anytime.',
  gmail: 'Our email address is kgssa.pngut@gmail.com. Feel free to send us a message anytime.',
  mail: 'Our email address is kgssa.pngut@gmail.com. Feel free to send us a message anytime.',
  'fb group': 'Find us on our Facebook Group: https://facebook.com/groups/506427326771552/',
  'fb page': 'Find us on our Facebook Page: https://www.facebook.com/profile.php?id=61575377257618',
  group: 'Find us on our Facebook Group: https://facebook.com/groups/506427326771552/',
  instagram: 'Follow us on Instagram @_kgssa: https://www.instagram.com/_kgssa',
  facebook: 'Find us on Facebook. KGSSA Page: https://www.facebook.com/profile.php?id=61575377257618 and KGSSA Group: https://facebook.com/groups/506427326771552/',
  follow: 'Follow us on Facebook (KGSSA Page and Group) and Instagram @_kgssa.',
  president: 'The President provides overall leadership and direction for KGSSA. Elections are held annually, and the President must be in 3rd or final year of study.',
  vice: 'The Vice President assists the President and acts in their absence. They must be in 3rd or final year of study.',
  chairman: 'The Chairman presides over general assemblies impartially and ensures meetings follow formal protocol.',
  secretary: 'The Secretary prepares agendas, records minutes, and maintains all official documents.',
  treasurer: 'The Treasurer manages all financial matters and keeps accurate records of income and expenditure.',
  executive: 'KGSSA has 12 executive positions: President, Vice President, Chairman, Secretary, Treasurer, Events Coordinator, Male and Female Fundraising Coordinators, Male and Female Media Coordinators, Patron and Matron.',
  patron: 'The Patron provides strategic guidance and mentorship to the executive team.',
  matron: 'The Matron supports female members and promotes inclusivity within the association.',
  fundrais: 'KGSSA runs fundraising activities including carwash events and university games fundraising to support association initiatives.',
  media: 'Our Male and Female Media Coordinators manage social media, promotional materials, and event coverage.',
  constitution: 'You can download the KGSSA Constitution (2026) from the About Us page on this website.',
  download: 'The KGSSA Constitution (2026) is available for download on the About Us page.',
  district: 'KGSSA represents students from the Kairuku and Goilala districts of Central Province, PNG, including Kairuku-Roro LLG, Mekeo-Kuni LLG, Nara-Gabadi LLG, Waitape LLG, Tapini LLG and Guari Rural LLG.',
  kairuku: 'Kairuku is one of the two districts KGSSA represents. It includes Kairuku-Roro LLG, Mekeo-Kuni LLG and Nara-Gabadi LLG.',
  goilala: 'Goilala is one of the two districts KGSSA represents. It includes Waitape LLG, Tapini LLG and Guari Rural LLG.',
  llg: 'KGSSA covers 6 LLGs: Kairuku-Roro, Mekeo-Kuni, Nara-Gabadi (Kairuku District) and Waitape, Tapini, Guari Rural (Goilala District).',
  location: 'KGSSA is based at PNG University of Technology, Lae, Morobe Province, Papua New Guinea.',
  unitech: 'KGSSA is the student and staff association for Kairuku-Goilala people at PNG University of Technology in Lae.',
  png: 'KGSSA is based at PNG University of Technology, Lae, Morobe Province, Papua New Guinea.',
  lae: 'KGSSA is based at PNG University of Technology, Lae, Morobe Province, Papua New Guinea.',
  election: 'Elections are held annually. President and Vice President must be in 3rd or final year. Other positions require 2nd year or above. First-year students may be considered if no senior students contest.',
  vote: 'Elections are held annually by majority vote of members present and eligible to vote.',
  year: 'President and Vice President must be in 3rd or final year. Other executive positions require 2nd year or above.',
  language: 'You can ask me how to say words in Kairuku-Roro, Mekeo-Kuni, or Nara-Gabadi. Try: "How do you say good morning in Kairuku?" or "What is girl in Mekeo?"',
  hello: 'Hello! I am the KGSSA chatbot. I can answer questions about KGSSA and also teach you words in Kairuku-Roro, Mekeo-Kuni and Nara-Gabadi languages. What would you like to know?',
  hi: 'Hi there! Ask me anything about KGSSA or try asking how to say a word in our local languages.',
  'who are you': 'I am the KGSSA chatbot. I can help you learn about our association and even teach you words in our local languages.',
  'what is kgssa': 'KGSSA stands for Kairuku-Goilala Student and Staff Association. We are a student association at PNG University of Technology representing students and staff from the Kairuku and Goilala districts of Central Province, PNG.',
  kgssa: 'KGSSA stands for Kairuku-Goilala Student and Staff Association, a student association at PNG University of Technology representing people from the Kairuku and Goilala districts.',
  mission: 'Our mission is to bring students and staff together each year to support one another, run awareness programs, and organize activities that create opportunities and benefit our communities.',
  vision: 'Our vision is to shape a united and empowered community where every student and staff member rises into leadership and contributes meaningfully to our districts.',
  about: 'KGSSA is the Kairuku-Goilala Student and Staff Association at PNG University of Technology. We represent students and staff from the Kairuku and Goilala districts of Central Province, PNG.',
  website: 'You are currently on the KGSSA website. You can visit our pages: Home, About Us, Events and Gallery, and Contact Us.',
  page: 'Our website has 4 pages: Home, About Us, Events and Gallery, and Contact Us.',
};

function getLanguageFromQuery(query: string): string | null {
  if (query.includes('kairuku')) return 'kairukuRoro';
  if (query.includes('roro')) return 'kairukuRoro';
  if (query.includes('mekeo')) return 'mekeoKuni';
  if (query.includes('kuni')) return 'mekeoKuni';
  if (query.includes('nara') || query.includes('gabadi')) return 'naraGabadi';
  return null;
}

function getWordFromQuery(query: string): string | null {
  for (const word of Object.keys(langData)) {
    if (query.includes(word)) return word;
  }
  return null;
}

function formatLangResponse(word: string, lang: string | null): string {
  const data = langData[word];
  if (!data) return '';

  if (lang) {
    const val = data[lang as keyof typeof data];
    const langName = lang === 'kairukuRoro' ? 'Kairuku-Roro' : lang === 'mekeoKuni' ? 'Mekeo-Kuni' : 'Nara-Gabadi';
    if (val) {
      let response = `"${word.charAt(0).toUpperCase() + word.slice(1)}" in ${langName} is: ${val}`;
      if (data.note) response += `\n\nNote: ${data.note}`;
      return response;
    }
    return `Sorry, I do not have the translation for "${word}" in ${langName} yet.`;
  }

  const lines = [`Here is how to say "${word}" in our local languages:`];
  if (data.kairukuRoro) lines.push(`Kairuku-Roro: ${data.kairukuRoro}`);
  if (data.mekeoKuni) lines.push(`Mekeo-Kuni: ${data.mekeoKuni}`);
  if (data.naraGabadi) lines.push(`Nara-Gabadi: ${data.naraGabadi}`);
  if (data.note) lines.push(`Note: ${data.note}`);
  return lines.join('\n');
}

function getBotResponse(input: string): string {
  const q = input.toLowerCase().trim();

  const reverseMap: Record<string, string> = {
    uaho: 'Girl in Kairuku-Roro is: Uaho',
    iviau: 'Girl in Mekeo-Kuni is: Iviau',
    "va'isi": "Girl in Nara-Gabadi is: Va'isi",
    'hibito,i': 'Boy in Kairuku-Roro is: Hibito,i',
    haue: 'Haue is a swag name for boys in Kairuku-Roro.',
    'raurani namona': 'Raurani Namona means good morning in Kairuku-Roro.',
    'amagai felo': 'Amagai Felo means good morning in Mekeo-Kuni.',
    'rabi namona': 'Rabi Namona means good night in Kairuku-Roro.',
    'gapi felo': 'Gapi Felo means good night in Mekeo-Kuni.',
    'vavuga nonoa': 'Vavuga Nonoa means good night in Nara-Gabadi.',
    'rabirabi namona': 'Rabirabi Namona means good evening in Kairuku-Roro.',
    'gapigapi felo': 'GapiGapi Felo means good evening in Mekeo-Kuni.',
    haparua: 'Haparua means goodbye in Kairuku-Roro.',
    kamaeno: 'Kamaeno means goodbye in Nara-Gabadi.',
  };

  for (const [key, value] of Object.entries(reverseMap)) {
    if (q.includes(key)) return value;
  }

  const word = getWordFromQuery(q);
  if (word) {
    return formatLangResponse(word, getLanguageFromQuery(q));
  }

  for (const [key, answer] of Object.entries(kgssaFAQ)) {
    if (q.includes(key)) return answer;
  }

  return [
    "I'm not sure about that yet. Try asking me:",
    '- How do I join KGSSA?',
    '- What is the email?',
    '- Who is the president?',
    '- How do you say goodbye in Kairuku?',
    '- What is girl in Mekeo?',
  ].join('\n');
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      from: 'bot',
      text: [
        "Good morning! I'm the KGSSA chatbot.",
        '',
        'Ask me about KGSSA or how to say words in our local languages: Kairuku-Roro, Mekeo-Kuni and Nara-Gabadi.',
        '',
        'I can help you with:',
        '- Joining KGSSA',
        '- Our events and activities',
        '- Executive positions',
        '- Contact information',
        '- Our constitution',
        '',
        'What would you like to know?',
      ].join('\n'),
    },
  ]);
  const [input, setInput] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, open]);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener('openKGSSAChat', handler);
    return () => window.removeEventListener('openKGSSAChat', handler);
  }, []);

  const send = () => {
    if (!input.trim()) return;

    const userMessage: Message = { from: 'user', text: input };
    const botMessage: Message = { from: 'bot', text: getBotResponse(input) };

    setMessages((prev) => [...prev, userMessage, botMessage]);
    setInput('');
  };

  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') send();
  };

  return (
    <div className="fixed inset-x-4 bottom-4 z-50 flex flex-col items-stretch gap-3 sm:left-auto sm:right-6 sm:bottom-6 sm:items-end">
      {open && (
        <div className="w-full max-w-[calc(100vw-2rem)] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl sm:w-[27rem] sm:max-w-[27rem]">
          <div className="flex items-center justify-between border-b border-yellow-400/30 bg-gradient-to-r from-rose-800 via-gray-900 to-green-800 px-5 py-4">
            <div>
              <p className="text-sm font-black text-yellow-400">KGSSA Chat</p>
              <p className="text-xs text-yellow-300">Ask about KGSSA or our local languages</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-lg font-black leading-none text-white shadow-lg transition-colors hover:bg-red-600"
            >
              x
            </button>
          </div>

          <div className="max-h-[min(calc(100vh-11rem),32rem)] space-y-5 overflow-y-auto bg-gradient-to-b from-gray-50 via-amber-50/40 to-white px-7 py-7 sm:px-8 sm:py-8">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.from === 'user' ? 'justify-end pr-4 sm:pr-5' : 'justify-start pl-4 sm:pl-5'}`}
              >
                <div
                  className={`max-w-[68%] whitespace-pre-line break-words rounded-[1.4rem] px-5 py-4 text-sm leading-7 shadow-md ${
                    msg.from === 'user'
                      ? 'rounded-br-sm border border-amber-300 bg-gradient-to-br from-yellow-300 to-amber-200 font-semibold text-gray-900'
                      : 'rounded-bl-sm border border-sky-300 bg-gradient-to-br from-sky-200 to-cyan-200 text-slate-900'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          <div className="border-t border-gray-200 bg-gradient-to-r from-white to-amber-50 px-6 py-6 sm:px-7">
            <div className="flex gap-3 rounded-[1.6rem] bg-white/80 p-3 shadow-sm ring-1 ring-amber-100">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Ask something..."
              className="flex-1 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-gray-900 outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-yellow-400"
            />
            <button
              onClick={send}
              className="rounded-2xl bg-yellow-400 px-5 py-3 text-sm font-black text-gray-900 transition-all duration-200 hover:bg-yellow-300"
            >
              Send
            </button>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="self-end rounded-2xl bg-yellow-400 px-5 py-3.5 text-sm font-black text-gray-900 shadow-xl transition-all duration-200 hover:bg-yellow-300"
      >
        Chat with us
      </button>
    </div>
  );
}
