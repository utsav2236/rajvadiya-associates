import React from 'react';
import { Layers, Target, MessageSquare, ListChecks, Clock, MapPin } from 'lucide-react';

const features = [
  {
    icon: Layers,
    title: 'Multiple Financial Service Offerings',
    description: 'Audit, accounting, taxation and business finance support under one business identity.',
  },
  {
    icon: Target,
    title: 'Business-Focused Service Approach',
    description: 'Services structured around practical client and operational requirements.',
  },
  {
    icon: MessageSquare,
    title: 'Professional Coordination',
    description: 'Clear communication and coordination throughout assignments.',
  },
  {
    icon: ListChecks,
    title: 'Reliable Assignment Management',
    description: 'Structured execution and attention to agreed deliverables.',
  },
  {
    icon: Clock,
    title: 'Accuracy & Timely Execution',
    description: 'Focus on accurate records, proper documentation and timely completion.',
  },
  {
    icon: MapPin,
    title: 'Nationwide Service Coverage',
    description: 'Service coverage across India, subject to assignment requirements.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#F6F8FB] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-sm font-semibold tracking-widest uppercase text-[#A3721B] mb-3">
            OUR ADVANTAGE
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D2244] mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Why Choose Rajvadiya Associates?
          </h2>
          <div className="w-20 h-[2.5px] bg-[#C89436] mx-auto rounded-full" />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm hover:shadow-md hover:border-[#C89436]/40 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-[#0D2244]/8 text-[#C89436] flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#0D2244] mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-[#5A6577] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
