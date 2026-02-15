import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Beer, MapPin, Loader2 } from 'lucide-react';
import SubpageHero from '../components/SubpageHero';

// Menu configuration
const MENUS = {
  tower: {
    name: 'Tower District',
    breweryId: 42718,
    menuId: 166394,
    address: '609 E. Olive Avenue, Fresno'
  },
  clovis: {
    name: 'Old Town Clovis',
    breweryId: 49385,
    menuId: 175109,
    address: 'Old Town Clovis Location'
  }
};

const UNTAPPD_SCRIPT_URL = 'https://embed-menu-preloader.untappdapi.com/embed-menu-preloader.min.js';
const CONTAINER_ID = 'untappd-menu-container';

const BeerMenu = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Function to load the Untappd menu
  const loadMenu = useCallback((menuKey) => {
    if (!menuKey || !MENUS[menuKey]) return;

    const { breweryId, menuId } = MENUS[menuKey];
    
    setIsLoading(true);
    setHasError(false);

    // Remove any existing Untappd script
    const existingScript = document.querySelector(`script[src*="embed-menu-preloader.min.js"]`);
    if (existingScript) {
      existingScript.remove();
    }

    // Create and load new script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = UNTAPPD_SCRIPT_URL;
    script.async = true;

    script.onload = () => {
      // Check if PreloadEmbedMenu function exists
      if (typeof window.PreloadEmbedMenu !== 'undefined') {
        try {
          window.PreloadEmbedMenu(CONTAINER_ID, breweryId, menuId);
          setIsLoading(false);
          console.log(`Beer Menu: Loaded menu for ${MENUS[menuKey].name}`);
        } catch (err) {
          console.error('Beer Menu: Error calling PreloadEmbedMenu:', err);
          setHasError(true);
          setIsLoading(false);
        }
      } else {
        console.error('Beer Menu: PreloadEmbedMenu function not found');
        setHasError(true);
        setIsLoading(false);
      }
    };

    script.onerror = () => {
      console.error('Beer Menu: Failed to load Untappd script');
      setHasError(true);
      setIsLoading(false);
    };

    document.body.appendChild(script);
  }, []);

  // Effect to load menu when activeMenu changes
  useEffect(() => {
    if (activeMenu) {
      loadMenu(activeMenu);
    }

    // Cleanup function
    return () => {
      const script = document.querySelector(`script[src*="embed-menu-preloader.min.js"]`);
      if (script) {
        script.remove();
      }
    };
  }, [activeMenu, loadMenu]);

  // Handle menu selection
  const handleMenuSelect = (menuKey) => {
    if (menuKey === activeMenu) return; // Don't reload same menu
    setActiveMenu(menuKey);
  };

  return (
    <div className="min-h-screen bg-lincoln-black">
      {/* Hero Section */}
      <SubpageHero 
        title="BEER MENU"
        subtitle="Explore our rotating selection of craft beers on tap. Select a location to view the current menu."
        image="Beer Menu Hero Image.jpg"
        height="40vh"
      />

      <div className="container mx-auto px-4 py-10">
        {/* Location Selection Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
        >
          {Object.entries(MENUS).map(([key, menu]) => (
            <button
              key={key}
              onClick={() => handleMenuSelect(key)}
              className={`flex items-center justify-center gap-3 px-8 py-4 font-subheader font-bold uppercase tracking-wider transition-all border-2 min-w-[200px] ${
                activeMenu === key
                  ? 'bg-lincoln-orange border-lincoln-orange text-black'
                  : 'bg-transparent border-lincoln-gold text-lincoln-gold hover:bg-lincoln-gold hover:text-black'
              }`}
            >
              <MapPin size={20} />
              <span>{menu.name}</span>
            </button>
          ))}
        </motion.div>

        {/* Menu Container */}
        <div className="max-w-5xl mx-auto">
          {/* No selection state */}
          {!activeMenu && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 bg-lincoln-dark border border-lincoln-gold/30"
            >
              <Beer className="mx-auto text-lincoln-gold mb-4" size={64} />
              <h2 className="text-lincoln-yellow font-header text-2xl mb-2">
                Select a Location
              </h2>
              <p className="text-gray-400">
                Choose Tower District or Old Town Clovis to view the beer menu
              </p>
            </motion.div>
          )}

          {/* Loading state */}
          {activeMenu && isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 bg-lincoln-dark border border-lincoln-gold/30"
            >
              <Loader2 className="mx-auto text-lincoln-gold mb-4 animate-spin" size={48} />
              <h2 className="text-lincoln-yellow font-header text-xl">
                Loading {MENUS[activeMenu]?.name} Menu...
              </h2>
            </motion.div>
          )}

          {/* Error state */}
          {activeMenu && hasError && !isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 bg-lincoln-dark border border-red-500/30"
            >
              <div className="text-red-500 text-5xl mb-4">⚠️</div>
              <h2 className="text-red-400 font-header text-xl mb-2">
                Error Loading Menu
              </h2>
              <p className="text-gray-400 mb-4">
                Failed to load the beer menu. Please try again.
              </p>
              <button
                onClick={() => loadMenu(activeMenu)}
                className="px-6 py-3 bg-lincoln-orange hover:bg-lincoln-yellow text-black font-bold uppercase tracking-wider transition-colors"
              >
                Retry
              </button>
            </motion.div>
          )}

          {/* Untappd Menu Container */}
          <div
            id={CONTAINER_ID}
            className={`bg-lincoln-dark border border-lincoln-gold/30 min-h-[400px] ${
              !activeMenu || isLoading || hasError ? 'hidden' : ''
            }`}
          />

          {/* Location Info */}
          {activeMenu && !isLoading && !hasError && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-6 text-center"
            >
              <p className="text-gray-400 text-sm">
                <MapPin className="inline mr-2" size={16} />
                {MENUS[activeMenu]?.address}
              </p>
            </motion.div>
          )}
        </div>

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 max-w-3xl mx-auto text-center"
        >
          <h2 className="text-lincoln-yellow font-header text-2xl mb-4">
            CRAFT BEER SELECTION
          </h2>
          <div className="w-16 h-1 bg-lincoln-gold mx-auto mb-6" />
          <p className="text-gray-400 leading-relaxed">
            We pride ourselves on offering an ever-changing selection of craft beers 
            from local breweries and beyond. Our taps rotate regularly, so there's 
            always something new to discover. Ask your server about our current 
            favorites and seasonal specials!
          </p>
          <div className="grid grid-cols-3 gap-4 mt-8 max-w-md mx-auto">
            <div className="bg-lincoln-dark/60 p-4 border border-lincoln-gold/30">
              <div className="text-lincoln-yellow text-2xl font-bold">20+</div>
              <div className="text-gray-400 text-sm">Taps</div>
            </div>
            <div className="bg-lincoln-dark/60 p-4 border border-lincoln-gold/30">
              <div className="text-lincoln-yellow text-2xl font-bold">$5</div>
              <div className="text-gray-400 text-sm">Specials</div>
            </div>
            <div className="bg-lincoln-dark/60 p-4 border border-lincoln-gold/30">
              <div className="text-lincoln-yellow text-2xl font-bold">2</div>
              <div className="text-gray-400 text-sm">Locations</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BeerMenu;
