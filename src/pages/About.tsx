import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Shield, Award, Users, Clock, CheckCircle, Phone, Star, Zap, Wrench, Home } from 'lucide-react';
import InstagramFeed from '../components/InstagramFeed';
import masterLogo from '../assets/master.png';
import tradeLogo from '../assets/trade.png';
import ewrbLogo from '../assets/ewrb.png';

const About: React.FC = () => {
  const teamMembers = [
    {
      name: 'Mark Rosewell',
      role: 'Master Electrician & Founder',
      experience: '15+ Years',
      qualifications: ['Master Electrician License', 'Electrical Engineering Degree', 'Safety Certification'],
      description: 'Leading the Hibiscus Coast\'s electrical industry with innovative solutions and exceptional service.'
    }
  ];

  const certifications = [
    {
      title: 'Master Electricians',
      description: 'Proud members of New Zealand\'s premier electrical association',
      logo: masterLogo
    },
    {
      title: 'Trade Group NZ',
      description: 'Certified member of Trade Group New Zealand',
      logo: tradeLogo
    },
    {
      title: 'Licensed with EWRB',
      description: 'All our electricians are registered with the Electrical Workers Registration Board',
      logo: ewrbLogo
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
      description: 'Satisfied homeowners across the Hibiscus Coast'
    },
    {
      number: '15+',
      label: 'Years Experience',
      description: 'Serving the Hibiscus Coast\'s electrical needs'
    },
    {
      number: '500+',
      label: 'Happy Customers',
      description: 'Satisfied clients across the Hibiscus Coast'
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
        <title>About Dr Watts Electrical Hibiscus Coast | Licensed Electricians & Company History</title>
        <meta name="description" content="Learn about Dr Watts Electrical - Hibiscus Coast's trusted electrical service company. Meet our licensed electricians, company history, and commitment to quality." />
        <meta name="keywords" content="about dr watts electrical, hibiscus coast electricians, licensed electricians, electrical company hibiscus coast, electrical services team" />
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
                For over 15 years, Dr Watts Electrical has been the Hibiscus Coast's trusted partner for safe, reliable, and professional electrical services. We're more than just electricians - we're your electrical safety experts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-yellow-400 text-green-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors duration-200 text-center"
                >
                  Contact The Doctor
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

      {/* Instagram Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Follow Us on Instagram
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Stay connected and see our latest electrical projects and updates
            </p>
          </div>
          
          {/* Instagram Grid Placeholder */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div key={index} className="aspect-square bg-gradient-to-br from-green-100 to-green-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 flex items-center justify-center group cursor-pointer">
                <div className="text-center">
                  <div className="bg-green-600 rounded-full p-4 mx-auto mb-2 w-16 h-16 flex items-center justify-center group-hover:bg-green-700 transition-colors duration-200">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <p className="text-green-800 text-sm font-medium">Project {index}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Follow Button */}
          <div className="text-center">
            <a
              href="#"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>Follow @drwattselectrical</span>
            </a>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {certifications.map((cert, index) => {
              return (
                <div key={index} className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <div className="flex items-center justify-center mx-auto mb-4">
                    <img src={cert.logo} alt={cert.title} className="h-20 w-20 object-contain" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{cert.title}</h3>
                  <p className="text-gray-600 text-sm">{cert.description}</p>
                </div>
              );
            })}
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
            Join hundreds of satisfied Hibiscus Coast homeowners who trust Dr Watts Electrical for all their electrical needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-yellow-400 text-green-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors duration-200"
            >
              Contact The Doctor
            </Link>
            <a
              href="tel:+64220208415"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-green-900 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>Call: 022 020 8415</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;