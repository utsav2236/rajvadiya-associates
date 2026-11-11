import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CoreServices from './components/CoreServices';
import AboutSection from './components/AboutSection';
import AuditServices from './components/AuditServices';
import AccountingServices from './components/AccountingServices';
import TaxationServices from './components/TaxationServices';
import BusinessFinance from './components/BusinessFinance';
import IndustriesSection from './components/IndustriesSection';
import WhyChooseUs from './components/WhyChooseUs';
import WorkingProcess from './components/WorkingProcess';
import CTASection from './components/CTASection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#1E293B]">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <CoreServices />
        <AboutSection />
        <AuditServices />
        <AccountingServices />
        <TaxationServices />
        <BusinessFinance />
        <IndustriesSection />
        <WhyChooseUs />
        <WorkingProcess />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

