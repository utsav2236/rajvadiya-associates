import { ArrowRight } from 'lucide-react';

const smoothScroll = (id) => {
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
};

function ShieldCheckGoldIcon() {
  return (
    <svg
      viewBox="0 0 36 36"
      className="w-8 h-8 shrink-0"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M18 4.5L7.5 8.8V16.8C7.5 23.6 12 29.4 18 31.5C24 29.4 28.5 23.6 28.5 16.8V8.8L18 4.5Z"
        stroke="#0D2244"
        strokeWidth="1.9"
        strokeLinejoin="round"
      />
      <path
        d="M13 18.2L16.4 21.6L23.5 14.5"
        stroke="#C89436"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HandshakeNavyIcon() {
  return (
    <svg
      viewBox="0 0 36 36"
      className="w-8 h-8 shrink-0"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M5.5 15.5L10.5 10.5C11.3 9.7 12.6 9.6 13.5 10.3L16.5 12.5"
        stroke="#0D2244"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30.5 15.5L25.5 10.5C24.7 9.7 23.4 9.6 22.5 10.3L18.5 13.3C17.5 14 16.2 14 15.3 13.2"
        stroke="#0D2244"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.5 13.3L15.8 16C15 16.8 15 18 15.8 18.7C16.5 19.4 17.7 19.4 18.5 18.7L21 16.2L26.2 21.2C27 22 27 23.3 26.2 24.1C25.4 24.9 24.1 24.9 23.3 24.1L22 22.8"
        stroke="#0D2244"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 19L15.2 25.2C16.1 26.1 17.5 26.1 18.3 25.2L19 24.5"
        stroke="#0D2244"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.5 21.5L13.5 19.5M14 24L16 22M16.5 26.5L18.5 24.5"
        stroke="#0D2244"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M21 25.5L23 23.5"
        stroke="#0D2244"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M4.5 16.5L8.5 20.5M31.5 16.5L27.5 20.5"
        stroke="#0D2244"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function GrowthChartGoldIcon() {
  return (
    <svg
      viewBox="0 0 36 36"
      className="w-8 h-8 shrink-0"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="7" y="21" width="4.5" height="8" rx="0.8" stroke="#0D2244" strokeWidth="1.8" />
      <rect x="15.5" y="16.5" width="4.5" height="12.5" rx="0.8" stroke="#0D2244" strokeWidth="1.8" />
      <rect x="24" y="12" width="4.5" height="17" rx="0.8" stroke="#0D2244" strokeWidth="1.8" />
      <path
        d="M6.5 17.5L15.5 11.5L19.5 13.5L27.5 7.5"
        stroke="#C89436"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.5 7.2H27.8V11.5"
        stroke="#C89436"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative bg-white overflow-hidden lg:min-h-[700px] xl:min-h-[760px] flex items-center"
    >
      {/* Desktop Full-Bleed Office Background Scene */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none select-none">
        <img
          src="/hero-bg.png"
          alt="Rajvadiya Associates executive workspace with laptop, branded mug, calculator, and financial charts"
          className="w-full h-full object-cover object-right-bottom"
        />
        {/* Extra soft pure-white safeguard on left edge for wide viewports */}
        <div
          aria-hidden="true"
          className="absolute inset-y-0 left-0 w-[50%] bg-gradient-to-r from-white via-white/95 to-transparent"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 pt-26 pb-12 lg:pt-28 lg:pb-16">
        <div className="flex flex-col lg:flex-row items-center">
          {/* LEFT CONTENT */}
          <div className="w-full lg:w-[56%] xl:w-[54%] flex flex-col">
            {/* Heading */}
            <h1
              className="text-[32px] sm:text-5xl lg:text-[44px] xl:text-[50px] font-extrabold leading-[1.12] tracking-[-0.02em] text-[#0D2244] mb-5"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              <span className="lg:whitespace-nowrap">Your Trusted Partner</span>
              <br />
              for <span className="text-[#C89436]">Audit</span>,
              <br />
              <span className="lg:whitespace-nowrap">Accounting &amp;</span>
              <br />
              <span className="lg:whitespace-nowrap">Financial Services</span>
            </h1>

            {/* Gold Divider Line */}
            <div className="w-32 sm:w-40 h-[2.5px] bg-[#C89436] mb-5" aria-hidden="true" />

            {/* Lead Paragraph */}
            <p className="text-base sm:text-[17px] text-[#1E293B] leading-[1.6] mb-7 max-w-[520px]">
              We provide professional audit support, accounting, taxation and business finance
              services to businesses, financial institutions, CA firms and individuals across India.
            </p>

            {/* CTAs — Pill Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                onClick={() => smoothScroll('#services')}
                className="inline-flex items-center gap-3 bg-[#0D2244] text-white px-7 py-3.5 rounded-full font-semibold text-[15px]
                  transition-all duration-200 hover:bg-[#081730] hover:shadow-lg hover:shadow-[#0D2244]/20 active:scale-[0.98] cursor-pointer"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => smoothScroll('#contact')}
                className="inline-flex items-center justify-center bg-white text-[#0D2244] border border-[#0D2244]/60 px-7 py-3.5 rounded-full font-semibold text-[15px]
                  transition-all duration-200 hover:border-[#0D2244] hover:bg-[#F6F8FB] hover:shadow-md active:scale-[0.98] cursor-pointer"
              >
                Request a Consultation
              </button>
            </div>

            {/* Trust Highlights */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-x-5 gap-y-4 sm:gap-x-0">
              <div className="flex items-center gap-3 sm:pr-6">
                <ShieldCheckGoldIcon />
                <span className="text-[13px] font-medium leading-[1.3] text-[#1E293B]">
                  Professional
                  <br />
                  Service Support
                </span>
              </div>

              <div className="hidden sm:block w-px h-9 bg-[#CBD5E1] shrink-0" aria-hidden="true" />

              <div className="flex items-center gap-3 sm:px-6">
                <HandshakeNavyIcon />
                <span className="text-[13px] font-medium leading-[1.3] text-[#1E293B]">
                  Accuracy &amp;
                  <br />
                  Transparency
                </span>
              </div>

              <div className="hidden sm:block w-px h-9 bg-[#CBD5E1] shrink-0" aria-hidden="true" />

              <div className="flex items-center gap-3 sm:pl-6">
                <GrowthChartGoldIcon />
                <span className="text-[13px] font-medium leading-[1.3] text-[#1E293B]">
                  Nationwide
                  <br />
                  Service Coverage
                </span>
              </div>
            </div>
          </div>

          {/* Mobile / Tablet Visual Showcase */}
          <div className="lg:hidden w-full mt-10">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#E2E8F0] aspect-[4/3] sm:aspect-[16/10] bg-white">
              <img
                src="/hero-office.png"
                alt="Rajvadiya Associates executive workspace with laptop, branded mug, calculator, and financial charts"
                className="w-full h-full object-cover object-bottom"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
