import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Search, CheckCircle, Phone, Shield, Zap, Clock, Star, AlertTriangle, Wrench, Users, Lightbulb } from 'lucide-react';

const FaultFinding: React.FC = () => {
  const services = [
    {
      icon: Search,
      title: 'Electrical Fault Diagnosis',
      description: 'Advanced testing equipment to quickly identify electrical problems.',
      details: ['Circuit testing', 'Insulation resistance testing', 'Earth fault detection', 'Load analysis']
    },
    {
      icon: Zap,
      title: 'Power Issues',
      description: 'Resolve power outages, fluctuations, and electrical supply problems.',
      details: ['No power diagnosis', 'Partial power loss', 'Voltage fluctuations', 'Circuit overloads']
    },
    {
      icon: Lightbulb,
      title: 'Lighting Problems',
      description: 'Fix flickering lights, dimming issues, and lighting circuit faults.',
      details: ['Flickering lights', 'Lights not working', 'Dimmer problems', 'Switch faults']
    },
    {
      icon: Shield,
      title: 'Safety Repairs',
      description: 'Emergency repairs for electrical safety hazards and dangerous faults.',
      details: ['RCD tripping', 'Burning smells', 'Sparking outlets', 'Hot switches']
    }
  ];

  const commonFaults = [
    {
      problem: 'Circuit Breaker Keeps Tripping',
      causes: ['Overloaded circuit', 'Short circuit', 'Ground fault', 'Faulty appliance'],
      urgency: 'Medium',
      description: 'Frequent tripping indicates an electrical problem that needs professional diagnosis.'
    },
    {
      problem: 'Lights Flickering or Dimming',
      causes: ['Loose connections', 'Voltage fluctuations', 'Overloaded circuit', 'Faulty wiring'],
      urgency: 'Medium',
      description: 'Can indicate serious wiring issues that may pose safety risks.'
    },
    {
      problem: 'No Power to Outlets',
      causes: ['Tripped breaker', 'GFCI reset needed', 'Loose wiring', 'Faulty outlet'],
      urgency: 'High',
      description: 'Complete power loss requires immediate professional assessment.'
    },
    {
      problem: 'Burning Smell from Electrical',
      causes: ['Overheating wires', 'Arcing connections', 'Overloaded circuits', 'Faulty devices'],
      urgency: 'Emergency',
      description: 'Immediate danger - turn off power and call emergency electrician.'
    },
    {
      problem: 'Sparking from Outlets or Switches',
      causes: ['Loose connections', 'Damaged wiring', 'Water damage', 'Age deterioration'],
      urgency: 'Emergency',
      description: 'Serious fire hazard requiring immediate professional attention.'
    },
    {
      problem: 'Electric Shocks from Appliances',
      causes: ['Faulty earthing', 'Damaged insulation', 'Water ingress', 'Appliance fault'],
      urgency: 'Emergency',
      description: 'Potentially life-threatening - requires immediate electrical inspection.'
    }
  ];

  const diagnosticProcess = [
    {
      step: 1,
      title: 'Initial Assessment',
      description: 'Safety check and problem identification',
      details: 'Visual inspection, safety assessment, symptom analysis'
    },
    {
      step: 2,
      title: 'Testing & Diagnosis',
      description: 'Advanced electrical testing to pinpoint the fault',
      details: 'Multimeter testing, insulation testing, circuit analysis'
    },
    {
      step: 3,
      title: 'Solution Planning',
      description: 'Develop repair strategy and provide quote',
      details: 'Fault explanation, repair options, cost estimate'
    },
    {
      step: 4,
      title: 'Professional Repair',
      description: 'Safe and permanent fault resolution',
      details: 'Quality repairs, safety testing, compliance verification'
    }
  ];

  const emergencySigns = [
    'Burning smell from electrical equipment',
    'Sparks from outlets, switches, or appliances',
    'Electric shocks from touching appliances',
    'Scorch marks around outlets or switches',
    'Buzzing or crackling sounds from electrical panels',
    'Lights dimming when appliances turn on',
    'Warm or hot switch plates and outlets',
    'Frequent electrical fires or blown fuses'
  ];

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'Emergency': return 'bg-red-100 text-red-800 border-red-200';
      case 'High': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'Medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <>
      <Helmet>
        <title>Electrical Fault Finding Auckland | Emergency Electrical Repairs</title>
        <meta name="description" content="Expert electrical fault finding and repair services in Auckland. 24/7 emergency electrician for power outages, circuit problems, and electrical faults. Fast diagnosis and repair." />
        <meta name="keywords" content="electrical fault finding auckland, emergency electrician, electrical repairs, power outage, circuit problems, electrical troubleshooting, electrical diagnosis" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-900 via-red-800 to-red-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                <span className="text-yellow-400">Fast & Reliable</span> Electrical Fault Finding
              </h1>
              <p className="text-xl text-red-100 mb-8 leading-relaxed">
                Experiencing electrical problems? Our expert electricians use advanced diagnostic equipment to quickly identify and fix electrical faults. Available for emergency callouts 24/7.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+64220208415"
                  className="bg-yellow-400 text-red-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors duration-200 text-center flex items-center justify-center space-x-2"
                >
                  <Phone className="h-5 w-5" />
                  <span>Emergency Call</span>
                </a>
                <Link
                  to="/contact#contact-form"
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-red-900 transition-colors duration-200 text-center"
                >
                  Book Inspection
                </Link>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-yellow-400" />
                  <span>24/7 Emergency Service</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-yellow-400" />
                  <span>Licensed & Insured</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-red-100 to-red-200 rounded-lg shadow-2xl p-8 flex items-center justify-center h-96">
                <div className="text-center">
                  <div className="bg-red-600 rounded-full p-6 mx-auto mb-4 w-24 h-24 flex items-center justify-center">
                    <Search className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-red-900 mb-2">Electrical Fault Finding</h3>
                  <p className="text-red-700">Professional Diagnostic Services</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Warning */}
      <section className="py-8 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-4">
            <AlertTriangle className="h-8 w-8 text-yellow-400" />
            <div className="text-center">
              <h3 className="text-xl font-bold">Electrical Emergency?</h3>
              <p className="text-red-100">If you smell burning, see sparks, or feel electric shocks - turn off power and call immediately!</p>
            </div>
            <a
              href="tel:+64220208415"
              className="bg-yellow-400 text-red-900 px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors duration-200"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Professional Fault Finding Services
            </h2>
            <p className="text-xl text-gray-600">
              Advanced diagnostic techniques to identify and resolve electrical problems
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-red-100 p-3 rounded-lg">
                      <IconComponent className="h-6 w-6 text-red-600" />
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

      {/* Common Faults Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Common Electrical Faults We Fix
            </h2>
            <p className="text-xl text-gray-600">
              Recognizing these problems early can prevent dangerous situations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commonFaults.map((fault, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">{fault.problem}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getUrgencyColor(fault.urgency)}`}>
                    {fault.urgency}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-4">{fault.description}</p>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Common Causes:</h4>
                  <ul className="space-y-1">
                    {fault.causes.map((cause, causeIndex) => (
                      <li key={causeIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-600 text-sm">{cause}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Signs */}
      <section className="py-16 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              When to Call an Emergency Electrician
            </h2>
            <p className="text-xl text-gray-600">
              These signs indicate immediate electrical dangers requiring urgent attention
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {emergencySigns.map((sign, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{sign}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                If you notice any of these signs, turn off the power at the main switch and call immediately.
              </p>
              <a
                href="tel:+64220208415"
                className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition-colors duration-200"
              >
                Emergency Call: +64 220208415
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Diagnostic Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Fault Finding Process
            </h2>
            <p className="text-xl text-gray-600">
              Systematic approach to quickly identify and resolve electrical problems
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {diagnosticProcess.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 mb-4">{step.description}</p>
                <p className="text-sm text-red-600 font-medium">{step.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Dr Watts for Fault Finding?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Wrench className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Advanced Equipment</h3>
                    <p className="text-gray-600">Professional-grade testing equipment for accurate fault diagnosis and location.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Users className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Experienced Technicians</h3>
                    <p className="text-gray-600">Skilled electricians with years of experience in electrical troubleshooting and repair.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Fast Response</h3>
                    <p className="text-gray-600">Quick diagnosis and repair to minimize downtime and restore your electrical system.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Shield className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Safety Focused</h3>
                    <p className="text-gray-600">All repairs prioritize safety and comply with New Zealand electrical standards.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Need Electrical Diagnosis?</h3>
              <p className="text-gray-600 mb-6">
                Don't let electrical problems disrupt your life. Get professional fault finding and repair services.
              </p>
              <div className="space-y-4">
                <a
                  href="tel:+64220208415"
                  className="block w-full bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors duration-200 text-center"
                >
                  Call for Emergency Service
                </a>
                <Link
                  to="/contact#contact-form"
                  className="block w-full bg-transparent border-2 border-red-600 text-red-600 px-6 py-3 rounded-lg font-medium hover:bg-red-600 hover:text-white transition-colors duration-200 text-center"
                >
                  Book Inspection
                </Link>
              </div>
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500">
                  Available 24/7 for electrical emergencies
                </p>
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
              "Had a power outage in half our house on a Sunday evening. Dr Watts came out within an hour, quickly found the fault in our switchboard, and had everything working again. Excellent service and very reasonable pricing."
            </blockquote>
            <div className="text-gray-600">
              <p className="font-medium">James R.</p>
              <p className="text-sm">Emergency Fault Finding - Verified Customer</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Don't Let Electrical Problems Persist
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Quick professional diagnosis can prevent dangerous situations and costly damage. Contact Dr Watts for reliable fault finding and repair services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+64220208415"
              className="bg-yellow-400 text-red-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>Emergency: +64 220208415</span>
            </a>
            <Link
              to="/contact#contact-form"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-red-900 transition-colors duration-200"
            >
              Book Inspection
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default FaultFinding;