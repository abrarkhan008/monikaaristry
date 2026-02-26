import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location]);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/bridal-makeup", label: "Bridal Makeup" },
    { to: "/glamour-looks", label: "Glamour Looks" },
    { to: "/photoshoot-makeup", label: "Photoshoot" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-rose-200/30 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex flex-col items-start">
          <span
            className="font-script text-3xl leading-tight"
            style={{ color: "#a0496a" }}
          >
            The Monika Aristry
          </span>
          <span
            className="font-body text-xs tracking-widest uppercase"
            style={{ color: "#c8956c", letterSpacing: "0.2em" }}
          >
            Luxury Bridal Makeup
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`nav-link font-body text-sm tracking-widest uppercase transition-colors duration-300 ${
                location.pathname === link.to
                  ? "text-deeprose border-b border-deeprose pb-0.5"
                  : "text-stone-600 hover:text-deeprose"
              }`}
              style={
                location.pathname === link.to
                  ? { color: "#a0496a", borderColor: "#a0496a" }
                  : {}
              }
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://wa.me/917530051709?text=Hi%20Monika!%20I%27d%20like%20to%20book%20a%20makeup%20appointment."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm py-2 px-5"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            style={{ background: "#a0496a" }}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
            style={{ background: "#a0496a" }}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            style={{ background: "#a0496a" }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-500 overflow-hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ background: "rgba(247,239,230,0.98)" }}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="font-body text-sm tracking-widest uppercase py-2 border-b border-rose-100"
              style={{
                color: location.pathname === link.to ? "#a0496a" : "#6b5344",
              }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://wa.me/917530051709?text=Hi%20Monika!%20I%27d%20like%20to%20book%20a%20makeup%20appointment."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-center mt-2"
          >
            Book Now
          </a>
        </div>
      </div>
    </nav>
  );
}
