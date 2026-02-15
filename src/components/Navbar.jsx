import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, Facebook, Instagram } from 'lucide-react';
import { useState } from 'react';

const baseUrl = import.meta.env.BASE_URL;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/menu', label: 'Menu' },
    { path: '/beer-menu', label: 'Beer Menu' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-lincoln-dark text-white py-2 sticky top-0 z-50 border-b border-lincoln-gold/30">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Left - Logo */}
          <Link to="/" className="flex-shrink-0">
            <img 
              src={`${baseUrl}images/Lincoln-Logo.png`}
              alt="The Lincoln" 
              className="h-12 md:h-14 w-auto"
            />
          </Link>

          {/* Center - Navigation Links */}
          <ul className="hidden md:flex gap-6 lg:gap-8 text-sm font-subheader font-bold uppercase tracking-wider">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`transition-colors py-2 ${
                    isActive(link.path)
                      ? 'text-lincoln-yellow border-b-2 border-lincoln-yellow'
                      : 'text-white hover:text-lincoln-gold'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right - Social & Contact */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/TheLincolnFresno"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-lincoln-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.instagram.com/thelincolnpub/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-lincoln-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>

            {/* Divider */}
            <div className="h-6 w-px bg-lincoln-gold/50" />

            {/* Phone */}
            <a
              href="tel:5593553533"
              className="flex items-center gap-2 text-lincoln-gold hover:text-lincoln-yellow transition-colors text-sm"
            >
              <Phone size={16} />
              <span>(559) 355-3533</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-lincoln-gold/30">
            <ul className="flex flex-col gap-2 pt-4">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`block py-3 px-4 text-center font-subheader font-bold uppercase tracking-wider transition-colors ${
                      isActive(link.path)
                        ? 'text-lincoln-yellow bg-lincoln-black/50'
                        : 'text-white hover:text-lincoln-gold hover:bg-lincoln-black/30'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Social & Contact */}
            <div className="mt-4 pt-4 border-t border-lincoln-gold/30 flex flex-col items-center gap-4">
              <div className="flex items-center gap-6">
                <a
                  href="https://www.facebook.com/TheLincolnFresno"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lincoln-gold hover:text-lincoln-yellow transition-colors"
                >
                  <Facebook size={24} />
                </a>
                <a
                  href="https://www.instagram.com/thelincolnpub/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lincoln-gold hover:text-lincoln-yellow transition-colors"
                >
                  <Instagram size={24} />
                </a>
              </div>
              <a
                href="tel:5593553533"
                className="flex items-center gap-2 text-lincoln-gold hover:text-lincoln-yellow"
              >
                <Phone size={18} />
                (559) 355-3533
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
