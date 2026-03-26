import { motion } from "framer-motion";
import heroImg from "@/assets/hero-consulting.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center section-padding pt-32 overflow-hidden">
      {/* Background wave lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none" viewBox="0 0 1440 900" fill="none">
        <path d="M-100 600C200 400 400 800 700 500S1100 200 1500 400" stroke="hsl(179 98% 24%)" strokeWidth="2" />
        <path d="M-100 650C200 450 400 850 700 550S1100 250 1500 450" stroke="hsl(179 98% 24%)" strokeWidth="1.5" />
        <path d="M-100 700C200 500 400 900 700 600S1100 300 1500 500" stroke="hsl(179 98% 24%)" strokeWidth="1" />
      </svg>

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        {/* Left content */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-light text-primary text-xs font-semibold tracking-wider uppercase mb-6">
              Start Your Journey
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground mb-6"
          >
            Synchronizing People,{" "}
            <span className="text-gradient">Process, Technology.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-lg"
          >
            A leadership-focused business consulting firm helping organizations improve sales performance, profitability, and operational excellence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-wrap gap-4"
          >
            <button className="px-8 py-4 rounded-full gradient-primary text-primary-foreground font-semibold text-sm tracking-wide transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-0.5">
              Read More
            </button>
            <button className="px-8 py-4 rounded-full border-2 border-primary text-primary font-semibold text-sm tracking-wide transition-all duration-300 hover:bg-primary hover:text-primary-foreground">
              Contact Us
            </button>
          </motion.div>
        </div>

        {/* Right image with blob mask */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="relative hidden lg:block"
        >
          <div className="relative">
            <div className="absolute -inset-4 blob-shape gradient-primary opacity-10 animate-float-slow" />
            <div className="blob-shape overflow-hidden relative z-10">
              <img
                src={heroImg}
                alt="SynCore consulting team"
                width={1024}
                height={1024}
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-2xl bg-accent opacity-80 animate-float z-0" />
            <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full border-4 border-primary opacity-30 animate-float-delayed" />
          </div>
        </motion.div>
      </div>

      {/* Curved section divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full">
          <path d="M0 120L60 105C120 90 240 60 360 52.5C480 45 600 60 720 67.5C840 75 960 75 1080 67.5C1200 60 1320 45 1380 37.5L1440 30V120H0Z" fill="hsl(var(--secondary))" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
