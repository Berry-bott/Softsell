// Description: This component is a form field that uses Framer Motion for animation effects. It accepts props for placeholder text, value, onChange handler, type of input, and whether the field is required. The component is styled with Tailwind CSS classes for a modern look.
// This component is used to create a step card for the How It Works section

import { motion } from "framer-motion";

// Animation variants for the step card
const card = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100 } },
};

const hoverEffect = {
  whileHover: {
    scale: 1.05,
    boxShadow: "0px 15px 30px rgba(0,0,0,0.1)",
    transition: { type: "spring", stiffness: 200 },
  },
};

const StepCard = ({ step }) => {
  return (
    <motion.div
      className="p-8 bg-white shadow-black dark:bg-gray-800 rounded-2xl border border-transparent hover:border-gray-200 dark:hover:border-gray-700"
      variants={card}
      whileHover={hoverEffect.whileHover}
    >
      {step.icon}
      <h3 className={`font-semibold text-xl text-${step.color}-500 dark:text-${step.color}-400 mb-2`}>
        {step.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
    </motion.div>
  );
};

export default StepCard;
