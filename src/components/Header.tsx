
import React, { useState } from 'react';
import { Menu, Search, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top bar */}
      <div className="bg-sakthi-red py-1 px-4 text-white text-center text-sm">
       {/* <p>Free shipping on orders above ₹999 | Get 10% off on your first order with code: SAKTHI10</p> */}
      </div>
      
      {/* Main Header */}
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="/" className="flex items-center">
            <span className="text-sakthi-red font-serif text-2xl md:text-3xl font-bold">shaban<span className="text-sakthi-gold">sunbrand</span></span>
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-800 hover:text-sakthi-red font-medium">Home</a>
          <DropdownMenu>
            <DropdownMenuTrigger className="text-gray-800 hover:text-sakthi-red font-medium">Products</DropdownMenuTrigger>
            {/* <DropdownMenuContent>
              <DropdownMenuItem>Spice Powders</DropdownMenuItem>
              <DropdownMenuItem>Masala Blends</DropdownMenuItem>
              <DropdownMenuItem>Ready Mixes</DropdownMenuItem>
              <DropdownMenuItem>Rice Products</DropdownMenuItem>
            </DropdownMenuContent> */}
          </DropdownMenu>
          <a href="#" className="text-gray-800 hover:text-sakthi-red font-medium">About Us</a>
          <a href="#" className="text-gray-800 hover:text-sakthi-red font-medium">Recipes</a>
          <a href="#" className="text-gray-800 hover:text-sakthi-red font-medium">Contact</a>
        </nav>
        
        {/* Icons */}
        <div className="flex items-center space-x-4">
          {/* <button className="text-gray-800 hover:text-sakthi-red">
            <Search size={20} />
          </button> */}
          {/* <button className="text-gray-800 hover:text-sakthi-red">
            <ShoppingCart size={20} />
            <span className="bg-sakthi-red text-white text-xs rounded-full h-4 w-4 flex items-center justify-center absolute -mt-8 ml-3">3</span>
          </button> */}
          {/* <Button className="bg-sakthi-red hover:bg-sakthi-darkred text-white hidden md:inline-flex">
            Order Now
          </Button> */}
          <button 
            className="md:hidden text-gray-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t animate-slide-in">
          <a href="#" className="block py-3 px-4 text-gray-800 hover:bg-gray-100 border-b">Home</a>
          <a href="#" className="block py-3 px-4 text-gray-800 hover:bg-gray-100 border-b">Products</a>
          <a href="#" className="block py-3 px-4 text-gray-800 hover:bg-gray-100 border-b">About Us</a>
          <a href="#" className="block py-3 px-4 text-gray-800 hover:bg-gray-100 border-b">Recipes</a>
          <a href="#" className="block py-3 px-4 text-gray-800 hover:bg-gray-100">Contact</a>
        </div>
      )}
    </header>
  );
};

export default Header;
