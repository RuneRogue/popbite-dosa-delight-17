
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold">
              <span className="text-popbite-red">pop</span>
              <span className="text-popbite-black">bite</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium hover:text-popbite-orange transition-colors">
              Home
            </Link>
            <Link to="/products" className="font-medium hover:text-popbite-orange transition-colors">
              Products
            </Link>
            <Link to="/about" className="font-medium hover:text-popbite-orange transition-colors">
              About Us
            </Link>
            <Link to="/contact" className="font-medium hover:text-popbite-orange transition-colors">
              Contact
            </Link>
          </nav>

          {/* Action Buttons */}
          {/* <div className="hidden md:flex items-center space-x-4">
            <Button className="bg-popbite-orange hover:bg-popbite-red text-white">
              <ShoppingBag className="h-4 w-4 mr-2" />
              Shop Now
            </Button>
          </div> */}

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden text-popbite-black"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="font-medium py-2" 
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className="font-medium py-2" 
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link 
              to="/about" 
              className="font-medium py-2" 
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/contact" 
              className="font-medium py-2" 
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button className="bg-popbite-orange hover:bg-popbite-red text-white w-full">
              <ShoppingBag className="h-4 w-4 mr-2" />
              Shop Now
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
