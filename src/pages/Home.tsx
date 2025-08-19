import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Phone, Star, MapPin, Zap, Shield, Clock, CheckCircle } from 'lucide-react';
import LeafletMap from '../components/LeafletMap';

const Home: React.FC = () => {
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

  const reviews = [
    {
      id: 1,
      platform: 'Builderscrack',
      customerName: 'Sarah M.',
      rating: 5,
      reviewText: 'Excellent service from Dr Watts! Professional, reliable, and completed the switchboard upgrade on time. Highly recommended for any electrical work.',
      date: '2024-01-15',
      verified: true
    },
    {
      id: 2,
      platform: 'Facebook',
      customerName: 'Mike T.',
      rating: 5,
      reviewText: 'Outstanding LED lighting installation. The team was knowledgeable, clean, and the results exceeded our expectations. Great value for money.',
      date: '2024-01-10',
      verified: true
    },
    {
      id: 3,
      platform: 'No Cowboys',
      customerName: 'Jennifer L.',
      rating: 5,
      reviewText: 'Fast response for emergency electrical fault. Dr Watts diagnosed and fixed the issue quickly. Professional service and fair pricing.',
      date: '2024-01-08',
      verified: true
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
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg shadow-2xl p-8 flex items-center justify-center h-96">
                <div className="text-center">
                  <div className="bg-blue-600 rounded-full p-6 mx-auto mb-4 w-24 h-24 flex items-center justify-center">
                    <Zap className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">Professional Electrical Services</h3>
                  <p className="text-blue-700">Licensed & Insured Electricians</p>
                </div>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div key={review.id} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">{review.platform}</span>
                  </div>
                  {review.verified && (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  )}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  "{review.reviewText}"
                </p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span className="font-medium">{review.customerName}</span>
                  <span>{new Date(review.date).toLocaleDateString()}</span>
                </div>
              </div>
            ))}
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
                  >
                    Learn More
                  </Link>
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
              <span>Call Emergency: +64 220208415</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;