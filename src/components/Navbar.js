"use client";

import { useEffect, useState } from "react";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import { profile } from "@/data/profile";

// Resume হিরো সেকশনে বাটন আছে, তাই নেভবারে রাখা হয়নি
const navItems = [
  { label: "Projects", href: "/#projects" },
  { label: "Skills", href: "/#skills" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  
  useEffect(() => {
    let saved = null;
    try {
      saved = localStorage.getItem("theme");
    } catch { }
    const initial =
      saved || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", initial);
    setTheme(initial);
  }, []);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    setTheme(next);
  }

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <a href="/" className="brand">
          {profile.name}
        </a>

        <nav className={`nav-links ${open ? "open" : ""}`}>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <button
            type="button"
            className="icon-btn"
            onClick={toggleTheme}
            aria-label="Switch between light and dark mode"
          >
            {theme === "dark" ? <FiSun /> : <FiMoon />}
            <span className="btn-label">{theme === "dark" ? "Light" : "Dark"}</span>
          </button>

          <button
            type="button"
            className="icon-btn menu-btn"
            onClick={() => setOpen(!open)}
            aria-label="Open menu"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </header>
  );
}