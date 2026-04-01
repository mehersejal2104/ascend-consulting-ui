import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight } from "lucide-react";
import caseBusinessConsulting from "@/assets/case-business-consulting.jpg";
import caseCorporateTraining from "@/assets/case-corporate-training.jpg";
import caseServices from "@/assets/case-services.jpg";

const caseStudies = [
  {
    title: "Business Consulting",
    description: "Strategic advisory and operational transformation for enterprises seeking measurable growth.",
    image: caseBusinessConsulting,
  },
  {
    title: "Corporate Training",
    description: "Customized training programs that build leadership capability and drive organizational performance.",
    image: caseCorporateTraining,
  },
  {
    title: "Services",
    description: "End-to-end service delivery integrating people, process, and technology for sustained excellence.",
    image: caseServices,
  },
];

const CaseStudiesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="section-padding bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary-light text-primary text-xs font-semibold tracking-wider uppercase mb-4"
          >
            Case Studies
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4"
          >
            Our <span className="text-gradient">Impact</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {caseStudies.map((study, i) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-[3/4] sm:aspect-[3/4]"
            >
              <img
                src={study.image}
                alt={study.title}
                width={1280}
                height={720}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-3">
                  {study.title}
                </h3>
                <p className="text-white/70 text-base leading-relaxed mb-4">
                  {study.description}
                </p>
                <div className="flex items-center gap-2 text-accent text-base font-medium opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  Explore
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
