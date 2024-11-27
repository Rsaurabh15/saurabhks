import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Timeline from './Timeline';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-3 mb-12">
            <Briefcase className="w-8 h-8 text-teal-500" />
            <h2 className="text-3xl font-bold text-white text-center">Professional Experience</h2>
          </div>
          
          <Timeline />
        </motion.div>
      </div>
    </section>
  );
}