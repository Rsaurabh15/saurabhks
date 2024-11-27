import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aDR2MmgtNHYtMnptMC04aDR2MmgtNHYtMnptMCAxNmg0djJoLTR2LTJ6bS0yNi0yaDR2MmgtNHYtMnptMC04aDR2MmgtNHYtMnptMC0xNmg0djJoLTR2LTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Saurabh Kumar Singh
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 mb-12"
          >
            Aspiring Developer | Creative Thinker | Passionate Explorer
          </motion.p>
          
          <div className="flex justify-center gap-6 mb-12">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="px-8 py-3 bg-teal-500 text-white rounded-full font-medium flex items-center gap-2 hover:bg-teal-600 transition-colors"
            >
              <FileText size={20} />
              View Resume
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="px-8 py-3 bg-gray-700 text-white rounded-full font-medium flex items-center gap-2 hover:bg-gray-600 transition-colors"
            >
              Explore Portfolio
            </motion.a>
          </div>

          <div className="flex justify-center gap-6">
            <motion.a
              whileHover={{ scale: 1.1, rotate: 5 }}
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, rotate: 5 }}
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, rotate: 5 }}
              href="mailto:contact@example.com"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Mail size={24} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}