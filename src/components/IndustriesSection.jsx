import React from 'react';
import { Landmark, Briefcase, Factory, Truck, Building2, User } from 'lucide-react';

const industries = [
  {
    icon: Landmark,
    title: 'Financial Institutions & Banks',
    description: 'Stock verification and audit assignment support within the agreed engagement scope.',
    prominent: true,
  },
  {
    icon: Briefcase,
    title: 'CA Firms',
    description: 'Audit manpower coordination, field verification and assignment execution support.',
    prominent: true,
  },
  {
    icon: Factory,
    title: 'Manufacturing Companies',
    description: 'Inventory verification, fixed asset checking, bookkeeping and financial reporting.',
    prominent: false,
  },
  {
    icon: Truck,
    title: 'Trading & Distribution Businesses',
    description: 'Stock reconciliation, inventory management support and accounting services.',
    prominent: false,
  },
  {
    icon: Building2,
    title: 'SMEs',
    description: 'Bookkeeping, GST support, MIS reporting, cash flow and working capital analysis.',
    prominent: false,
  },
  {
    icon: User,
    title: 'Individuals',
    description: 'Income tax return assistance and related documentation support.',
    prominent: false,
  },
];

export default function IndustriesSection() {
  return (
    <section id="industries" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-sm font-semibold tracking-widest uppercase text-[#A3721B] mb-3">
            OUR CLIENT SEGMENTS
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D2244] mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Supporting Different Business Requirements
          </h2>
          <div className="w-20 h-[2.5px] bg-[#C89436] mx-auto mb-5 rounded-full" />
          <p className="text-[#5A6577] text-lg leading-relaxed">
            Our services are structured to support the diverse audit, accounting and financial requirements of businesses and professionals.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <div
                key={industry.title}
                className={`bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm hover:shadow-md hover:border-[#C89436]/40 transition-all duration-300 ${
                  industry.prominent ? 'border-t-4 border-t-[#C89436]' : ''
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
                    industry.prominent
                      ? 'bg-[#0D2244] text-[#DFB054]'
                      : 'bg-[#0D2244]/8 text-[#C89436]'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#0D2244] mb-2">
                  {industry.title}
                </h3>
                <p className="text-sm text-[#5A6577] leading-relaxed">
                  {industry.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
