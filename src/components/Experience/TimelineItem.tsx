import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

interface TimelineItemProps {
  title: string;
  company: string;
  period: string;
  description: string[];
  index: number;
}

export default function TimelineItem({ title, company, period, description, index }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative pl-8 pb-8 group"
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-0 h-full w-0.5 bg-gray-700 group-last:h-6"></div>
      
      {/* Timeline dot */}
      <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-teal-500 border-4 border-gray-900"></div>
      
      <div className="bg-gray-800 rounded-lg p-6 ml-4">
        <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
          <Calendar size={16} />
          <span>{period}</span>
        </div>
        
        <h3 className="text-xl font-semibold text-white mb-1">{title}</h3>
        <h4 className="text-teal-500 mb-4">{company}</h4>
        
        <ul className="space-y-2">
          {description.map((item, i) => (
            <li key={i} className="text-gray-300 flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-teal-500 flex-shrink-0"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}