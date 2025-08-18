import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Zap, Clock, Shield } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Switchboard Upgrades', href: '/services/switchboard-upgrades' },
    { name: 'LED Lighting', href: '/services/led-lighting' },
    { name: 'New Builds', href: '/services/new-builds' },
    { name: 'Renovations', href: '/services/renovations' },
    { name: 'Fault Finding & Repairs', href: '/services/fault-finding' },
    { name: 'RCD Safety Guide', href: '/services/rcd-guidance' },
  ];

  const serviceAreas = [
    'Auckland CBD',
    'North Shore',
    'West Auckland',
    'South Auckland',
    'East Auckland',
    'Waitakere',
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Dr Watts</h3>
                <p className="text-sm text-gray-400">Electrical Services Ltd</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Professional electrical services across Auckland. Licensed, insured, and committed to safety and quality workmanship.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Shield className="h-4 w-4" />
              <span>Licensed Electrical Contractor</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Service Areas</h4>
            <ul className="space-y-2">
              {serviceAreas.map((area) => (
                <li key={area} className="text-gray-400 text-sm">
                  {area}
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <Link
                to="/contact"
                className="text-blue-400 hover:text-blue-300 transition-colors duration-200 text-sm"
              >
                View Full Coverage Map →
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a
                href="tel:+6499XXXXXX"
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Phone className="h-4 w-4" />
                <span className="text-sm">+64 9 XXX XXXX</span>
              </a>
              <a
                href="mailto:info@drwatts.co.nz"
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Mail className="h-4 w-4" />
                <span className="text-sm">info@drwatts.co.nz</span>
              </a>
              <div className="flex items-start space-x-2 text-gray-400">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span className="text-sm">Auckland, New Zealand</span>
              </div>
              <div className="flex items-start space-x-2 text-gray-400">
                <Clock className="h-4 w-4 mt-0.5" />
                <div className="text-sm">
                  <div>Mon-Fri: 7:00 AM - 6:00 PM</div>
                  <div>24/7 Emergency Service</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {currentYear} Dr Watts Electrical Services Ltd. All rights reserved.
            </div>
            <div className="flex items-center space-x-6">
              <Link
                to="/contact"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200"
              >
                Get Free Quote
              </Link>
              <a
                href="tel:+6499XXXXXX"
                className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors duration-200"
              >
                Emergency Call
              </a>
            </div>
          </div>
          <div className="mt-4 text-xs text-gray-500 text-center md:text-left">
            Licensed Electrical Contractor | Fully Insured | WorkSafe Certified | Master Electricians Member
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;