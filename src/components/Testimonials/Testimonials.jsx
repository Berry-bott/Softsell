import { motion } from "framer-motion";

// Animation variants for the container and cards
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Testimonials = ({ testimonials }) => {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900 text-center text-gray-800 dark:text-white">
      <motion.h2
        className="text-3xl font-bold mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 3 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
      >
        What Our Clients Say
      </motion.h2>

      <motion.div
        className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            whileHover={{ scale: 1.03, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
            transition={{ type: "spring", stiffness: 100 }}
            className="
            bg-white 
            dark:bg-gray-800 
            p-6 
            rounded-xl 
            shadow 
            dark:shadow-md 
            flex 
            items-center 
            gap-4 
            sm:w-[70%]   /* 70% width on mobile */
            lg:w-[100%]   /* 90% width on desktop */
            mx-auto
          ">
            <img
              src={t.image}
              alt={t.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="text-left">
              <p className="mb-2 italic text-gray-700 dark:text-gray-300">"{t.review}"</p>
              <p className="font-semibold text-gray-900 dark:text-white">
                {t.name}, {t.role}, {t.company}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Testimonials;
