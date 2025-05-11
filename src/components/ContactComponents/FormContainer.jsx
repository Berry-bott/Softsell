// src/components/FormContainer.jsx
import { motion } from 'framer-motion';
import FormField from '../ContactComponents/FormFields'; // Importing FormField component

const FormContainer = ({ form, setForm, handleSubmit, error, success }) => {
  return (
    <motion.section
      className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white transition-colors duration-300"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
    >
      <motion.main
        className="py-16 px-4 bg-white dark:bg-gray-900 text-gray-800 dark:text-white max-w-2xl mx-auto transition-colors duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact Us
        </motion.h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        {success && <p className="text-green-500 text-center mb-4">Your message has been sent successfully!</p>}

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <FormField
            placeholder="Name *"
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
            required
          />
          <FormField
            placeholder="Email *"
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
            type="email"
            required
          />
          <FormField
            placeholder="Company"
            value={form.company}
            onChange={e => setForm({ ...form, company: e.target.value })}
          />
          <select
            className="w-full p-3 border rounded bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
            onChange={e => setForm({ ...form, license: e.target.value })}
          >
            <option value="" className='w-[80vw ] '>Select License Type</option>
            <option>Windows</option>
            <option>Adobe</option>
            <option>Office</option>
          </select>
          <textarea
            className="w-full p-3 border rounded bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
            placeholder="Message *"
            value={form.message}
            onChange={e => setForm({ ...form, message: e.target.value })}
            required
          />
          <button className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700">
            Submit
          </button>
        </motion.form>
      </motion.main>
    </motion.section>
  );
};

export default FormContainer;
