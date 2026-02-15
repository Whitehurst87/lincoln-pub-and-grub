import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { UtensilsCrossed, Facebook, Instagram, Phone } from 'lucide-react';

// Hero images array - use base URL for GitHub Pages
const baseUrl = import.meta.env.BASE_URL;
const heroImages = [
  `${baseUrl}images/Hero-Image-1.jpg`,
  `${baseUrl}images/Hero-Image-2.jpg`,
  `${baseUrl}images/Hero-Image-3.jpg`,
  `${baseUrl}images/Hero-Image-4.jpg`
];

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/menu', label: 'Menu' },
  { path: '/beer-menu', label: 'Beer Menu' },
  { path: '/contact', label: 'Contact' },
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFlashing, setIsFlashing] = useState(false);

  // Rotate images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      // Trigger flash animation
      setIsFlashing(true);
      
      // Change image after flash starts
      setTimeout(() => {
        setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
      }, 150);
      
      // End flash animation
      setTimeout(() => {
        setIsFlashing(false);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-lincoln-black overflow-hidden">
      {/* Background Images with Crossfade */}
      <AnimatePresence mode="sync">
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.75 }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${heroImages[currentImageIndex]}')`,
          }}
        />
      </AnimatePresence>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* White Flash Overlay */}
      <div 
        className={`absolute inset-0 bg-white pointer-events-none transition-opacity duration-150 ${
          isFlashing ? 'opacity-30' : 'opacity-0'
        }`}
      />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Top Navigation Bar */}
        <div className="container mx-auto px-4 pt-4">
          <div className="flex justify-between items-start">
            {/* Left - Navigation Links */}
            <ul className="hidden md:flex gap-6 text-sm font-subheader font-bold uppercase tracking-wider pt-4">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white hover:text-lincoln-yellow transition-colors py-2"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Center - Lincoln Logo (positioned to overlap) */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute left-1/2 transform -translate-x-1/2 top-2 z-20"
            >
              <Link to="/">
                <img 
                  src={`${baseUrl}images/Lincoln-Logo.png`}
                  alt="The Lincoln" 
                  className="h-32 md:h-40 lg:h-48 xl:h-52 max-h-[200px] w-auto"
                />
              </Link>
            </motion.div>

            {/* Right - Social & Contact */}
            <div className="hidden md:flex items-center gap-4 pt-4">
              <a
                href="https://www.facebook.com/TheLincolnFresno"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-lincoln-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/thelincolnpub/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-lincoln-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <span className="text-white">|</span>
              <a
                href="tel:5593553533"
                className="flex items-center gap-2 text-white hover:text-lincoln-gold transition-colors text-sm"
              >
                <Phone size={16} />
                <span>(559) 355-3533</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Logo Section - Centered */}
        <div className="flex-grow flex flex-col items-center justify-center px-4">
          {/* Spacer for Lincoln Logo */}
          <div className="h-32 md:h-44 lg:h-48" />
          
          {/* Header Logo Brand Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center"
          >
            <img 
              src={`${baseUrl}images/Header-Logo-Brand-Name.png`}
              alt="The Lincoln Pub & Grub"
              className="max-w-xs md:max-w-md lg:max-w-xl xl:max-w-2xl h-auto mx-auto"
            />
          </motion.div>
        </div>

        {/* Bottom Section - Menu Buttons and Hours */}
        <div className="container mx-auto px-4 pb-8">
          <div className="grid lg:grid-cols-3 gap-8 items-end">
            {/* Left - Menu Buttons */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col items-center lg:items-start"
            >
              <div className="bg-lincoln-dark/80 backdrop-blur p-6 rounded-lg border border-lincoln-gold/30">
                <div className="flex items-center gap-3 mb-4 justify-center">
                  <img 
                    src={`${baseUrl}images/Fork-and-Knife-Icon.png`}
                    alt="Menu" 
                    className="h-8 w-auto"
                  />
                </div>
                <Link
                  to="/menu"
                  className="block w-full bg-lincoln-dark hover:bg-lincoln-gold text-white hover:text-black px-8 py-3 text-center font-subheader font-bold uppercase tracking-wider transition-all border-2 border-lincoln-gold mb-3"
                >
                  Menu
                </Link>
                <Link
                  to="/beer-menu"
                  className="block w-full bg-lincoln-dark hover:bg-lincoln-gold text-white hover:text-black px-8 py-3 text-center font-subheader font-bold uppercase tracking-wider transition-all border-2 border-lincoln-gold"
                >
                  Beer Menu
                </Link>
              </div>
            </motion.div>

            {/* Center - Feature Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="hidden lg:block"
            >
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-lincoln-dark/60 backdrop-blur p-4 rounded border border-lincoln-gold/30">
                  <div className="text-lincoln-yellow text-2xl font-bold mb-1">$5</div>
                  <div className="text-gray-300 text-xs">Happy Hour Bites</div>
                </div>
                <div className="bg-lincoln-dark/60 backdrop-blur p-4 rounded border border-lincoln-gold/30">
                  <div className="text-lincoln-yellow text-2xl font-bold mb-1">20+</div>
                  <div className="text-gray-300 text-xs">Craft Beers</div>
                </div>
                <div className="bg-lincoln-dark/60 backdrop-blur p-4 rounded border border-lincoln-gold/30">
                  <div className="text-lincoln-yellow text-2xl font-bold mb-1">7</div>
                  <div className="text-gray-300 text-xs">Days Open</div>
                </div>
              </div>
            </motion.div>

            {/* Right - Hours */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col items-center lg:items-end"
            >
              <div className="bg-lincoln-dark/80 backdrop-blur p-6 rounded-lg border-2 border-lincoln-gold">
                <h3 className="text-lincoln-yellow font-header text-2xl mb-4 text-center">
                  OUR HOURS
                </h3>
                <div className="space-y-2 text-white font-light text-sm">
                  <div className="flex justify-between gap-8">
                    <span>MON - WED</span>
                    <span className="text-lincoln-gold">11AM-11PM</span>
                  </div>
                  <div className="flex justify-between gap-8">
                    <span>THURSDAY</span>
                    <span className="text-lincoln-gold">11AM-12AM</span>
                  </div>
                  <div className="flex justify-between gap-8">
                    <span>FRI - SAT</span>
                    <span className="text-lincoln-gold">11AM-12:30AM</span>
                  </div>
                  <div className="flex justify-between gap-8">
                    <span>SUNDAY</span>
                    <span className="text-lincoln-gold">10AM-11PM</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
