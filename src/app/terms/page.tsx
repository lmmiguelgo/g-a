"use client";

import React, { useState } from 'react';
import { MessageSquare, UserX, CheckCircle, Info, ShieldCheck, Mail, Phone } from 'lucide-react';

export default function terms() {
  const [formData, setFormData] = useState({
    email: '',
    phone: ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ email: '', phone: '' });
    }, 1500);
  };

  return (
    <div className="w-full bg-background pb-24 pt-24 sm:pb-32 sm:pt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
        {/* 1. CONSENT OVERVIEW SECTION */}
        <div className="mx-auto max-w-7xl lg:mx-0">
          <h2 className="text-lg/7 font-bold text-accent-primary uppercase tracking-widest">Preferences</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-foreground sm:text-5xl">
            Communication Terms
          </p>
          
          <div className="mt-8 flex items-start gap-4 rounded-2xl bg-second-bg/50 p-6 ring-1 ring-accent-secondary/20">
            <ShieldCheck className="mt-1 size-8 flex-none text-accent-primary" />
            <div className="text-lg/8 text-foreground">
              <p className="font-bold text-xl">SMS Consent Agreement</p>
              <p className="mt-2 text-foreground/80">
                By providing your phone number, you agree that <strong className="text-foreground">Gordon & Associates</strong> may send and receive text messages regarding your account, financial planning updates, and professional services. 
              </p>
              <p className="mt-4 font-bold text-accent-primary">
                "I accept Gordon & Associates sending and receiving text messages."
              </p>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="mx-auto my-20 max-w-7xl border-t border-accent-secondary/20 lg:my-32" />

        {/* 2. UNSUBSCRIBE SECTION (Text Left / Form Right) */}
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-12 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          
          {/* Information Side */}
          <div className="lg:pr-8">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Opt-Out Management</h2>
            <p className="mt-2 text-lg/7 font-bold text-accent-primary">Unsubscribe from SMS Communications</p>
            
            <div className="mt-6 space-y-6 text-lg/7 text-foreground">
              <p>
                We respect your privacy and your time. If you no longer wish to receive text updates from our firm, you can opt out at any time using the form on this page or by replying <strong className="text-foreground">"STOP"</strong> to any message you receive.
              </p>
              <p>
                Please note that unsubscribing from SMS will not affect your primary email communications or scheduled consultations. <strong className="text-foreground">Gordon & Associates</strong> remains committed to providing the highest standard of professional service through your preferred channels.
              </p>
              
              <div className="mt-8 flex flex-wrap gap-4 text-sm font-medium text-foreground">
                 <div className="flex items-center gap-2 rounded-full bg-second-bg px-4 py-2 ring-1 ring-white/10">
                   <CheckCircle className="size-4 text-accent-primary" />
                   Instant Processing
                 </div>
                 <div className="flex items-center gap-2 rounded-full bg-second-bg px-4 py-2 ring-1 ring-white/10">
                   <Info className="size-4 text-accent-primary" />
                   Secure Handling
                 </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="relative rounded-2xl bg-second-bg p-8 shadow-2xl ring-1 ring-white/10">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="rounded-full bg-accent-primary/20 p-4 mb-4">
                    <CheckCircle className="size-12 text-accent-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Request Received</h3>
                <p className="mt-2 text-foreground/70">
                  You have been successfully unsubscribed. Please allow up to 24 hours for our systems to fully update.
                </p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-8 rounded-lg bg-accent-primary px-6 py-2 text-sm font-bold text-white transition hover:bg-opacity-90"
                >
                  Manage Another Number
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-foreground mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-accent-primary" />
                    <input
                      required
                      type="email"
                      id="email"
                      className="w-full rounded-lg border-none bg-background/50 pl-11 pr-4 py-3 text-foreground ring-1 ring-white/10 focus:ring-2 focus:ring-accent-primary outline-none transition"
                      placeholder="laura@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-foreground mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-accent-primary" />
                    <input
                      required
                      type="tel"
                      id="phone"
                      className="w-full rounded-lg border-none bg-background/50 pl-11 pr-4 py-3 text-foreground ring-1 ring-white/10 focus:ring-2 focus:ring-accent-primary outline-none transition"
                      placeholder="(555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="group relative w-full flex items-center justify-center gap-2 rounded-lg bg-accent-primary px-8 py-4 text-lg font-bold text-white transition-all hover:shadow-[0_0_20px_rgba(var(--accent-primary-rgb),0.3)] disabled:opacity-70"
                >
                  {status === 'loading' ? (
                    <div className="size-6 border-2 border-white/30 border-t-white animate-spin rounded-full" />
                  ) : (
                    <>
                      <UserX className="size-5 transition-transform group-hover:scale-110" />
                      Unsubscribe Me
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-foreground/50">
                  By clicking unsubscribe, you will no longer receive automated text updates from Gordon & Associates.
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}