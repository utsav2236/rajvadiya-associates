import React, { useState } from 'react';
import {
  Building,
  User,
  MapPin,
  Globe,
  Phone,
  MessageCircle,
  Mail,
  Send,
  AlertCircle,
  CheckCircle2,
  Info,
  Loader2,
} from 'lucide-react';

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';
const WEB3FORMS_ACCESS_KEY = (import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '').trim();

const WHATSAPP_URL =
  'https://wa.me/+919313572688?text=Hello%20Rajvadiya%20Associates%2C%20I%20would%20like%20to%20enquire%20about%20your%20audit%2C%20accounting%2C%20taxation%20or%20business%20finance%20services.';

const SERVICE_OPTIONS = [
  'Stock Audit',
  'Physical Stock Verification',
  'Internal Audit Support',
  'Fixed Asset Verification',
  'Inventory Audit',
  'Bookkeeping',
  'Ledger Reconciliation',
  'Bank Reconciliation',
  'Financial Reporting',
  'MIS Reporting',
  'GST Registration',
  'GST Return Filing',
  'Income Tax Return',
  'Business Finance & Advisory',
  'Other',
];

const INITIAL_FORM_DATA = {
  fullName: '',
  companyName: '',
  mobile: '',
  email: '',
  cityState: '',
  serviceRequired: '',
  requirement: '',
};

const contactCards = [
  {
    label: 'Business Name',
    value: 'Rajvadiya Associates',
    Icon: Building,
    type: 'text',
  },
  {
    label: 'Proprietor',
    value: 'Harsh A. Rajvadiya',
    Icon: User,
    type: 'text',
  },
  {
    label: 'Location',
    value: 'Ahmedabad, Gujarat, India',
    Icon: MapPin,
    type: 'text',
  },
  {
    label: 'Service Coverage',
    value: 'PAN India',
    Icon: Globe,
    type: 'text',
  },
  {
    label: 'Phone',
    value: '+91 93135 72688',
    href: '',
    Icon: Phone,
    type: 'link',
  },
  {
    label: 'WhatsApp',
    value: '+91 93135 72688',
    href: WHATSAPP_URL,
    Icon: MessageCircle,
    type: 'external',
  },
  {
    label: 'Email',
    value: 'rajvadiyaassociates@gmail.com',
    href: 'mailto:info@rajvadiyaassociates.com',
    Icon: Mail,
    type: 'link',
  },
];

function normalizeIndianMobile(rawValue) {
  let digits = rawValue.replace(/\D/g, '');
  if (digits.startsWith('0091') && digits.length > 12) {
    digits = digits.slice(4);
  } else if (digits.startsWith('91') && digits.length > 10) {
    digits = digits.slice(2);
  } else if (digits.startsWith('0') && digits.length > 10) {
    digits = digits.slice(1);
  }
  return digits.slice(0, 10);
}

function validateForm(data) {
  const errors = {};

  if (!data.fullName.trim()) {
    errors.fullName = 'Please enter your full name.';
  } else if (data.fullName.trim().length < 2) {
    errors.fullName = 'Full name must be at least 2 characters.';
  }

  const normalizedMobile = normalizeIndianMobile(data.mobile);
  if (!data.mobile.trim()) {
    errors.mobile = 'Please enter your 10-digit mobile number.';
  } else if (!/^[6-9]\d{9}$/.test(normalizedMobile)) {
    errors.mobile =
      'Please enter a valid 10-digit Indian mobile number (starting with 6–9).';
  }

  if (data.email.trim()) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(data.email.trim())) {
      errors.email = 'Please enter a valid email address.';
    }
  }

  if (!data.requirement.trim()) {
    errors.requirement = 'Please provide a brief description of your requirement.';
  } else if (data.requirement.trim().length < 10) {
    errors.requirement =
      'Please provide at least 10 characters describing your requirement.';
  }

  return errors;
}

export default function ContactSection() {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [botcheck, setBotcheck] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null | 'success' | 'error' | 'missing_key' | 'validation_error'
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }

    if (submitStatus) {
      setSubmitStatus(null);
      setSubmitError('');
    }
  };

  const handleMobileChange = (e) => {
    const cleaned = normalizeIndianMobile(e.target.value);
    setFormData((prev) => ({ ...prev, mobile: cleaned }));

    if (errors.mobile) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next.mobile;
        return next;
      });
    }

    if (submitStatus) {
      setSubmitStatus(null);
      setSubmitError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitStatus('validation_error');
      setSubmitError('');
      return;
    }

    if (!WEB3FORMS_ACCESS_KEY || WEB3FORMS_ACCESS_KEY === 'your_web3forms_access_key_here') {
      setSubmitStatus('missing_key');
      setSubmitError('');
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    setSubmitStatus(null);
    setSubmitError('');

    try {
      const payload = {
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: `New Website Enquiry${formData.serviceRequired ? ` – ${formData.serviceRequired}` : ''} | ${formData.fullName.trim()}`,
        from_name: 'Rajvadiya Associates Website',
        ...(formData.email.trim() ? { replyto: formData.email.trim() } : {}),
        'Full Name': formData.fullName.trim(),
        'Company / Organisation': formData.companyName.trim() || 'Not provided',
        'Mobile Number': `+91 ${formData.mobile.trim()}`,
        'Email Address': formData.email.trim() || 'Not provided',
        'City / State': formData.cityState.trim() || 'Not provided',
        'Service Required': formData.serviceRequired || 'Not specified',
        'Requirement Details': formData.requirement.trim(),
        botcheck,
      };

      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus('success');
        setFormData(INITIAL_FORM_DATA);
        setBotcheck(false);
      } else {
        setSubmitStatus('error');
        setSubmitError(
          result?.message || 'Unable to send your enquiry right now. Please try again.'
        );
      }
    } catch {
      setSubmitStatus('error');
      setSubmitError(
        'Network error while submitting your enquiry. Please check your connection or use Email/WhatsApp below.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const buildDirectEmailHref = () => {
    const subject = encodeURIComponent(
      `Business Enquiry${formData.serviceRequired ? ` – ${formData.serviceRequired}` : ''} | ${formData.fullName.trim() || 'Rajvadiya Associates'}`
    );
    const body = encodeURIComponent(
      [
        `Full Name: ${formData.fullName.trim()}`,
        formData.companyName.trim() ? `Company/Organisation: ${formData.companyName.trim()}` : null,
        `Mobile Number: +91 ${formData.mobile.trim()}`,
        formData.email.trim() ? `Email: ${formData.email.trim()}` : null,
        formData.cityState.trim() ? `City/State: ${formData.cityState.trim()}` : null,
        formData.serviceRequired ? `Service Required: ${formData.serviceRequired}` : null,
        '',
        'Requirement Details:',
        formData.requirement.trim(),
      ]
        .filter((line) => line !== null)
        .join('\n')
    );

    return `mailto:rajvadiyaassociates@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="bg-[#F6F8FB] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-sm font-semibold tracking-widest uppercase text-[#A3721B] mb-3">
            GET IN TOUCH
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D2244] mb-4">
            Let&apos;s Connect
          </h2>
          <div className="w-20 h-[2.5px] bg-[#C89436] mx-auto mb-5 rounded-full" />
          <p className="text-[#5A6577] text-base md:text-lg leading-relaxed">
            Looking for dependable audit, accounting, taxation or business
            finance support? Contact Rajvadiya Associates to discuss your
            requirements.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          {/* LEFT COLUMN — Contact Info Cards & Map Placeholder */}
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {contactCards.map(({ label, value, href, Icon, type }) => (
                <div
                  key={label}
                  className="bg-white rounded-2xl p-4 border border-[#E2E8F0] shadow-sm flex items-center gap-4 hover:shadow-md hover:border-[#C89436]/40 transition-all"
                >
                  <div className="w-11 h-11 rounded-full bg-[#0D2244]/8 text-[#C89436] flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#5A6577]">
                      {label}
                    </p>
                    {type === 'link' && (
                      <a
                        href={href}
                        className="text-sm sm:text-base font-semibold text-[#0D2244] hover:text-[#C89436] transition-colors break-words"
                      >
                        {value}
                      </a>
                    )}
                    {type === 'external' && (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm sm:text-base font-semibold text-[#0D2244] hover:text-[#C89436] transition-colors break-words"
                      >
                        {value}
                      </a>
                    )}
                    {type === 'text' && (
                      <p className="text-sm sm:text-base font-semibold text-[#1E293B] break-words">
                        {value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Google Maps Placeholder Box */}
            <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-sm p-6 mt-2">
              <div className="rounded-xl bg-[#F6F8FB] border border-dashed border-[#CBD5E1] h-48 flex flex-col items-center justify-center text-center px-4">
                <div className="w-12 h-12 rounded-full bg-[#0D2244]/10 text-[#C89436] flex items-center justify-center mb-3">
                  <MapPin className="w-6 h-6" />
                </div>
                <p className="text-sm font-semibold text-[#0D2244]">
                  Ahmedabad, Gujarat, India
                </p>
                <p className="text-xs text-[#5A6577] mt-1">
                  Google Maps Embed Placeholder — Office Location Map
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN — Enquiry Form */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E2E8F0] shadow-sm">
            <h3 className="text-xl font-bold text-[#0D2244] mb-1">
              Send Us an Enquiry
            </h3>
            <p className="text-sm text-[#5A6577] mb-6">
              Fields marked with <span className="text-red-600 font-semibold">*</span> are required.
            </p>

            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* Web3Forms Honeypot Anti-Spam Field */}
              <input
                type="checkbox"
                name="botcheck"
                checked={botcheck}
                onChange={(e) => setBotcheck(e.target.checked)}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
              />
              {/* 1. Full Name* */}
              <div>
                <label
                  htmlFor="contact-fullName"
                  className="block text-sm font-medium text-[#1E293B] mb-1.5"
                >
                  Full Name <span className="text-red-600">*</span>
                </label>
                <input
                  id="contact-fullName"
                  name="fullName"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.fullName)}
                  aria-describedby={errors.fullName ? 'error-fullName' : undefined}
                  className={`w-full border rounded-xl p-3 text-sm text-[#1E293B] placeholder:text-[#9AA5B4] focus:outline-none focus:ring-2 focus:ring-[#0D2244] focus:border-[#0D2244] transition-colors ${
                    errors.fullName ? 'border-red-500' : 'border-[#E2E8F0]'
                  }`}
                />
                {errors.fullName && (
                  <p
                    id="error-fullName"
                    role="alert"
                    className="mt-1.5 text-xs text-red-600 flex items-center gap-1"
                  >
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    {errors.fullName}
                  </p>
                )}
              </div>

              {/* 2. Company/Organisation Name */}
              <div>
                <label
                  htmlFor="contact-companyName"
                  className="block text-sm font-medium text-[#1E293B] mb-1.5"
                >
                  Company / Organisation Name
                </label>
                <input
                  id="contact-companyName"
                  name="companyName"
                  type="text"
                  autoComplete="organization"
                  placeholder="Enter company or firm name (optional)"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full border border-[#E2E8F0] rounded-xl p-3 text-sm text-[#1E293B] placeholder:text-[#9AA5B4] focus:outline-none focus:ring-2 focus:ring-[#0D2244] focus:border-[#0D2244] transition-colors"
                />
              </div>

              {/* 3. Mobile Number* & 4. Email Address */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="contact-mobile"
                    className="block text-sm font-medium text-[#1E293B] mb-1.5"
                  >
                    Mobile Number <span className="text-red-600">*</span>
                  </label>
                  <div
                    className={`flex items-center border rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-[#0D2244] focus-within:border-[#0D2244] transition-colors ${
                      errors.mobile ? 'border-red-500' : 'border-[#E2E8F0]'
                    }`}
                  >
                    <span className="px-3 py-3 bg-[#F6F8FB] border-r border-[#E2E8F0] text-sm font-semibold text-[#0D2244] select-none shrink-0">
                      +91
                    </span>
                    <input
                      id="contact-mobile"
                      name="mobile"
                      type="tel"
                      inputMode="numeric"
                      required
                      autoComplete="tel-national"
                      placeholder="10-digit mobile number"
                      value={formData.mobile}
                      onChange={handleMobileChange}
                      aria-invalid={Boolean(errors.mobile)}
                      aria-describedby={errors.mobile ? 'error-mobile' : undefined}
                      className="w-full p-3 text-sm text-[#1E293B] placeholder:text-[#9AA5B4] focus:outline-none bg-white"
                    />
                  </div>
                  {errors.mobile && (
                    <p
                      id="error-mobile"
                      role="alert"
                      className="mt-1.5 text-xs text-red-600 flex items-center gap-1"
                    >
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      {errors.mobile}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-medium text-[#1E293B] mb-1.5"
                  >
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'error-email' : undefined}
                    className={`w-full border rounded-xl p-3 text-sm text-[#1E293B] placeholder:text-[#9AA5B4] focus:outline-none focus:ring-2 focus:ring-[#0D2244] focus:border-[#0D2244] transition-colors ${
                      errors.email ? 'border-red-500' : 'border-[#E2E8F0]'
                    }`}
                  />
                  {errors.email && (
                    <p
                      id="error-email"
                      role="alert"
                      className="mt-1.5 text-xs text-red-600 flex items-center gap-1"
                    >
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* 5. City/State & 6. Service Required */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="contact-cityState"
                    className="block text-sm font-medium text-[#1E293B] mb-1.5"
                  >
                    City / State
                  </label>
                  <input
                    id="contact-cityState"
                    name="cityState"
                    type="text"
                    placeholder="e.g. Ahmedabad, Gujarat"
                    value={formData.cityState}
                    onChange={handleChange}
                    className="w-full border border-[#E2E8F0] rounded-xl p-3 text-sm text-[#1E293B] placeholder:text-[#9AA5B4] focus:outline-none focus:ring-2 focus:ring-[#0D2244] focus:border-[#0D2244] transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-serviceRequired"
                    className="block text-sm font-medium text-[#1E293B] mb-1.5"
                  >
                    Service Required
                  </label>
                  <select
                    id="contact-serviceRequired"
                    name="serviceRequired"
                    value={formData.serviceRequired}
                    onChange={handleChange}
                    className="w-full border border-[#E2E8F0] rounded-xl p-3 text-sm text-[#1E293B] bg-white focus:outline-none focus:ring-2 focus:ring-[#0D2244] focus:border-[#0D2244] transition-colors"
                  >
                    <option value="">Select a service (optional)</option>
                    {SERVICE_OPTIONS.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* 7. Brief Description of Requirement* */}
              <div>
                <label
                  htmlFor="contact-requirement"
                  className="block text-sm font-medium text-[#1E293B] mb-1.5"
                >
                  Brief Description of Requirement{' '}
                  <span className="text-red-600">*</span>
                </label>
                <textarea
                  id="contact-requirement"
                  name="requirement"
                  rows={4}
                  required
                  placeholder="Share brief details about your service requirement, location, timeline or scope..."
                  value={formData.requirement}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.requirement)}
                  aria-describedby={
                    errors.requirement ? 'error-requirement' : undefined
                  }
                  className={`w-full border rounded-xl p-3 text-sm text-[#1E293B] placeholder:text-[#9AA5B4] focus:outline-none focus:ring-2 focus:ring-[#0D2244] focus:border-[#0D2244] transition-colors resize-y ${
                    errors.requirement ? 'border-red-500' : 'border-[#E2E8F0]'
                  }`}
                />
                {errors.requirement && (
                  <p
                    id="error-requirement"
                    role="alert"
                    className="mt-1.5 text-xs text-red-600 flex items-center gap-1"
                  >
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    {errors.requirement}
                  </p>
                )}
              </div>

              {/* Validation Error Summary */}
              {submitStatus === 'validation_error' && (
                <div
                  role="alert"
                  className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700 flex items-start gap-3"
                >
                  <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  <p>
                    Please review and correct the highlighted fields before
                    submitting your enquiry.
                  </p>
                </div>
              )}

              {/* Success Message */}
              {submitStatus === 'success' && (
                <div
                  role="status"
                  className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900 flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-emerald-900">
                      Enquiry Sent Successfully
                    </p>
                    <p className="text-emerald-800 mt-1 leading-relaxed">
                      Thank you for reaching out to Rajvadiya Associates. Your
                      enquiry details have been sent to our email and we will
                      contact you shortly.
                    </p>
                  </div>
                </div>
              )}

              {/* Submission Error Notice */}
              {submitStatus === 'error' && (
                <div
                  role="alert"
                  className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800 space-y-3"
                >
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-red-900">
                        Could Not Submit Enquiry
                      </p>
                      <p className="mt-1 leading-relaxed">{submitError}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3 pl-8">
                    <a
                      href={buildDirectEmailHref()}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#0D2244] text-white text-xs font-semibold hover:bg-[#1A365D] transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      Send via Email
                    </a>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#C89436] text-white text-xs font-semibold hover:bg-[#B58228] transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      Connect on WhatsApp
                    </a>
                  </div>
                </div>
              )}

              {/* Missing Access Key Configuration Notice */}
              {submitStatus === 'missing_key' && (
                <div
                  role="status"
                  className="rounded-xl border border-[#0D2244]/20 bg-[#F6F8FB] p-4 text-sm text-[#1E293B] space-y-3"
                >
                  <div className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-[#0D2244] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-[#0D2244]">
                        Web3Forms Access Key Required
                      </p>
                      <p className="text-[#5A6577] mt-1 leading-relaxed">
                        Add your Web3Forms access key to{' '}
                        <code className="px-1.5 py-0.5 rounded bg-white border border-[#E2E8F0] text-xs font-mono text-[#0D2244]">
                          VITE_WEB3FORMS_ACCESS_KEY
                        </code>{' '}
                        in <code className="px-1.5 py-0.5 rounded bg-white border border-[#E2E8F0] text-xs font-mono text-[#0D2244]">.env</code> and restart the server to send enquiries directly to email. Meanwhile, send via Email or WhatsApp below:
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3 pl-8">
                    <a
                      href={buildDirectEmailHref()}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#0D2244] text-white text-xs font-semibold hover:bg-[#1A365D] transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      Send via Email
                    </a>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#C89436] text-white text-xs font-semibold hover:bg-[#B58228] transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      Connect on WhatsApp
                    </a>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#0D2244] hover:bg-[#081730] disabled:opacity-60 text-white w-full py-4 rounded-full font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending Enquiry...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Enquiry
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
