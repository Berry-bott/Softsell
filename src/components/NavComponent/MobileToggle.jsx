// src/components/MobileMenuToggle.jsx
const MobileMenuToggle = ({ toggleMenu, isOpen }) => (
    <div className="md:hidden flex items-center">
      <button onClick={toggleMenu} className="text-white text-2xl">
        {isOpen ? '×' : '☰'}
      </button>
    </div>
  );
  
  export default MobileMenuToggle;
  