import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect, useRef } from "react";

const logos = [
  { name: "GSK", url: "https://syncoreconsulting.in/media/trusted_by/gsk.png" },
  { name: "Wallace", url: "https://syncoreconsulting.in/media/trusted_by/wallace.jpg" },
  { name: "Nilkamal", url: "https://syncoreconsulting.in/media/trusted_by/nilkamal.png" },
  { name: "L&T", url: "https://syncoreconsulting.in/media/trusted_by/LT.png" },
  { name: "KPT", url: "https://syncoreconsulting.in/media/trusted_by/kpt-logo.png" },
  { name: "Glenmark", url: "https://syncoreconsulting.in/media/trusted_by/glenmark_logo.jpg" },
  { name: "Cipla", url: "https://syncoreconsulting.in/media/trusted_by/cipla.jpg" },
  { name: "Arihant", url: "https://syncoreconsulting.in/media/trusted_by/Arihant.jpg" },
  { name: "Amara Raja", url: "https://syncoreconsulting.in/media/trusted_by/amara_raja.jpg" },
  { name: "ACMA", url: "https://syncoreconsulting.in/media/trusted_by/acma-india.jpg" },
];

const TrustedBySection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let pos = 0;
    let animId: number;
    const animate = () => {
      pos += 0.5;
      if (pos >= el.scrollWidth / 2) pos = 0;
      el.scrollLeft = pos;
      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <section ref={ref} className="py-16 md:py-20 bg-secondary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
            Trusted By
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-3 rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-hidden"
            style={{ scrollBehavior: "auto" }}
          >
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-40 h-24 bg-card rounded-xl shadow-sm flex items-center justify-center p-4 hover:shadow-md transition-shadow duration-300"
              >
                <img
                  src={logo.url}
                  alt={logo.name}
                  className="max-h-14 max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBySection;
