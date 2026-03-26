import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "SynCore's structured approach to operational excellence helped us transform our supply chains and achieve measurable improvements in efficiency and performance across operations.",
    name: "Cipla",
    role: "Leading Pharmaceutical Company",
  },
  {
    quote: "Working with SynCore gave us the clarity and hands-on approach that made a real impact on our business unit performance.",
    name: "Nilkamal",
    role: "India's Largest Plastics Manufacturer",
  },
  {
    quote: "SynCore's expertise in synchronizing people, process, and technology has been instrumental in driving our organizational transformation and operational efficiency.",
    name: "LAT",
    role: "Engineering & Construction Conglomerate",
  },
];

const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={ref} className="section-padding bg-secondary relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="inline-block px-4 py-1.5 rounded-full bg-primary-light text-primary text-xs font-semibold tracking-wider uppercase mb-4"
        >
          Testimonials
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-16"
        >
          What Our <span className="text-gradient">Clients Say</span>
        </motion.h2>

        <div className="relative">
          <Quote className="w-12 h-12 text-primary/10 mx-auto mb-6" />
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-foreground/80 text-lg md:text-xl leading-relaxed italic mb-8 max-w-2xl mx-auto">
                "{testimonials[current].quote}"
              </p>
              <div className="font-display text-lg font-semibold text-foreground">
                {testimonials[current].name}
              </div>
              <div className="text-muted-foreground text-sm">
                {testimonials[current].role}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={() => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length)}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === current ? "bg-primary w-8" : "bg-border"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => setCurrent((p) => (p + 1) % testimonials.length)}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
