import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroPeople from "@/assets/hero-people.jpg";
import heroProcess from "@/assets/hero-process.jpg";
import heroInformation from "@/assets/hero-information.jpg";

const slides = [
  {
    image: heroPeople,
    heading: "Synchronizing",
    highlight: "People",
    description:
      "Building high-performance teams and leadership capabilities that drive organizational success.",
  },
  {
    image: heroProcess,
    heading: "Synchronizing",
    highlight: "Process",
    description:
      "Streamlining operations and workflows to achieve peak efficiency and measurable business outcomes.",
  },
  {
    image: heroInformation,
    heading: "Synchronizing",
    highlight: "Information",
    description:
      "Leveraging data-driven insights and technology to empower smarter business decisions.",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img
            src={slide.image}
            alt={`${slide.highlight} background`}
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-foreground/30" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.15 } },
                exit: {},
              }}
              className="max-w-2xl"
            >
              {/* Tag */}
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
                }}
                className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary-foreground text-xs font-semibold tracking-wider uppercase mb-6 backdrop-blur-sm border border-primary/30"
              >
                Start Your Journey
              </motion.span>

              {/* Heading */}
              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
                  exit: { opacity: 0, y: -30, transition: { duration: 0.3 } },
                }}
                className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-primary-foreground mb-6"
              >
                {slide.heading}{" "}
                <span className="text-accent">{slide.highlight}.</span>
              </motion.h1>

              {/* Description */}
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
                  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
                }}
                className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed mb-10 max-w-lg"
              >
                {slide.description}
              </motion.p>

              {/* Buttons */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
                }}
                className="flex flex-wrap gap-4"
              >
                <button className="px-8 py-4 rounded-full gradient-primary text-primary-foreground font-semibold text-sm tracking-wide transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5">
                  Read More
                </button>
                <button className="px-8 py-4 rounded-full border-2 border-primary-foreground/40 text-primary-foreground font-semibold text-sm tracking-wide transition-all duration-300 hover:bg-primary-foreground/10 hover:border-primary-foreground/70">
                  Contact Us
                </button>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Slide indicators */}
          <div className="absolute bottom-12 left-6 md:left-12 lg:left-24 flex gap-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1 rounded-full transition-all duration-500 ${
                  i === current
                    ? "w-12 bg-accent"
                    : "w-6 bg-primary-foreground/40 hover:bg-primary-foreground/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
