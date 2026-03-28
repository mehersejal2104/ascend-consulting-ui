import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { TrendingUp, Users, Lightbulb } from "lucide-react";
import { useState } from "react";

const services = [
  {
    icon: TrendingUp,
    title: "Business Consulting",
    description:
      "We partner with family-owned businesses and professionally managed enterprises to design and implement customized solutions that drive measurable business outcomes.",
    detail: "From strategic assessments to execution roadmaps, we embed with your teams to deliver lasting impact across sales, operations, and profitability.",
  },
  {
    icon: Users,
    title: "Management Workshops",
    description:
      "Structured leadership and capability-building programs that empower teams to perform at their best and drive organizational change.",
    detail: "Our immersive workshops combine real-world case studies with practical frameworks, tailored to your organization's unique challenges and culture.",
  },
  {
    icon: Lightbulb,
    title: "Strategy",
    description:
      "Strategic planning and execution frameworks that align your organization's vision with actionable roadmaps for sustainable growth.",
    detail: "We help leaders clarify priorities, allocate resources effectively, and build the organizational capabilities needed to win in their markets.",
  },
];

const ServicesSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="bg-secondary section-padding relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary-light text-primary text-xs font-semibold tracking-wider uppercase mb-4"
          >
            What We Do
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4"
          >
            Our <span className="text-gradient">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            The Core Leverage — We achieve great things. That's the power of leverage, and it's at the core of everything we do.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-0 md:gap-0 rounded-2xl overflow-hidden border border-border">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`relative p-10 md:p-12 cursor-pointer transition-all duration-700 ease-out group overflow-hidden ${
                i < services.length - 1 ? "md:border-r border-b md:border-b-0 border-border" : ""
              }`}
              style={{
                backgroundColor:
                  hoveredIndex === i
                    ? "hsl(179 98% 24%)"
                    : "hsl(var(--card))",
              }}
            >
              {/* Subtle top accent line on hover */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-accent transition-transform duration-500 origin-left ${
                  hoveredIndex === i ? "scale-x-100" : "scale-x-0"
                }`}
              />

              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-8 transition-all duration-500 ${
                  hoveredIndex === i
                    ? "bg-primary-foreground/20"
                    : "gradient-primary"
                }`}
              >
                <service.icon
                  className={`w-6 h-6 transition-colors duration-500 ${
                    hoveredIndex === i
                      ? "text-primary-foreground"
                      : "text-primary-foreground"
                  }`}
                />
              </div>

              <h3
                className={`font-display text-xl font-semibold mb-4 transition-colors duration-500 ${
                  hoveredIndex === i ? "text-primary-foreground" : "text-foreground"
                }`}
              >
                {service.title}
              </h3>

              <p
                className={`leading-relaxed text-sm mb-4 transition-colors duration-500 ${
                  hoveredIndex === i
                    ? "text-primary-foreground/80"
                    : "text-muted-foreground"
                }`}
              >
                {service.description}
              </p>

              {/* Expand detail on hover - McKinsey style reveal */}
              <motion.div
                initial={false}
                animate={{
                  height: hoveredIndex === i ? "auto" : 0,
                  opacity: hoveredIndex === i ? 1 : 0,
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="text-primary-foreground/70 text-sm leading-relaxed pt-2 border-t border-primary-foreground/20">
                  {service.detail}
                </p>
              </motion.div>

              {/* Arrow indicator */}
              <div
                className={`mt-6 flex items-center gap-2 text-sm font-medium transition-all duration-500 ${
                  hoveredIndex === i
                    ? "text-accent translate-x-1"
                    : "text-primary opacity-0 group-hover:opacity-100"
                }`}
              >
                Learn more
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
