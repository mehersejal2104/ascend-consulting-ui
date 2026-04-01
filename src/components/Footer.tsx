const Footer = () => {
  return (
    <footer className="gradient-dark text-primary-foreground section-padding pb-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-16">
          <div className="md:col-span-1">
            <div className="font-display text-2xl font-bold mb-4">SynCore</div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Synchronizing People, Process & Technology for measurable business outcomes.
            </p>
          </div>
          {[
            { title: "Company", links: ["Home", "About", "Services", "Contact"] },
            { title: "Expertise", links: ["Strategy", "Project Management", "New Product Development", "Operational Excellence"] },
            { title: "Quick Links", links: ["Testimonials", "Case Studies", "Partners", "Careers"] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-display font-semibold text-lg mb-4">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-primary-foreground/60 hover:text-accent text-sm transition-colors duration-300">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-primary-foreground/10 pt-8 text-center text-primary-foreground/40 text-sm">
          © 2024 SynCore. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
