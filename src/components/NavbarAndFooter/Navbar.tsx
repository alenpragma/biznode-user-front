"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import MainContainer from "../shared/MainContainer";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
      <MainContainer>
        {" "}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-yellow-400">BIZT</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-white hover:text-yellow-400 transition-colors"
            >
              Home
            </a>
            <a
              href="#features"
              className="text-white hover:text-yellow-400 transition-colors"
            >
              Features
            </a>
            <a
              href="#token-sale"
              className="text-white hover:text-yellow-400 transition-colors"
            >
              Token Sale
            </a>
            <a
              href="#utilities"
              className="text-white hover:text-yellow-400 transition-colors"
            >
              Utilities
            </a>
            <a
              href="#stats"
              className="text-white hover:text-yellow-400 transition-colors"
            >
              Stats
            </a>
            <a
              href="#faq"
              className="text-white hover:text-yellow-400 transition-colors"
            >
              FAQ
            </a>
            <a
              href="#contact"
              className="text-white hover:text-yellow-400 transition-colors"
            >
              Contact
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
              Buy BIZT Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-yellow-400"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800 rounded-lg mt-2">
              <a
                href="#home"
                className="block px-3 py-2 text-white hover:text-yellow-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#features"
                className="block px-3 py-2 text-white hover:text-yellow-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#token-sale"
                className="block px-3 py-2 text-white hover:text-yellow-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Token Sale
              </a>
              <a
                href="#utilities"
                className="block px-3 py-2 text-white hover:text-yellow-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Utilities
              </a>
              <a
                href="#stats"
                className="block px-3 py-2 text-white hover:text-yellow-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Stats
              </a>
              <a
                href="#faq"
                className="block px-3 py-2 text-white hover:text-yellow-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-white hover:text-yellow-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <div className="px-3 py-2">
                <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                  Buy BIZT Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </MainContainer>{" "}
    </nav>
  );
};
export default Navbar;
