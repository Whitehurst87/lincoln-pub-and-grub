import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { Facebook } from 'lucide-react';

// Food images for slideshow
const baseUrl = import.meta.env.BASE_URL;
const foodImages = [
  `${baseUrl}images/Buffalo-Chicken-Fries.jpg`,
  `${baseUrl}images/Eggs-Benedict-Plate.jpg`,
  `${baseUrl}images/Fish-and-chips.png`,
  `${baseUrl}images/Pulled-Pork-Sandwich.png`,
];

// Food Image Slideshow Component
const FoodSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % foodImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative aspect-[4/3] rounded-lg overflow-hidden border-2 border-lincoln-gold">
      <AnimatePresence mode="sync">
        <motion.img
          key={currentIndex}
          src={foodImages[currentIndex]}
          alt="Delicious food at The Lincoln"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.75 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>
      
      {/* Slideshow indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {foodImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex
                ? 'bg-lincoln-gold w-6'
                : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div className="bg-lincoln-black">
      <Hero />

      {/* About Section */}
      <section className="py-16 md:py-24 bg-lincoln-black">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Slideshow */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <FoodSlideshow />
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-lincoln-gold -z-10" />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-lincoln-yellow font-header text-3xl md:text-4xl mb-6">
                ABOUT US
              </h2>
              <div className="w-16 h-1 bg-lincoln-gold mb-6" />
              <p className="text-gray-300 leading-relaxed mb-6">
                The Lincoln is a locally owned restaurant and bar located in Fresno's historic 
                Tower District. We offer an amazing selection of craft cocktails, beers on tap, 
                and food items at a very reasonable price.
              </p>
              <p className="text-gray-300 leading-relaxed mb-8">
                Whether you're stopping by for happy hour, a late-night bite, or a weekend brunch, 
                our welcoming atmosphere and quality offerings make The Lincoln the perfect 
                neighborhood gathering spot.
              </p>
              
              {/* Social Link */}
              <a
                href="https://www.facebook.com/TheLincolnFresno"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-lincoln-dark border-2 border-lincoln-gold px-6 py-3 text-white hover:bg-lincoln-gold hover:text-black transition-all"
              >
                <Facebook size={24} />
                <span className="font-subheader font-bold uppercase tracking-wider">Follow Us</span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-16 bg-lincoln-dark">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-lincoln-yellow font-header text-3xl md:text-4xl mb-4">
              WHAT WE OFFER
            </h2>
            <div className="w-16 h-1 bg-lincoln-gold mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-lincoln-black border border-lincoln-gold/30 overflow-hidden hover:border-lincoln-gold transition-colors group"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={`${baseUrl}images/Bites.png`}
                  alt="$5 Bites"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-header text-lincoln-gold text-xl mb-2">$5 Bites</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Tempura Shrimp Tacos, Crispy Calamari, Boneless Wings and more - 
                  all just $5 during happy hour!
                </p>
                <Link to="/menu" className="text-lincoln-yellow font-bold hover:text-lincoln-orange transition-colors">
                  View Menu →
                </Link>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-lincoln-black border border-lincoln-gold/30 overflow-hidden hover:border-lincoln-gold transition-colors group"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={`${baseUrl}images/Cocktails.png`}
                  alt="Craft Cocktails"
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-header text-lincoln-gold text-xl mb-2">Craft Cocktails</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Try the Old Abe, First Lady, or Railsplitter - handcrafted cocktails 
                  inspired by American history.
                </p>
                <Link to="/menu" className="text-lincoln-yellow font-bold hover:text-lincoln-orange transition-colors">
                  See Drinks →
                </Link>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-lincoln-black border border-lincoln-gold/30 overflow-hidden hover:border-lincoln-gold transition-colors group"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={`${baseUrl}images/Beer.png`}
                  alt="Craft Beer"
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-header text-lincoln-gold text-xl mb-2">Craft Beer</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Over 20 beers on tap featuring local favorites and imported classics. 
                  $5 draft specials daily!
                </p>
                <Link to="/menu" className="text-lincoln-yellow font-bold hover:text-lincoln-orange transition-colors">
                  Beer List →
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-20 relative"
        style={{
          backgroundImage: `url('${baseUrl}images/Happy Staff.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-black/80" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-lincoln-yellow font-header text-3xl md:text-4xl mb-4">
              VISIT US TODAY
            </h2>
            <div className="w-16 h-1 bg-lincoln-gold mx-auto mb-6" />
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">
              Stop by for lunch, happy hour, or a late-night bite. 
              We're open 7 days a week in the heart of the Tower District.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-block bg-lincoln-orange hover:bg-lincoln-yellow text-black px-8 py-4 font-subheader font-bold uppercase tracking-wider transition-colors"
              >
                Get Directions
              </Link>
              <a
                href="tel:5593553533"
                className="inline-block bg-transparent border-2 border-lincoln-gold text-lincoln-gold hover:bg-lincoln-gold hover:text-black px-8 py-4 font-subheader font-bold uppercase tracking-wider transition-colors"
              >
                Call Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
