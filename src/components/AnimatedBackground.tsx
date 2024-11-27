import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function AnimatedBackground() {
  const [dimensions, setDimensions] = useState({ width: 1000, height: 1000 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-gradient-to-br from-teal-500/20 via-transparent to-purple-500/20"
      />
      
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-teal-500/20 rounded-full"
          initial={{
            x: Math.random() * dimensions.width,
            y: Math.random() * dimensions.height,
          }}
          animate={{
            x: Math.random() * dimensions.width,
            y: Math.random() * dimensions.height,
          }}
          transition={{
            duration: Math.random() * 10 + 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
}