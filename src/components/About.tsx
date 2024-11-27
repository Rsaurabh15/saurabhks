import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
                alt="Saurabh Kumar Singh"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-teal-500/10 rounded-2xl"></div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-white mb-6">About Me</h2>
            <p className="text-gray-300 mb-6">
              Hello! I'm Saurabh, a passionate frontend developer with a keen eye for creating beautiful and functional web experiences. My journey in development started during my BCA studies, where I discovered my love for turning complex problems into elegant solutions.
            </p>
            <p className="text-gray-300 mb-6">
              I specialize in React.js and modern web technologies, constantly pushing the boundaries of what's possible in web development. When I'm not coding, you'll find me exploring new technologies, traveling to new places, or working on personal projects that challenge my creativity.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-800 p-4 rounded-lg">
                <h3 className="text-white font-semibold mb-2">Education</h3>
                <p className="text-gray-400">BCA Graduate</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <h3 className="text-white font-semibold mb-2">Experience</h3>
                <p className="text-gray-400">2+ Years</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}