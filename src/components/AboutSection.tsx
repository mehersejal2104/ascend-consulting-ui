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
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left - visual */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden">
            <div className="w-full h-[420px] gradient-primary opacity-90 rounded-3xl" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-primary-foreground p-8">
                <div className="text-7xl font-display font-bold mb-2">15+</div>
                <div className="text-lg font-medium opacity-80">Years of Excellence</div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent rounded-2xl -z-10 opacity-60" />
        </motion.div>

        {/* Right - content */}
        <div>
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
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
          >
            The Core — <span className="text-gradient">The Leverage Point</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-lg leading-relaxed mb-4"
          >
            SynCore is a leadership-focused business consulting firm that helps organizations improve sales performance, profitability, and operational excellence. We partner with family-owned businesses and professionally managed enterprises to design and implement customized solutions that drive measurable business outcomes.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-muted-foreground text-base italic leading-relaxed mb-8"
          >
            "Give me a lever long enough, and a place to stand, and I will move the earth."
          </motion.p>

          <div className="space-y-4 mb-10">
            {aboutPoints.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="flex items-center gap-3"
              >
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-foreground/80">{point}</span>
              </motion.div>
            ))}
          </div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="px-8 py-4 rounded-full gradient-primary text-primary-foreground font-semibold text-sm tracking-wide transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-0.5"
          >
            Learn More
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
