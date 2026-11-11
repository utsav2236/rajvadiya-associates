import { useState, useEffect, useRef, useCallback } from 'react';
import { MapPin, Phone, MessageCircle, Mail, X, Shield, FileText } from 'lucide-react';
import BrandLogo from './BrandLogo';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Industries', href: '#industries' },
  { label: 'Contact Us', href: '#contact' },
];

const serviceLinks = [
  { label: 'Stock Audit', href: '#audit' },
  { label: 'Physical Stock Verification', href: '#audit' },
  { label: 'Accounting & Bookkeeping', href: '#accounting' },
  { label: 'GST Services', href: '#taxation' },
  { label: 'Income Tax Assistance', href: '#taxation' },
  { label: 'Business Finance', href: '#business-finance' },
];

const WHATSAPP_URL =
  'https://wa.me/91XXXXXXXXXX?text=Hello%20Rajvadiya%20Associates%2C%20I%20would%20like%20to%20enquire%20about%20your%20audit%2C%20accounting%2C%20taxation%20or%20business%20finance%20services.';

export default function Footer() {
  const [activeModal, setActiveModal] = useState(null);
  const closeButtonRef = useRef(null);
  const previousFocusRef = useRef(null);

  const openModal = (modalName) => {
    previousFocusRef.current = document.activeElement;
    setActiveModal(modalName);
  };

  const closeModal = useCallback(() => {
    setActiveModal(null);
    requestAnimationFrame(() => {
      previousFocusRef.current?.focus?.();
    });
  }, []);

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (!activeModal) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    closeButtonRef.current?.focus();

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeModal, closeModal]);

  return (
    <>
      <footer className="bg-[#081730] text-white border-t border-[#C89436]/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 sm:pb-12">
          {/* 4-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {/* Column 1 - Company Identity */}
            <div>
              <div className="mb-4">
                <BrandLogo variant="light" size="sm" />
              </div>
              <p className="text-sm text-gray-300 leading-relaxed">
                Audit | Accounting | Taxation | Business Finance
              </p>
              <p className="text-sm text-gray-400 italic mt-2 leading-relaxed">
                &ldquo;Reliable Financial Support. Better Business Decisions.&rdquo;
              </p>
            </div>

            {/* Column 2 - Quick Links */}
            <div>
              <h3 className="text-white font-semibold text-base mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2.5 text-sm">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => handleSmoothScroll(e, link.href)}
                      className="text-gray-400 hover:text-[#DFB054] transition-colors duration-200 inline-block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 - Our Services */}
            <div>
              <h3 className="text-white font-semibold text-base mb-4">
                Our Services
              </h3>
              <ul className="space-y-2.5 text-sm">
                {serviceLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => handleSmoothScroll(e, link.href)}
                      className="text-gray-400 hover:text-[#DFB054] transition-colors duration-200 inline-block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4 - Contact Info */}
            <div>
              <h3 className="text-white font-semibold text-base mb-4">
                Contact Us
              </h3>
              <ul className="space-y-3.5 text-sm text-gray-400">
                <li className="flex items-start gap-3">
                  <MapPin
                    className="w-4 h-4 text-[#DFB054] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span>Ahmedabad, Gujarat, India</span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone
                    className="w-4 h-4 text-[#DFB054] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <a
                    href="tel:+919000000000"
                    className="hover:text-white transition-colors duration-200"
                  >
                    +91 90000 00000
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MessageCircle
                    className="w-4 h-4 text-[#DFB054] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors duration-200"
                  >
                    [WhatsApp Number]
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail
                    className="w-4 h-4 text-[#DFB054] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <a
                    href="mailto:info@rajvadiyaassociates.com"
                    className="hover:text-white transition-colors duration-200 break-all"
                  >
                    [Business Email Address]
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <p className="text-center sm:text-left">
              &copy; 2026 Rajvadiya Associates. All Rights Reserved.
            </p>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => openModal('privacy')}
                className="text-gray-400 hover:text-[#DFB054] transition-colors duration-200 cursor-pointer"
              >
                Privacy Policy
              </button>
              <span className="text-white/20" aria-hidden="true">
                |
              </span>
              <button
                type="button"
                onClick={() => openModal('terms')}
                className="text-gray-400 hover:text-[#DFB054] transition-colors duration-200 cursor-pointer"
              >
                Terms &amp; Conditions
              </button>
            </div>
          </div>

          {/* Disclaimer */}
          <p className="text-gray-500 text-xs mt-4 text-center max-w-4xl mx-auto leading-relaxed">
            Services are provided within the applicable legal, regulatory and
            professional scope. Statutory audit, certification, tax audit and
            regulated investment advisory services will only be undertaken by
            appropriately qualified and authorised professionals.
          </p>
        </div>
      </footer>

      {/* Legal Information Modal (Privacy Policy / Terms & Conditions) */}
      {activeModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="legal-modal-title"
        >
          <div
            className="bg-white text-[#1E293B] rounded-2xl shadow-2xl max-w-2xl w-full max-h-[85vh] flex flex-col overflow-hidden border border-[#E2E8F0]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#E2E8F0] bg-[#F6F8FB]">
              <div className="flex items-center gap-2.5">
                {activeModal === 'privacy' ? (
                  <Shield className="w-5 h-5 text-[#C89436]" aria-hidden="true" />
                ) : (
                  <FileText className="w-5 h-5 text-[#0D2244]" aria-hidden="true" />
                )}
                <h2
                  id="legal-modal-title"
                  className="text-lg font-bold text-[#0D2244] font-['Plus_Jakarta_Sans']"
                >
                  {activeModal === 'privacy'
                    ? 'Privacy Policy'
                    : 'Terms & Conditions'}
                </h2>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={closeModal}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-[#5A6577] hover:text-[#0D2244] hover:bg-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="px-6 py-5 overflow-y-auto space-y-4 text-sm text-[#5A6577] leading-relaxed">
              {activeModal === 'privacy' ? (
                <>
                  <p className="text-[#1E293B] font-medium">
                    Effective Date: January 2026 &mdash; Rajvadiya Associates
                  </p>
                  <div>
                    <h3 className="font-semibold text-[#0D2244] mb-1">
                      1. Information We Collect
                    </h3>
                    <p>
                      When you submit an enquiry or contact us via phone,
                      email, or WhatsApp, we may collect business and contact
                      information such as your name, organisation name, mobile
                      number, email address, city/state, and details regarding
                      your service requirements.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0D2244] mb-1">
                      2. How We Use Your Information
                    </h3>
                    <p>
                      Information shared with Rajvadiya Associates is used
                      solely to respond to your enquiries, understand your
                      audit, accounting, taxation, or business finance needs,
                      and coordinate agreed professional support services.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0D2244] mb-1">
                      3. Confidentiality &amp; Data Protection
                    </h3>
                    <p>
                      We treat client records, financial information, and
                      enquiry details with professional confidentiality. We do
                      not sell, rent, or trade your personal or business contact
                      details to third parties.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0D2244] mb-1">
                      4. Third-Party Links
                    </h3>
                    <p>
                      Our website includes direct links to external
                      communication channels such as WhatsApp. Any interaction
                      conducted through third-party platforms is also governed
                      by the respective platform&apos;s privacy practices.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0D2244] mb-1">
                      5. Contact for Privacy Requests
                    </h3>
                    <p>
                      To update or request removal of enquiry details shared
                      with us, please reach out through the contact information
                      listed on this website.
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <p className="text-[#1E293B] font-medium">
                    Last Updated: January 2026 &mdash; Rajvadiya Associates
                  </p>
                  <div>
                    <h3 className="font-semibold text-[#0D2244] mb-1">
                      1. Informational Purpose
                    </h3>
                    <p>
                      The content on this website is provided for general
                      informational purposes regarding the audit support,
                      accounting, taxation assistance, and business finance
                      services offered by Rajvadiya Associates.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0D2244] mb-1">
                      2. Scope of Services &amp; Regulatory Compliance
                    </h3>
                    <p>
                      All services are provided strictly within applicable
                      legal, regulatory, and professional limits. Statutory
                      audit, certification, tax audit, and regulated investment
                      advisory services are undertaken only by appropriately
                      qualified and authorised professionals.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0D2244] mb-1">
                      3. Engagement Terms
                    </h3>
                    <p>
                      Submitting an enquiry through this website does not by
                      itself establish a formal client engagement. Specific
                      deliverables, timelines, and fees are governed by
                      mutually agreed engagement terms prior to assignment
                      execution.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0D2244] mb-1">
                      4. Intellectual Property
                    </h3>
                    <p>
                      All text, branding elements, and layout materials on this
                      website belong to Rajvadiya Associates and may not be
                      reproduced or redistributed without prior written
                      permission.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0D2244] mb-1">
                      5. Governing Jurisdiction
                    </h3>
                    <p>
                      These terms are governed by the laws of India, with
                      jurisdiction in Ahmedabad, Gujarat.
                    </p>
                  </div>
                </>
              )}
            </div>

            {/* Modal Footer */}
            <div className="flex justify-end px-6 py-4 border-t border-[#E2E8F0] bg-[#F6F8FB]">
              <button
                type="button"
                onClick={closeModal}
                className="px-5 py-2 rounded-full bg-[#0D2244] text-white text-sm font-semibold hover:bg-[#081730] transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
