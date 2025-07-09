"use client";

import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import MainContainer from "../shared/container/MainContainer";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#features", label: "Features" },
  { href: "#token-sale", label: "Token Sale" },
  { href: "#utilities", label: "Utilities" },
  { href: "#stats", label: "Stats" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

const Navbar = ({ token }: { token: string | undefined }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu on outside click or ESC key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest("#mobile-menu") && !target.closest("#menu-toggle")) {
        setIsMenuOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isMenuOpen]);

  const handleRedirect = () => {
    window.location.href = token ? "/dashboard" : "/login";
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
      <MainContainer>
        <div className="flex items-center justify-between h-16">
          {/* Left side: Mobile menu + logo */}
          <div className="flex items-center gap-4">
            <div className="md:hidden">
              <Button
                id="menu-toggle"
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen((prev) => !prev)}
                className="text-white hover:text-yellow-400 p-2"
              >
                {isMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Logo"
                className="w-28 md:w-44"
                width={500}
                height={500}
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-6">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-white hover:text-yellow-400 text-sm font-medium transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div>
            <Button
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold text-sm"
              onClick={handleRedirect}
            >
              {token ? "Dashboard" : "Buy BIZ Node"}
            </Button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={clsx(
            "fixed inset-0 top-16 z-40 bg-black/50 transition-opacity duration-300 md:hidden",
            {
              "opacity-100 pointer-events-auto": isMenuOpen,
              "opacity-0 pointer-events-none": !isMenuOpen,
            }
          )}
        >
          <div
            id="mobile-menu"
            className={clsx(
              "w-3/4 max-w-xs h-[calc(100vh-4rem)] bg-slate-900/95 border-r border-slate-800 p-4 shadow-lg transform transition-transform duration-300",
              {
                "translate-x-0": isMenuOpen,
                "-translate-x-full": !isMenuOpen,
              }
            )}
          >
            <ul className="flex flex-col gap-4">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-white hover:text-yellow-400 text-sm font-medium transition-colors px-2 py-1"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </MainContainer>
    </nav>
  );
};

export default Navbar;
