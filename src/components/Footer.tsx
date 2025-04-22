
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-popbite-black text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">
              <span className="text-popbite-red">pop</span>
              <span className="text-white">bite</span>
            </h3>
            <p className="text-gray-300">
              World's first Dosa Chips - A healthy snacking revolution from India.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="hover:text-popbite-orange transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" className="hover:text-popbite-orange transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" className="hover:text-popbite-orange transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-popbite-orange transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-popbite-orange transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-popbite-orange transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-popbite-orange transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Products</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-gray-300 hover:text-popbite-orange transition-colors">
                  Classic Salted
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-popbite-orange transition-colors">
                  Magic Masala
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-popbite-orange transition-colors">
                  Tomato Twist
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-popbite-orange transition-colors">
                  Pani Puri
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-popbite-orange transition-colors">
                  Cheese Chilli
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-popbite-orange transition-colors">
                  Cream & Onion
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <address className="not-italic text-gray-300 space-y-2">
              <p>123 Snack Avenue</p>
              <p>Flavor City, FC 12345</p>
              <p>India</p>
              <p className="pt-2">
                <a href="tel:+1234567890" className="hover:text-popbite-orange transition-colors">
                  +1 (234) 567-890
                </a>
              </p>
              <p>
                <a href="mailto:hello@popbite.com" className="hover:text-popbite-orange transition-colors">
                  hello@popbite.com
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Popbite. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
