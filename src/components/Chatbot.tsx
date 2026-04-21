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
  'join':       'To join KGSSA, you must be a student or staff at PNG University of Technology from the Kairuku or Goilala districts — or any Unitech student faithful to the association. Reach out via email at kgssa.pngut@gmail.com or approach any executive member on campus.',
  'membership': 'To join KGSSA, you must be a student or staff at PNG University of Technology from the Kairuku or Goilala districts — or any Unitech student faithful to the association. Reach out via email at kgssa.pngut@gmail.com or approach any executive member on campus.',
  'event':      'Check our Events & Gallery page for all past and upcoming events. We organise fundraising, orientation, awareness programs, cultural events and more!',
  'contact':    'You can reach us at kgssa.pngut@gmail.com, on Facebook (KGSSA Page & Group), or on Instagram @_kgssa.',
  'president':  'The President provides overall leadership and direction for KGSSA. Elections are held annually — the President must be in 3rd or final year of study.',
  'executive':  'KGSSA has 12 executive positions: President, Vice President, Chairman, Secretary, Treasurer, Events Coordinator, Male & Female Fundraising Coordinators, Male & Female Media Coordinators, Patron and Matron.',
  'constitution': 'You can download the KGSSA Constitution (2026) from the About Us page on this website.',
  'district':   'KGSSA represents students from the Kairuku and Goilala districts of Central Province, PNG — including Kairuku-Roro LLG, Mekeo-Kuni LLG, Nara-Gabadi LLG, Waitape LLG, Tapini LLG and Guari Rural LLG.',
  'language':   'You can ask me how to say words in Kairuku-Roro, Mekeo-Kuni, or Nara-Gabadi! Try asking: "How do you say good morning in Kairuku?" or "What is girl in Mekeo?"',
  'hello':      'Hello! 👋 I\'m the KGSSA chatbot. I can answer questions about KGSSA and also teach you words in Kairuku-Roro, Mekeo-Kuni and Nara-Gabadi languages. What would you like to know?',
  'hi':         'Hi there! 👋 Ask me anything about KGSSA or try asking how to say a word in our local languages!',
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
  return "I'm not sure about that yet! You can ask me:\n\n• How to say words in Kairuku-Roro, Mekeo-Kuni or Nara-Gabadi\n• About joining KGSSA\n• About our events\n• About our executive positions\n• How to contact us\n\nTry: \"How do you say goodbye in Kairuku?\"";
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { from: 'bot', text: "Raurani Namona! 👋 I'm the KGSSA chatbot. Ask me about KGSSA or how to say words in our local languages — Kairuku-Roro, Mekeo-Kuni and Nara-Gabadi!" }
  ]);
  const [input, setInput] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, open]);

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
        <div className="w-80 sm:w-96 bg-gray-900 rounded-2xl shadow-2xl border border-white/10 flex flex-col overflow-hidden" style={{ height: '480px' }}>

          {/* Header */}
          <div className="bg-yellow-400 px-5 py-4 flex items-center justify-between shrink-0">
            <div>
              <p className="font-black text-gray-900 text-sm">KGSSA Chat</p>
              <p className="text-gray-800 text-xs">Ask about KGSSA or our local languages</p>
            </div>
            <button onClick={() => setOpen(false)} className="text-gray-900 font-black text-lg leading-none">✕</button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm whitespace-pre-line leading-relaxed
                  ${msg.from === 'user'
                    ? 'bg-yellow-400 text-gray-900 font-semibold rounded-br-sm'
                    : 'bg-gray-800 text-gray-100 rounded-bl-sm'
                  }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="px-4 py-3 border-t border-white/10 flex gap-2 shrink-0">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Ask something..."
              className="flex-1 bg-gray-800 text-white placeholder-gray-500 text-sm px-4 py-2.5 rounded-xl outline-none focus:ring-2 focus:ring-yellow-400"
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
