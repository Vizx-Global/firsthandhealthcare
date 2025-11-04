import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Users, 
  Target, 
  Shield, 
  TrendingUp, 
  Handshake,
  Leaf,
  Star,
  Calendar,
  Building,
  Stethoscope,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Lightbulb
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from "react-router-dom";
import aboutUsImage from '@/assets/FirstHandHero3.jpg';

const AboutUsPage = () => {
  const navigate = useNavigate();
  const coreValues = [
    {
      icon: Users,
      title: 'People First',
      description: 'People are at the center of everything we do. We prioritize the well-being and growth of our healthcare professionals, clients, and communities.'
    },
    {
      icon: TrendingUp,
      title: 'Momentum',
      description: 'We\'re a movement of restoration to healthcare, driving positive change and continuous improvement in the industry.'
    },
    {
      icon: Lightbulb,
      title: 'Revolutionary Processes',
      description: 'We drive innovation through cutting-edge technology and streamlined processes that set new standards in healthcare staffing.'
    },
    {
      icon: Shield,
      title: 'Trust & Transparency',
      description: 'We believe in open communication and building relationships based on mutual trust and respect.'
    },
    {
      icon: Handshake,
      title: 'Strong Partnerships',
      description: 'We build lasting relationships based on trust, collaboration, and mutual success that drive exceptional performance.'
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'We grow by the roots we plant and nurture, committed to community connection and responsible practices.'
    }
  ];

  const milestones = [
    { year: '2010', event: 'FirstHand Founded', description: 'Established with vision to transform healthcare staffing' },
    { year: '2013', event: '100+ Facilities', description: 'Expanded to serve over 100 healthcare facilities' },
    { year: '2016', event: 'Quality Certification', description: 'Achieved industry-leading quality standards certification' },
    { year: '2019', event: 'Digital Platform Launch', description: 'Launched proprietary staffing technology platform' },
    { year: '2022', event: '500+ Professionals', description: 'Network grew to 500+ healthcare professionals' },
    { year: '2024', event: 'Regional Expansion', description: 'Expanded services across Texas region' }
  ];

  const handleSetAppointment = () => {
    navigate("/healthcare-staffing-contact");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-r from-gray-900 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-corporate-red/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
        </div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-corporate-red/20 border border-corporate-red/30 mb-6">
                <Heart className="w-4 h-4 text-corporate-red" />
                <span className="text-sm font-semibold text-corporate-red uppercase tracking-wide">
                  OUR STORY —
                </span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Building the Future of
                <span className="block bg-gradient-to-r from-corporate-red to-red-600 bg-clip-text text-transparent">
                  Healthcare Staffing
                </span>
              </h1>

              <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
                With over 72 years of combined experience, we're revolutionizing healthcare staffing 
                through innovation, expertise, and an unwavering commitment to quality.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <Button 
                  className="bg-corporate-red hover:bg-red-600 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105"
                  onClick={() => document.getElementById('our-mission').scrollIntoView({ behavior: 'smooth' })}
                >
                  Our Mission
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button 
                  variant="outline" 
                  className="border-white text-white bg-white/10 font-semibold px-8 py-3 rounded-xl"
                  onClick={() => document.getElementById('who-we-are').scrollIntoView({ behavior: 'smooth' })}
                >
                  Learn More
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who We Are Section with Image */}
      <section id="who-we-are" className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                {/* Enhanced Image Styling */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                  <img 
                    src={aboutUsImage} 
                    alt="FirstHand Healthcare Staffing Team"
                    className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Overlay Content */}
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="bg-gradient-to-t from-white/20 to-corporate-red backdrop-blur-sm rounded-xl p-4 border border-white/30">
                      <h3 className="text-lg font-semibold mb-1">72+ Years Combined Experience</h3>
                      <p className="text-sm opacity-90">Healthcare & Staffing Industry Experts</p>
                    </div>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-corporate-red rounded-full opacity-20"></div>
                <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-blue-500 rounded-full opacity-20"></div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-corporate-red/10 text-corporate-red text-sm font-medium mb-4">
                  <Users className="w-4 h-4" />
                  WHO WE ARE
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                  Committed to Quality Healthcare Staffing
                </h2>
                <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                  <p>
                    <strong>FirstHand Healthcare Staffing</strong> is founded by a diverse team of professionals 
                    with exceptional background experience in both the Healthcare and Staffing industries.
                  </p>
                  <p>
                    Our combined experience of <strong>over 72 years</strong> allows for the innovation, 
                    knowledge, and courage needed to transform healthcare staffing.
                  </p>
                  <p>
                    We understand the unique challenges facing healthcare facilities today, and we've 
                    built our organization from the ground up to address them with precision and care.
                  </p>
                  <p className="text-corporate-red font-semibold">
                    We are committed to offering nothing but quality services.
                  </p>
                </div>

                {/* Feature Indicators */}
                <div className="flex flex-wrap gap-6 mt-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-corporate-red/10 rounded-lg flex items-center justify-center">
                      <Building className="w-5 h-5 text-corporate-red" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">250+ Facilities</div>
                      <div className="text-sm text-gray-600">Partner Healthcare Centers</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-corporate-red/10 rounded-lg flex items-center justify-center">
                      <Stethoscope className="w-5 h-5 text-corporate-red" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">500+ Professionals</div>
                      <div className="text-sm text-gray-600">Healthcare Experts</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="our-mission" className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-corporate-red/10 text-corporate-red text-sm font-medium mb-4">
                <Target className="w-4 h-4" />
                OUR MISSION
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                Driving Healthcare Excellence
              </h2>
              
              <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8 lg:p-12">
                  <div className="w-20 h-20 bg-gradient-to-br from-corporate-red to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Target className="w-10 h-10 text-white" />
                  </div>
                  <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed italic mb-6">
                    "To lend an expert hand and render a quality staffing solution that keeps your facility's productivity performing at its most optimal level."
                  </p>
                  <div className="w-24 h-1 bg-gradient-to-r from-corporate-red to-red-600 mx-auto"></div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-corporate-red/10 text-corporate-red text-sm font-medium mb-4">
                <Star className="w-4 h-4" />
                CORE VALUES
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                The Foundation of Everything We Do
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Our values guide every decision, relationship, and innovation at FirstHand.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-corporate-red to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-corporate-red/10 text-corporate-red text-sm font-medium mb-4">
                <Calendar className="w-4 h-4" />
                OUR JOURNEY
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Milestones & Achievements
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                From our founding to becoming a trusted healthcare staffing partner
              </p>
            </motion.div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-corporate-red to-red-600"></div>
              
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex items-center mb-12 ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold text-corporate-red mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.event}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="w-8 h-8 bg-corporate-red rounded-full border-4 border-white shadow-lg z-10 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-corporate-red to-red-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Ready to Partner With Us?
              </h2>
              <p className="text-xl mb-8 opacity-90 leading-relaxed">
                Join hundreds of healthcare facilities that trust FirstHand for their staffing needs.
              </p>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div className="flex flex-col items-center">
                    <MapPin className="w-8 h-8 mb-2 text-red-300" />
                    <div className="text-sm opacity-90">1300 W Sam Houston Parkway S</div>
                    <div className="text-sm opacity-90">Houston, TX 77042</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <Phone className="w-8 h-8 mb-2 text-red-300" />
                    <div className="text-sm opacity-90">Phone: 281-747-6757</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <Mail className="w-8 h-8 mb-2 text-red-300" />
                    <div className="text-sm opacity-90">info@firsthandhealthcarestaffing.com</div>
                  </div>
                </div>
              </div>

              <Button 
                onClick={handleSetAppointment}
                className="bg-white text-corporate-red hover:bg-gray-100 font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105"
              >
                Get In Touch
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;