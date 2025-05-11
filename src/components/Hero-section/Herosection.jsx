
// This is a React component for a hero section of a webpage.
// It uses Framer Motion for animations and Tailwind CSS for styling.
// The hero section includes a background image, an overlay, a title, a description, and a button.
// The background image has a parallax-like effect, and the text elements animate into view with a staggered effect.


import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const HeroSection = () => {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="h-[80vh] relative overflow-hidden"
    >
      {/* Background image with parallax-like pan */}
      <motion.div
        initial={{ scale: 1.2, backgroundPosition: "50% 50%", opacity: 0 }}
        animate={{
          scale: 1,
          backgroundPosition: "50% 40%",
          opacity: 1,
        }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="bg-[url('/soft-hero.jpg')] bg-cover bg-center h-full w-full absolute inset-0 z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
        <motion.div
          variants={containerVariants}
          className="flex flex-col items-center justify-center text-center px-4"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl font-bold mb-4 text-white dark:text-gray-100"
          >
            Sell Unused Software Licenses Easily
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg mb-6 text-white dark:text-gray-300"
          >
            Turn unused software into cash in just a few steps
          </motion.p>

          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 dark:bg-gray-800 dark:text-white font-semibold px-6 py-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            Sell My Licenses
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
