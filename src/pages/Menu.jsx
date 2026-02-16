import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuData } from '../data/menuData';
import { UtensilsCrossed, Wine, ChevronDown, ChevronUp, Coffee } from 'lucide-react';
import SubpageHero from '../components/SubpageHero';

// Navigation sections
const navSections = [
  { id: 'food', label: 'Food', icon: UtensilsCrossed },
  { id: 'drinks', label: 'Drinks', icon: Wine },
  { id: 'breakfast', label: 'Breakfast', icon: Coffee },
];

// Mobile Accordion Component
const MenuAccordion = ({ section, isOpen, onToggle }) => {
  return (
    <div className="bg-lincoln-dark border border-lincoln-gold/30 mb-4">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center p-4 text-left"
      >
        <h3 className="text-xl font-header text-lincoln-yellow">{section.category}</h3>
        {isOpen ? (
          <ChevronUp className="text-lincoln-gold" size={24} />
        ) : (
          <ChevronDown className="text-lincoln-gold" size={24} />
        )}
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-4 pt-0 border-t border-lincoln-gold/20">
              {/* Section Note */}
              {section.note && (
                <p className="text-lincoln-gold italic text-sm mb-4 pb-2 border-b border-lincoln-gold/20">
                  {section.note}
                </p>
              )}
              
              {/* Items */}
              <div className="space-y-4">
                {section.items.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-start gap-4">
                    <div className="flex-grow">
                      <h4 className="font-subheader font-bold text-white">{item.name}</h4>
                      {item.desc && (
                        <p className="text-sm text-gray-400 mt-1">{item.desc}</p>
                      )}
                    </div>
                    <span className="font-bold text-lg text-lincoln-gold whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Desktop Menu Section Component
const MenuSection = ({ section }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
      id={section.id}
      className="bg-lincoln-dark border border-lincoln-gold/30 p-6 md:p-8 break-inside-avoid mb-6"
    >
      {/* Category Header */}
      <h2 className="text-2xl md:text-3xl font-header text-lincoln-yellow mb-4 pb-3 border-b border-lincoln-gold">
        {section.category}
      </h2>

      {/* Section Note */}
      {section.note && (
        <p className="text-lincoln-gold italic text-sm mb-6 bg-lincoln-black/50 p-3 border-l-4 border-lincoln-gold">
          {section.note}
        </p>
      )}

      {/* Items Grid */}
      <div className="space-y-4">
        {section.items.map((item, idx) => (
          <div
            key={idx}
            className="flex justify-between items-start gap-4 p-3 hover:bg-lincoln-black/50 transition-colors rounded"
          >
            <div className="flex-grow">
              <h3 className="font-subheader font-bold text-lg text-white">
                {item.name}
              </h3>
              {item.desc && (
                <p className="text-sm text-gray-400 mt-1">
                  {item.desc}
                </p>
              )}
            </div>
            <span className="font-bold text-xl text-lincoln-gold whitespace-nowrap">
              {item.price}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const Menu = () => {
  const [activeSection, setActiveSection] = useState('food');
  const [openAccordions, setOpenAccordions] = useState({});
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Toggle accordion
  const toggleAccordion = (categoryId) => {
    setOpenAccordions(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }));
  };

  // Scroll to section
  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 180; // Account for sticky nav
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Get sections based on active tab
  const getCurrentSections = () => {
    if (activeSection === 'breakfast') {
      return menuData.food.filter(s => s.id === 'breakfast');
    } else if (activeSection === 'food') {
      return menuData.food.filter(s => s.id !== 'breakfast');
    } else {
      return menuData.drinks;
    }
  };

  return (
    <div className="min-h-screen bg-lincoln-black">
      {/* Hero Section */}
      <SubpageHero 
        title="OUR MENU"
        subtitle="From classic pub favorites to Lincoln-inspired specialties, there's something for everyone."
        image="Hero-Image-2.jpg"
        height="40vh"
      />

      {/* Sticky Navigation */}
      <div className="sticky top-0 z-40 bg-lincoln-black/95 backdrop-blur border-b border-lincoln-gold/30 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-2 md:gap-4 py-4">
            {navSections.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`flex items-center gap-2 px-3 md:px-8 py-3 font-subheader font-bold uppercase tracking-wider transition-all border-2 text-xs md:text-base ${
                  activeSection === id
                    ? 'bg-lincoln-orange border-lincoln-orange text-black'
                    : 'bg-transparent border-lincoln-gold text-lincoln-gold hover:bg-lincoln-gold hover:text-black'
                }`}
              >
                <Icon size={18} />
                <span>{label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Content */}
      <div className="container mx-auto px-4 py-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            id={activeSection}
          >
            {/* Section Title */}
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-header text-lincoln-yellow">
                {activeSection === 'food' && 'FOOD MENU'}
                {activeSection === 'drinks' && 'DRINK MENU'}
                {activeSection === 'breakfast' && 'BREAKFAST MENU'}
              </h2>
              <div className="w-24 h-1 bg-lincoln-gold mx-auto mt-4" />
            </div>

            {/* Mobile View - Accordions */}
            {isMobile ? (
              <div className="max-w-xl mx-auto">
                {getCurrentSections().map((section) => (
                  <MenuAccordion
                    key={section.id}
                    section={section}
                    isOpen={openAccordions[section.id] || false}
                    onToggle={() => toggleAccordion(section.id)}
                  />
                ))}
              </div>
            ) : (
              /* Desktop View - Multi-column masonry */
              <div className="max-w-6xl mx-auto columns-1 lg:columns-2 gap-6">
                {getCurrentSections().map((section) => (
                  <MenuSection key={section.id} section={section} />
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Bottom Notes */}
        <div className="text-center mt-12 text-gray-500 text-sm space-y-1">
          <p>* Prices and availability subject to change</p>
          <p>* Please inform your server of any allergies</p>
        </div>
      </div>

      {/* Global Rules Banner - Bottom */}
      <div className="bg-lincoln-dark border-y border-lincoln-gold/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 text-center">
            <p className="text-gray-300 text-sm">
              <span className="text-lincoln-gold font-bold">📋</span> All parties of 6 or more are subject to <span className="text-lincoln-yellow font-semibold">18% Gratuity</span>
            </p>
            <span className="hidden md:block text-lincoln-gold">|</span>
            <p className="text-gray-300 text-sm">
              <span className="text-lincoln-gold font-bold">💳</span> Checks can only be split evenly by the number of people in the party
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
