import React from 'react';
import { MessageCircle, FileSearch, Settings, Send } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Understand Requirements',
    description:
      'We understand your business, service requirements and expectations.',
    Icon: MessageCircle,
  },
  {
    number: '02',
    title: 'Define the Scope',
    description:
      'We identify the required services and establish a clear engagement scope.',
    Icon: FileSearch,
  },
  {
    number: '03',
    title: 'Execute the Assignment',
    description:
      'We carry out the agreed service activities with attention to detail.',
    Icon: Settings,
  },
  {
    number: '04',
    title: 'Reporting & Coordination',
    description:
      'We provide relevant reports, updates and coordination as agreed.',
    Icon: Send,
  },
];

export default function WorkingProcess() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase text-[#A3721B] mb-3">
            HOW WE WORK
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D2244] mb-4">
            A Clear &amp; Structured Approach to Every Assignment
          </h2>
          <div className="w-20 h-[2.5px] bg-[#C89436] mx-auto rounded-full" />
        </div>

        {/* Desktop: horizontal 4-step process */}
        <div className="hidden md:block">
          <div className="relative grid grid-cols-4 gap-8">
            {/* Thin connecting line spanning through the center of the 4 numbered circles */}
            <div
              aria-hidden="true"
              className="absolute top-6 left-[12.5%] right-[12.5%] h-0.5 bg-[#E2E8F0]"
            />

            {steps.map(({ number, title, description, Icon }) => (
              <div key={number} className="relative flex flex-col items-center text-center">
                {/* Numbered circle */}
                <div className="relative z-10 w-12 h-12 rounded-full bg-[#0D2244] text-[#DFB054] flex items-center justify-center text-sm font-bold ring-4 ring-white shadow-sm mb-8 border border-[#C89436]/40">
                  {number}
                </div>

                {/* Step icon */}
                <div className="w-14 h-14 rounded-xl bg-[#F6F8FB] border border-[#E2E8F0] flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-[#0D2244]" />
                </div>

                {/* Title & description */}
                <h3 className="text-lg font-bold text-[#0D2244] mb-2">
                  Step {number} – {title}
                </h3>
                <p className="text-sm text-[#5A6577] leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="md:hidden">
          <div className="space-y-0">
            {steps.map(({ number, title, description, Icon }, idx) => {
              const isLast = idx === steps.length - 1;
              return (
                <div
                  key={number}
                  className={`relative flex items-start gap-5 ${
                    isLast ? '' : 'pb-10'
                  }`}
                >
                  {/* Vertical connecting line between circles */}
                  {!isLast && (
                    <div
                      aria-hidden="true"
                      className="absolute left-6 top-12 bottom-0 w-0.5 -translate-x-1/2 bg-[#E2E8F0]"
                    />
                  )}

                  {/* Numbered circle */}
                  <div className="relative z-10 w-12 h-12 rounded-full bg-[#0D2244] text-[#DFB054] flex items-center justify-center text-sm font-bold shrink-0 ring-4 ring-white shadow-sm border border-[#C89436]/40">
                    {number}
                  </div>

                  {/* Step content */}
                  <div className="pt-0.5">
                    <div className="w-11 h-11 rounded-xl bg-[#F6F8FB] border border-[#E2E8F0] flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5 text-[#0D2244]" />
                    </div>
                    <h3 className="text-base font-bold text-[#0D2244] mb-1">
                      Step {number} – {title}
                    </h3>
                    <p className="text-sm text-[#5A6577] leading-relaxed">
                      {description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
