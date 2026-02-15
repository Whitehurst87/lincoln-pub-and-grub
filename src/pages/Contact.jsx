import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Mail, Navigation, Instagram } from 'lucide-react';
import SubpageHero from '../components/SubpageHero';

// Location data
const locations = [
  {
    name: 'Tower District',
    address: '609 E. Olive Avenue Suite A',
    city: 'Fresno, California 93728',
    phone: '(559) 355-3533',
    phoneLink: 'tel:5593553533',
    mapsUrl: 'https://maps.google.com/?q=609+E+Olive+Avenue+Fresno+CA+93728',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3195.8!2d-119.7869!3d36.7468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDQ0JzQ4LjUiTiAxMTnCsDQ3JzEyLjgiVw!5e0!3m2!1sen!2sus!4v1234567890',
  },
  {
    name: 'Old Town Clovis',
    address: '401 Clovis Ave #106',
    city: 'Clovis, CA 93612',
    phone: '(559) 882-3899',
    phoneLink: 'tel:5598823899',
    mapsUrl: 'https://maps.google.com/?q=401+Clovis+Ave+Clovis+CA+93612',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3193.5!2d-119.7031!3d36.8252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDQ5JzMwLjciTiAxMTnCsDQyJzExLjIiVw!5e0!3m2!1sen!2sus!4v1234567890',
  },
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-lincoln-black">
      {/* Hero Section */}
      <SubpageHero 
        title="CONTACT US"
        subtitle="We'd love to hear from you! Stop by, give us a call, or send us a message."
        image="Hero-Image-2.jpg"
        height="40vh"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Locations Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {locations.map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-lincoln-dark border border-lincoln-gold/50 overflow-hidden"
              >
                {/* Map Embed */}
                <div className="aspect-video bg-gray-800">
                  <iframe
                    src={location.mapEmbed}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`${location.name} Location`}
                    className="w-full h-full"
                  />
                </div>

                {/* Location Info */}
                <div className="p-6">
                  <h2 className="text-lincoln-yellow font-header text-2xl mb-4">
                    {location.name}
                  </h2>

                  <div className="space-y-4">
                    {/* Address */}
                    <div className="flex gap-4 items-start">
                      <MapPin className="text-lincoln-gold mt-1" size={20} />
                      <div>
                        <p className="text-gray-300">{location.address}</p>
                        <p className="text-gray-300">{location.city}</p>
                        <a
                          href={location.mapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-lincoln-gold font-semibold mt-2 hover:text-lincoln-yellow transition-colors text-sm"
                        >
                          <Navigation size={14} />
                          Get Directions
                        </a>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex gap-4 items-start">
                      <Phone className="text-lincoln-gold mt-1" size={20} />
                      <div>
                        <a
                          href={location.phoneLink}
                          className="text-gray-300 hover:text-lincoln-gold transition-colors text-lg"
                        >
                          {location.phone}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <a
                    href={location.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-6 bg-lincoln-orange hover:bg-lincoln-yellow text-black px-6 py-3 font-subheader font-bold uppercase text-sm tracking-wider transition-colors"
                  >
                    Open in Maps
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Hours & Contact Info */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Hours */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-lincoln-dark border border-lincoln-gold/50 p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <Clock className="text-lincoln-gold" size={28} />
                <h2 className="text-lincoln-yellow font-header text-2xl">
                  HOURS OF OPERATION
                </h2>
              </div>
              <div className="space-y-3 text-gray-300">
                <div className="flex justify-between gap-8 py-2 border-b border-lincoln-gold/20">
                  <span>Monday - Wednesday</span>
                  <span className="text-lincoln-gold font-semibold">11AM - 11PM</span>
                </div>
                <div className="flex justify-between gap-8 py-2 border-b border-lincoln-gold/20">
                  <span>Thursday</span>
                  <span className="text-lincoln-gold font-semibold">11AM - 12AM</span>
                </div>
                <div className="flex justify-between gap-8 py-2 border-b border-lincoln-gold/20">
                  <span>Friday - Saturday</span>
                  <span className="text-lincoln-gold font-semibold">11AM - 12:30AM</span>
                </div>
                <div className="flex justify-between gap-8 py-2">
                  <span>Sunday</span>
                  <span className="text-lincoln-gold font-semibold">10AM - 11PM</span>
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-500">
                * Hours may vary on holidays. Call to confirm.
              </p>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-lincoln-dark border border-lincoln-gold/50 p-8"
            >
              <h2 className="text-lincoln-yellow font-header text-2xl mb-6">
                GET IN TOUCH
              </h2>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex gap-4 items-start">
                  <div className="bg-lincoln-black border border-lincoln-gold p-3">
                    <Mail className="text-lincoln-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="font-subheader font-bold text-lg text-white mb-1">Email</h3>
                    <a
                      href="mailto:thelincolnfresno@gmail.com"
                      className="text-gray-400 hover:text-lincoln-gold transition-colors"
                    >
                      thelincolnfresno@gmail.com
                    </a>
                    <p className="text-sm text-gray-500 mt-1">
                      For catering and private events
                    </p>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex gap-4 items-start">
                  <div className="bg-lincoln-black border border-lincoln-gold p-3">
                    <Instagram className="text-lincoln-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="font-subheader font-bold text-lg text-white mb-1">Instagram</h3>
                    <a
                      href="https://www.instagram.com/thelincolnpub/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-lincoln-gold transition-colors"
                    >
                      @thelincolnpub
                    </a>
                    <p className="text-sm text-gray-500 mt-1">
                      Follow us for updates and specials
                    </p>
                  </div>
                </div>
              </div>

              {/* Parking Info */}
              <div className="mt-8 bg-lincoln-black border border-lincoln-gold/30 p-4">
                <h4 className="font-subheader font-bold text-lincoln-yellow mb-2">🚗 Parking Info</h4>
                <p className="text-gray-400 text-sm">
                  Free street parking available at both locations. 
                  Additional parking lots located nearby.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="bg-lincoln-dark border border-lincoln-gold p-8 max-w-2xl mx-auto">
              <h2 className="text-lincoln-yellow font-header text-2xl mb-6 text-center">
                SEND US A MESSAGE
              </h2>
              <div className="w-16 h-1 bg-lincoln-gold mx-auto mb-8" />
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-subheader font-bold text-gray-300 mb-2 uppercase tracking-wider">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 bg-lincoln-black border border-lincoln-gold/50 text-white placeholder-gray-500 focus:border-lincoln-gold focus:outline-none transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-subheader font-bold text-gray-300 mb-2 uppercase tracking-wider">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 bg-lincoln-black border border-lincoln-gold/50 text-white placeholder-gray-500 focus:border-lincoln-gold focus:outline-none transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-subheader font-bold text-gray-300 mb-2 uppercase tracking-wider">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 bg-lincoln-black border border-lincoln-gold/50 text-white focus:border-lincoln-gold focus:outline-none transition-all"
                  >
                    <option value="">Select a topic</option>
                    <option value="reservation">Reservation Inquiry</option>
                    <option value="catering">Catering & Events</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-subheader font-bold text-gray-300 mb-2 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-lincoln-black border border-lincoln-gold/50 text-white placeholder-gray-500 focus:border-lincoln-gold focus:outline-none transition-all resize-none"
                    placeholder="How can we help you?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-lincoln-orange hover:bg-lincoln-yellow text-black py-4 font-subheader font-bold uppercase tracking-wider transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
