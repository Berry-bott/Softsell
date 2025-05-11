// This component is used to create a form field with a placeholder, value, and onChange function.
// It uses Framer Motion for animation effects.
// It is a reusable component that can be used in different forms throughout the application.
// ====== Form Field Component ====


import { motion } from 'framer-motion';

const FormField = ({ placeholder, value, onChange, type = "text", required = false }) => {
  return (
    <motion.input
      className="w-full p-3 border rounded bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      type={type}
      required={required}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    />
  );
};

export default FormField;
















