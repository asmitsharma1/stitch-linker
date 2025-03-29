
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Scissors } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <Scissors className="h-6 w-6 text-tailor-600" />
            <span className="font-bold text-xl text-tailor-800">TailorConnect</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link to="/dashboard" className="text-gray-700 hover:text-tailor-600 transition-colors">
              Dashboard
            </Link>
            <Link to="/tailors" className="text-gray-700 hover:text-tailor-600 transition-colors">
              Find Tailors
            </Link>
            <Link to="/measurements" className="text-gray-700 hover:text-tailor-600 transition-colors">
              Measurements
            </Link>
            <Link to="/dashboard">
              <Button className="bg-tailor-600 hover:bg-tailor-700">My Orders</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-3 space-y-3">
            <Link 
              to="/dashboard" 
              className="block py-2 text-gray-700 hover:text-tailor-600"
              onClick={toggleMenu}
            >
              Dashboard
            </Link>
            <Link 
              to="/tailors" 
              className="block py-2 text-gray-700 hover:text-tailor-600"
              onClick={toggleMenu}
            >
              Find Tailors
            </Link>
            <Link 
              to="/measurements" 
              className="block py-2 text-gray-700 hover:text-tailor-600"
              onClick={toggleMenu}
            >
              Measurements
            </Link>
            <Link 
              to="/dashboard" 
              className="block py-2"
              onClick={toggleMenu}
            >
              <Button className="w-full bg-tailor-600 hover:bg-tailor-700">My Orders</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
