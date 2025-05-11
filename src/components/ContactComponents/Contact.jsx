// src/components/Contact.jsx
import { useState } from 'react';
import FormContainer from './FormContainer';
import ErrorMessage from './ErrorMessage';
import SuccessMessage from './SuccessMessage';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    license: '',
    message: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false); // State to show success popup

  // Form validation
  const validateForm = () => {
    if (!form.name || !form.email || !form.message) {
      return 'Please fill in all required fields.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      return 'Please enter a valid email address.';
    }

    return ''; // Return empty if all validations pass
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validateForm();

    if (validationError) {
      setError(validationError); // Set the error message
      setSuccess(false);
    } else {
      setError(''); // Reset error message on successful form submission
      setSuccess(true);
      setShowSuccessPopup(true); // Show success popup
      setForm({
        name: '',
        email: '',
        company: '',
        license: '',
        message: '',
      });

      setTimeout(() => {
        setShowSuccessPopup(false); // Hide success popup after 5 seconds
      }, 5000);
    }
  };

  return (
    <>
      <FormContainer
        form={form}
        setForm={setForm}
        handleSubmit={handleSubmit}
        error={error} // Pass error to FormContainer
        success={success}
      />
      
      {/* Display ErrorMessage if there’s an error */}
      {error && <ErrorMessage message={error} />}
      
      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 bg-gray-900 bg-opacity-50">
          <div className="bg-white dark:bg-gray-800 text-green-500 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Form Submitted Successfully!</h3>
            <p>Your message has been sent, and we'll get back to you soon!</p>
            <button
              className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md"
              onClick={() => setShowSuccessPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;
