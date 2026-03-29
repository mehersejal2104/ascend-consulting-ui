import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";
import expertiseSupplyChain from "@/assets/expertise-supply-chain.jpg";
import expertiseSales from "@/assets/expertise-sales.jpg";
import expertiseProject from "@/assets/expertise-project.jpg";
import expertiseProduct from "@/assets/expertise-product.jpg";
import expertiseStrategy from "@/assets/expertise-strategy.jpg";

const expertiseAreas = [
  {
    title: "Supply Chain Management",
    subtitle: "End to end – Raw Material to Distribution",
    description:
      "SynCore enables integrated, end-to-end supply chains by aligning sourcing, production, inventory, and distribution with business goals. We help organizations synchronize demand and supply to improve service levels, reduce inventory, and optimize working capital—turning the supply chain into a scalable, performance-driven advantage.",
    image: expertiseSupplyChain,
  },
  {
    title: "Sales and Marketing",
    subtitle: "Revenue Growth & Market Execution",
    description:
      "SynCore helps organizations strengthen sales effectiveness and marketing execution by aligning strategy, processes, and teams with market demand. We enable predictable revenue growth through demand planning, channel performance, and sales execution — ensuring marketing efforts convert into measurable sales outcomes.",
    image: expertiseSales,
  },
  {
    title: "Project Management",
    subtitle: "On Time, Within Budget",
    description:
      "SynCore helps organizations deliver projects on time, within budget, and with clear accountability. We establish structured planning, governance, and execution frameworks that align teams, manage risks, and ensure projects deliver measurable business value.",
    image: expertiseProject,
  },
  {
    title: "New Product Development",
    subtitle: "Ideation to Market Launch",
    description:
      "SynCore supports organizations in launching successful new products by aligning market needs, cross-functional teams, and execution discipline. We help streamline ideation, development, and go-to-market processes to reduce time-to-market, control costs, and maximize product success.",
    image: expertiseProduct,
  },
  {
    title: "Strategy & Tactics",
    subtitle: "New Market Entry / Business Entry",
    description:
      "SynCore Consulting helps organizations enter new markets and launch new businesses with clarity and confidence. We define market entry strategies, operating models, and execution roadmaps that minimize risk, accelerate scale-up, and ensure alignment between leadership intent, teams, and market realities.",
    image: expertiseStrategy,
  },
];

const ExpertiseSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section ref={ref} className="relative overflow-hidden bg-foreground">
      {/* Header */}
      <div className="section-padding pb-0">
        <div className="max-w-7xl mx-auto text-center mb-12">
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
        </div>
      </div>

      {/* Full-screen McKinsey-style layout */}
      <div className="relative w-full min-h-[80vh] flex flex-col lg:flex-row">
        {/* Left: Image */}
        <div className="relative w-full lg:w-1/2 h-[40vh] lg:h-auto lg:min-h-[80vh] overflow-hidden">
          {expertiseAreas.map((area, i) => (
            <motion.div
              key={i}
              initial={false}
              animate={{ opacity: activeIndex === i ? 1 : 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <motion.img
                src={area.image}
                alt={area.title}
                width={1920}
                height={1080}
                loading="lazy"
                className="w-full h-full object-cover"
                animate={activeIndex === i ? { scale: 1.05 } : { scale: 1 }}
                transition={{ duration: 6, ease: "linear" }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
            </motion.div>
          ))}
        </div>

        {/* Right: Accordion-style items */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 md:px-12 lg:px-16 py-12">
          {expertiseAreas.map((area, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 40 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              onMouseEnter={() => setActiveIndex(i)}
              onClick={() => setActiveIndex(i)}
              className={`group cursor-pointer border-b border-primary-foreground/10 transition-all duration-500 ${
                activeIndex === i ? "py-8" : "py-5"
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3
                    className={`font-display text-lg md:text-xl font-semibold transition-colors duration-300 ${
                      activeIndex === i ? "text-accent" : "text-primary-foreground/70"
                    }`}
                  >
                    {area.title}
                  </h3>
                  <span
                    className={`text-xs tracking-wide uppercase transition-all duration-300 ${
                      activeIndex === i ? "text-primary-foreground/60" : "text-primary-foreground/30"
                    }`}
                  >
                    {area.subtitle}
                  </span>
                </div>
                <motion.div
                  animate={{ rotate: activeIndex === i ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors duration-300 flex-shrink-0 ${
                    activeIndex === i
                      ? "border-accent text-accent"
                      : "border-primary-foreground/20 text-primary-foreground/40"
                  }`}
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                </motion.div>
              </div>

              <motion.div
                initial={false}
                animate={{
                  height: activeIndex === i ? "auto" : 0,
                  opacity: activeIndex === i ? 1 : 0,
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="text-primary-foreground/60 text-sm leading-relaxed mt-4 max-w-lg">
                  {area.description}
                </p>
                <div className="mt-4 flex items-center gap-2 text-accent text-sm font-medium">
                  Learn more
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
