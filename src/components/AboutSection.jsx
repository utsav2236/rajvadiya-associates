import React from 'react';
import {
  CheckCircle,
  Shield,
  Target,
  Award,
  Eye,
  Users,
  Clock,
} from 'lucide-react';
import BrandLogo from './BrandLogo';

const features = [
  'Audit & Field-Level Coordination',
  'Accounting & Financial Reporting',
  'Practical Business Support',
];

const coreValues = [
  { label: 'Integrity', icon: Shield },
  { label: 'Accuracy', icon: Target },
  { label: 'Professionalism', icon: Award },
  { label: 'Transparency', icon: Eye },
  { label: 'Client-focused Service', icon: Users },
  { label: 'Timely Execution', icon: Clock },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase text-[#A3721B] mb-3">
            ABOUT RAJVADIYA ASSOCIATES
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D2244] mb-4">
            Professional Financial Support Built Around Your Business Needs
          </h2>
          <div className="w-20 h-[2.5px] bg-[#C89436] mx-auto rounded-full" />
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Left — Brand Feature Card */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#0D2244] via-[#132E59] to-[#081730] shadow-xl flex flex-col items-center justify-center gap-5 overflow-hidden p-8 border border-[#C89436]/20">
              {/* Diagonal gold architectural stripe matching hero wall */}
              <div
                aria-hidden="true"
                className="absolute top-0 right-14 w-[2px] h-full bg-gradient-to-b from-[#C89436]/70 via-[#C89436]/30 to-transparent rotate-[18deg] origin-top"
              />
              <div className="relative z-10 bg-white/5 backdrop-blur-sm px-7 py-5 rounded-2xl border border-white/15">
                <BrandLogo variant="light" size="lg" />
              </div>
              <div className="relative z-10 w-16 h-[2px] bg-[#C89436]" />
              <p className="relative z-10 text-white/80 text-sm font-medium tracking-wide text-center max-w-xs">
                Reliable Financial Support. Better Business Decisions.
              </p>
              {/* Decorative circles */}
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-[#C89436]/10" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-white/5" />
            </div>
          </div>

          {/* Right — About Text */}
          <div>
            <div className="space-y-4 mb-8">
              <p className="text-[#1E293B] leading-relaxed text-base md:text-lg">
                Rajvadiya Associates is a financial and business support service
                firm focused on providing audit, accounting, taxation and
                business finance services.
              </p>
              <p className="text-[#5A6577] leading-relaxed">
                We aim to support businesses and professionals with reliable
                execution, accurate financial information and practical business
                support.
              </p>
              <p className="text-[#5A6577] leading-relaxed">
                Our service approach combines field-level audit coordination
                with accounting and financial reporting capabilities.
              </p>
            </div>

            {/* Feature Highlights */}
            <div className="space-y-3">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C89436] flex-shrink-0" />
                  <span className="text-[#1E293B] font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mission / Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* Mission */}
          <div className="bg-[#F6F8FB] rounded-2xl p-8 border border-[#E2E8F0] border-l-4 border-l-[#C89436]">
            <h3 className="text-xs font-semibold tracking-widest uppercase text-[#A3721B] mb-3">
              Our Mission
            </h3>
            <p className="text-[#1E293B] leading-relaxed">
              To provide dependable financial and audit support that helps
              businesses improve financial discipline, transparency and
              operational efficiency.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-[#F6F8FB] rounded-2xl p-8 border border-[#E2E8F0] border-l-4 border-l-[#0D2244]">
            <h3 className="text-xs font-semibold tracking-widest uppercase text-[#0D2244] mb-3">
              Our Vision
            </h3>
            <p className="text-[#1E293B] leading-relaxed">
              To develop into a trusted financial services partner for
              businesses across India.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div>
          <h3 className="text-center text-xl font-bold text-[#0D2244] mb-8">
            Our Core Values
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {coreValues.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.label}
                  className="bg-[#F6F8FB] border border-[#E2E8F0] rounded-xl p-5 text-center hover:shadow-md hover:border-[#C89436]/40 transition-all"
                >
                  <div className="w-10 h-10 rounded-full bg-[#0D2244]/10 flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-4.5 h-4.5 text-[#C89436]" />
                  </div>
                  <p className="text-sm font-semibold text-[#0D2244]">
                    {value.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
