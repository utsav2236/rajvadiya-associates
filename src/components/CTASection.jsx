import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';

export default function CTASection() {
  const handleScroll = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-[#0D2244] py-20 overflow-hidden">
      {/* Diagonal gold architectural stripe matching hero wall */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-24 w-[2px] h-[140%] bg-gradient-to-b from-[#C89436]/60 via-[#C89436]/25 to-transparent rotate-[20deg] origin-top pointer-events-none"
      />
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-64 h-64 rounded-full border border-[#C89436]/15" />
      <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full border border-white/5" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Let&apos;s Discuss Your <span className="text-[#DFB054]">Business Requirements</span>
        </h2>
        <div className="w-20 h-[2.5px] bg-[#C89436] mx-auto mb-6 rounded-full" />
        <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Whether you need audit manpower, accounting support, GST services or
          financial reporting assistance, we are ready to understand your
          requirements.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => handleScroll('#contact')}
            className="bg-[#C89436] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#B58228] transition-colors flex items-center gap-2 cursor-pointer shadow-lg"
          >
            Request a Consultation
            <ArrowRight className="w-5 h-5" />
          </button>
          <a
            href="https://wa.me/91XXXXXXXXXX?text=Hello%20Rajvadiya%20Associates%2C%20I%20would%20like%20to%20enquire%20about%20your%20audit%2C%20accounting%2C%20taxation%20or%20business%20finance%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/60 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors flex items-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            Contact Us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
