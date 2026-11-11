import React from 'react';
import {
  Search,
  PackageCheck,
  ShieldCheck,
  Building,
  Warehouse,
  ArrowRight,
  ClipboardCheck,
} from 'lucide-react';

const services = [
  {
    icon: Warehouse,
    title: 'Stock Audit',
    description:
      'Comprehensive inventory review, physical stock verification, discrepancy identification, and reconciliation to ensure accurate stock records and effective inventory management',
  },
   {
    icon: Building,
    title: 'Fixed Asset Verification',
    description:
      'Physical verification of fixed assets, identification, location checking and reconciliation with available asset registers.',
  },
  {
    icon: ShieldCheck,
    title: 'Internal Audit Support',
    description:
      'Assistance with internal control reviews, process checking, documentation and operational verification within the agreed engagement scope.',
  },
];

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="group bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm hover:shadow-md hover:border-[#C89436]/40 transition-all duration-300 hover:-translate-y-1">
    <div className="w-14 h-14 rounded-full bg-[#0D2244] flex items-center justify-center mb-5 group-hover:bg-[#C89436] transition-colors duration-300">
      <Icon className="w-6 h-6 text-white" strokeWidth={1.8} />
    </div>
    <h3 className="text-lg font-bold text-[#0D2244] mb-3">{title}</h3>
    <p className="text-[#5A6577] text-sm leading-relaxed">{description}</p>
  </div>
);

const AuditServices = () => {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="audit" className="bg-white py-20 border-t border-[#E2E8F0]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Area with Visual Card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <div>
            <p className="text-sm font-semibold tracking-widest uppercase text-[#A3721B] mb-3">
              OUR PROFESSIONAL SERVICES
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D2244] mb-4 leading-tight">
              Audit &amp; Verification Services
            </h2>
            <div className="w-20 h-[2.5px] bg-[#C89436] mb-5 rounded-full" />
            <p className="text-[#5A6577] text-base md:text-lg leading-relaxed">
              We provide audit execution and verification support to businesses,
              CA firms and financial institutions, subject to the scope and
              professional requirements of each assignment.
            </p>
          </div>

          {/* Visual Card */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#0D2244] via-[#132E59] to-[#081730] aspect-[4/3] flex flex-col items-center justify-center p-8 text-center border border-[#C89436]/20">
              {/* Decorative circles & gold accent */}
              <div className="absolute top-6 right-6 w-20 h-20 rounded-full border border-[#C89436]/20" />
              <div className="absolute bottom-8 left-8 w-32 h-32 rounded-full border border-white/5" />
              <div className="w-20 h-20 rounded-full bg-white/10 ring-1 ring-[#C89436]/40 flex items-center justify-center mb-6">
                <ClipboardCheck className="w-10 h-10 text-[#DFB054]" strokeWidth={1.5} />
              </div>
              <p className="text-white text-xl font-bold mb-2">
                Professional Audit Services
              </p>
              <div className="w-12 h-[2px] bg-[#C89436] mb-3" />
              <p className="text-white/70 text-sm max-w-xs">
                Comprehensive verification and audit support for your business
              </p>
            </div>
          </div>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 bg-[#0D2244] text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-[#081730] hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            Request an Audit Service
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AuditServices;
