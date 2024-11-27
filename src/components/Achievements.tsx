import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Trophy, Star, Medal } from 'lucide-react';

const achievements = [
  {
    icon: Trophy,
    title: "IBM Cognos Certification",
    description: "Certified Data Analyst with expertise in IBM Cognos analytics platform",
    year: "2023"
  },
  {
    icon: Star,
    title: "Hackathon Winner",
    description: "First place in Regional Coding Championship for innovative solution",
    year: "2022"
  },
  {
    icon: Medal,
    title: "Academic Excellence",
    description: "Graduated with distinction in Bachelor of Computer Applications",
    year: "2022"
  },
  {
    icon: Award,
    title: "Best Project Award",
    description: "Recognition for outstanding contribution in NYPD data analysis project",
    year: "2023"
  }
];

export default function Achievements() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="achievements" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Achievements</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900 p-6 rounded-xl relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{ background: ['rgba(20, 184, 166, 0.1)', 'rgba(168, 85, 247, 0.1)'] }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                />
                
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-teal-500/10 rounded-lg flex items-center justify-center mb-4">
                    <achievement.icon className="w-6 h-6 text-teal-500" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-2">{achievement.title}</h3>
                  <p className="text-gray-400 mb-3">{achievement.description}</p>
                  <span className="text-sm text-teal-500">{achievement.year}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}