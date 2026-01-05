import { Mail, Phone, MapPin, Cpu, Code2 } from "lucide-react";

const Footer = () => {
  const coordinators = [
    { name: "John Doe", role: "Event Coordinator", phone: "+91 98765 43210" },
    { name: "Jane Smith", role: "Technical Lead", phone: "+91 98765 43211" },
    { name: "Mike Johnson", role: "Registration Head", phone: "+91 98765 43212" },
  ];

  return (
    <footer id="contact" className="relative border-t border-glass-border">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-muted/20 to-transparent" />
      
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-cyan to-neon-violet flex items-center justify-center">
                <Cpu className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl neon-text-gradient">
                  TECHFEST 2K25
                </h3>
                <p className="text-sm text-muted-foreground">
                  A National Level Technical Fest
                </p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Organized by the Department of Computer Science & Engineering in 
              association with Computer Science Association. Join us for 24 hours 
              of innovation, coding, and competition.
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-neon-pink to-neon-violet flex items-center justify-center">
                <Code2 className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-heading font-semibold text-foreground">
                CSE Association
              </span>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-lg text-foreground mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-neon-cyan shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">
                  ABC College of Engineering<br />
                  123 Tech Street, Innovation City<br />
                  State - 123456
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-neon-cyan shrink-0" />
                <a 
                  href="mailto:techfest@college.edu" 
                  className="text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  techfest@college.edu
                </a>
              </li>
            </ul>
          </div>

          {/* Coordinators */}
          <div>
            <h4 className="font-heading font-bold text-lg text-foreground mb-6">
              Event Coordinators
            </h4>
            <ul className="space-y-4">
              {coordinators.map((coordinator) => (
                <li key={coordinator.name} className="text-sm">
                  <p className="font-semibold text-foreground">{coordinator.name}</p>
                  <p className="text-muted-foreground">{coordinator.role}</p>
                  <a 
                    href={`tel:${coordinator.phone.replace(/\s/g, '')}`}
                    className="flex items-center gap-2 text-neon-cyan hover:text-primary transition-colors mt-1"
                  >
                    <Phone className="w-4 h-4" />
                    {coordinator.phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-glass-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © 2025 TECHFEST 2K25. All rights reserved. Department of CSE, ABC College.
            </p>
            <div className="flex items-center gap-6">
              <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#rules" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Rules
              </a>
              <a href="#register" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Register
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
