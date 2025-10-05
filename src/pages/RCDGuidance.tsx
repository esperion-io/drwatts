import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Shield, CheckCircle, Phone, AlertTriangle, Zap, Clock, Star, Info, Wrench, Users, Home } from 'lucide-react';

const RCDGuidance: React.FC = () => {
  const rcdTypes = [
    {
      type: 'Standard RCD',
      description: 'Basic residual current device for general protection',
      applications: ['General household circuits', 'Power outlets', 'Basic lighting circuits'],
      tripCurrent: '30mA',
      response: '< 300ms'
    },
    {
      type: 'RCBO',
      description: 'RCD with built-in circuit breaker for individual circuit protection',
      applications: ['Individual circuit protection', 'Critical circuits', 'Wet area circuits'],
      tripCurrent: '30mA',
      response: '< 300ms'
    },
    {
      type: 'Type A RCD',
      description: 'Advanced RCD for modern appliances with electronic components',
      applications: ['Heat pumps', 'Variable speed drives', 'Electronic equipment'],
      tripCurrent: '30mA',
      response: '< 300ms'
    }
  ];

  const troubleshootingSteps = [
    {
      step: 1,
      title: 'Safety First',
      description: 'Ensure your safety before investigating',
      actions: [
        'Do not touch the RCD if your hands are wet',
        'Ensure you are standing on a dry surface',
        'If there\'s water near electrical equipment, do not proceed',
        'Call a professional if you smell burning or see damage'
      ]
    },
    {
      step: 2,
      title: 'Initial Check',
      description: 'Basic visual inspection and reset attempt',
      actions: [
        'Check if the RCD switch is in the "OFF" or tripped position',
        'Look for any visible damage to the switchboard',
        'Note any burning smells or unusual sounds',
        'Try pressing the "RESET" or "ON" button once'
      ]
    },
    {
      step: 3,
      title: 'Identify the Cause',
      description: 'Systematic approach to find the problem',
      actions: [
        'Turn off all appliances and lights on the affected circuit',
        'Reset the RCD and turn on devices one by one',
        'Note which device causes the RCD to trip again',
        'Unplug the problematic device and test the RCD'
      ]
    },
    {
      step: 4,
      title: 'Professional Help',
      description: 'When to call a qualified electrician',
      actions: [
        'RCD won\'t reset after multiple attempts',
        'RCD trips immediately when reset',
        'No obvious faulty appliance identified',
        'Any signs of electrical damage or burning'
      ]
    }
  ];

  const commonCauses = [
    {
      cause: 'Faulty Appliance',
      description: 'An appliance with internal electrical fault causing earth leakage',
      solution: 'Unplug and test appliances individually to identify the faulty one',
      urgency: 'Medium',
      diy: true
    },
    {
      cause: 'Moisture/Water Damage',
      description: 'Water in electrical outlets, switches, or wiring causing earth faults',
      solution: 'Dry affected areas, check for water ingress, professional inspection needed',
      urgency: 'High',
      diy: false
    },
    {
      cause: 'Damaged Wiring',
      description: 'Deteriorated or damaged electrical cables causing earth leakage',
      solution: 'Professional electrical inspection and repair required',
      urgency: 'High',
      diy: false
    },
    {
      cause: 'Overloaded Circuit',
      description: 'Too many appliances drawing current beyond circuit capacity',
      solution: 'Reduce electrical load, redistribute appliances across circuits',
      urgency: 'Medium',
      diy: true
    },
    {
      cause: 'Faulty RCD',
      description: 'The RCD itself has developed a fault and needs replacement',
      solution: 'Professional RCD testing and replacement required',
      urgency: 'High',
      diy: false
    },
    {
      cause: 'Nuisance Tripping',
      description: 'RCD trips due to cumulative earth leakage from multiple sources',
      solution: 'Professional assessment to identify sources and upgrade protection',
      urgency: 'Medium',
      diy: false
    }
  ];

  const testingSchedule = [
    {
      frequency: 'Monthly',
      test: 'RCD Test Button',
      description: 'Press the test button to ensure RCD trips and resets properly',
      whoCanDo: 'Homeowner'
    },
    {
      frequency: 'Annually',
      test: 'Professional RCD Testing',
      description: 'Comprehensive testing of trip times and sensitivity',
      whoCanDo: 'Licensed Electrician'
    },
    {
      frequency: 'Every 5 Years',
      test: 'Full Electrical Inspection',
      description: 'Complete electrical safety inspection including RCD performance',
      whoCanDo: 'Licensed Electrician'
    }
  ];

  const warningSignsData = [
    'RCD trips frequently without obvious cause',
    'RCD won\'t reset or trips immediately',
    'Test button doesn\'t work or RCD doesn\'t trip when tested',
    'Burning smell from the switchboard',
    'RCD feels warm or hot to touch',
    'Visible damage or scorch marks on RCD',
    'Electric shocks from appliances or switches',
    'Lights dimming when RCD resets'
  ];

  return (
    <>
      <Helmet>
        <title>RCD Safety Switch Guidance Hibiscus Coast | RCD Troubleshooting & Repair</title>
        <meta name="description" content="Complete RCD safety switch guidance for Hibiscus Coast homes. Troubleshooting tips, testing procedures, and professional RCD repair services. Keep your family safe." />
        <meta name="keywords" content="RCD safety switch hibiscus coast, RCD troubleshooting, safety switch repair, RCD testing, electrical safety, RCBO, residual current device" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                <span className="text-yellow-400">RCD Safety Switch</span> Guidance & Support
              </h1>
              <p className="text-xl text-green-100 mb-8 leading-relaxed">
                Your complete guide to RCD safety switches. Learn how to troubleshoot common issues, understand when to call a professional, and keep your family safe from electrical hazards.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+64220208415"
                  className="bg-yellow-400 text-green-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors duration-200 text-center flex items-center justify-center space-x-2"
                >
                  <Phone className="h-5 w-5" />
                  <span>RCD Service</span>
                </a>
                <Link
                  to="/contact#contact-form"
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-green-900 transition-colors duration-200 text-center"
                >
                  Book RCD Service
                </Link>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-yellow-400" />
                  <span>Safety First Approach</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-yellow-400" />
                  <span>Expert Guidance</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg shadow-2xl p-8 flex items-center justify-center h-96">
                <div className="text-center">
                  <div className="bg-orange-600 rounded-full p-6 mx-auto mb-4 w-24 h-24 flex items-center justify-center">
                    <Shield className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-orange-900 mb-2">RCD Safety Switches</h3>
                  <p className="text-orange-700">Electrical Safety Protection</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is an RCD Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What is an RCD Safety Switch?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A Residual Current Device (RCD) is a life-saving electrical safety device that monitors electrical current and automatically cuts power when it detects dangerous electrical faults.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">How RCDs Protect You</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Shield className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Electrocution Protection</h4>
                    <p className="text-gray-600">Instantly cuts power if current flows through your body, preventing fatal electric shocks.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Zap className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Fire Prevention</h4>
                    <p className="text-gray-600">Detects electrical faults that could cause fires and disconnects power before damage occurs.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Fast Response</h4>
                    <p className="text-gray-600">Trips within 300 milliseconds when it detects as little as 30mA of earth leakage current.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Home className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Whole Home Protection</h4>
                    <p className="text-gray-600">Modern installations protect all circuits in your home, including lights and power outlets.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-green-50 rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">RCD Legal Requirements</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Required on all new electrical installations</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Mandatory for bathroom and outdoor circuits</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Must be tested monthly by homeowner</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Professional testing required annually</span>
                </div>
              </div>
              <div className="mt-6">
                <Link
                  to="/contact"
                  className="block w-full bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200 text-center"
                >
                  Check Your RCD Compliance
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RCD Types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Types of RCD Safety Switches
            </h2>
            <p className="text-xl text-gray-600">
              Different RCD types for different applications and protection needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rcdTypes.map((rcd, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{rcd.type}</h3>
                <p className="text-gray-600 mb-4">{rcd.description}</p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Applications:</h4>
                    <ul className="space-y-1">
                      {rcd.applications.map((app, appIndex) => (
                        <li key={appIndex} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                    <div>
                      <div className="text-sm text-gray-500">Trip Current</div>
                      <div className="font-semibold text-green-600">{rcd.tripCurrent}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Response Time</div>
                      <div className="font-semibold text-green-600">{rcd.response}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Troubleshooting Guide */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              RCD Troubleshooting Guide
            </h2>
            <p className="text-xl text-gray-600">
              Step-by-step guide to safely troubleshoot RCD issues
            </p>
          </div>
          <div className="space-y-8">
            {troubleshootingSteps.map((step, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
                <div className="ml-14">
                  <ul className="space-y-2">
                    {step.actions.map((action, actionIndex) => (
                      <li key={actionIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Causes */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Common Causes of RCD Tripping
            </h2>
            <p className="text-xl text-gray-600">
              Understanding why your RCD trips and what you can do about it
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commonCauses.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-900">{item.cause}</h3>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      item.urgency === 'High' ? 'bg-red-100 text-red-800' :
                      item.urgency === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {item.urgency}
                    </span>
                    {item.diy ? (
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">DIY</span>
                    ) : (
                      <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium">Professional</span>
                    )}
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                  <p className="text-gray-700 text-sm">{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testing Schedule */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              RCD Testing Schedule
            </h2>
            <p className="text-xl text-gray-600">
              Regular testing ensures your RCD continues to protect your family
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testingSchedule.map((test, index) => (
              <div key={index} className="bg-green-50 border border-green-200 rounded-lg p-6">
                <div className="text-center mb-4">
                  <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Clock className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{test.frequency}</h3>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{test.test}</h4>
                <p className="text-gray-600 text-sm mb-4">{test.description}</p>
                <div className="text-center">
                  <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {test.whoCanDo}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              Need professional RCD testing or having issues with your safety switch?
            </p>
            <Link
              to="/contact#contact-form"
              className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200"
            >
              Book RCD Testing Service
            </Link>
          </div>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="py-16 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              When to Call a Professional
            </h2>
            <p className="text-xl text-gray-600">
              These warning signs indicate you need immediate professional help
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {warningSignsData.map((sign, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{sign}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                If you notice any of these signs, stop using the affected circuits and call immediately.
              </p>
              <a
                href="tel:+64220208415"
                className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition-colors duration-200"
              >
                Call Now: 022 020 8415
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Professional RCD Services
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Wrench className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Specialized Testing Equipment</h3>
                    <p className="text-gray-600">Professional RCD testers to verify trip times and sensitivity according to standards.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Users className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Qualified Electricians</h3>
                    <p className="text-gray-600">Licensed professionals with extensive experience in RCD installation and repair.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Shield className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Safety Compliance</h3>
                    <p className="text-gray-600">All work meets New Zealand electrical standards and safety requirements.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Comprehensive Service</h3>
                    <p className="text-gray-600">From testing and maintenance to replacement and upgrades.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-green-50 rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">RCD Services Available</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">RCD testing and certification</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">RCD replacement and upgrades</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Fault finding and repairs</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">New RCD installations</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Professional RCD repairs</span>
                </li>
              </ul>
              <div className="space-y-3">
                <Link
                  to="/contact#contact-form"
                  className="block w-full bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200 text-center"
                >
                  Book RCD Service
                </Link>
                <a
                  href="tel:+64220208415"
                  className="block w-full bg-transparent border-2 border-green-600 text-green-600 px-6 py-3 rounded-lg font-medium hover:bg-green-600 hover:text-white transition-colors duration-200 text-center"
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
              "Our RCD kept tripping and we couldn't figure out why. Dr Watts came out, tested everything systematically, and found a faulty appliance that was causing the problem. Great service and very educational - they explained everything clearly."
            </blockquote>
            <div className="text-gray-600">
              <p className="font-medium">Lisa M.</p>
              <p className="text-sm">RCD Troubleshooting - Verified Customer</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Keep Your Family Safe with Proper RCD Protection
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Don't compromise on electrical safety. Get professional RCD testing, maintenance, and repair services from qualified electricians.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact#contact-form"
              className="bg-yellow-400 text-green-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors duration-200"
            >
              Book RCD Service
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

export default RCDGuidance;