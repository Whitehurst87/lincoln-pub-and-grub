import { motion } from 'framer-motion';

const baseUrl = import.meta.env.BASE_URL;

const SubpageHero = ({ 
  title, 
  subtitle, 
  image = 'Hero-Image-2.jpg',
  height = '40vh' 
}) => {
  const imageUrl = `${baseUrl}images/${image}`;

  return (
    <section 
      className="relative overflow-hidden flex items-center justify-center"
      style={{ minHeight: height }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${imageUrl}')`,
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-lincoln-yellow font-header text-4xl md:text-5xl lg:text-6xl mb-4">
            {title}
          </h1>
          <div className="w-16 h-1 bg-lincoln-gold mx-auto mb-4" />
          {subtitle && (
            <p className="text-gray-300 max-w-xl mx-auto text-lg">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default SubpageHero;
