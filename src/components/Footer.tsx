import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import LogoImage from '../assets/Image.svg';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            {/* Dr Watts Logo */}
            <div className="flex items-center space-x-3 mb-6">
              <Link to="/" className="flex items-center">
                <img 
                  src={LogoImage} 
                  alt="Dr Watts Electrical Services" 
                  className="h-20 w-auto object-contain"
                />
              </Link>   
            </div>
            
            <p className="text-gray-300 mb-6 max-w-md">
              Auckland's trusted electrical service company. Licensed electricians providing safe, reliable, and professional electrical services since 2008.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-yellow-400" />
                <a href="tel:+64220208415" className="text-gray-300 hover:text-white transition-colors">
                  022 020 8415
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-yellow-400" />
                <a href="mailto:info@drwatts.co.nz" className="text-gray-300 hover:text-white transition-colors">
                  info@drwatts.co.nz
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-yellow-400" />
                <span className="text-gray-300">Serving Greater Auckland</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-yellow-400" />
                <span className="text-gray-300">24/7 Emergency Service</span>
              </div>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/services/switchboard-upgrades" 
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Switchboard Upgrades
                </Link>
              </li>
              <li>
                <Link 
                  to="/services/led-lighting" 
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  LED Lighting
                </Link>
              </li>
              <li>
                <Link 
                  to="/services/new-builds" 
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  New Builds
                </Link>
              </li>
              <li>
                <Link 
                  to="/services/renovations" 
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Renovations
                </Link>
              </li>
              <li>
                <Link 
                  to="/services/fault-finding" 
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Fault Finding
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a href="tel:+64220208415" className="text-gray-300 hover:text-white transition-colors">
                  Emergency Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Dr Watts Electrical Services Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;