import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Zap, DollarSign, Leaf, Clock, CheckCircle, Phone, Star, Lightbulb } from 'lucide-react';

const LEDLighting: React.FC = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: 'Reduce Energy Costs',
      description: 'Save up to 80% on lighting electricity bills with efficient LED technology.',
      stat: '80% Savings'
    },
    {
      icon: Clock,
      title: 'Long Lasting',
      description: 'LED lights last 25 times longer than traditional incandescent bulbs.',
      stat: '25x Longer'
    },
    {
      icon: Leaf,
      title: 'Environmentally Friendly',
      description: 'Reduce carbon footprint with energy-efficient, mercury-free lighting.',
      stat: 'Zero Mercury'
    },
    {
      icon: Zap,
      title: 'Instant Brightness',
      description: 'No warm-up time required - full brightness immediately when switched on.',
      stat: 'Instant On'
    }
  ];

  const ledTypes = [
    {
      type: 'Downlights',
      description: 'Recessed ceiling lights perfect for general room illumination',
      applications: ['Living rooms', 'Kitchens', 'Bathrooms', 'Bedrooms'],
      features: ['Dimmable options', 'Various beam angles', 'IP rated for wet areas']
    },
    {
      type: 'Strip Lighting',
      description: 'Flexible LED strips for accent and task lighting applications',
      applications: ['Under cabinets', 'Cove lighting', 'Stair lighting', 'Display areas'],
      features: ['Cuttable to length', 'Color changing options', 'Waterproof variants']
    },
    {
      type: 'Panel Lights',
      description: 'Slim profile lights ideal for offices and commercial spaces',
      applications: ['Offices', 'Retail spaces', 'Schools', 'Hospitals'],
      features: ['Even light distribution', 'Flicker-free operation', 'Emergency backup options']
    },
    {
      type: 'Outdoor Lighting',
      description: 'Weather-resistant LED solutions for exterior applications',
      applications: ['Garden paths', 'Security lighting', 'Facade lighting', 'Parking areas'],
      features: ['Motion sensors', 'Solar options', 'Smart controls']
    }
  ];

  const costComparison = [
    {
      type: 'Incandescent',
      wattage: '60W',
      lifespan: '1,000 hours',
      annualCost: '$52.56',
      color: 'bg-red-100 text-red-800'
    },
    {
      type: 'CFL',
      wattage: '14W',
      lifespan: '8,000 hours',
      annualCost: '$12.26',
      color: 'bg-yellow-100 text-yellow-800'
    },
    {
      type: 'LED',
      wattage: '8W',
      lifespan: '25,000 hours',
      annualCost: '$7.01',
      color: 'bg-green-100 text-green-800'
    }
  ];

  return (
    <>
      <Helmet>
        <title>LED Lighting Upgrades Auckland | Energy Efficient Lighting Installation</title>
        <meta name="description" content="Professional LED lighting upgrades in Auckland. Save up to 80% on energy costs. Downlights, strip lighting, outdoor LED installation. Free quotes available." />
        <meta name="keywords" content="LED lighting auckland, LED downlights, energy efficient lighting, LED strip lights, outdoor LED lighting, lighting upgrade, electrician auckland" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Energy-Efficient <span className="text-yellow-400">LED Lighting Upgrades</span> in Auckland
              </h1>
              <p className="text-xl text-green-100 mb-8 leading-relaxed">
                Transform your home or business with modern LED lighting. Save up to 80% on energy costs while enjoying superior light quality and longevity.
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
                  <span>Call Now</span>
                </a>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <DollarSign className="h-5 w-5 text-yellow-400" />
                  <span>Up to 80% Energy Savings</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-yellow-400" />
                  <span>25x Longer Lifespan</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-lg shadow-2xl p-8 flex items-center justify-center h-96">
                <div className="text-center">
                  <div className="bg-yellow-600 rounded-full p-6 mx-auto mb-4 w-24 h-24 flex items-center justify-center">
                    <Lightbulb className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-yellow-900 mb-2">LED Lighting Solutions</h3>
                  <p className="text-yellow-700">Energy Efficient Installations</p>
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
              Why Choose LED Lighting?
            </h2>
            <p className="text-xl text-gray-600">
              Experience the benefits of modern, energy-efficient lighting technology
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="text-center bg-gray-50 rounded-lg p-6">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-green-600" />
                  </div>
                  <div className="text-2xl font-bold text-green-600 mb-2">{benefit.stat}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cost Comparison Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              LED vs Traditional Lighting Costs
            </h2>
            <p className="text-xl text-gray-600">
              See how much you can save with LED lighting upgrades
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {costComparison.map((light, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${light.color}`}>
                  {light.type}
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Power Usage:</span>
                    <span className="font-semibold">{light.wattage}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Lifespan:</span>
                    <span className="font-semibold">{light.lifespan}</span>
                  </div>
                  <div className="flex justify-between border-t pt-3">
                    <span className="text-gray-600">Annual Cost:</span>
                    <span className="font-bold text-lg">{light.annualCost}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-lg text-gray-600 mb-4">
              *Based on 3 hours daily usage at $0.30/kWh electricity rate
            </p>
            <div className="bg-green-100 border border-green-200 rounded-lg p-4 inline-block">
              <p className="text-green-800 font-semibold">
                Annual Savings with LED: $45.55 per bulb compared to incandescent
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LED Types Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              LED Lighting Solutions We Install
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive LED lighting options for every application
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ledTypes.map((led, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Lightbulb className="h-8 w-8 text-yellow-500" />
                  <h3 className="text-2xl font-semibold text-gray-900">{led.type}</h3>
                </div>
                <p className="text-gray-600 mb-4">{led.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Perfect for:</h4>
                  <div className="flex flex-wrap gap-2">
                    {led.applications.map((app, appIndex) => (
                      <span key={appIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {led.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our LED Installation Process
            </h2>
            <p className="text-xl text-gray-600">
              Professional installation with minimal disruption
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Lighting Assessment',
                description: 'Evaluate your current lighting and identify upgrade opportunities.'
              },
              {
                step: '2',
                title: 'Custom Design',
                description: 'Design an LED lighting solution tailored to your space and needs.'
              },
              {
                step: '3',
                title: 'Professional Installation',
                description: 'Install LED lights with proper wiring and controls for optimal performance.'
              },
              {
                step: '4',
                title: 'Testing & Handover',
                description: 'Test all lights and provide guidance on controls and maintenance.'
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
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
              "Dr Watts installed LED downlights throughout our home. The difference in light quality is amazing, and our electricity bill has dropped significantly. Professional service and great value for money."
            </blockquote>
            <div className="text-gray-600">
              <p className="font-medium">Mike T.</p>
              <p className="text-sm">Verified Customer - Facebook</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Upgrade to LED Lighting?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Start saving on energy costs today with professional LED lighting installation. Contact Dr Watts for a free consultation and quote.
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
              <span>Call Now: 0220208415</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default LEDLighting;