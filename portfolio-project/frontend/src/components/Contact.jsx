import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import SectionReveal from './SectionReveal';
import { profile } from '../data/resumeData';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const timeoutRef = useRef(null);

  // Environment variables
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateOwner = import.meta.env.VITE_EMAILJS_TEMPLATE_OWNER;
  const templateAutoReply = import.meta.env.VITE_EMAILJS_TEMPLATE_AUTOREPLY;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  // Clear status after 5s
  useEffect(() => {
    if (status === 'success' || status === 'error') {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setStatus('idle');
        setErrorMsg('');
      }, 5000);
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [status]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (!form.name.trim()) {
      setErrorMsg('Please enter your name.');
      setStatus('error');
      return false;
    }
    if (!form.email.trim()) {
      setErrorMsg('Please enter your email.');
      setStatus('error');
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setErrorMsg('Please enter a valid email address.');
      setStatus('error');
      return false;
    }
    if (!form.message.trim()) {
      setErrorMsg('Please enter a message.');
      setStatus('error');
      return false;
    }
    return true;
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  if (!validate()) return;

  setStatus('sending');
  setErrorMsg('');

  try {
    // 1. Send to owner (your template uses {{from_name}}, {{from_email}}, {{message}})
    const ownerParams = {
      from_name: form.name,
      from_email: form.email,
      message: form.message,
    };

    const ownerRes = await emailjs.send(
      serviceId,
      templateOwner,        // your owner template ID
      ownerParams,
      publicKey
    );

    if (ownerRes.status !== 200) {
      throw new Error('Failed to send main email.');
    }

    // 2. Send auto‑reply (your template uses {{name}}, {{email}}, {{title}})
    const autoReplyParams = {
      name: form.name,
      email: form.email,
      title: form.message,   // your template uses {{title}} for the request text
    };

    const autoReplyRes = await emailjs.send(
      serviceId,
      templateAutoReply,     // your auto‑reply template ID
      autoReplyParams,
      publicKey
    );

    if (autoReplyRes.status !== 200) {
      console.warn('Auto-reply failed:', autoReplyRes);
      // You might still want to show success since the main email was sent
    }

    setStatus('success');
    setForm({ name: '', email: '', message: '' });

  } catch (err) {
    console.error('EmailJS error:', err);
    // Show detailed error if available
    setStatus('error');
    setErrorMsg(err.text || err.message || 'Could not send. Please try again.');
  }
};
  return (
    <section id="contact" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28">
      <SectionReveal>
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-cyan">06 / Contact</span>
      </SectionReveal>
      <SectionReveal delay={0.1} className="mt-4 mb-10 sm:mb-14">
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-mist max-w-2xl">
          Have a role, project, or idea? Let's talk.
        </h2>
      </SectionReveal>

      <SectionReveal delay={0.2}>
        <form onSubmit={handleSubmit} className="max-w-xl grid gap-5">
          <div>
            <label htmlFor="contact-name" className="font-mono text-xs uppercase tracking-widest text-haze block mb-2">
              Name
            </label>
            <input
              id="contact-name"
              required
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full bg-panel/60 border border-white/10 rounded-lg px-4 py-3 text-mist focus:outline-none focus:border-cyan/60 focus:ring-1 focus:ring-cyan/40 transition-colors"
              placeholder="Your name"
              disabled={status === 'sending'}
            />
          </div>
          <div>
            <label htmlFor="contact-email" className="font-mono text-xs uppercase tracking-widest text-haze block mb-2">
              Email
            </label>
            <input
              id="contact-email"
              required
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full bg-panel/60 border border-white/10 rounded-lg px-4 py-3 text-mist focus:outline-none focus:border-cyan/60 focus:ring-1 focus:ring-cyan/40 transition-colors"
              placeholder="you@example.com"
              disabled={status === 'sending'}
            />
          </div>
          <div>
            <label htmlFor="contact-message" className="font-mono text-xs uppercase tracking-widest text-haze block mb-2">
              Message
            </label>
            <textarea
              id="contact-message"
              required
              rows={5}
              name="message"
              value={form.message}
              onChange={handleChange}
              className="w-full bg-panel/60 border border-white/10 rounded-lg px-4 py-3 text-mist focus:outline-none focus:border-cyan/60 focus:ring-1 focus:ring-cyan/40 transition-colors resize-none"
              placeholder="What's on your mind?"
              disabled={status === 'sending'}
            />
          </div>

          <motion.button
            whileHover={{ scale: status === 'sending' ? 1 : 1.02 }}
            whileTap={{ scale: status === 'sending' ? 1 : 0.98 }}
            type="submit"
            disabled={status === 'sending'}
            className="justify-self-start font-mono text-xs uppercase tracking-widest px-6 py-3 rounded-full bg-cyan text-void font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {status === 'sending' ? (
              <>
                <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-void border-t-transparent" />
                Sending…
              </>
            ) : (
              'Send message'
            )}
          </motion.button>

          {status === 'success' && (
            <p className="text-cyan text-sm font-mono">
              Message sent! You'll receive a confirmation email shortly.
            </p>
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