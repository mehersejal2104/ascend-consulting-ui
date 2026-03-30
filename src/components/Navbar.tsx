import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Infinity Sync", href: "#expertise" },
  { label: "Client Corner", href: "#testimonials" },
];

const scrollTo = (href: string) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-card/90 backdrop-blur-xl shadow-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className={`max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 transition-all duration-500 ${scrolled ? "py-2" : "py-3"}`}>
        <a href="#home" onClick={(e) => { e.preventDefault(); scrollTo("#home"); }} className="flex items-center">
          <img src={logo} alt="SynCore - Synchronizing around the Core" className={`transition-all duration-500 w-auto ${scrolled ? "h-10 md:h-12" : "h-12 md:h-14"}`} />
        </a>

        <div className="hidden md:flex items-center gap-3">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => { setActive(item.label); scrollTo(item.href); }}
              className={`relative px-5 py-2 text-[15px] font-medium transition-all duration-300 rounded-full ${
                active === item.label
                  ? scrolled ? "text-primary font-semibold" : "text-accent font-semibold"
                  : scrolled
                    ? "text-foreground/70 hover:text-foreground nav-link-hover"
                    : "text-white/80 hover:text-white nav-link-hover"
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("#contact")}
            className="ml-4 px-6 py-2.5 rounded-full bg-primary text-primary-foreground text-[15px] font-semibold hover:bg-primary/90 transition-all duration-300"
          >
            Start Your Journey
          </button>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden p-2 transition-colors duration-300 ${scrolled ? "text-foreground" : "text-white"}`}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card/95 backdrop-blur-xl border-b border-border"
          >
            <div className="flex flex-col px-6 py-4 gap-2">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => { setActive(item.label); setMobileOpen(false); scrollTo(item.href); }}
                  className={`text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    active === item.label ? "bg-primary text-primary-foreground" : "text-foreground/70 hover:bg-muted"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
