import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Shield, CheckCircle, Phone, Clock, Zap, AlertTriangle, Star } from 'lucide-react';

const SwitchboardUpgrades: React.FC = () => {
  const benefits = [
    {
      icon: Shield,
      title: 'Enhanced Safety',
      description: 'Modern RCD protection and circuit breakers prevent electrical accidents and fires.'
    },
    {
      icon: Zap,
      title: 'Improved Reliability',
      description: 'Reduce power outages and electrical faults with upgraded components.'
    },
    {
      icon: CheckCircle,
      title: 'Code Compliance',
      description: 'Meet current New Zealand electrical standards and regulations.'
    },
    {
      icon: Clock,
      title: 'Future-Proof',
      description: 'Accommodate modern electrical loads and smart home technology.'
    }
  ];

  const features = [
    'RCD (Residual Current Device) installation',
    'Arc fault circuit interrupters (AFCI)',
    'Surge protection devices',
    'LED indicator lights',
    'Proper labeling and documentation',
    'Manual shutdown capabilities',
    'Smart meter compatibility',
    'Expanded circuit capacity'
  ];

  const warningSignsData = [
    'Frequent circuit breaker trips',
    'Burning smell from electrical panel',
    'Flickering lights throughout the house',
    'Warm or hot electrical panel',
    'Rust or corrosion on switchboard',
    'Outdated fuse box system',
    'Insufficient power for modern appliances',
    'No RCD protection installed'
  ];

  return (
    <>
      <Helmet>
        <title>Switchboard Upgrades Hibiscus Coast | Professional Electrical Panel Installation</title>
        <meta name="description" content="Professional switchboard upgrades on the Hibiscus Coast. RCD installation, modern electrical panels, safety compliance. Licensed electricians, free quotes available." />
        <meta name="keywords" content="switchboard upgrade hibiscus coast, electrical panel upgrade, RCD installation, electrical safety, circuit breaker upgrade, electrical compliance" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Professional <span className="text-yellow-400">Switchboard Upgrades</span> on the Hibiscus Coast
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Upgrade your electrical panel for enhanced safety, reliability, and compliance with modern standards. Our licensed electricians provide professional switchboard installations with RCD protection.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors duration-200 text-center"
                >
                  Contact The Doctor
                </Link>
                <a
                  href="tel:+64220208415"
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-900 transition-colors duration-200 text-center flex items-center justify-center space-x-2"
                >
                  <Phone className="h-5 w-5" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg shadow-2xl p-8 flex items-center justify-center h-96">
                <div className="text-center">
                  <div className="bg-blue-600 rounded-full p-6 mx-auto mb-4 w-24 h-24 flex items-center justify-center">
                    <Shield className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">Switchboard Upgrades</h3>
                  <p className="text-blue-700">Modern Electrical Safety</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Upgrade Your Switchboard?
            </h2>
            <p className="text-xl text-gray-600">
              Modern switchboards provide essential safety and performance benefits
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Warning Signs Section */}
      <section className="py-16 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <AlertTriangle className="h-8 w-8 text-red-600" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Warning Signs You Need an Upgrade
                </h2>
              </div>
              <p className="text-xl text-gray-600 mb-8">
                Don't wait for electrical problems to become dangerous. These signs indicate your switchboard needs immediate attention.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {warningSignsData.map((sign, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0" />
                    <span className="text-gray-700">{sign}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link
                  to="/contact"
                  className="bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors duration-200"
                >
                  Schedule Safety Inspection
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Professional Service Available</h3>
              <p className="text-gray-600 mb-6">
                Need a switchboard upgrade? Our licensed electricians provide professional installation and upgrade services during business hours.
              </p>
              <Link
                to="/contact#contact-form"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2 w-full"
              >
                <Phone className="h-5 w-5" />
                <span>Contact The Doctor: 022 020 8415</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What's Included in Our Switchboard Upgrades
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive electrical panel modernization with safety-first approach
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-800 font-medium">{feature}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Switchboard Upgrade Process
            </h2>
            <p className="text-xl text-gray-600">
              Professional installation with minimal disruption to your daily routine
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Initial Assessment',
                description: 'Comprehensive evaluation of your current electrical system and safety requirements.'
              },
              {
                step: '2',
                title: 'Custom Design',
                description: 'Design a switchboard solution tailored to your home\'s specific electrical needs.'
              },
              {
                step: '3',
                title: 'Professional Installation',
                description: 'Licensed electricians install your new switchboard with minimal power disruption.'
              },
              {
                step: '4',
                title: 'Testing & Certification',
                description: 'Thorough testing and official certification to ensure compliance and safety.'
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Upgrade Your Switchboard?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Don't compromise on electrical safety. Contact Dr Watts today for a professional switchboard upgrade consultation and free quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors duration-200"
            >
              Contact The Doctor
            </Link>
            <a
              href="tel:+64220208415"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-900 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>Call Now: 022 020 8415</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default SwitchboardUpgrades;