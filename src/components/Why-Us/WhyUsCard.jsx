// This component is used to create a card for each point in the "Why Choose Us" section of the SoftSell website.
// It includes an icon, title, and description for each point.
// The component is animated using Framer motion to create a smooth transition effect when it appears on the screen.


import { motion } from 'framer-motion';

const PointCard = ({ point }) => {
  return (
    <motion.div
    className="p-6 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-xl hover:shadow-xl transition-all  mx-auto"
    initial={{ opacity: 0, y: 40, rotate: 0 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
    whileHover={{
      scale: 1.1,
      y: -20,
      rotate: window.innerWidth <= 768 ? 0 : -5,
      boxShadow: "0px 30px 60px rgba(0,0,0,0.2)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      }
    }}
    style={{
      width: "100%",
      maxWidth: window.innerWidth <= 768 ? "80%" : "100%",
      display: "flex",               // Ensures the flex container behavior
      justifyContent: "center",      // Centers the card horizontally
      alignItems: "center",          // Centers the card vertically within its container
      margin: "auto",                // Ensures auto margin centering
    }}
  >
    {point.icon}
    <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
    <p className="text-gray-600 dark:text-gray-300">{point.desc}</p>
  </motion.div>
  
  );
};

export default PointCard;
