import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Palette, Brain, Users } from 'lucide-react';

const skills = [
  {
    category: "Frontend Development",
    icon: Code2,
    skills: ["React.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
  },
  {
    category: "UI/UX Design",
    icon: Palette,
    skills: ["Responsive Design", "User Experience", "Wireframing", "Prototyping"]
  },
  {
    category: "Backend & Tools",
    icon: Brain,
    skills: ["Python", "C", "Git", "RESTful APIs"]
  },
  {
    category: "Soft Skills",
    icon: Users,
    skills: ["Team Collaboration", "Problem Solving", "Communication", "Leadership"]
  }
];

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Skills & Expertise</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900 p-6 rounded-xl"
              >
                <div className="flex items-center gap-3 mb-4">
                  <category.icon className="w-6 h-6 text-teal-500" />
                  <h3 className="text-xl font-semibold text-white">{category.category}</h3>
                </div>
                <ul className="space-y-3">
                  {category.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-teal-500"></div>
                      <span className="text-gray-300">{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}