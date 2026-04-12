"use client";

import { useState, useEffect, useRef } from "react";
import { useI18n, Locale } from "@/lib/i18n";

function Logo4LTree({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="42" width="11" height="36" rx="3" fill="#6DBF4A"/>
      <rect x="2" y="67" width="30" height="11" rx="3" fill="#6DBF4A"/>
      <rect x="18" y="28" width="11" height="36" rx="3" fill="#4AADD9"/>
      <rect x="18" y="53" width="30" height="11" rx="3" fill="#4AADD9"/>
      <rect x="34" y="14" width="11" height="36" rx="3" fill="#F5C523"/>
      <rect x="34" y="39" width="30" height="11" rx="3" fill="#F5C523"/>
      <rect x="52" y="2" width="11" height="30" rx="3" fill="#F47920" transform="rotate(15 57 17)"/>
      <rect x="50" y="26" width="28" height="11" rx="3" fill="#F47920" transform="rotate(15 64 31)"/>
    </svg>
  );
}

const localeOptions: { value: Locale; label: string; flag: string }[] = [
  { value: "ko", label: "한국어", flag: "🇰🇷" },
  { value: "en", label: "English", flag: "🇺🇸" },
  { value: "ja", label: "日本語", flag: "🇯🇵" },
];

export function Navbar() {
  const { locale, setLocale, t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langDesktopRef = useRef<HTMLDivElement>(null);
  const langMobileRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { label: t("nav.features"), href: "#features" },
    { label: t("nav.howItWorks"), href: "#how-it-works" },
    { label: t("nav.pricing"), href: "#pricing" },
    { label: t("nav.contact"), href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      const insideDesktop = langDesktopRef.current?.contains(target);
      const insideMobile = langMobileRef.current?.contains(target);
      if (!insideDesktop && !insideMobile) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currentLocale = localeOptions.find((o) => o.value === locale)!;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-zinc-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2.5 shrink-0">
            <Logo4LTree className="w-9 h-9" />
            <span className="text-lg font-bold text-zinc-900 tracking-tight">4L TREE</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-zinc-500 hover:text-zinc-900 text-sm font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            {/* Language Switcher */}
            <div className="relative" ref={langDesktopRef}>
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 rounded-lg transition-colors"
              >
                <span className="text-base leading-none">{currentLocale.flag}</span>
                <span className="text-xs">{currentLocale.label}</span>
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
              {langOpen && (
                <div className="absolute right-0 top-full mt-1 bg-white border border-zinc-200 rounded-xl shadow-lg py-1 min-w-[140px] z-50">
                  {localeOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => {
                        setLocale(option.value);
                        setLangOpen(false);
                      }}
                      className={`w-full flex items-center gap-2.5 px-3.5 py-2 text-sm transition-colors ${
                        locale === option.value
                          ? "text-[#6DBF4A] font-semibold bg-[#6DBF4A]/5"
                          : "text-zinc-600 hover:bg-zinc-50"
                      }`}
                    >
                      <span className="text-base leading-none">{option.flag}</span>
                      <span>{option.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#pricing"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#6DBF4A] hover:bg-[#5AA63C] text-white text-sm font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-md shadow-[#6DBF4A]/25"
            >
              {t("nav.startFree")}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>

          {/* Mobile: language + hamburger */}
          <div className="flex md:hidden items-center gap-1">
            <div className="relative" ref={langMobileRef}>
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="p-2 rounded-lg text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 transition-colors"
              >
                <span className="text-lg leading-none">{currentLocale.flag}</span>
              </button>
              {langOpen && (
                <div className="absolute right-0 top-full mt-1 bg-white border border-zinc-200 rounded-xl shadow-lg py-1 min-w-[140px] z-50">
                  {localeOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => {
                        setLocale(option.value);
                        setLangOpen(false);
                      }}
                      className={`w-full flex items-center gap-2.5 px-3.5 py-2 text-sm transition-colors ${
                        locale === option.value
                          ? "text-[#6DBF4A] font-semibold bg-[#6DBF4A]/5"
                          : "text-zinc-600 hover:bg-zinc-50"
                      }`}
                    >
                      <span className="text-base leading-none">{option.flag}</span>
                      <span>{option.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              className="p-2 rounded-lg text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? t("nav.menuClose") : t("nav.menuOpen")}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white border-t border-zinc-100 py-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-2.5 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 rounded-lg text-sm font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="px-4 pt-2 pb-1">
              <a
                href="#pricing"
                className="block text-center px-5 py-3 bg-[#6DBF4A] hover:bg-[#5AA63C] text-white text-sm font-semibold rounded-xl transition-all"
              >
                {t("nav.startFree")}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
