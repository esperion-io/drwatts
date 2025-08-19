import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MapPin, Clock, CheckCircle, AlertCircle, Send, Shield, Star, Zap } from 'lucide-react';
import LeafletMap from '../components/LeafletMap';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    urgency: '',
    address: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const services = [
    'Switchboard Upgrades',
    'LED Lighting Upgrades',
    'New Build Electrical',
    'Renovation Electrical',
    'Fault Finding & Repairs',
    'RCD Safety Switch',
    'Emergency Electrical',
    'General Electrical',
    'Other'
  ];

  const urgencyLevels = [
    { value: 'emergency', label: 'Emergency (Same Day)', description: 'Immediate safety concern' },
    { value: 'urgent', label: 'Urgent (Within 24 Hours)', description: 'Important but not dangerous' },
    { value: 'standard', label: 'Standard (Within 1 Week)', description: 'General electrical work' },
    { value: 'flexible', label: 'Flexible Timing', description: 'No rush, best price' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://usebasin.com/f/9b2faa3b907a', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          urgency: '',
          address: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const businessHours = [
    { day: 'Monday - Friday', hours: '7:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '8:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'Emergency Only' }
  ];

  const serviceAreas = [
    'Auckland Central',
    'North Shore',
    'West Auckland',
    'South Auckland',
    'East Auckland',
    'Waitakere',
    'Manukau',
    'Papakura'
  ];

  return (
    <>
      <Helmet>
        <title>Contact Dr Watts Electrical Auckland | Get Free Quote & Emergency Service</title>
        <meta name="description" content="Contact Dr Watts for electrical services in Auckland. Get free quotes, emergency electrical repairs, and professional electrical installations. Call now!" />
        <meta name="keywords" content="contact electrician auckland, electrical quote, emergency electrician, electrical services auckland, dr watts contact" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Get Your <span className="text-yellow-400">Free Electrical Quote</span> Today
            </h1>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Professional electrical services across Auckland. Emergency repairs, installations, and upgrades by licensed electricians.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+64220208415"
                className="bg-yellow-400 text-green-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span>Call: +64 220208415</span>
              </a>
              <a
                href="#contact-form"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-green-900 transition-colors duration-200"
              >
                Get Free Quote
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-green-800 bg-opacity-50 rounded-lg p-6">
              <Shield className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
              <h3 className="font-bold text-lg mb-2">Licensed & Insured</h3>
              <p className="text-green-100">Fully qualified electricians with comprehensive insurance coverage</p>
            </div>
            <div className="bg-green-800 bg-opacity-50 rounded-lg p-6">
              <Clock className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
              <h3 className="font-bold text-lg mb-2">24/7 Emergency</h3>
              <p className="text-green-100">Emergency electrical services available around the clock</p>
            </div>
            <div className="bg-green-800 bg-opacity-50 rounded-lg p-6">
              <Star className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
              <h3 className="font-bold text-lg mb-2">5-Star Service</h3>
              <p className="text-green-100">Consistently rated 5 stars by satisfied customers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Request Your Free Quote
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Fill out the form below and we'll get back to you within 2 hours during business hours.
              </p>

              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-green-800 font-medium">Thank you! We'll contact you within 2 hours.</span>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <AlertCircle className="h-5 w-5 text-red-600" />
                    <span className="text-red-800 font-medium">Something went wrong. Please try again or call us directly.</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                    Property Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Address where work is needed"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Required *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-2">
                      Urgency Level *
                    </label>
                    <select
                      id="urgency"
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="">Select urgency</option>
                      {urgencyLevels.map((level) => (
                        <option key={level.value} value={level.value}>
                          {level.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Please describe your electrical needs, any specific requirements, or questions you have..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Get Free Quote</span>
                    </>
                  )}
                </button>
              </form>

              <div className="mt-6 text-sm text-gray-600">
                <p>* Required fields. We respect your privacy and will never share your information.</p>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Get In Touch
              </h2>

              {/* Contact Methods */}
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600 mb-2">Call us for immediate assistance</p>
                    <a href="tel:+64220208415" className="text-green-600 font-medium hover:text-green-700">
                      +64 220208415
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600 mb-2">Send us your questions</p>
                    <a href="mailto:office@drwatts.co.nz" className="text-green-600 font-medium hover:text-green-700">
                      office@drwatts.co.nz
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Service Area</h3>
                    <p className="text-gray-600 mb-2">We serve all of Auckland</p>
                    <p className="text-green-600 font-medium">Greater Auckland Region</p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-green-600" />
                  <span>Business Hours</span>
                </h3>
                <div className="space-y-2">
                  {businessHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between">
                      <span className="text-gray-600">{schedule.day}</span>
                      <span className="font-medium text-gray-900">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800 text-sm font-medium">
                    <Zap className="h-4 w-4 inline mr-1" />
                    Emergency services available 24/7 for urgent electrical issues
                  </p>
                </div>
              </div>

              {/* Service Areas */}
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Service Areas</h3>
                <div className="grid grid-cols-2 gap-2">
                  {serviceAreas.map((area, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-gray-700 text-sm">{area}</span>
                    </div>
                  ))}
                </div>
                <p className="text-gray-600 text-sm mt-4">
                  Don't see your area? Contact us - we may still be able to help!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Service Area
            </h2>
            <p className="text-xl text-gray-600">
              Professional electrical services across Greater Auckland
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <LeafletMap
              height="384px"
              zoom={11}
              center={{ lat: -36.5849, lng: 174.6926 }}
              markers={[
                {
                  position: { lat: -36.5849, lng: 174.6926 },
                  title: 'Dr Watts Electrical - Orewa',
                  info: 'Professional electrical services serving Hibiscus Coast and all Auckland areas'
                }
              ]}
              serviceAreas={[
                {
                  center: { lat: -36.5849, lng: 174.6926 },
                  radius: 50000,
                  name: 'Service Coverage Area'
                }
              ]}
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Dr Watts?
            </h2>
            <p className="text-xl text-gray-600">
              Trusted by Auckland homeowners for reliable electrical services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Licensed & Insured</h3>
              <p className="text-gray-600">Fully qualified electricians with comprehensive insurance coverage</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Fast Response</h3>
              <p className="text-gray-600">Quick response times and efficient service delivery</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">5-Star Rated</h3>
              <p className="text-gray-600">Consistently high ratings from satisfied customers</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Quality Guaranteed</h3>
              <p className="text-gray-600">All work comes with our quality guarantee</p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Electrical Emergency?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Don't wait - electrical emergencies can be dangerous. Call us now for immediate assistance.
          </p>
          <a
            href="tel:+64220208415"
            className="inline-block bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-50 transition-colors duration-200"
          >
            Emergency Call: +64 220208415
          </a>
        </div>
      </section>
    </>
  );
};

export default Contact;