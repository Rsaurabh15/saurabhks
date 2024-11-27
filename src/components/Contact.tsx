import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Get In Touch</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-teal-500/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-teal-500" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Email</h3>
                  <p className="text-gray-400">contact@example.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-teal-500/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-teal-500" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Location</h3>
                  <p className="text-gray-400">New Delhi, India</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-teal-500/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-teal-500" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Phone</h3>
                  <p className="text-gray-400">+91 XXXXXXXXXX</p>
                </div>
              </div>
            </div>

            <motion.form
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-6 py-3 bg-teal-500 text-white rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-teal-600 transition-colors"
              >
                <Send className="w-4 h-4" />
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}