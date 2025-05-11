// src/components/HowItWorks.jsx
import { motion } from "framer-motion";
import StepCard from "./StepCard";

// Animation variants
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.3,
    },
  },
};

const HowItWorks = ({steps}) => {
  return (
    <motion.section
      className="py-20 px-6 bg-gray-50 dark:bg-gray-900 text-center"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      <motion.h2
        className="text-4xl font-bold mb-12 text-gray-800 dark:text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        How It Works
      </motion.h2>

      <motion.div className="grid md:grid-cols-3 sm:grid-cols-1 gap-8 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <StepCard key={index} step={step} />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default HowItWorks;
