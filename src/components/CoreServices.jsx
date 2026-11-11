import React from 'react';
import {
  ClipboardCheck,
  Calculator,
  FileCheck,
  TrendingUp,
  ArrowRight,
} from 'lucide-react';

const services = [
  {
    title: 'Audit & Verification Services',
    icon: ClipboardCheck,
    description:
      'Professional support for stock audits, internal audit assignments, physical stock verification and fixed asset verification.',
    cta: 'Explore Audit Services',
    href: '#audit',
    featured: true,
  },
  {
    title: 'Accounting & Bookkeeping',
    icon: Calculator,
    description:
      'Reliable bookkeeping, accounting records, ledger reconciliation and financial reporting support for businesses.',
    cta: 'Explore Accounting',
    href: '#accounting',
    featured: false,
  },
  {
    title: 'Taxation Services',
    icon: FileCheck,
    description:
      'GST registration, GST return filing and income tax return assistance through appropriately qualified professionals.',
    cta: 'Explore Tax Services',
    href: '#taxation',
    featured: false,
  },
  {
    title: 'Business Finance & Advisory',
    icon: TrendingUp,
    description:
      'Financial analysis, budgeting, cash flow monitoring, working capital analysis and management reporting support.',
    cta: 'Explore Financial Advisory',
    href: '#business-finance',
    featured: false,
  },
];

export default function CoreServices() {
  return (
    <section id="services" className="bg-[#F6F8FB] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase text-[#A3721B] mb-3">
            WHAT WE DO
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D2244] mb-4">
            Comprehensive Financial &amp; Business Support Services
          </h2>
          <div className="w-20 h-[2.5px] bg-[#C89436] mx-auto mb-5 rounded-full" />
          <p className="text-[#5A6577] text-lg max-w-2xl mx-auto leading-relaxed">
            From audit execution and accounting support to taxation and
            financial analysis, we provide professional services aligned with
            your business requirements.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`relative bg-white rounded-2xl p-6 lg:p-8 border transition-all duration-300 group flex flex-col ${
                  service.featured
                    ? 'border-[#C89436]/50 shadow-md hover:shadow-xl'
                    : 'border-[#E2E8F0] shadow-sm hover:shadow-lg hover:border-[#C89436]/30'
                }`}
              >
                {/* Gold accent bar for featured card */}
                {service.featured && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#C89436] rounded-t-2xl" />
                )}

                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center mb-5 ${
                    service.featured
                      ? 'bg-[#C89436] text-white'
                      : 'bg-[#0D2244] text-white'
                  }`}
                >
                  <Icon className="w-5 h-5" strokeWidth={2} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#0D2244] mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-[#5A6577] text-sm leading-relaxed mb-6 flex-1">
                  {service.description}
                </p>

                {/* CTA */}
                <a
                  href={service.href}
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .querySelector(service.href)
                      ?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-colors ${
                    service.featured
                      ? 'text-[#A3721B] hover:text-[#0D2244]'
                      : 'text-[#0D2244] hover:text-[#C89436]'
                  }`}
                >
                  {service.cta}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
