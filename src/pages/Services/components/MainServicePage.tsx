import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ArrowRight, 
  Users, 
  Shield, 
  Heart, 
  Zap,
  Star,
  CheckCircle,
  Clock,
  Award,
  Sparkles,
  Target,
  TrendingUp,
  Globe,
  Stethoscope,
  Activity,
  Brain,
  Pill
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ServicesPage = () => {
  const services = [
    {
      icon: Users,
      title: "Registered Nurses",
      description: "Expert RN staffing solutions for all healthcare settings, delivering exceptional patient care with precision and compassion.",
      features: ["ICU & Critical Care", "Emergency Department", "Medical-Surgical", "Pediatrics", "Operating Room", "Cardiac Care"],
      gradient: "from-blue-500 to-cyan-500",
      buttonLink: "/healthcare-staffing-services/nurses",
      image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
      stats: "500+ RNs Placed",
      delay: 0.1,
      specialties: ["Trauma", "Oncology", "Neurology", "Pediatrics"]
    },
    {
      icon: Shield,
      title: "LPN/LVN Professionals",
      description: "Licensed Practical/Vocational Nurses providing comprehensive patient care with dedication and clinical excellence.",
      features: ["Long-term Care", "Rehabilitation", "Clinical Settings", "Home Health", "Skilled Nursing", "Acute Care"],
      gradient: "from-green-500 to-emerald-500",
      buttonLink: "/healthcare-staffing-services/lpn-lvn",
      image: "https://res.cloudinary.com/dvkt0lsqb/image/upload/v1761696060/NurseHero_ps3ycp.jpg",
      stats: "300+ LPNs/LVNs",
      delay: 0.2,
      specialties: ["Geriatrics", "Post-Op", "Chronic Care", "Clinical Support"]
    },
    {
      icon: Heart,
      title: "Certified Nursing Assistants",
      description: "Compassionate CNAs delivering essential daily patient care with empathy and professional expertise.",
      features: ["Patient Hygiene", "Vital Signs", "Mobility Assistance", "Daily Living Activities", "Comfort Care", "Patient Safety"],
      gradient: "from-purple-500 to-pink-500",
      buttonLink: "/healthcare-staffing-services/cnas",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
      stats: "400+ CNAs Staffed",
      delay: 0.3,
      specialties: ["Elder Care", "Rehab Support", "Acute Care", "Long-term Support"]
    }
  ];

  const navigate = useNavigate();

  const benefits = [
    {
      icon: Clock,
      title: "24-48 Hour Placement",
      description: "Rapid staffing solutions to meet urgent healthcare needs",
      metric: "98% Fill Rate"
    },
    {
      icon: Award,
      title: "Quality Guaranteed",
      description: "90-day satisfaction guarantee on all placed professionals",
      metric: "100% Verified"
    },
    {
      icon: Star,
      title: "Expert Matching",
      description: "Precise skill-to-facility matching for optimal performance",
      metric: "Perfect Fit"
    },
    {
      icon: CheckCircle,
      title: "Fully Vetted",
      description: "Comprehensive background checks and credential verification",
      metric: "Triple-Checked"
    }
  ];

  const stats = [
    { number: "500+", label: "Healthcare Professionals", icon: Users },
    { number: "250+", label: "Partner Facilities", icon: Shield },
    { number: "98%", label: "Client Satisfaction Rate", icon: Star },
    { number: "24/7", label: "Staffing Support", icon: Clock }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };
    const handleViewCareer = () => {
    navigate("/healthcare-staffing-careers");
  };
    const handleConsultation = () => {
    navigate("/healthcare-staffing-contact");
  };
    const handleAboutUs = () => {
    navigate("/healthcare-staffing-about-us");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/20 to-indigo-50/30">
      {/* Enhanced Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-corporate-red/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl"></div>
          
          {/* Floating Particles */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/10 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-6xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8"
            >
              <Sparkles className="w-5 h-5 text-corporate-red" />
              <span className="text-sm font-semibold text-white uppercase tracking-wider">
                WORLD-CLARE HEALTHCARE SERVICES —
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl lg:text-7xl font-bold mb-8 leading-tight"
            >
              Transforming Healthcare
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="block bg-gradient-to-r from-corporate-red via-red-500 to-orange-500 bg-clip-text text-transparent"
              >
                Through Excellence
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl lg:text-2xl text-white/90 mb-12 leading-relaxed max-w-4xl mx-auto"
            >
              We deliver exceptional healthcare staffing solutions that elevate patient care, 
              empower professionals, and transform medical facilities across the nation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <Button 
              onClick={handleViewCareer}
                className="bg-corporate-red hover:bg-red-600 text-white font-semibold px-10 py-4 rounded-2xl transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-red-500/25"
                size="lg"
              >
                Explore Open Careers
                <ArrowRight className="w-5 h-5 ml-3" />
              </Button>
              <Button
              onClick={handleAboutUs} 
                variant="outline" 
                className="border-white text-white bg-white/10 hover:bg-white/20 font-semibold px-10 py-4 rounded-2xl backdrop-blur-sm"
                size="lg"
              >
                <Target className="w-5 h-5 mr-3" />
                About Us
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={floatingAnimation}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-white/60 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Animated Stats Section */}
      <section className="py-16 lg:py-20 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-20 h-20 bg-gradient-to-br from-corporate-red to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-red-500/25 transition-all duration-300"
                >
                  <stat.icon className="w-10 h-10 text-white" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2"
                >
                  {stat.number}
                </motion.div>
                <div className="text-sm lg:text-base text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Benefits Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50/50 to-indigo-100/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-corporate-red/10 text-corporate-red text-sm font-medium mb-4">
              <TrendingUp className="w-4 h-4" />
              WHY CHOOSE FIRSTHAND
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
              Setting New Standards in <span className="text-corporate-red">Healthcare Staffing</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              We combine cutting-edge technology with deep industry expertise to deliver staffing solutions that exceed expectations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Card className="h-full border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 group">
                  <CardContent className="p-8 text-center">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-16 h-16 bg-gradient-to-br from-corporate-red to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                    >
                      <benefit.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <div className="text-corporate-red font-bold text-lg mb-2">{benefit.metric}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Main Services Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-corporate-red/10 text-corporate-red text-sm font-medium mb-4">
              <Globe className="w-4 h-4" />
              COMPREHENSIVE SERVICES
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
              Specialized Healthcare <span className="text-corporate-red">Staffing Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Tailored staffing services designed to meet the unique demands of modern healthcare facilities
            </p>
          </motion.div>

          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`grid lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                <motion.div
                  className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                    <img 
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[500px] object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                    
                    {/* Animated Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-corporate-red/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="absolute bottom-6 left-6">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg"
                      >
                        <div className="text-lg font-bold text-gray-900">{service.stats}</div>
                        <div className="text-sm text-gray-600">Successfully Placed</div>
                      </motion.div>
                    </div>

                    {/* Floating Specialties */}
                    <div className="absolute top-6 right-6 space-y-2">
                      {service.specialties.map((specialty, specIndex) => (
                        <motion.div
                          key={specialty}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: specIndex * 0.1 + 0.6 }}
                          className="bg-corporate-red backdrop-blur-sm text-white text-xs px-3 py-2 rounded-full"
                        >
                          {specialty}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-corporate-red/10 to-red-500/10 text-corporate-red text-sm font-medium mb-6"
                  >
                    <service.icon className="w-5 h-5" />
                    <span className="font-semibold">{service.title.toUpperCase()}</span>
                  </motion.div>
                  
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 leading-tight">
                    {service.title}
                  </h3>
                  
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-10">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                        className="flex items-center gap-3 text-gray-700 group"
                      >
                        <motion.div
                          whileHover={{ scale: 1.2 }}
                          className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center"
                        >
                          <CheckCircle className="w-4 h-4 text-green-600" />
                        </motion.div>
                        <span className="text-lg font-medium group-hover:text-corporate-red transition-colors duration-300">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      asChild 
                      className="bg-corporate-red hover:bg-red-600 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-300 shadow-lg hover:shadow-red-500/25"
                    >
                      <Link to={service.buttonLink}>
                        Discover {service.title} Solutions
                        <ArrowRight className="w-5 h-5 ml-3" />
                      </Link>
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-r from-corporate-red via-red-600 to-orange-600 text-white overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto text-center"
          >
            <motion.div
              animate={floatingAnimation}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-8"
            >
              <Sparkles className="w-5 h-5 text-white" />
              <span className="text-sm font-semibold uppercase tracking-wider">
                READY TO TRANSFORM YOUR FACILITY
              </span>
            </motion.div>

            <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
              Elevate Your Healthcare
              <span className="block">Staffing Experience</span>
            </h2>

            <p className="text-xl lg:text-2xl mb-12 opacity-90 leading-relaxed max-w-3xl mx-auto">
              Join hundreds of healthcare facilities that trust FirstHand for exceptional 
              staffing solutions and unparalleled service excellence.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  onClick={handleViewCareer}
                  className="bg-white text-corporate-red hover:bg-gray-100 font-semibold px-12 py-6 rounded-2xl text-lg transition-all duration-300 shadow-2xl hover:shadow-white/25"
                  size="lg"
                >
                  View Open Careers
                  <ArrowRight className="w-5 h-5 ml-3" />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                onClick={handleConsultation} 
                  variant="outline" 
                  className="border-white text-white bg-white/10 hover:bg-white/20 font-semibold px-12 py-6 rounded-2xl text-lg backdrop-blur-sm"
                  size="lg"
                >
                  <Activity className="w-5 h-5 mr-3" />
                  Schedule Consultation
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;