import React from 'react';
import {
  Target,
  ArrowUpDown,
  Repeat,
  LayoutDashboard,
  DollarSign,
  LineChart,
  ArrowRight,
} from 'lucide-react';

const services = [
  {
    title: 'Budgeting & Forecasting',
    icon: Target,
    description:
      'Budget preparation and comparison of actual financial performance against planned targets.',
  },
  {
    title: 'Cash Flow Analysis',
    icon: ArrowUpDown,
    description:
      'Monitoring cash inflows and outflows to improve financial visibility.',
  },
  {
    title: 'Working Capital Analysis',
    icon: Repeat,
    description:
      'Analysis of inventory, receivables, payables and operating cash requirements.',
  },
  {
    title: 'Management Reporting',
    icon: LayoutDashboard,
    description:
      'Preparation of management reports and financial dashboards.',
  },
  {
    title: 'Cost & Profitability Analysis',
    icon: DollarSign,
    description:
      'Understanding business costs, product costs and profitability drivers.',
  },
  {
    title: 'Financial Planning Support',
    icon: LineChart,
    description:
      'Business-oriented financial planning and financial management assistance.',
  },
];

export default function BusinessFinance() {
  return (
    <section id="business-finance" className="bg-[#F6F8FB] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-sm font-semibold tracking-widest uppercase text-[#A3721B] mb-3">
            Business Finance &amp; Advisory
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D2244] mb-4">
            Better Financial Information. Better Business Decisions.
          </h2>
          <div className="w-20 h-[2.5px] bg-[#C89436] mx-auto mb-5 rounded-full" />
          <p className="text-lg text-[#5A6577] leading-relaxed">
            We support business owners and management teams with practical financial
            information and analysis.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {services.map(({ title, icon: Icon, description }) => (
            <div
              key={title}
              className="group bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm hover:shadow-md hover:border-[#C89436]/40 transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-[#0D2244]/8 group-hover:bg-[#0D2244] flex items-center justify-center mb-5 transition-colors">
                <Icon className="w-6 h-6 text-[#C89436] group-hover:text-[#DFB054] transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-[#0D2244] mb-2">{title}</h3>
              <p className="text-[#5A6577] leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-sm italic text-[#5A6577] text-center max-w-3xl mx-auto mb-12">
          These services concern business financial management. Personal investment
          recommendations or regulated investment advisory services are not offered
          unless appropriately authorised.
        </p>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#0D2244] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#081730] transition-colors shadow-lg shadow-[#0D2244]/15"
          >
            Discuss Your Business Finance Needs
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
