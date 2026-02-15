import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Mail, Navigation, Instagram } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-lincoln-black">
      {/* Header */}
      <div className="bg-lincoln-dark py-12 border-b border-lincoln-gold/30">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-lincoln-yellow font-header text-4xl md:text-5xl mb-4">
            CONTACT US
          </h1>
          <div className="w-16 h-1 bg-lincoln-gold mx-auto mb-4" />
          <p className="text-gray-400 max-w-xl mx-auto">
            We'd love to hear from you! Stop by, give us a call, or send us a message.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-lincoln-yellow font-header text-2xl mb-8">
                VISIT THE LINCOLN
              </h2>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex gap-4 items-start">
                  <div className="bg-lincoln-dark border border-lincoln-gold p-3">
                    <MapPin className="text-lincoln-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="font-subheader font-bold text-lg text-white mb-1">Address</h3>
                    <p className="text-gray-400">609 E. Olive Avenue Suite A</p>
                    <p className="text-gray-400">Fresno, California 93728</p>
                    <a
                      href="https://maps.google.com/?q=609+E+Olive+Avenue+Fresno+CA+93728"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-lincoln-gold font-semibold mt-2 hover:text-lincoln-yellow transition-colors"
                    >
                      <Navigation size={16} />
                      Get Directions
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4 items-start">
                  <div className="bg-lincoln-dark border border-lincoln-gold p-3">
                    <Phone className="text-lincoln-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="font-subheader font-bold text-lg text-white mb-1">Phone</h3>
                    <a
                      href="tel:5593553533"
                      className="text-gray-400 hover:text-lincoln-gold transition-colors"
                    >
                      (559) 355-3533
                    </a>
                    <p className="text-sm text-gray-500 mt-1">
                      Call for reservations or takeout orders
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4 items-start">
                  <div className="bg-lincoln-dark border border-lincoln-gold p-3">
                    <Clock className="text-lincoln-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="font-subheader font-bold text-lg text-white mb-2">Hours of Operation</h3>
                    <div className="space-y-1 text-gray-400">
                      <div className="flex justify-between gap-8">
                        <span>Monday - Wednesday</span>
                        <span className="text-lincoln-gold">11AM - 11PM</span>
                      </div>
                      <div className="flex justify-between gap-8">
                        <span>Thursday</span>
                        <span className="text-lincoln-gold">11AM - 12AM</span>
                      </div>
                      <div className="flex justify-between gap-8">
                        <span>Friday - Saturday</span>
                        <span className="text-lincoln-gold">11AM - 12:30AM</span>
                      </div>
                      <div className="flex justify-between gap-8">
                        <span>Sunday</span>
                        <span className="text-lincoln-gold">10AM - 11PM</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4 items-start">
                  <div className="bg-lincoln-dark border border-lincoln-gold p-3">
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
                  <div className="bg-lincoln-dark border border-lincoln-gold p-3">
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
                      @thelincolnfresno
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-lincoln-yellow font-header text-2xl mb-8">
                FIND US
              </h2>
              
              <div className="bg-lincoln-dark border border-lincoln-gold overflow-hidden">
                {/* Map Embed */}
                <div className="aspect-video bg-gray-800">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3195.8!2d-119.7869!3d36.7468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDQ0JzQ4LjUiTiAxMTnCsDQ3JzEyLjgiVw!5e0!3m2!1sen!2sus!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="The Lincoln Pub & Grub Location"
                    className="w-full h-full min-h-[300px]"
                  />
                </div>

                {/* Quick Info */}
                <div className="p-6 bg-lincoln-black">
                  <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div>
                      <h3 className="font-header text-lg text-white">The Lincoln Pub & Grub</h3>
                      <p className="text-gray-400 text-sm">Tower District, Fresno</p>
                    </div>
                    <a
                      href="https://maps.google.com/?q=609+E+Olive+Avenue+Fresno+CA+93728"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-lincoln-orange hover:bg-lincoln-yellow text-black px-6 py-3 font-subheader font-bold uppercase text-sm tracking-wider transition-colors"
                    >
                      Open in Maps
                    </a>
                  </div>
                </div>
              </div>

              {/* Parking Info */}
              <div className="mt-6 bg-lincoln-dark border border-lincoln-gold/50 p-4">
                <h4 className="font-subheader font-bold text-lincoln-yellow mb-2">🚗 Parking Info</h4>
                <p className="text-gray-400 text-sm">
                  Free street parking available on Olive Avenue and surrounding streets. 
                  Additional parking lot located behind the building.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16"
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
