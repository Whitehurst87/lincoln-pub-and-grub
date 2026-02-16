import { MapPin, Clock, Phone, Instagram, Facebook, Mail, Send } from 'lucide-react';
import { useState } from 'react';

const baseUrl = import.meta.env.BASE_URL;

// Location data
const locations = [
  {
    name: 'Tower District',
    address: '609 E. Olive Avenue Suite A',
    city: 'Fresno, California 93728',
    phone: '(559) 355-3533',
    phoneLink: 'tel:5593553533',
  },
  {
    name: 'Old Town Clovis',
    address: '401 Clovis Ave #106',
    city: 'Clovis, CA 93612',
    phone: '(559) 882-3899',
    phoneLink: 'tel:5598823899',
  },
];

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter signup
    alert(`Thank you for subscribing with: ${email}`);
    setEmail('');
  };

  return (
    <footer className="bg-lincoln-black text-white">
      {/* Newsletter Section */}
      <div className="bg-lincoln-dark border-y border-lincoln-gold/30 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-lincoln-yellow font-header text-2xl mb-2">
              SUBSCRIBE TO OUR NEWSLETTER
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Get updates on specials, events, and more!
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-grow px-4 py-3 bg-lincoln-black border border-lincoln-gold/50 text-white placeholder-gray-500 focus:border-lincoln-gold focus:outline-none"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-lincoln-orange hover:bg-lincoln-yellow text-black font-bold uppercase tracking-wider transition-colors flex items-center gap-2"
              >
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <img 
                src={`${baseUrl}images/Lincoln-Footer_logo.png`}
                alt="The Lincoln Pub & Grub"
                className="h-24 w-auto"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              A locally owned restaurant and bar with locations in Fresno's historic Tower District and Old Town Clovis.
            </p>
          </div>

          {/* Hours */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Clock className="text-lincoln-gold" size={20} />
              <h3 className="text-lincoln-yellow font-subheader font-bold uppercase tracking-wider">
                Hours
              </h3>
            </div>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex justify-between">
                <span>Mon - Wed</span>
                <span className="text-lincoln-gold">11AM - 11PM</span>
              </div>
              <div className="flex justify-between">
                <span>Thursday</span>
                <span className="text-lincoln-gold">11AM - 12AM</span>
              </div>
              <div className="flex justify-between">
                <span>Fri - Sat</span>
                <span className="text-lincoln-gold">11AM - 12:30AM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span className="text-lincoln-gold">10AM - 11PM</span>
              </div>
            </div>
          </div>

          {/* Locations */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="text-lincoln-gold" size={20} />
              <h3 className="text-lincoln-yellow font-subheader font-bold uppercase tracking-wider">
                Locations
              </h3>
            </div>
            <div className="space-y-6">
              {locations.map((location, index) => (
                <div key={index} className="text-sm text-gray-300">
                  <h4 className="text-lincoln-gold font-semibold mb-1">{location.name}</h4>
                  <p>{location.address}</p>
                  <p>{location.city}</p>
                  <a
                    href={location.phoneLink}
                    className="flex items-center gap-2 mt-2 text-lincoln-gold hover:text-lincoln-yellow transition-colors"
                  >
                    <Phone size={14} />
                    {location.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Social & Contact */}
          <div>
            <h3 className="text-lincoln-yellow font-subheader font-bold uppercase tracking-wider mb-4">
              Connect
            </h3>
            <div className="flex gap-4 mb-6">
              <a
                href="https://www.facebook.com/TheLincolnFresno"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-lincoln-dark border border-lincoln-gold/50 flex items-center justify-center hover:bg-lincoln-gold hover:text-black transition-all"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://www.instagram.com/thelincolnpub/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-lincoln-dark border border-lincoln-gold/50 flex items-center justify-center hover:bg-lincoln-gold hover:text-black transition-all"
              >
                <Instagram size={24} />
              </a>
            </div>
            <a
              href="mailto:thelincolnfresno@gmail.com"
              className="flex items-center gap-2 text-sm text-lincoln-gold hover:text-lincoln-yellow transition-colors"
            >
              <Mail size={16} />
              thelincolnfresno@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-lincoln-gold/30 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>© {new Date().getFullYear()} Copyright - THE LINCOLN PUB & GRUB</p>
            <div className="flex gap-6">
              <a href="https://www.facebook.com/TheLincolnFresno" target="_blank" rel="noopener noreferrer" className="hover:text-lincoln-gold transition-colors">
                Facebook
              </a>
              <a href="https://www.instagram.com/thelincolnpub/" target="_blank" rel="noopener noreferrer" className="hover:text-lincoln-gold transition-colors">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
