import { useState, useEffect, useCallback } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import BrandLogo from './BrandLogo';

function GoldEnvelopeIcon() {
  return (
    <svg
      viewBox="0 0 24 18"
      className="w-[18px] h-[14px] shrink-0"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="24" height="18" rx="2" fill="#D19A36" />
      <path
        d="M1.2 1.5L12 10.2L22.8 1.5"
        stroke="#04214D"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.2 16.5L8.4 9.6M22.8 16.5L15.6 9.6"
        stroke="#04214D"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

const NAV_LINKS = [
  { label: 'Home', id: 'home', twoLine: false },
  { label: 'About Us', id: 'about', twoLine: false },
  { label: 'Stock & Asset Audit', id: 'audit', twoLine: true },
  { label: 'Accounting', id: 'accounting', twoLine: false },
  { label: 'Taxation', id: 'taxation', twoLine: false },
  { label: 'Business Finance', id: 'business-finance', twoLine: true },
  { label: 'Industries', id: 'industries', twoLine: false },
  { label: 'Contact', id: 'contact', twoLine: false },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.id);
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: '-80px 0px -40% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollTo = useCallback((id) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-[#E2E8F0] shadow-sm'
            : 'bg-white/90 backdrop-blur-md xl:bg-transparent xl:backdrop-blur-none border-b border-[#E2E8F0]/60 xl:border-transparent'
        }`}
      >
        <div className="mx-auto max-w-[1400px] flex items-center justify-between gap-4 px-4 sm:px-6 xl:px-8 h-[78px]">
          {/* ── Brand Logo ── */}
          <button
            onClick={() => scrollTo('home')}
            className="flex items-center shrink-0 cursor-pointer focus:outline-none"
            aria-label="Rajvadiya Associates Home"
          >
            <BrandLogo variant="dark" className="!h-8 sm:!h-9 2xl:!h-[42px]" />
          </button>

          {/* ── Desktop Nav ── */}
          <nav className="hidden xl:flex items-center gap-3.5 2xl:gap-6">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`relative py-2 text-[13px] 2xl:text-[13.5px] font-['Inter'] leading-tight text-center transition-colors duration-200 cursor-pointer ${
                    isActive
                      ? 'text-[#0D2244] font-semibold'
                      : 'text-[#1E293B] font-medium hover:text-[#0D2244]'
                  }`}
                >
                  {link.twoLine ? (
                    <span className="inline-block max-w-[72px] whitespace-normal">
                      {link.label}
                    </span>
                  ) : (
                    <span className="whitespace-nowrap">{link.label}</span>
                  )}
                  <span
                    className={`absolute left-0 right-0 -bottom-0.5 mx-auto h-[2.5px] rounded-full bg-[#C89436] transition-all duration-200 ${
                      isActive ? 'w-full opacity-100' : 'w-0 opacity-0'
                    }`}
                  />
                </button>
              );
            })}
          </nav>

          {/* ── Right side: Phone + Pill CTA + Hamburger ── */}
          <div className="flex items-center gap-3 2xl:gap-5 shrink-0">
            <a
              href="tel:+919000000000"
              className={`hidden lg:flex items-center gap-1.5 font-['Inter'] text-[13px] 2xl:text-[13.5px] font-semibold whitespace-nowrap transition-all ${
                scrolled
                  ? 'text-[#0D2244] hover:text-[#C89436]'
                  : 'text-[#0D2244] xl:px-3 xl:py-1.5 xl:rounded-full xl:bg-white/80 xl:backdrop-blur-sm xl:shadow-sm hover:text-[#C89436]'
              }`}
            >
              <Phone
                size={14}
                strokeWidth={2.2}
                className="text-[#0D2244] fill-[#0D2244]"
              />
              <span>+91 93135 72688</span>
            </a>

            <button
              onClick={() => scrollTo('contact')}
              className="hidden md:inline-flex items-center gap-2.5 px-4 2xl:px-5 py-2.5 rounded-xl bg-[#04214D] hover:bg-[#081730] text-white text-[13.5px] font-medium font-['Inter'] whitespace-nowrap border border-white/15 shadow-sm transition-all duration-200 cursor-pointer active:scale-[0.98]"
            >
              <GoldEnvelopeIcon />
              <span>Request a Consultation</span>
            </button>

            <button
              onClick={() => setMobileOpen((prev) => !prev)}
              className="xl:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-[#F6F8FB] transition-colors cursor-pointer text-[#0D2244]"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Overlay ── */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col pt-[78px]">
          <nav className="flex-1 flex flex-col items-center justify-center gap-2 px-6">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`w-full max-w-xs text-center py-3 rounded-xl text-lg font-medium font-['Inter'] transition-colors duration-200 cursor-pointer ${
                    isActive
                      ? 'text-[#0D2244] bg-[#F6F8FB] font-semibold border-b-2 border-[#C89436]'
                      : 'text-[#5A6577] hover:text-[#0D2244] hover:bg-[#F6F8FB]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}

            <div className="mt-6 flex flex-col items-center gap-4 w-full max-w-xs">
              <a
                href="tel:+919000000000"
                className="flex items-center gap-2 text-[#0D2244] font-['Inter'] text-sm font-medium"
              >
                <Phone size={16} className="text-[#C89436]" />
                <span>+91 90000 00000</span>
              </a>

              <button
                onClick={() => scrollTo('contact')}
                className="w-full py-3 rounded-xl bg-[#04214D] text-white text-base font-semibold font-['Inter'] hover:bg-[#081730] transition-colors cursor-pointer inline-flex items-center justify-center gap-2.5"
              >
                <GoldEnvelopeIcon />
                <span>Request a Consultation</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
