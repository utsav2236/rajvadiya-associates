import React from 'react';
import {
  BookOpen,
  FileSpreadsheet,
  Landmark,
  BarChart3,
  PieChart,
  ArrowRight,
} from 'lucide-react';

const services = [
  {
    icon: BookOpen,
    title: 'Bookkeeping',
    description: 'Recording and maintaining daily financial transactions.',
  },
  {
    icon: FileSpreadsheet,
    title: 'Ledger Reconciliation',
    description:
      'Review and reconciliation of customer, supplier, bank and other ledger accounts.',
  },
  {
    icon: Landmark,
    title: 'Bank Reconciliation',
    description:
      'Matching bank statements with accounting records and identifying differences.',
  },
  {
    icon: BarChart3,
    title: 'Financial Reporting',
    description:
      'Preparation of management-oriented financial reports and supporting schedules.',
  },
  {
    icon: PieChart,
    title: 'MIS Reporting',
    description:
      'Regular financial and operational reporting to support management decisions.',
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

const AccountingServices = () => {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="accounting" className="bg-[#F6F8FB] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-sm font-semibold tracking-widest uppercase text-[#A3721B] mb-3">
            ACCOUNTING &amp; BOOKKEEPING
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D2244] mb-4 leading-tight">
            Accurate Financial Records for Better Business Control
          </h2>
          <div className="w-20 h-[2.5px] bg-[#C89436] mx-auto mb-5 rounded-full" />
          <p className="text-[#5A6577] text-base md:text-lg leading-relaxed">
            Accurate financial records are essential for every growing business.
            We support businesses with organised accounting processes and
            financial information.
          </p>
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
            Discuss Your Accounting Requirements
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AccountingServices;
