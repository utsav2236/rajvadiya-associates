import React from 'react';
import { Receipt, FileText, CheckCircle, ShieldCheck, ArrowRight } from 'lucide-react';

const gstServices = [
  'GST Registration Assistance',
  'GST Return Preparation and Filing',
  'GSTR Reconciliation',
  'Input Tax Credit Reconciliation',
  'GST Record Maintenance',
];

const itrServices = [
  'Individual ITR Preparation and Filing',
  'Business ITR Assistance',
  'Income and Expense Documentation',
  'Tax-Related Record Organisation',
];

export default function TaxationServices() {
  return (
    <section id="taxation" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-sm font-semibold tracking-widest uppercase text-[#A3721B] mb-3">
            Taxation &amp; Compliance
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D2244] mb-4">
            GST &amp; Income Tax Services
          </h2>
          <div className="w-20 h-[2.5px] bg-[#C89436] mx-auto mb-5 rounded-full" />
          <p className="text-lg text-[#5A6577] leading-relaxed">
            We assist businesses and individuals with routine taxation and compliance
            requirements through appropriately qualified professionals.
          </p>
        </div>

        {/* Panels Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Panel 1 — GST Services */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#E2E8F0] hover:border-[#C89436]/40 transition-colors">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#0D2244] flex items-center justify-center">
                <Receipt className="w-6 h-6 text-[#DFB054]" />
              </div>
              <h3 className="text-xl font-bold text-[#0D2244]">GST Services</h3>
            </div>
            <ul className="space-y-4">
              {gstServices.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C89436] mt-0.5 shrink-0" />
                  <span className="text-[#1E293B]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Panel 2 — Income Tax Return (ITR) */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#E2E8F0] hover:border-[#C89436]/40 transition-colors">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#0D2244] flex items-center justify-center">
                <FileText className="w-6 h-6 text-[#DFB054]" />
              </div>
              <h3 className="text-xl font-bold text-[#0D2244]">Income Tax Return (ITR)</h3>
            </div>
            <ul className="space-y-4">
              {itrServices.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C89436] mt-0.5 shrink-0" />
                  <span className="text-[#1E293B]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Panel 3 — Tax Compliance Support */}
        <div className="rounded-2xl p-6 border border-[#C89436]/40 bg-[#C89436]/[0.06] flex items-start gap-4 mb-12">
          <div className="w-10 h-10 rounded-xl bg-[#0D2244] flex items-center justify-center shrink-0">
            <ShieldCheck className="w-5 h-5 text-[#DFB054]" />
          </div>
          <div>
            <h4 className="font-semibold text-[#0D2244] mb-1">Tax Compliance Support</h4>
            <p className="text-[#5A6577]">
              Assistance with maintaining records, organising documents and coordinating
              compliance requirements.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#0D2244] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#081730] transition-colors shadow-lg shadow-[#0D2244]/15"
          >
            Get Taxation Assistance
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
