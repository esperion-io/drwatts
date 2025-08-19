import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Shield, Award, Users, Clock, CheckCircle, Phone, Star, Zap, Wrench, Home } from 'lucide-react';

const About: React.FC = () => {
  const teamMembers = [
    {
      name: 'Dr. James Watts',
      role: 'Master Electrician & Founder',
      experience: '15+ Years',
      qualifications: ['Master Electrician License', 'Electrical Engineering Degree', 'Safety Certification'],
      description: 'Leading Auckland\'s electrical industry with innovative solutions and exceptional service.'
    },
    {
      name: 'Sarah Mitchell',
      role: 'Senior Electrician',
      experience: '10+ Years',
      qualifications: ['Licensed Electrician', 'Commercial Specialist', 'LED Lighting Expert'],
      description: 'Specializing in commercial installations and energy-efficient lighting solutions.'
    },
    {
      name: 'Mike Thompson',
      role: 'Residential Specialist',
      experience: '8+ Years',
      qualifications: ['Licensed Electrician', 'Home Automation Expert', 'Safety Inspector'],
      description: 'Expert in residential electrical systems and smart home technologies.'
    }
  ];

  const certifications = [
    {
      title: 'Electrical Workers Registration Board',
      description: 'All our electricians are registered with the EWRB',
      icon: Shield
    },
    {
      title: 'Master Electricians Association',
      description: 'Proud members of New Zealand\'s premier electrical association',
      icon: Award
    },
    {
      title: 'Worksafe New Zealand Approved',
      description: 'Certified for safe electrical work practices',
      icon: CheckCircle
    },
    {
      title: 'Public Liability Insurance',
      description: '$2M public liability insurance coverage',
      icon: Shield
    }
  ];

  const companyValues = [
    {
      title: 'Safety First',
      description: 'Every job starts with a comprehensive safety assessment. We never compromise on safety standards.',
      icon: Shield
    },
    {
      title: 'Quality Workmanship',
      description: 'We take pride in our work and stand behind every installation with comprehensive warranties.',
      icon: Award
    },
    {
      title: 'Customer Focus',
      description: 'Your satisfaction is our priority. We listen, understand, and deliver exactly what you need.',
      icon: Users
    },
    {
      title: 'Reliable Service',
      description: 'On-time arrivals, clear communication, and dependable follow-through on every project.',
      icon: Clock
    }
  ];

  const achievements = [
    {
      number: '500+',
      label: 'Happy Customers',
      description: 'Satisfied homeowners across Auckland'
    },
    {
      number: '15+',
      label: 'Years Experience',
      description: 'Serving Auckland\'s electrical needs'
    },
    {
      number: '24/7',
      label: 'Emergency Service',
      description: 'Always available when you need us'
    },
    {
      number: '100%',
      label: 'Licensed Team',
      description: 'Fully qualified and insured electricians'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Dr Watts Electrical Auckland | Licensed Electricians & Company History</title>
        <meta name="description" content="Learn about Dr Watts Electrical - Auckland's trusted electrical service company. Meet our licensed electricians, company history, and commitment to quality." />
        <meta name="keywords" content="about dr watts electrical, auckland electricians, licensed electricians, electrical company auckland, electrical services team" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                About <span className="text-yellow-400">Dr Watts Electrical</span>
              </h1>
              <p className="text-xl text-green-100 mb-8 leading-relaxed">
                For over 15 years, Dr Watts Electrical has been Auckland's trusted partner for safe, reliable, and professional electrical services. We're more than just electricians - we're your electrical safety experts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-yellow-400 text-green-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors duration-200 text-center"
                >
                  Get Free Quote
                </Link>
                <a
                  href="tel:+64220208415"
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-green-900 transition-colors duration-200 text-center flex items-center justify-center space-x-2"
                >
                  <Phone className="h-5 w-5" />
                  <span>Call Us</span>
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-lg shadow-lg p-8 flex items-center justify-center h-80">
                <div className="text-center">
                  <div className="bg-green-600 rounded-full p-6 mx-auto mb-4 w-20 h-20 flex items-center justify-center">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-green-900 mb-2">Professional Team</h3>
                  <p className="text-green-700">Experienced Electricians</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Dr Watts Electrical was founded in 2008 by Master Electrician Dr. James Watts with a simple mission: to provide Auckland homeowners with safe, reliable, and professional electrical services they can trust.
                </p>
                <p>
                  What started as a one-man operation has grown into Auckland's most trusted electrical service company, serving hundreds of satisfied customers across the greater Auckland region.
                </p>
                <p>
                  Our commitment to excellence, safety, and customer satisfaction has earned us a reputation as the go-to electrical experts for everything from simple repairs to complex installations.
                </p>
                <p>
                  Today, we continue to lead the industry with innovative solutions, cutting-edge technology, and the same personal touch that has made us Auckland's preferred electrical service provider.
                </p>
              </div>
            </div>
            <div className="bg-green-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why We're Different</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Education First</h4>
                    <p className="text-gray-600">We believe in educating our customers about their electrical systems for better safety and decision-making.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Transparent Pricing</h4>
                    <p className="text-gray-600">No hidden fees or surprise charges. You'll know exactly what you're paying for before we start.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Long-term Relationships</h4>
                    <p className="text-gray-600">We're not just here for one job - we want to be your electrical partner for life.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Achievements
            </h2>
            <p className="text-xl text-gray-600">
              Numbers that reflect our commitment to excellence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">{achievement.number}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{achievement.label}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">
              Licensed professionals dedicated to your electrical safety
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="text-center mb-4">
                  <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-12 w-12 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-green-600 font-medium">{member.role}</p>
                  <p className="text-gray-500">{member.experience}</p>
                </div>
                <p className="text-gray-600 text-sm mb-4">{member.description}</p>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Qualifications:</h4>
                  <ul className="space-y-1">
                    {member.qualifications.map((qual, qualIndex) => (
                      <li key={qualIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-gray-600 text-sm">{qual}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Certifications & Memberships
            </h2>
            <p className="text-xl text-gray-600">
              Fully licensed, insured, and certified for your peace of mind
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <div key={index} className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{cert.title}</h3>
                  <p className="text-gray-600 text-sm">{cert.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Promise */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Service Promise
            </h2>
            <p className="text-xl text-gray-600">
              What you can expect when you choose Dr Watts Electrical
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="h-8 w-8 text-green-600" />
                <h3 className="text-xl font-bold text-gray-900">On-Time Arrival</h3>
              </div>
              <p className="text-gray-600">
                We respect your time. Our electricians arrive when scheduled and call ahead if there are any delays.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Wrench className="h-8 w-8 text-green-600" />
                <h3 className="text-xl font-bold text-gray-900">Quality Work</h3>
              </div>
              <p className="text-gray-600">
                Every job is completed to the highest standards with quality materials and professional workmanship.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Home className="h-8 w-8 text-green-600" />
                <h3 className="text-xl font-bold text-gray-900">Clean & Tidy</h3>
              </div>
              <p className="text-gray-600">
                We treat your home with respect, protecting your property and cleaning up after every job.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="h-8 w-8 text-green-600" />
                <h3 className="text-xl font-bold text-gray-900">Safety First</h3>
              </div>
              <p className="text-gray-600">
                All work is performed to strict safety standards with proper testing and certification.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
                <h3 className="text-xl font-bold text-gray-900">Warranty Backed</h3>
              </div>
              <p className="text-gray-600">
                All our work comes with comprehensive warranties for your complete peace of mind.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Star className="h-8 w-8 text-green-600" />
                <h3 className="text-xl font-bold text-gray-900">Customer Satisfaction</h3>
              </div>
              <p className="text-gray-600">
                Your satisfaction is guaranteed. We're not happy until you're completely satisfied with our work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience the Dr Watts Difference?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied Auckland homeowners who trust Dr Watts Electrical for all their electrical needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-yellow-400 text-green-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors duration-200"
            >
              Get Free Quote
            </Link>
            <a
              href="tel:+64220208415"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-green-900 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>Call: 0220208415</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;