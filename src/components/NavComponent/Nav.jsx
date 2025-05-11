
//this component is used to create a navigation bar for the SoftSell website.
import { useState } from 'react';
import { Link } from 'react-scroll';
import MobileMenuToggle from './MobileToggle';

const links = [
  { to: 'home', label: 'Home' },
  { to: 'How it Works', label: 'How it Works' },
  { to: 'Why Choose Us', label: 'Why Choose Us' },
  { to: 'Testimonials', label: 'Testimonials' },
  { to: 'contact', label: 'Contact' },
];

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900 text-gray-100 dark:text-white shadow-md">
      <div className="flex items-center justify-between px-6 py-6">
        <img src="/softsell-logo.png" alt="SoftSell Logo" className="h-8 w-auto" />
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          {links.map(({ to, label }) => (
            <li key={to}>
              <Link to={to} smooth duration={500} className="cursor-pointer hover:text-blue-500 dark:hover:text-blue-400">
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <MobileMenuToggle toggleMenu={toggleMenu} isOpen={isMenuOpen} />
      </div>

      {/* Mobile Menu (Sidebar) */}
      <div className={`fixed top-20 left-0 z-40 bg-gray-900 text-gray-100 w-64 h-full p-6 transform transition-transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <ul className="space-y-6 text-lg font-medium">
          {links.map(({ to, label }) => (
            <li key={to}>
              <Link to={to} smooth duration={500} className="cursor-pointer hover:text-blue-500 dark:hover:text-blue-400" onClick={toggleMenu}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
