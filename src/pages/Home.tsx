import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Zap, Shield, Clock, CheckCircle, Phone, MapPin } from 'lucide-react';
import LeafletMap from '../components/LeafletMap';
import PortfolioCarousel from '../components/PortfolioCarousel';

const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'nocowboys' | 'google'>('nocowboys');

  // Portfolio images data
  const portfolioImages = [
    {
      id: '1',
      src: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20electrical%20switchboard%20upgrade%20installation%20modern%20electrical%20panel%20clean%20wiring%20residential%20home&image_size=landscape_16_9',
      alt: 'Modern electrical switchboard upgrade installation',
      title: 'Switchboard Upgrades',
      description: 'Professional electrical panel upgrades for enhanced safety and efficiency'
    },
    {
      id: '2',
      src: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=LED%20lighting%20installation%20modern%20home%20interior%20bright%20energy%20efficient%20ceiling%20lights%20professional%20electrical%20work&image_size=landscape_16_9',
      alt: 'LED lighting installation in modern home',
      title: 'LED Lighting Solutions',
      description: 'Energy-efficient LED lighting installations for homes and businesses'
    },
    {
      id: '3',
      src: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=electrical%20fault%20finding%20diagnostic%20equipment%20professional%20electrician%20testing%20electrical%20circuits%20safety%20inspection&image_size=landscape_16_9',
      alt: 'Electrical fault finding and diagnostics',
      title: 'Fault Finding & Repairs',
      description: 'Expert electrical diagnostics and repair services'
    },
    {
      id: '4',
      src: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=home%20renovation%20electrical%20work%20new%20wiring%20installation%20modern%20kitchen%20electrical%20outlets%20professional%20electrician&image_size=landscape_16_9',
      alt: 'Home renovation electrical work',
      title: 'Renovation Electrical',
      description: 'Complete electrical solutions for home renovations'
    },
    {
      id: '5',
      src: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=emergency%20electrical%20service%2024%20hour%20electrician%20van%20professional%20electrical%20repair%20urgent%20electrical%20work&image_size=landscape_16_9',
      alt: '24/7 emergency electrical services',
      title: 'Emergency Services',
      description: '24/7 emergency electrical repairs and support'
    }
  ];
  
  const services = [
    {
      id: 'switchboard-upgrades',
      title: 'Switchboard Upgrades',
      description: 'Enhance safety and reliability with modern switchboard installations including RCD integration and surge protection.',
      icon: Shield,
      href: '/services/switchboard-upgrades',
      features: ['RCD Integration', 'Surge Protection', 'Arc Fault Detection']
    },
    {
      id: 'led-lighting',
      title: 'LED Lighting Upgrades',
      description: 'Energy-efficient LED lighting solutions that reduce costs and improve safety while being environmentally friendly.',
      icon: Zap,
      href: '/services/led-lighting',
      features: ['Energy Efficient', 'Cost Savings', 'Long Lasting']
    },
    {
      id: 'new-builds',
      title: 'New Build Electrical',
      description: 'Complete electrical solutions for new residential construction projects with modern safety standards.',
      icon: CheckCircle,
      href: '/services/new-builds',
      features: ['Complete Wiring', 'Safety Compliance', 'Modern Standards']
    },
    {
      id: 'renovations',
      title: 'Renovation Services',
      description: 'Electrical upgrades and installations for home renovations and remodeling projects.',
      icon: MapPin,
      href: '/services/renovations',
      features: ['Upgrade Wiring', 'Add Outlets', 'Lighting Design']
    },
    {
      id: 'fault-finding',
      title: 'Fault Finding & Repairs',
      description: 'Professional diagnostic and repair services to identify and fix electrical issues quickly and safely.',
      icon: Clock,
      href: '/services/fault-finding',
      features: ['Quick Diagnosis', 'Expert Repairs', '24/7 Emergency']
    },
    {
      id: 'rcd-guidance',
      title: 'RCD Safety Guide',
      description: 'Educational guidance and troubleshooting for RCD safety switch issues and maintenance.',
      icon: Shield,
      href: '/services/rcd-guidance',
      features: ['Safety Education', 'Troubleshooting', 'Maintenance Tips']
    }
  ];



  return (
    <>
      <Helmet>
        <title>Professional Electrician Auckland | Dr Watts Electrical Services</title>
        <meta name="description" content="Trusted electrical services in Auckland. Switchboard upgrades, LED lighting, new builds, renovations. Licensed electricians, 24/7 emergency service." />
        <meta name="keywords" content="electrician auckland, electrical services, switchboard upgrade, LED lighting, new builds, renovations, fault finding, RCD safety" />
      </Helmet>

      {/* Hero Section */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Professional <span className="text-yellow-400">Electrical Services</span> in Auckland
              </h1>
              <p className="text-xl text-black-100 mb-8 leading-relaxed">
                Licensed electricians providing safe, reliable electrical solutions for homes and businesses across Auckland. From switchboard upgrades to emergency repairs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact#contact-form"
                  className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors duration-200 text-center"
                >
                  Get Free Quote
                </Link>
                <a
                  href="tel:+64220208415"
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-900 transition-colors duration-200 text-center flex items-center justify-center space-x-2"
                >
                  <Phone className="h-5 w-5" />
                  <span>Call Now</span>
                </a>
              </div>
              <div className="mt-8 flex items-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-yellow-400" />
                  <span>Licensed & Insured</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-yellow-400" />
                  <span>24/7 Emergency</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg shadow-2xl overflow-hidden">
                <PortfolioCarousel images={portfolioImages} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Review Showcase */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Trusted by Auckland homeowners and businesses
            </p>
          </div>
          
          {/* Review Tabs */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex border-b border-gray-200">
              <button 
                className={`flex-1 py-4 px-6 text-center font-medium transition-colors duration-200 ${
                  activeTab === 'nocowboys' 
                    ? 'bg-blue-600 text-white border-b-2 border-blue-600' 
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setActiveTab('nocowboys')}
              >
                <div className="flex items-center justify-center space-x-2">
                  <span>NoCowboys Reviews</span>
                </div>
              </button>
              <button 
                className={`flex-1 py-4 px-6 text-center font-medium transition-colors duration-200 ${
                  activeTab === 'google' 
                    ? 'bg-blue-600 text-white border-b-2 border-blue-600' 
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setActiveTab('google')}
              >
                <div className="flex items-center justify-center space-x-2">
                  <span>Google Reviews</span>
                </div>
              </button>
            </div>
            
            <div className="p-6">
              {activeTab === 'nocowboys' && (
                <div className="w-full">
                  <iframe 
                    id="nocowboys-stream-code" 
                    data-src="https://www.nocowboys.co.nz/new/stream/code/113638/type/microdata/code" 
                    frameBorder="0" 
                    width="100%" 
                    height="400" 
                    src="https://www.nocowboys.co.nz/new/stream/code/113638/type/microdata/code" 
                    scrolling="yes" 
                    style={{overflow: 'hidden', border: 'none'}}
                    title="NoCowboys Reviews for Dr Watts Electrical"
                  ></iframe>
                </div>
              )}
              
              {activeTab === 'google' && (
                <div className="w-full">
                  <div className="text-center py-8">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8 mb-6">
                      <div className="flex items-center justify-center mb-4">
                        <div className="bg-blue-600 rounded-full p-3 mr-3">
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                          </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">Google Reviews</h3>
                      </div>
                      <p className="text-gray-600 mb-6">
                        See what our customers are saying about Dr Watts Electrical on Google
                      </p>
                      <div className="flex items-center justify-center space-x-4 mb-6">
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-lg font-semibold text-gray-900">4.9/5</span>
                        <span className="text-gray-600">Based on Google Reviews</span>
                      </div>
                      <a 
                        href="https://www.google.com/search?q=dr+watts+electrical+orewa+reviews" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                        </svg>
                        <span>View All Google Reviews</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                    
                    {/* Sample Google Reviews */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                        <div className="flex items-center space-x-1 mb-3">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <p className="text-gray-700 mb-3">
                          "Excellent service from Dr Watts! Quick response time and professional work. Highly recommend for any electrical needs."
                        </p>
                        <p className="text-sm text-gray-500">- Sarah M.</p>
                      </div>
                      
                      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                        <div className="flex items-center space-x-1 mb-3">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <p className="text-gray-700 mb-3">
                          "Professional and reliable electrician. Fixed our electrical issues quickly and explained everything clearly. Great value for money."
                        </p>
                        <p className="text-sm text-gray-500">- Mike T.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Electrical Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive electrical solutions for all your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <div key={service.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <IconComponent className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={service.href}
                    className="inline-block w-full bg-blue-600 text-white text-center px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
                    onClick={() => {
                      // Smooth scroll to top when navigating to service pages
                      setTimeout(() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }, 100);
                    }}
                  >Learn More</Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Serving All of Auckland
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                We provide professional electrical services across all Auckland areas, from the CBD to the North Shore and beyond.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {['Auckland CBD', 'North Shore', 'West Auckland', 'South Auckland', 'East Auckland', 'Waitakere'].map((area) => (
                  <div key={area} className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-blue-600" />
                    <span className="text-gray-700">{area}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/contact#contact-form"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
              >
                Check Service Availability
              </Link>
            </div>
            <div>
              <LeafletMap
                height="400px"
                zoom={9}
                center={{ lat: -36.5849, lng: 174.6926 }}
                markers={[
                  {
                    position: { lat: -36.5849, lng: 174.6926 },
                    title: 'Dr Watts Electrical - Orewa',
                    info: 'Professional electrical services serving Hibiscus Coast and surrounding Auckland areas'
                  },
                  {
                    position: { lat: -36.7755, lng: 174.7348 },
                    title: 'North Shore Services',
                    info: 'Serving Takapuna, Milford, and North Shore communities'
                  },
                  {
                    position: { lat: -36.8485, lng: 174.7633 },
                    title: 'Auckland CBD Services',
                    info: 'Covering Auckland CBD and central areas'
                  }
                ]}
                serviceAreas={[
                  {
                    center: { lat: -36.5849, lng: 174.6926 },
                    radius: 50000,
                    name: 'Primary Service Area'
                  }
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact Dr Watts today for professional electrical services you can trust. Free quotes, emergency service available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact#contact-form"
              className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors duration-200"
            >
              Get Free Quote
            </Link>
            <a
              href="tel:+64220208415"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-900 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>Call Emergency: 0220208415</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;