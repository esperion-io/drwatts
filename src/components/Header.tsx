import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';
import LogoImage from '../assets/drwattslogo.svg';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navigation = [
    { name: 'Home', href: '/' },
    {
      name: 'Services',
      href: '#',
      submenu: [
        { name: 'Switchboard Upgrades', href: '/services/switchboard-upgrades' },
        { name: 'LED Lighting', href: '/services/led-lighting' },
        { name: 'New Builds', href: '/services/new-builds' },
        { name: 'Renovations', href: '/services/renovations' },
        { name: 'Fault Finding & Repairs', href: '/services/fault-finding' },
        { name: 'RCD Safety Guide', href: '/services/rcd-guidance' },
      ],
    },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const phoneNumber = '022 020 8415';

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActivePage = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  const handleNavigation = (href: string) => {
    navigate(href);
    window.scrollTo(0, 0);
  };

  const handleContactDoctor = () => {
    if (location.pathname === '/contact') {
      // Already on contact page, scroll to form
      const element = document.getElementById('contact-form');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to contact page and then scroll to form
      navigate('/contact');
      // Use setTimeout to ensure the page has loaded before scrolling
      setTimeout(() => {
        const element = document.getElementById('contact-form');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo Section - Centered on Desktop, Left on Mobile */}
        <div className="flex justify-between lg:justify-center items-center py-4 lg:py-6 relative">
          <Link to="/" className="flex items-center">
            <img 
              src={LogoImage} 
              alt="Dr Watts Electrical Services" 
              className="h-16 sm:h-20 lg:h-24 w-auto object-contain"
            />
          </Link>
          {/* Menu button - Right Side - Mobile Only */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 absolute right-0"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Navigation Section - Below Logo */}
        <div className="hidden lg:flex justify-between items-center pb-4 border-t border-gray-100">
          {/* Left spacer for balance */}
          <div className="flex-1"></div>
          
          {/* Desktop Navigation - Centered */}
          <nav className="flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.submenu ? (
                  <div className="relative">
                    <button className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
                      {item.name}
                    </button>
                    <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="py-2">
                        {item.submenu.map((subItem) => (
                          <button
                            key={subItem.name}
                            onClick={() => handleNavigation(subItem.href)}
                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                          >
                            {subItem.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => handleNavigation(item.href)}
                    className={cn(
                      'px-3 py-2 text-sm font-medium transition-colors duration-200',
                      isActivePage(item.href)
                        ? 'text-blue-600 border-b-2 border-blue-600'
                        : 'text-gray-700 hover:text-blue-600'
                    )}
                  >
                    {item.name}
                  </button>
                )}
              </div>
            ))}
          </nav>

          {/* Contact CTAs - Right Side */}
          <div className="flex items-center space-x-4 flex-1 justify-end">
            <a
              href={`tel:${phoneNumber}`}
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              <Phone className="h-4 w-4" />
              <span className="text-sm font-medium">{phoneNumber}</span>
            </a>
            <button
              onClick={handleContactDoctor}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200"
            >
              Contact The Doctor
            </button>
          </div>
        </div>

        {/* Mobile Header - Hidden (menu button moved to desktop header) */}
        <div className="lg:hidden h-0"></div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-2 space-y-1">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.submenu ? (
                  <div>
                    <div className="text-gray-900 font-medium py-2 text-sm">{item.name}</div>
                    <div className="pl-4 space-y-1">
                      {item.submenu.map((subItem) => (
                        <button
                          key={subItem.name}
                          onClick={() => {
                            setIsMenuOpen(false);
                            handleNavigation(subItem.href);
                          }}
                          className="block w-full text-left py-2 text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
                        >
                          {subItem.name}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      handleNavigation(item.href);
                    }}
                    className={cn(
                      'block w-full text-left py-2 text-sm font-medium transition-colors duration-200',
                      isActivePage(item.href)
                        ? 'text-blue-600'
                        : 'text-gray-700 hover:text-blue-600'
                    )}
                  >
                    {item.name}
                  </button>
                )}
              </div>
            ))}
            <div className="pt-4 pb-2">
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  handleContactDoctor();
                }}
                className="block w-full bg-blue-600 text-white text-center px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200"
              >
                Contact The Doctor
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;