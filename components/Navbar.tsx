"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { label: "기능", href: "#features" },
  { label: "사용법", href: "#how-it-works" },
  { label: "요금제", href: "#pricing" },
  { label: "후기", href: "#testimonials" },
];

function Logo4LTree({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Green L - bottom left */}
      <rect x="2" y="42" width="11" height="36" rx="3" fill="#6DBF4A"/>
      <rect x="2" y="67" width="30" height="11" rx="3" fill="#6DBF4A"/>
      {/* Blue L */}
      <rect x="18" y="28" width="11" height="36" rx="3" fill="#4AADD9"/>
      <rect x="18" y="53" width="30" height="11" rx="3" fill="#4AADD9"/>
      {/* Yellow L */}
      <rect x="34" y="14" width="11" height="36" rx="3" fill="#F5C523"/>
      <rect x="34" y="39" width="30" height="11" rx="3" fill="#F5C523"/>
      {/* Orange L - top right, slightly rotated effect via transform */}
      <rect x="52" y="2" width="11" height="30" rx="3" fill="#F47920" transform="rotate(15 57 17)"/>
      <rect x="50" y="26" width="28" height="11" rx="3" fill="#F47920" transform="rotate(15 64 31)"/>
    </svg>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <Logo4LTree className="w-9 h-9" />
            <span className="font-display text-xl font-bold text-brand-dark">
              4L TREE
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-600 hover:text-brand-green font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Button href="#pricing" size="sm">
              무료로 시작하기
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-3 text-slate-600 hover:text-brand-green font-medium"
              >
                {link.label}
              </a>
            ))}
            <div className="px-4 pt-2">
              <Button href="#pricing" size="sm" className="w-full">
                무료로 시작하기
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
