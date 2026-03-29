import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { CheckCircle } from "lucide-react";

const aboutPoints = [
  "Improve sales performance and profitability",
  "Drive operational excellence across organizations",
  "Customized solutions for family-owned and enterprise businesses",
  "Measurable business outcomes through structured consulting",
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="section-padding bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header - horizontal layout like services */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary-light text-primary text-xs font-semibold tracking-wider uppercase mb-4"
          >
            Our Philosophy
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4"
          >
            The Core — <span className="text-gradient">The Leverage Point</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed"
          >
            SynCore is a leadership-focused business consulting firm that helps organizations improve sales performance, profitability, and operational excellence. We partner with family-owned businesses and professionally managed enterprises to design and implement customized solutions that drive measurable business outcomes.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-muted-foreground max-w-2xl mx-auto text-base italic leading-relaxed mt-4"
          >
            "Give me a lever long enough, and a place to stand, and I will move the earth."
          </motion.p>
        </div>

        {/* Points in a horizontal grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {aboutPoints.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="flex items-start gap-3 p-6 rounded-2xl bg-secondary border border-transparent hover:border-primary/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-500"
            >
              <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <span className="text-foreground/80 text-sm leading-relaxed">{point}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
