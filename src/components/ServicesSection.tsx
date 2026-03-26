import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { TrendingUp, Users, Lightbulb, BarChart3, Shield, Globe } from "lucide-react";

const services = [
  { icon: TrendingUp, title: "Business Consulting", description: "We partner with family-owned businesses and professionally managed enterprises to design and implement customized solutions that drive measurable business outcomes." },
  { icon: Users, title: "Management Workshops", description: "Structured leadership and capability-building programs that empower teams to perform at their best and drive organizational change." },
  { icon: Lightbulb, title: "Strategy", description: "Strategic planning and execution frameworks that align your organization's vision with actionable roadmaps for sustainable growth." },
  { icon: BarChart3, title: "Project Management", description: "End-to-end project management expertise ensuring timely delivery, resource optimization, and measurable project outcomes." },
  { icon: Shield, title: "New Product Development", description: "Innovation-driven product development consulting from ideation to market launch, helping businesses stay ahead of the curve." },
  { icon: Globe, title: "Operational Excellence", description: "Streamlining operations and processes to achieve peak efficiency, reduce costs, and improve overall business performance." },
];

const ServicesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="bg-card rounded-2xl p-8 card-hover border border-border group cursor-pointer"
            >
              <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                <service.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
