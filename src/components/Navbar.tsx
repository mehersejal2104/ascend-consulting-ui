import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const navItems = ["Home", "Services", "Infinity Sync", "Client Corner"];

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
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 py-3">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img src={logo} alt="SynCore - Synchronizing around the Core" className="h-12 md:h-14 w-auto" />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`relative px-5 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                active === item
                  ? "text-primary font-semibold"
                  : "text-foreground/70 hover:text-foreground nav-link-hover"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="px-6 py-2.5 rounded-full gradient-primary text-primary-foreground font-semibold text-sm tracking-wide transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-0.5">
            Start Your Journey
          </button>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground p-2"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
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
                  key={item}
                  onClick={() => { setActive(item); setMobileOpen(false); }}
                  className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    active === item ? "bg-primary text-primary-foreground" : "text-foreground/70 hover:bg-muted"
                  }`}
                >
                  {item}
                </button>
              ))}
              <button className="mt-2 px-6 py-3 rounded-full gradient-primary text-primary-foreground font-semibold text-sm tracking-wide">
                Start Your Journey
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
