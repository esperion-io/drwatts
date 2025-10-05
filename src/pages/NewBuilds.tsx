import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Home, CheckCircle, Phone, Shield, Zap, Clock, Star, FileText, Users } from 'lucide-react';

const NewBuilds: React.FC = () => {
  const services = [
    {
      icon: Zap,
      title: 'Complete Electrical Design',
      description: 'Comprehensive electrical planning and design for optimal power distribution and safety.',
      details: ['Load calculations', 'Circuit planning', 'Outlet placement', 'Lighting design']
    },
    {
      icon: Shield,
      title: 'Safety Compliance',
      description: 'Full compliance with New Zealand electrical standards and building codes.',
      details: ['AS/NZS 3000 compliance', 'Building consent support', 'Code compliance certificates', 'Safety inspections']
    },
    {
      icon: Home,
      title: 'Smart Home Ready',
      description: 'Future-proof wiring for smart home technology and automation systems.',
      details: ['Cat6 data cabling', 'Smart switch preparation', 'Home automation wiring', 'Security system integration']
    },
    {
      icon: CheckCircle,
      title: 'Quality Installation',
      description: 'Professional installation using premium materials and proven techniques.',
      details: ['Premium cable and fittings', 'Neat and tidy installation', 'Proper earthing systems', 'Professional finish']
    }
  ];

  const phases = [
    {
      phase: 'Pre-Construction',
      title: 'Planning & Design',
      description: 'Work with architects and builders to create optimal electrical design',
      tasks: [
        'Review building plans and specifications',
        'Electrical load calculations and design',
        'Obtain necessary permits and approvals',
        'Coordinate with other trades'
      ],
      timing: 'Before construction begins'
    },
    {
      phase: 'Rough-In',
      title: 'First Fix Installation',
      description: 'Install all concealed wiring and electrical infrastructure',
      tasks: [
        'Install main electrical panel and meter box',
        'Run all electrical cables through walls and ceilings',
        'Install outlet and switch boxes',
        'First fix inspection and sign-off'
      ],
      timing: 'During framing stage'
    },
    {
      phase: 'Final Fix',
      title: 'Completion & Testing',
      description: 'Install all visible electrical components and complete testing',
      tasks: [
        'Install all switches, outlets, and light fittings',
        'Connect and test all circuits',
        'Final electrical inspection',
        'Issue code compliance certificate'
      ],
      timing: 'Before final handover'
    }
  ];

  const features = [
    'Modern switchboard with RCD protection',
    'LED lighting throughout',
    'Adequate power outlets in all rooms',
    'Dedicated circuits for high-power appliances',
    'Outdoor power and lighting',
    'Smoke alarm installation and wiring',
    'Phone and data cabling',
    'Security system pre-wiring',
    'Electric vehicle charging preparation',
    'Solar panel ready installation'
  ];

  return (
    <>
      <Helmet>
        <title>New Build Electrical Services Hibiscus Coast | Complete Electrical Installation</title>
        <meta name="description" content="Complete electrical services for new builds on the Hibiscus Coast. Professional design, installation, and compliance. Smart home ready, safety compliant. Free quotes." />
        <meta name="keywords" content="new build electrical hibiscus coast, electrical installation, building electrical, electrical design, smart home wiring, electrical compliance, new construction" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Complete <span className="text-yellow-400">Electrical Solutions</span> for New Builds
              </h1>
              <p className="text-xl text-purple-100 mb-8 leading-relaxed">
                Professional electrical design and installation for new construction projects. From initial planning to final certification, we ensure your new home meets all safety standards and modern requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-yellow-400 text-purple-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors duration-200 text-center"
                >
                  Get Project Quote
                </Link>
                <a
                  href="tel:+64220208415"
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-900 transition-colors duration-200 text-center flex items-center justify-center space-x-2"
                >
                  <Phone className="h-5 w-5" />
                  <span>Discuss Project</span>
                </a>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-yellow-400" />
                  <span>Fully Licensed & Insured</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FileText className="h-5 w-5 text-yellow-400" />
                  <span>Code Compliance Certified</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg shadow-2xl p-8 flex items-center justify-center h-96">
                <div className="text-center">
                  <div className="bg-purple-600 rounded-full p-6 mx-auto mb-4 w-24 h-24 flex items-center justify-center">
                    <Home className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-purple-900 mb-2">New Build Electrical</h3>
                  <p className="text-purple-700">Complete Wiring Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive New Build Electrical Services
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need for a complete, compliant electrical installation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-purple-100 p-3 rounded-lg">
                      <IconComponent className="h-6 w-6 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Installation Phases */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our New Build Installation Process
            </h2>
            <p className="text-xl text-gray-600">
              Coordinated electrical installation from design to completion
            </p>
          </div>
          <div className="space-y-8">
            {phases.map((phase, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-1">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <div className="text-sm text-purple-600 font-medium">{phase.phase}</div>
                        <h3 className="text-xl font-semibold text-gray-900">{phase.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{phase.description}</p>
                    <div className="bg-purple-50 px-3 py-2 rounded-lg">
                      <div className="text-sm text-purple-700">
                        <Clock className="h-4 w-4 inline mr-1" />
                        {phase.timing}
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-2">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Tasks:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {phase.tasks.map((task, taskIndex) => (
                        <div key={taskIndex} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600 text-sm">{task}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What's Included in Our New Build Package
            </h2>
            <p className="text-xl text-gray-600">
              Complete electrical installation with modern features and future-ready technology
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-800">{feature}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Dr Watts for Your New Build?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Users className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Experienced Team</h3>
                    <p className="text-gray-600">Our licensed electricians have extensive experience with new construction projects of all sizes.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <FileText className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Full Compliance</h3>
                    <p className="text-gray-600">We ensure all work meets New Zealand electrical standards and building codes with proper certification.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">On-Time Delivery</h3>
                    <p className="text-gray-600">We work closely with builders and project managers to meet construction timelines.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Shield className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Quality Workmanship</h3>
                    <p className="text-gray-600">All our work is completed to professional standards with ongoing support available.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Your Project Quote</h3>
              <p className="text-gray-600 mb-6">
                Ready to start your new build electrical project? Contact us for a detailed quote and consultation.
              </p>
              <div className="space-y-4">
                <Link
                  to="/contact"
                  className="block w-full bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors duration-200 text-center"
                >
                  Request Detailed Quote
                </Link>
                <a
                  href="tel:+64220208415"
                  className="block w-full bg-transparent border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-lg font-medium hover:bg-purple-600 hover:text-white transition-colors duration-200 text-center"
                >
                  Call to Discuss: 022 020 8415
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gray-50 rounded-lg shadow-lg p-8">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-xl text-gray-700 mb-6 italic">
              "Dr Watts handled all the electrical work for our new build. From the initial design consultation to the final inspection, everything was professional and completed on time. The smart home wiring they installed has been fantastic."
            </blockquote>
            <div className="text-gray-600">
              <p className="font-medium">David & Emma K.</p>
              <p className="text-sm">New Build Project - Verified Customer</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your New Build Project?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Get professional electrical design and installation for your new construction project. Contact Dr Watts for expert consultation and competitive pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-yellow-400 text-purple-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors duration-200"
            >
              Get Project Quote
            </Link>
            <a
              href="tel:+64220208415"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-900 transition-colors duration-200 flex items-center justify-center space-x-2"
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

export default NewBuilds;