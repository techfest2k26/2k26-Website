import { Shield, Users, ClipboardCheck, Scale, Building, FileWarning } from "lucide-react";

const RulesSection = () => {
  const rules = [
    {
      icon: Users,
      title: "Team Formation",
      items: [
        "Teams can have 1 to 4 members",
        "All team members must be from recognized institutions",
        "Cross-college teams are allowed",
        "One person can be part of only one team",
        "Team leader must be designated during registration",
      ],
    },
    {
      icon: ClipboardCheck,
      title: "Registration & Verification",
      items: [
        "Registration fee is non-refundable",
        "Valid college ID mandatory for all participants",
        "Email and phone verification required",
        "Registration closes 48 hours before event",
        "Spot registration subject to availability",
      ],
    },
    {
      icon: Shield,
      title: "Project / Event Rules",
      items: [
        "All projects must be original work",
        "Pre-built projects or templates not allowed",
        "Open source libraries and APIs permitted",
        "Projects must be started during the event",
        "Complete documentation required for submission",
      ],
    },
    {
      icon: Scale,
      title: "Evaluation & Judging",
      items: [
        "Judging based on innovation, execution & presentation",
        "Judges' decision is final and binding",
        "Plagiarism will lead to immediate disqualification",
        "Live demo required during evaluation",
        "Technical interview may be conducted",
      ],
    },
    {
      icon: Building,
      title: "Facilities & Hospitality",
      items: [
        "24-hour WiFi and power supply provided",
        "Refreshments available throughout the event",
        "Dedicated rest area for participants",
        "Technical mentors available for guidance",
        "Medical assistance on standby",
      ],
    },
    {
      icon: FileWarning,
      title: "Code of Conduct",
      items: [
        "Respectful behavior towards all participants",
        "No use of unauthorized tools or unfair means",
        "Maintain discipline within venue premises",
        "Follow safety guidelines at all times",
        "Organizers reserve right to disqualify teams",
      ],
    },
  ];

  return (
    <section id="rules" className="section-container relative">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-neon-violet/10 rounded-full blur-[150px]" />

      <div className="relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            <span className="neon-text-gradient">Rules &</span> Regulations
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4">
            Please read all rules carefully before registering
          </p>
        </div>

        {/* Rules Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {rules.map((section, index) => (
            <div
              key={section.title}
              className="glass-card p-6 md:p-8 group hover:border-neon-cyan/30 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-cyan/20 to-neon-violet/20 flex items-center justify-center group-hover:from-neon-cyan/30 group-hover:to-neon-violet/30 transition-colors duration-300">
                  <section.icon className="w-6 h-6 text-neon-cyan" />
                </div>
                <h3 className="font-heading font-bold text-xl text-foreground">
                  {index + 1}. {section.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-neon-cyan mt-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RulesSection;
