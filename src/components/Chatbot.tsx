'use client';

import { useState, useRef, useEffect } from 'react';

type Message = { from: 'user' | 'bot'; text: string };

const langData: Record<string, { kairukuRoro?: string; mekeoKuni?: string; naraGabadi?: string; note?: string }> = {
  'girl':          { kairukuRoro: 'Uaho',          mekeoKuni: 'Iviau',       naraGabadi: "Va'isi" },
  'boy':           { kairukuRoro: 'Hibito,i',       note: 'Haue is a swag name for boys in Kairuku-Roro' },
  'good morning':  { kairukuRoro: 'Raurani Namona', mekeoKuni: 'Amagai Felo' },
  'good night':    { kairukuRoro: 'Rabi Namona',    mekeoKuni: 'Gapi Felo',   naraGabadi: 'Vavuga Nonoa' },
  'good evening':  { kairukuRoro: 'Rabirabi Namona',mekeoKuni: 'GapiGapi Felo' },
  'goodbye':       { kairukuRoro: 'Haparua',                                  naraGabadi: 'Kamaeno' },
};

const kgssaFAQ: Record<string, string> = {
  'join':         'To join KGSSA, you must be a student or staff at PNG University of Technology from the Kairuku or Goilala districts — or any Unitech student faithful to the association. Reach out via email at kgssa.pngut@gmail.com or approach any executive member on campus.',
  'membership':   'To join KGSSA, you must be a student or staff at PNG University of Technology from the Kairuku or Goilala districts — or any Unitech student faithful to the association. Reach out via email at kgssa.pngut@gmail.com or approach any executive member on campus.',
  'member':       'To join KGSSA, you must be a student or staff at PNG University of Technology from the Kairuku or Goilala districts — or any Unitech student faithful to the association. Reach out via email at kgssa.pngut@gmail.com or approach any executive member on campus.',
  'event':        'Check our Events & Gallery page for all past and upcoming events. We organise fundraising, orientation, awareness programs, cultural events and more!',
  'gallery':      'Check our Events & Gallery page for all past and upcoming events from 2021 to 2026!',
  'contact':      'You can reach us at kgssa.pngut@gmail.com, on Facebook (KGSSA Page & Group), or on Instagram @_kgssa.',
  'email':        'Our email address is kgssa.pngut@gmail.com — feel free to send us a message anytime!',
  'gmail':        'Our email address is kgssa.pngut@gmail.com — feel free to send us a message anytime!',
  'mail':         'Our email address is kgssa.pngut@gmail.com — feel free to send us a message anytime!',
  'fb group':     'Find us on our Facebook Group: https://facebook.com/groups/506427326771552/',
  'fb page':      'Find us on our Facebook Page: https://www.facebook.com/profile.php?id=61575377257618',
  'group':        'Find us on our Facebook Group: https://facebook.com/groups/506427326771552/',
  'instagram':    'Follow us on Instagram @_kgssa — https://www.instagram.com/_kgssa',
  'facebook':     'Find us on Facebook! KGSSA Page: https://www.facebook.com/profile.php?id=61575377257618 and KGSSA Group: https://facebook.com/groups/506427326771552/',
  'follow':       'Follow us on Facebook (KGSSA Page & Group) and Instagram @_kgssa!',
  'president':    'The President provides overall leadership and direction for KGSSA. Elections are held annually — the President must be in 3rd or final year of study.',
  'vice':         'The Vice President assists the President and acts in their absence. They must be in 3rd or final year of study.',
  'chairman':     'The Chairman presides over general assemblies impartially and ensures meetings follow formal protocol.',
  'secretary':    'The Secretary prepares agendas, records minutes, and maintains all official documents.',
  'treasurer':    'The Treasurer manages all financial matters and keeps accurate records of income and expenditure.',
  'executive':    'KGSSA has 12 executive positions: President, Vice President, Chairman, Secretary, Treasurer, Events Coordinator, Male & Female Fundraising Coordinators, Male & Female Media Coordinators, Patron and Matron.',
  'patron':       'The Patron provides strategic guidance and mentorship to the executive team.',
  'matron':       'The Matron supports female members and promotes inclusivity within the association.',
  'fundrais':     'KGSSA runs fundraising activities including carwash events and university games fundraising to support association initiatives.',
  'media':        'Our Male and Female Media Coordinators manage social media, promotional materials, and event coverage.',
  'constitution': 'You can download the KGSSA Constitution (2026) from the About Us page on this website.',
  'download':     'The KGSSA Constitution (2026) is available for download on the About Us page.',
  'district':     'KGSSA represents students from the Kairuku and Goilala districts of Central Province, PNG — including Kairuku-Roro LLG, Mekeo-Kuni LLG, Nara-Gabadi LLG, Waitape LLG, Tapini LLG and Guari Rural LLG.',
  'kairuku':      'Kairuku is one of the two districts KGSSA represents. It includes Kairuku-Roro LLG, Mekeo-Kuni LLG and Nara-Gabadi LLG.',
  'goilala':      'Goilala is one of the two districts KGSSA represents. It includes Waitape LLG, Tapini LLG and Guari Rural LLG.',
  'llg':          'KGSSA covers 6 LLGs: Kairuku-Roro, Mekeo-Kuni, Nara-Gabadi (Kairuku District) and Waitape, Tapini, Guari Rural (Goilala District).',
  'location':     'KGSSA is based at PNG University of Technology, Lae, Morobe Province, Papua New Guinea.',
  'unitech':      'KGSSA is the student and staff association for Kairuku-Goilala people at PNG University of Technology in Lae.',
  'png':          'KGSSA is based at PNG University of Technology, Lae, Morobe Province, Papua New Guinea.',
  'lae':          'KGSSA is based at PNG University of Technology, Lae, Morobe Province, Papua New Guinea.',
  'election':     'Elections are held annually. President and Vice President must be in 3rd or final year. Other positions require 2nd year or above. First-year students may be considered if no senior students contest.',
  'vote':         'Elections are held annually by majority vote of members present and eligible to vote.',
  'year':         'President and Vice President must be in 3rd or final year. Other executive positions require 2nd year or above.',
  'language':     'You can ask me how to say words in Kairuku-Roro, Mekeo-Kuni, or Nara-Gabadi! Try: "How do you say good morning in Kairuku?" or "What is girl in Mekeo?"',
  'hello':        'Hello! 👋 I\'m the KGSSA chatbot. I can answer questions about KGSSA and also teach you words in Kairuku-Roro, Mekeo-Kuni and Nara-Gabadi languages. What would you like to know?',
  'hi':           'Hi there! 👋 Ask me anything about KGSSA or try asking how to say a word in our local languages!',
  'who are you':  'I am the KGSSA chatbot! I can help you learn about our association and even teach you words in our local languages.',
  'what is kgssa':'KGSSA stands for Kairuku-Goilala Student & Staff Association. We are a student association at PNG University of Technology representing students and staff from the Kairuku and Goilala districts of Central Province, PNG.',
  'kgssa':        'KGSSA stands for Kairuku-Goilala Student & Staff Association — a student association at PNG University of Technology representing people from the Kairuku and Goilala districts.',
  'mission':      'Our mission is to bring students and staff together each year to support one another, run awareness programs, and organize activities that create opportunities and benefit our communities.',
  'vision':       'Our vision is to shape a united and empowered community where every student and staff member rises into leadership and contributes meaningfully to our districts.',
  'about':        'KGSSA is the Kairuku-Goilala Student & Staff Association at PNG University of Technology. We represent students and staff from the Kairuku and Goilala districts of Central Province, PNG.',
  'website':      'You are currently on the KGSSA website! You can visit our pages: Home, About Us, Events & Gallery, and Contact Us.',
  'page':         'Our website has 4 pages: Home, About Us, Events & Gallery, and Contact Us.',
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
      let resp = `"${word.charAt(0).toUpperCase() + word.slice(1)}" in ${langName} is: **${val}**`;
      if (data.note) resp += `\n\n📝 ${data.note}`;
      return resp;
    }
    return `Sorry, I don't have the translation for "${word}" in ${langName} yet.`;
  }

  // Show all available
  let resp = `Here's how to say **"${word}"** in our local languages:\n\n`;
  if (data.kairukuRoro) resp += `🔵 Kairuku-Roro: **${data.kairukuRoro}**\n`;
  if (data.mekeoKuni)   resp += `🟡 Mekeo-Kuni: **${data.mekeoKuni}**\n`;
  if (data.naraGabadi)  resp += `🟢 Nara-Gabadi: **${data.naraGabadi}**\n`;
  if (data.note)        resp += `\n📝 ${data.note}`;
  return resp.trim();
}

function getBotResponse(input: string): string {
  const q = input.toLowerCase().trim();

  // Reverse language lookup — if they type a local word
  const reverseMap: Record<string, string> = {
    'uaho': 'Girl in Kairuku-Roro is: Uaho',
    'iviau': 'Girl in Mekeo-Kuni is: Iviau',
    "va'isi": 'Girl in Nara-Gabadi is: Va\'isi',
    'hibito,i': 'Boy in Kairuku-Roro is: Hibito,i',
    'haue': 'Haue is a swag name for boys in Kairuku-Roro! 🔥',
    'raurani namona': 'Raurani Namona means Good Morning in Kairuku-Roro!',
    'amagai felo': 'Amagai Felo means Good Morning in Mekeo-Kuni!',
    'rabi namona': 'Rabi Namona means Good Night in Kairuku-Roro!',
    'gapi felo': 'Gapi Felo means Good Night in Mekeo-Kuni!',
    'vavuga nonoa': 'Vavuga Nonoa means Good Night in Nara-Gabadi!',
    'rabirabi namona': 'Rabirabi Namona means Good Evening in Kairuku-Roro!',
    'gapigapi felo': 'GapiGapi Felo means Good Evening in Mekeo-Kuni!',
    'haparua': 'Haparua means Goodbye in Kairuku-Roro!',
    'kamaeno': 'Kamaeno means Goodbye in Nara-Gabadi!',
  };
  for (const [key, val] of Object.entries(reverseMap)) {
    if (q.includes(key)) return val;
  }

  // Language query
  const word = getWordFromQuery(q);
  if (word) {
    const lang = getLanguageFromQuery(q);
    return formatLangResponse(word, lang);
  }

  // KGSSA FAQ
  for (const [key, answer] of Object.entries(kgssaFAQ)) {
    if (q.includes(key)) return answer;
  }

  // Fallback
  return "I'm not sure about that yet! Try asking me:\n\n• \"How do I join KGSSA?\"\n• \"What is the email?\"\n• \"Who is the president?\"\n• \"How do you say goodbye in Kairuku?\"\n• \"What is girl in Mekeo?\"";
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { from: 'bot', text: "Raurani Namona! 👋 I'm the KGSSA chatbot. Ask me about KGSSA or how to say words in our local languages — Kairuku-Roro, Mekeo-Kuni and Nara-Gabadi!\n\nI can help you with:\n• Joining KGSSA\n• Our events & activities\n• Executive positions\n• Contact information\n• Our constitution\n\nYou can also learn words in our local languages here\n\nWhat would you like to know?" }
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
    const userMsg: Message = { from: 'user', text: input };
    const botMsg: Message = { from: 'bot', text: getBotResponse(input) };
    setMessages(prev => [...prev, userMsg, botMsg]);
    setInput('');
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') send();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

      {/* Chat window */}
      {open && (
        <div className="w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden" style={{ height: '600px' }}>

          {/* Header */}
          <div className="bg-gray-900 px-5 py-4 flex items-center justify-between shrink-0">
            <div>
              <p className="font-black text-yellow-400 text-sm">KGSSA Chat</p>
              <p className="text-gray-400 text-xs">Ask about KGSSA or our local languages</p>
            </div>
            <button onClick={() => setOpen(false)} className="text-gray-400 hover:text-white font-black text-lg leading-none transition-colors">✕</button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-gray-50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm whitespace-pre-line leading-relaxed break-words
                  ${msg.from === 'user'
                    ? 'bg-gray-900 text-white font-semibold rounded-br-sm'
                    : 'bg-white text-gray-800 border border-gray-200 rounded-bl-sm shadow-sm'
                  }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="px-4 py-3 border-t border-gray-200 flex gap-2 shrink-0 bg-white">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Ask something..."
              className="flex-1 bg-gray-100 text-gray-900 placeholder-gray-400 text-sm px-4 py-2.5 rounded-xl outline-none focus:ring-2 focus:ring-yellow-400 border border-gray-200"
            />
            <button
              onClick={send}
              className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-black px-4 py-2.5 rounded-xl transition-all duration-200 text-sm"
            >
              Send
            </button>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setOpen(!open)}
        className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-black px-5 py-3.5 rounded-2xl shadow-xl transition-all duration-200 flex items-center gap-2 text-sm"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        {open ? 'Close' : 'Chat with us'}
      </button>

    </div>
  );
}
