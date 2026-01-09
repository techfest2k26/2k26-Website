import { Mail, Phone, MapPin, Cpu, Code2 } from "lucide-react";

const Footer = () => {
  const staffCoordinators = [
    { name: "Ms.T.Sanmathi", designation: "Assistant Professor", role: "Event Coordinator" },
    { name: "Mrs.K.Kiruthika", designation: "Assistant Professor", role: "Technical Lead" },
  ];

  const studentCoordinators = [
    { name: "M Karuppasamy", role: "Head Student Coordinator" },
    { name: "Deepak U K", phone: "+91 93452 11194" },
    { name: "Viyash S", phone: "+91 82203 34059" },
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
                  TECHFEST 2K26
                </h3>
                <p className="text-sm text-muted-foreground">
                  A National Level Technical Fest
                </p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Organized by the Department of Artificial Intelligence and Data Science in 
              association with AiQubit Association. Join us for innovation, coding, and competition.
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-neon-pink to-neon-violet flex items-center justify-center">
                <Code2 className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-heading font-semibold text-foreground">
                AiQubit Association
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
                  Karpagam Academy of Higher Education<br />
                  Pollachi Main Road, Eachanari Post<br />
                  Coimbatore - 641 021,<br /> Tamil Nadu, India.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-neon-cyan shrink-0" />
                <a 
                  href="mailto:techfest@college.edu" 
                  className="text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  techfest2k26@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Coordinators */}
          <div>
            <h4 className="font-heading font-bold text-lg text-foreground mb-6">
              Event Coordinators
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Staff Coordinators */}
              <div>
                <h5 className="font-semibold text-sm text-neon-cyan mb-3">Staff Coordinators</h5>
                <ul className="space-y-3">
                  {staffCoordinators.map((coordinator) => (
                    <li key={coordinator.name} className="text-sm">
                      <p className="font-semibold text-foreground">{coordinator.name}</p>
                      <p className="text-muted-foreground text-xs">{coordinator.role}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Student Coordinators */}
              <div>
                <h5 className="font-semibold text-sm text-neon-pink mb-3">Student Coordinators</h5>
                <ul className="space-y-3">
                  {studentCoordinators.map((coordinator) => (
                    <li key={coordinator.name} className="text-sm">
                      <p className="font-semibold text-foreground">{coordinator.name}</p>
                      {coordinator.role && (
                        <p className="text-muted-foreground text-xs">{coordinator.role}</p>
                      )}
                      {coordinator.phone && (
                        <a 
                          href={`tel:${coordinator.phone.replace(/\s/g, '')}`}
                          className="flex items-center gap-2 text-neon-pink hover:text-primary transition-colors mt-1"
                        >
                          <Phone className="w-3 h-3" />
                          <span className="text-xs">{coordinator.phone}</span>
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-glass-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © 2026 TECHFEST 2K26. All rights reserved. Department of AI&DS, Karpagam Academy of Higher Education.
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
