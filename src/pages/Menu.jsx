import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuData } from '../data/menuData';
import { UtensilsCrossed, Wine, Beer } from 'lucide-react';

const Menu = () => {
  const [activeTab, setActiveTab] = useState('food');

  return (
    <div className="min-h-screen bg-lincoln-black">
      {/* Header */}
      <div className="bg-lincoln-dark py-12 border-b border-lincoln-gold/30">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-lincoln-yellow font-header text-4xl md:text-5xl mb-4">
            OUR MENU
          </h1>
          <div className="w-16 h-1 bg-lincoln-gold mx-auto mb-4" />
          <p className="text-gray-400 max-w-xl mx-auto">
            From classic pub favorites to Lincoln-inspired specialties, 
            there's something for everyone.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        {/* Toggle Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('food')}
            className={`flex items-center gap-2 px-8 py-3 font-subheader font-bold uppercase tracking-wider transition-all border-2 ${
              activeTab === 'food'
                ? 'bg-lincoln-orange border-lincoln-orange text-black'
                : 'bg-transparent border-lincoln-gold text-lincoln-gold hover:bg-lincoln-gold hover:text-black'
            }`}
          >
            <UtensilsCrossed size={20} />
            Food
          </button>
          <button
            onClick={() => setActiveTab('drinks')}
            className={`flex items-center gap-2 px-8 py-3 font-subheader font-bold uppercase tracking-wider transition-all border-2 ${
              activeTab === 'drinks'
                ? 'bg-lincoln-orange border-lincoln-orange text-black'
                : 'bg-transparent border-lincoln-gold text-lincoln-gold hover:bg-lincoln-gold hover:text-black'
            }`}
          >
            <Beer size={20} />
            Drinks
          </button>
        </div>

        {/* Menu Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="max-w-5xl mx-auto"
          >
            <div className="space-y-12">
              {menuData[activeTab].map((section, index) => (
                <motion.div
                  key={section.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-lincoln-dark border border-lincoln-gold/30 p-6 md:p-8"
                >
                  {/* Category Header */}
                  <h2 className="text-2xl md:text-3xl font-header text-lincoln-yellow mb-6 pb-3 border-b border-lincoln-gold">
                    {section.category}
                  </h2>

                  {/* Items Grid */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {section.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex justify-between items-start gap-4 p-3 hover:bg-lincoln-black/50 transition-colors"
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
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Note */}
        <div className="text-center mt-12 text-gray-500 text-sm">
          <p>* Prices and availability subject to change</p>
          <p>* Please inform your server of any allergies</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
