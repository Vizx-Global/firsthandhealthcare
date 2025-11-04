import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection"; 
import WhatWeDo from "@/components/WhatWeDo";
import IntroducingSection from "@/components/IntroducingSection";
import Stats from '@/components/StatsSection';
import ContactMe from '@/components/ContactMe';
import CTOSection from "@/components/CTASection";
import Footer from "@/components/Footer";
const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <WhatWeDo/>
        <IntroducingSection/>
        <Stats/>
        <ContactMe/>
        <CTOSection/>
      </main>
     <Footer/>
    </div>
  );
};

export default Index;
