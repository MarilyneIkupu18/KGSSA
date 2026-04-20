'use client';

import { useState } from 'react';
import Image from 'next/image';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    emailjs.send(
      'service_79c3hda',
      'template_2x6kbrb',
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      'jRQBqaGCKHsfhEzal'
    ).then(() => {
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }).catch(() => {
      alert('Failed to send message. Please try again or email us directly at kgssa.pngut@gmail.com');
    });
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white py-16 px-6">
      <div className="max-w-5xl mx-auto">

        {/* ── TITLE ── */}
        <div className="text-center mb-12">
          <p className="text-yellow-400 text-xs font-black uppercase tracking-[0.3em] mb-3">Contact</p>
          <h1 className="text-5xl md:text-6xl font-black leading-tight">
            Get in Touch<br />
            <span className="text-yellow-400">with KGSSA</span>
          </h1>
          <p className="text-gray-400 text-sm mt-4 max-w-md mx-auto leading-relaxed">
            Want to join, collaborate, or connect? Reach out via email or find us on social media.
          </p>
        </div>

        {/* ── MAIN GRID ── */}
        <div className="grid lg:grid-cols-2 gap-8">

          {/* LEFT */}
          <div className="flex flex-col gap-6">

            {/* Photo */}
            <div className="relative w-full h-56 rounded-2xl overflow-hidden">
              <Image
                src="/Kai-goi_2026_orientation.jpeg"
                alt="KGSSA 2026 Orientation"
                fill
                className="object-cover object-center"
              />
            </div>

            {/* Email & Location */}
            <div className="bg-gray-900 rounded-2xl p-6 grid grid-cols-2 gap-6 border border-white/5">
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-widest mb-2">Email</p>
                <a href="mailto:kgssa.pngut@gmail.com"
                  className="text-white font-semibold text-sm hover:text-yellow-400 transition-colors break-all">
                  kgssa.pngut@gmail.com
                </a>
              </div>
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-widest mb-2">Location</p>
                <p className="text-white font-semibold text-sm">PNG University of Technology</p>
                <p className="text-gray-500 text-xs mt-1">Lae, Morobe Province, PNG</p>
              </div>
            </div>

            {/* Social icons */}
            <div className="bg-gray-900 rounded-2xl p-6 border border-white/5">
              <p className="text-gray-500 text-xs uppercase tracking-widest mb-4">Follow Us</p>
              <div className="flex items-center gap-3">
                <a href="https://www.facebook.com/profile.php?id=61575377257618" target="_blank" rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-[#1877F2] hover:bg-[#1565d8] flex items-center justify-center transition-all duration-200">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </a>
                <a href="https://facebook.com/groups/506427326771552/" target="_blank" rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-[#1877F2] hover:bg-[#1565d8] flex items-center justify-center transition-all duration-200">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/_kgssa" target="_blank" rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200"
                  style={{ background: 'linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)' }}>
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5"/>
                    <circle cx="12" cy="12" r="4"/>
                    <circle cx="17.5" cy="6.5" r="0.5" fill="white" stroke="none"/>
                  </svg>
                </a>
              </div>
            </div>

          </div>

          {/* RIGHT: Form */}
          <div className="bg-gray-900 rounded-2xl p-8 border border-white/5">
            <h2 className="text-xl font-black text-white mb-1">Send a Message</h2>
            <p className="text-gray-500 text-xs mb-7">We&apos;ll get back to you as soon as possible.</p>

            {submitted ? (
              <div className="text-center py-14">
                <div className="w-11 h-11 rounded-full border-2 border-green-500 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-white font-black text-lg mb-1">Message Sent</h3>
                <p className="text-gray-500 text-sm">We&apos;ll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-gray-500 text-xs uppercase tracking-widest">Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required
                      placeholder="Full name"
                      className="bg-transparent border-b border-gray-700 focus:border-yellow-400 text-white placeholder-gray-600 py-2 text-sm outline-none transition-colors" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-gray-500 text-xs uppercase tracking-widest">Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required
                      placeholder="you@email.com"
                      className="bg-transparent border-b border-gray-700 focus:border-yellow-400 text-white placeholder-gray-600 py-2 text-sm outline-none transition-colors" />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-gray-500 text-xs uppercase tracking-widest">Subject</label>
                  <select name="subject" value={formData.subject} onChange={handleChange} required
                    className="bg-transparent border-b border-gray-700 focus:border-yellow-400 text-white py-2 text-sm outline-none transition-colors appearance-none cursor-pointer">
                    <option value="" disabled className="bg-gray-900">Select a subject</option>
                    <option value="membership" className="bg-gray-900">Membership Inquiry</option>
                    <option value="events" className="bg-gray-900">Events &amp; Activities</option>
                    <option value="sponsorship" className="bg-gray-900">Sponsorship / Partnership</option>
                    <option value="general" className="bg-gray-900">General Inquiry</option>
                    <option value="other" className="bg-gray-900">Other</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-gray-500 text-xs uppercase tracking-widest">Message</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} required rows={4}
                    placeholder="Write your message..."
                    className="bg-transparent border-b border-gray-700 focus:border-yellow-400 text-white placeholder-gray-600 py-2 text-sm outline-none transition-colors resize-none" />
                </div>
                <button type="submit"
                  className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-black text-xs uppercase tracking-widest py-3.5 rounded-xl transition-all duration-200">
                  Send Message
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
