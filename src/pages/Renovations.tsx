import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Home, CheckCircle, Phone, Shield, Zap, Clock, Star, AlertTriangle, Wrench, Users } from 'lucide-react';

const Renovations: React.FC = () => {
  const services = [
    {
      icon: Zap,
      title: 'Power Upgrades',
      description: 'Add new circuits and outlets to meet modern electrical demands.',
      details: ['Additional power outlets', 'Kitchen appliance circuits', 'Home office power', 'Outdoor power points']
    },
    {
      icon: Home,
      title: 'Lighting Renovations',
      description: 'Transform your space with modern lighting solutions and controls.',
      details: ['LED downlight installation', 'Feature lighting', 'Dimmer switches', 'Smart lighting systems']
    },
    {
      icon: Shield,
      title: 'Safety Upgrades',
      description: 'Bring older electrical systems up to current safety standards.',
      details: ['RCD protection upgrade', 'Switchboard modernization', 'Earthing improvements', 'Smoke alarm upgrades']
    },
    {
      icon: Wrench,
      title: 'Rewiring Services',
      description: 'Complete or partial rewiring for major renovation projects.',
      details: ['Old cable replacement', 'Circuit reconfiguration', 'Panel upgrades', 'Code compliance']
    }
  ];

  const renovationTypes = [
    {
      type: 'Kitchen Renovations',
      description: 'Complete electrical solutions for modern kitchens',
      features: [
        'Dedicated appliance circuits for ovens, cooktops, and dishwashers',
        'Under-cabinet LED lighting and power outlets',
        'Island and peninsula power and lighting',
        'Rangehood and ventilation electrical connections',
        'Smart switches and dimmer controls'
      ],
      image: 'modern%20kitchen%20renovation%20with%20electrical%20work%20LED%20lighting%20appliances%20professional%20finish'
    },
    {
      type: 'Bathroom Renovations',
      description: 'Safe and compliant electrical work for wet areas',
      features: [
        'IP-rated lighting and exhaust fan installation',
        'Heated towel rail and underfloor heating connections',
        'Mirror lighting and shaver outlets',
        'Waterproof switches and safety compliance',
        'Ventilation and moisture control systems'
      ],
      image: 'modern%20bathroom%20renovation%20electrical%20lighting%20heated%20towel%20rail%20professional%20installation'
    },
    {
      type: 'Living Area Upgrades',
      description: 'Enhanced electrical systems for comfort and convenience',
      features: [
        'Feature wall lighting and accent illumination',
        'Entertainment system wiring and power',
        'Additional power outlets for modern devices',
        'Smart home automation preparation',
        'Ceiling fan installation and controls'
      ],
      image: 'modern%20living%20room%20renovation%20feature%20lighting%20entertainment%20system%20electrical%20upgrade'
    }
  ];

  const warningSignsData = [
    {
      icon: AlertTriangle,
      title: 'Outdated Wiring',
      signs: ['Cloth or rubber-insulated cables', 'Fuses instead of circuit breakers', 'Two-wire systems without earth', 'Aluminum wiring']
    },
    {
      icon: Zap,
      title: 'Electrical Issues',
      signs: ['Frequent power trips', 'Flickering lights', 'Burning smells', 'Warm switch plates']
    },
    {
      icon: Shield,
      title: 'Safety Concerns',
      signs: ['No RCD protection', 'Overloaded circuits', 'DIY electrical work', 'Water damage to electrical']
    }
  ];

  const process = [
    {
      step: 1,
      title: 'Initial Consultation',
      description: 'We assess your renovation plans and existing electrical system',
      details: 'Site visit, electrical assessment, renovation planning discussion'
    },
    {
      step: 2,
      title: 'Design & Quote',
      description: 'Detailed electrical design and transparent pricing',
      details: 'Electrical drawings, material specifications, fixed-price quote'
    },
    {
      step: 3,
      title: 'Coordination',
      description: 'Work with your builder and other trades for seamless integration',
      details: 'Timeline coordination, trade liaison, permit applications'
    },
    {
      step: 4,
      title: 'Installation',
      description: 'Professional installation with minimal disruption',
      details: 'First fix, second fix, testing, and certification'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Renovation Electrical Services Hibiscus Coast | Home Electrical Upgrades</title>
        <meta name="description" content="Expert electrical services for home renovations in Auckland. Kitchen, bathroom, and living area electrical upgrades. Safety compliance, modern wiring. Free quotes." />
        <meta name="keywords" content="renovation electrical auckland, kitchen electrical, bathroom electrical, home electrical upgrade, rewiring, electrical renovation, safety upgrade" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                <span className="text-yellow-400">Electrical Upgrades</span> for Home Renovations
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Transform your home with modern electrical solutions. From kitchen and bathroom renovations to complete rewiring, we ensure your electrical system meets today's demands safely and efficiently.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors duration-200 text-center"
                >
                  Get Renovation Quote
                </Link>
                <a
                  href="tel:+64220208415"
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-900 transition-colors duration-200 text-center flex items-center justify-center space-x-2"
                >
                  <Phone className="h-5 w-5" />
                  <span>Discuss Project</span>
                </a>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-yellow-400" />
                  <span>Licensed & Insured</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-yellow-400" />
                  <span>Code Compliant Work</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg shadow-2xl p-8 flex items-center justify-center h-96">
                <div className="text-center">
                  <div className="bg-blue-600 rounded-full p-6 mx-auto mb-4 w-24 h-24 flex items-center justify-center">
                    <Wrench className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">Home Renovations</h3>
                  <p className="text-blue-700">Professional Electrical Work</p>
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
              Renovation Electrical Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive electrical solutions for every type of home renovation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <IconComponent className="h-6 w-6 text-blue-600" />
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

      {/* Renovation Types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Specialized Renovation Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Tailored electrical services for different areas of your home
            </p>
          </div>
          <div className="space-y-12">
            {renovationTypes.map((renovation, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{renovation.type}</h3>
                  <p className="text-gray-600 mb-6">{renovation.description}</p>
                  <ul className="space-y-3">
                    {renovation.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg shadow-lg p-8 flex items-center justify-center h-64">
                    <div className="text-center">
                      <div className="bg-blue-600 rounded-full p-6 mx-auto mb-4 w-20 h-20 flex items-center justify-center">
                        {index === 0 && <Home className="h-10 w-10 text-white" />}
                        {index === 1 && <Shield className="h-10 w-10 text-white" />}
                        {index === 2 && <Zap className="h-10 w-10 text-white" />}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{renovation.type}</h3>
                      <p className="text-gray-600 text-sm">Professional Electrical Solutions</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Signs Your Home Needs Electrical Upgrades
            </h2>
            <p className="text-xl text-gray-600">
              Don't ignore these warning signs during your renovation planning
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {warningSignsData.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div key={index} className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-red-100 p-3 rounded-lg">
                      <IconComponent className="h-6 w-6 text-red-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {category.signs.map((sign, signIndex) => (
                      <li key={signIndex} className="flex items-start space-x-2">
                        <AlertTriangle className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{sign}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              If you notice any of these signs, it's time to upgrade your electrical system during your renovation.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors duration-200"
            >
              Get Safety Assessment
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Renovation Process
            </h2>
            <p className="text-xl text-gray-600">
              Seamless integration with your renovation project
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 mb-4">{step.description}</p>
                <p className="text-sm text-blue-600 font-medium">{step.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Dr Watts for Your Renovation?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Users className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Renovation Specialists</h3>
                    <p className="text-gray-600">Extensive experience working with builders and homeowners on renovation projects.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Minimal Disruption</h3>
                    <p className="text-gray-600">We work efficiently to minimize disruption to your daily life during renovations.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Shield className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Safety First</h3>
                    <p className="text-gray-600">All work meets current safety standards with proper certification and compliance.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Quality Workmanship</h3>
                    <p className="text-gray-600">Professional electrical work completed to industry standards with quality materials.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Ready to Upgrade?</h3>
              <p className="text-gray-600 mb-6">
                Get a detailed quote for your renovation electrical work. We'll assess your current system and provide recommendations.
              </p>
              <div className="space-y-4">
                <Link
                  to="/contact"
                  className="block w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 text-center"
                >
                  Get Renovation Quote
                </Link>
                <a
                  href="tel:+64220208415"
                  className="block w-full bg-transparent border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-colors duration-200 text-center"
                >
                  Call: 022 020 8415
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-xl text-gray-700 mb-6 italic">
              "Dr Watts did all the electrical work for our kitchen and bathroom renovation. They coordinated perfectly with our builder and the quality of work was exceptional. The new lighting has completely transformed our home."
            </blockquote>
            <div className="text-gray-600">
              <p className="font-medium">Sarah & Mike T.</p>
              <p className="text-sm">Kitchen & Bathroom Renovation - Verified Customer</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Transform Your Home with Professional Electrical Upgrades
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Don't let outdated electrical systems limit your renovation. Contact Dr Watts for modern, safe, and efficient electrical solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors duration-200"
            >
              Get Free Quote
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

export default Renovations;