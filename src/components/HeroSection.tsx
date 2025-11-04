import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight, Users, Shield, Award, Star, Heart, FileCheck, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

import healthcare1 from "@/assets/FirstHandHero3.jpg";
import healthcare2 from "@/assets/FirstHandHero1.jpg";
import healthcare3 from "@/assets/FirstHandHero2.jpg";

const HeroSection = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

    const handleDownload = () => {
    const pdfUrl = '/assets/FirstHand_Healthcare_Staffing_Tips_Guide_v2.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'FirstHand_Healthcare_Staffing_Tips_Guide_v2.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const slides = [
    {
      background: healthcare1,
      title: "WE EXIST TO LEND A HAND TO",
      highlight: "Facilities in Need of Additional Support",
      description: "We ensure we provide professionals a chance to pursue a fruitful career in healthcare by matching them with reliable companies.",
      stats: { facilities: "200+", professionals: "5k+", satisfaction: "98%" },
      cta: "Apply Now!"
    },
    {
      background: healthcare2,
      title: "PREMIUM HEALTHCARE STAFFING",
      highlight: "When You Need It Most",
      description: "Rapid response staffing solutions for hospitals, clinics, and healthcare facilities facing critical staffing shortages.",
      stats: { response: "24/7", placements: "10k+", retention: "95%" },
      cta: "Request Staff"
    },
    {
      background: healthcare3,
      title: "YOUR CAREER PARTNER IN",
      highlight: "Healthcare Excellence",
      description: "Connect with top healthcare facilities and advance your career with opportunities that match your skills and aspirations.",
      stats: { specialties: "50+", growth: "3x", support: "100%" },
      cta: "Find Jobs"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden pt-20">
      {/* Background Carousel with Healthcare Images */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide 
                ? "opacity-100 scale-100" 
                : "opacity-0 scale-105"
            }`}
          >
            {/* Healthcare image with exact gradient overlay */}
            <div className="relative w-full h-full">
              <img 
                src={slide.background} 
                alt={`Firsthand Healthcare - ${slide.title}`}
                className="w-full h-full object-cover transform scale-105"
              />
              {/* Exact gradient overlay from first design */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Animated Background Elements - Exact styling */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-corporate-red rounded-full animate-ping"></div>
        <div className="absolute bottom-1/4 left-1/2 w-3 h-3 bg-white/30 rounded-full animate-bounce"></div>
      </div>

      {/* Content - Left Aligned with exact spacing */}
      <div className="relative z-10 text-white px-6 lg:px-12 max-w-2xl space-y-8 py-16">
        
        {/* Trust Badge - Exact styling */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center gap-1 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
            <Star className="w-4 h-4 text-corporate-red fill-current" />
            <span className="text-xs font-medium">Trusted by {slides[currentSlide].stats.facilities}+ Healthcare Facilities</span>
          </div>
        </div>

        {/* Main Heading with Icon - Exact styling */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 mb-2">
            <Shield className="w-8 h-8 text-corporate-red" />
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight">
              {slides[currentSlide].highlight}
            </h1>
          </div>
        </div>
        
        {/* Subtitle with Features - Exact styling */}
        <div className="space-y-6">
          <p className="text-sm md:text-xl lg:text-2xl font-light leading-relaxed text-white/90 max-w-2xl">
            {slides[currentSlide].description}
          </p>
          
          {/* Feature Points - Exact styling */}
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-3 py-2 rounded-lg">
              <FileCheck className="w-4 h-4 text-corporate-red" />
              <span className="text-sm">Certified Professionals</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-3 py-2 rounded-lg">
              <Clock className="w-4 h-4 text-corporate-red" />
              <span className="text-sm">24/7 Staffing</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-3 py-2 rounded-lg">
              <Award className="w-4 h-4 text-corporate-red" />
              <span className="text-sm">Award Winning</span>
            </div>
          </div>
        </div>
        
        {/* Enhanced CTA Buttons - Exact styling */}
        <div className="flex flex-col sm:flex-row gap-4 items-start">
          <Button 
            size="lg"
            className="bg-corporate-red hover:bg-red-700 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-2xl transition-all duration-300 hover:scale-105 min-w-[180px] group"
            onClick={() => navigate('/healthcare-staffing-for-job-seekers')}
          >
            <span>{slides[currentSlide].cta}</span>
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-2 bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 min-w-[180px] group"
            onClick={() => navigate('/healthcare-staffing-for-employers')}
          >
            <span>For Employers</span>
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        {/* Stats Grid - Compact and styled like awards section */}
        <div className="pt-8 border-t border-white/10">
          <p className="text-xs text-white/60 mb-4">Healthcare Staffing Excellence</p>
          <div className="grid grid-cols-3 gap-6 max-w-md">
            {Object.entries(slides[currentSlide].stats).map(([key, value], index) => (
              <div 
                key={key}
                className="text-center transform hover:scale-105 transition-transform duration-300"
              >
                <div className="text-2xl lg:text-3xl font-bold text-corporate-red mb-1">
                  {value}
                </div>
                <div className="text-xs font-medium text-white/80 uppercase tracking-wider">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Carousel Controls - Positioned like scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex items-center gap-4">
        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="p-3 rounded-xl bg-white/20 backdrop-blur-lg border-2 border-white/40 hover:bg-white/30 hover:border-white/60 transition-all duration-300 group shadow-lg hover:scale-105"
        >
          <ChevronLeft className="w-5 h-5 text-white group-hover:text-corporate-red transition-colors duration-300" />
        </button>

        {/* Slide Indicators */}
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? "bg-white scale-110 shadow-md" 
                  : "bg-white/60 hover:bg-white/80"
              }`}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="p-3 rounded-xl bg-white/20 backdrop-blur-lg border-2 border-white/40 hover:bg-white/30 hover:border-white/60 transition-all duration-300 group shadow-lg hover:scale-105"
        >
          <ChevronRight className="w-5 h-5 text-white group-hover:text-corporate-red transition-colors duration-300" />
        </button>
      </div>

      {/* Floating Action Card - Exact styling */}
      <div className="absolute right-12 top-1/3 transform -translate-y-1/2 hidden xl:block">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 max-w-xs transform hover:scale-105 transition-all duration-300">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-corporate-red rounded-full flex items-center justify-center">
              <FileCheck className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-white font-semibold">Free Guide</p>
              <p className="text-white/60 text-sm">Healthcare Staffing Tips</p>
            </div>
          </div>
          <Button 
            className="w-full bg-corporate-red hover:bg-red-700 text-white mt-2"
               onClick={handleDownload}
          >
            Download
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;