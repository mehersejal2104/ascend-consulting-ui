import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Quote, Play } from "lucide-react";

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

const videoTestimonials = [
  {
    name: "Cipla",
    videoId: "YcmP_yPO2-o",
    thumbnail: "https://img.youtube.com/vi/YcmP_yPO2-o/hqdefault.jpg",
  },
  {
    name: "Nilkamal",
    videoId: "dc8AoEHtHVo",
    thumbnail: "https://img.youtube.com/vi/dc8AoEHtHVo/hqdefault.jpg",
  },
];

const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [current, setCurrent] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, []);

  // Auto-scroll video carousel
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let pos = 0;
    const speed = 0.5;
    let animId: number;
    const animate = () => {
      pos += speed;
      if (pos >= el.scrollWidth / 2) pos = 0;
      el.scrollLeft = pos;
      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <section ref={ref} className="section-padding bg-secondary relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
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
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4"
          >
            What Our <span className="text-gradient">Clients Say</span>
          </motion.h2>
        </div>

        {/* Text testimonials carousel */}
        <div className="max-w-4xl mx-auto text-center mb-20">
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

        {/* Video testimonials - Hear From Our Clients */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
            Hear From Our Clients
          </h3>
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-hidden justify-center"
            style={{ scrollBehavior: "auto" }}
          >
            {[...videoTestimonials, ...videoTestimonials, ...videoTestimonials].map((video, i) => (
              <a
                key={i}
                href={`https://youtu.be/${video.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 w-[400px] md:w-[480px] group"
              >
                <div className="relative rounded-2xl overflow-hidden aspect-video shadow-lg">
                  <img
                    src={video.thumbnail}
                    alt={`${video.name} testimonial`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
                      <Play className="w-7 h-7 text-accent-foreground ml-1" fill="currentColor" />
                    </div>
                  </div>
                </div>
                <p className="mt-4 font-display text-lg font-semibold text-foreground text-center">{video.name}</p>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
