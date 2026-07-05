import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionReveal from './SectionReveal';
import { profile } from '../data/resumeData';

const API_BASE = import.meta.env.VITE_API_URL || '';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');
    try {
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Something went wrong.');
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus('error');
      setErrorMsg(err.message);
    }
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-28">
      <SectionReveal>
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-cyan">06 / Contact</span>
      </SectionReveal>
      <SectionReveal delay={0.1} className="mt-4 mb-14">
        <h2 className="font-display text-3xl md:text-5xl text-mist max-w-2xl">
          Have a role, project, or idea? Let's talk.
        </h2>
      </SectionReveal>

      <SectionReveal delay={0.2}>
        <form onSubmit={handleSubmit} className="max-w-xl grid gap-5">
          <div>
            <label className="font-mono text-xs uppercase tracking-widest text-haze block mb-2">Name</label>
            <input
              required
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full bg-panel/60 border border-white/10 rounded-lg px-4 py-3 text-mist focus:outline-none focus:border-cyan/60 focus:ring-1 focus:ring-cyan/40 transition-colors"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="font-mono text-xs uppercase tracking-widest text-haze block mb-2">Email</label>
            <input
              required
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full bg-panel/60 border border-white/10 rounded-lg px-4 py-3 text-mist focus:outline-none focus:border-cyan/60 focus:ring-1 focus:ring-cyan/40 transition-colors"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="font-mono text-xs uppercase tracking-widest text-haze block mb-2">Message</label>
            <textarea
              required
              rows={5}
              name="message"
              value={form.message}
              onChange={handleChange}
              className="w-full bg-panel/60 border border-white/10 rounded-lg px-4 py-3 text-mist focus:outline-none focus:border-cyan/60 focus:ring-1 focus:ring-cyan/40 transition-colors resize-none"
              placeholder="What's on your mind?"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={status === 'sending'}
            className="justify-self-start font-mono text-xs uppercase tracking-widest px-6 py-3 rounded-full bg-cyan text-void font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'sending' ? 'Sending…' : 'Send message'}
          </motion.button>

          {status === 'success' && (
            <p className="text-cyan text-sm font-mono">Message sent — thanks for reaching out.</p>
          )}
          {status === 'error' && (
            <p className="text-ember text-sm font-mono">{errorMsg || 'Could not send. Try again.'}</p>
          )}
        </form>

        <p className="text-haze text-sm mt-10">
          Prefer email? Reach me directly at{' '}
          <a href={`mailto:${profile.email}`} className="text-cyan hover:underline">
            {profile.email}
          </a>
        </p>
      </SectionReveal>
    </section>
  );
}
