// src/components/WhyChooseUs.jsx
import { motion } from 'framer-motion';
import PointCard from './WhyUsCard'; // Importing the PointCard component

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.3,
    },
  },
};

const WhyChooseUs = ({points}) => {
  return (
    <motion.section
      className="py-32  text-center bg-white dark:bg-gray-900 text-gray-800 dark:text-white"
      initial="hidden"
      animate="show"
      variants={containerVariants}
    >
      <motion.h2
        className="text-3xl font-bold mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Why Choose Us
      </motion.h2>
      <motion.div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {points.map((point, i) => (
          <PointCard key={i} point={point} />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default WhyChooseUs;
