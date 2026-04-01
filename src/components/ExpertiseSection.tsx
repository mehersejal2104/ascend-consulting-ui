import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";
import { Package, BarChart3, ClipboardList, Rocket, Target } from "lucide-react";

const expertiseAreas = [
  {
    icon: Package,
    title: "Supply Chain Management",
    subtitle: "End to End – Raw Material to Distribution",
    description:
      "SynCore enables integrated, end-to-end supply chains by aligning sourcing, production, inventory, and distribution with business goals.",
  },
  {
    icon: BarChart3,
    title: "Sales and Marketing",
    subtitle: "Revenue Growth & Market Execution",
    description:
      "SynCore helps organizations strengthen sales effectiveness and marketing execution by aligning strategy, processes, and teams with market demand.",
  },
  {
    icon: ClipboardList,
    title: "Project Management",
    subtitle: "On Time, Within Budget",
    description:
      "SynCore helps organizations deliver projects on time, within budget, and with clear accountability through structured planning and governance.",
  },
  {
    icon: Rocket,
    title: "New Product Development",
    subtitle: "Ideation to Market Launch",
    description:
      "SynCore supports organizations in launching successful new products by aligning market needs, cross-functional teams, and execution discipline.",
  },
  {
    icon: Target,
    title: "Strategy & Tactics",
    subtitle: "New Market Entry / Business Entry",
    description:
      "SynCore Consulting helps organizations enter new markets and launch new businesses with clarity and confidence.",
  },
];

const ExpertiseSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 gradient-dark opacity-95" />
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-accent text-xs font-semibold tracking-wider uppercase mb-4"
          >
            Expertise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4"
          >
            Our Areas of <span className="text-accent">Functional Expertise</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-primary-foreground/70 max-w-xl mx-auto text-base md:text-lg"
          >
            Delivering excellence across key business functions.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {expertiseAreas.slice(0, 3).map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`relative p-6 md:p-8 rounded-2xl border transition-all duration-500 cursor-pointer group ${
                hoveredIndex === i
                  ? "bg-primary/15 border-accent/30 -translate-y-1"
                  : "bg-primary-foreground/5 border-primary-foreground/10"
              }`}
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-500 ${
                  hoveredIndex === i ? "bg-accent/20" : "bg-primary-foreground/10"
                }`}
              >
                <area.icon
                  className={`w-6 h-6 transition-colors duration-500 ${
                    hoveredIndex === i ? "text-accent" : "text-primary-foreground/60"
                  }`}
                />
              </div>
              <h3 className={`font-display text-lg md:text-xl font-semibold mb-1 transition-colors duration-300 ${
                hoveredIndex === i ? "text-accent" : "text-primary-foreground"
              }`}>
                {area.title}
              </h3>
              <span className="text-primary-foreground/40 text-xs tracking-wide uppercase block mb-3">
                {area.subtitle}
              </span>
              <p className="text-primary-foreground/60 text-sm leading-relaxed">
                {area.description}
              </p>
            </motion.div>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {expertiseAreas.slice(3).map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * (i + 3) }}
              onMouseEnter={() => setHoveredIndex(i + 3)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`relative p-6 md:p-8 rounded-2xl border transition-all duration-500 cursor-pointer group ${
                hoveredIndex === i + 3
                  ? "bg-primary/15 border-accent/30 -translate-y-1"
                  : "bg-primary-foreground/5 border-primary-foreground/10"
              }`}
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-500 ${
                  hoveredIndex === i + 3 ? "bg-accent/20" : "bg-primary-foreground/10"
                }`}
              >
                <area.icon
                  className={`w-6 h-6 transition-colors duration-500 ${
                    hoveredIndex === i + 3 ? "text-accent" : "text-primary-foreground/60"
                  }`}
                />
              </div>
              <h3 className={`font-display text-lg md:text-xl font-semibold mb-1 transition-colors duration-300 ${
                hoveredIndex === i + 3 ? "text-accent" : "text-primary-foreground"
              }`}>
                {area.title}
              </h3>
              <span className="text-primary-foreground/40 text-xs tracking-wide uppercase block mb-3">
                {area.subtitle}
              </span>
              <p className="text-primary-foreground/60 text-sm leading-relaxed">
                {area.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative */}
      <div className="absolute top-10 right-10 w-40 h-40 rounded-full border border-primary-foreground/5 animate-float-slow" />
      <div className="absolute bottom-10 left-20 w-24 h-24 blob-shape border border-primary-foreground/5 animate-float" />
    </section>
  );
};

export default ExpertiseSection;
