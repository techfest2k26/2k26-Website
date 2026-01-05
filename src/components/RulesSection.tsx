import { Shield, Users, ClipboardCheck, Scale, Building, FileWarning } from "lucide-react";

const RulesSection = () => {
  const rules = [
    {
      icon: Users,
      title: "Team Formation",
      items: [
        "Teams can consist of a minimum of 1 and a maximum of 4 members",
        "All participants must be currently enrolled in a recognized educational institution",
        "Inter-college (cross-college) teams are permitted",
        "A participant is allowed to be part of only one team",
        "Each team must designate a team leader during registration",
        "A team is permitted to participate in a maximum of two events",
        "If a team registers for two events scheduled at the same time, they may either split the team to participate in both or choose to participate in only one event",
        "Solo participants registering for two events must manage event participation on their own",
      ],
    },
    {
      icon: ClipboardCheck,
      title: "Registration & Verification",
      items: [
        "The registration fee is non-refundable under any circumstances",
        "A valid college ID card is mandatory for all participants and must be produced upon request",
        "Email ID and phone number verification are mandatory during registration",
        "Spot registration will be available only if slots remain vacant",
      ],
    },
    {
      icon: Scale,
      title: "Evaluation & Judging",
      items: [
        "Participants will be evaluated based on innovation, execution, and presentation quality",
        "The decision of the judges shall be final and binding",
        "Any form of plagiarism or copied work will result in immediate disqualification",
        "A live demonstration of the work/project is mandatory during evaluation",
        "Judges may conduct a technical interview to assess participants’ understanding",
      ],
    },
    {
      icon: Building,
      title: "Facilities & Hospitality",
      items: [
        "Snacks and lunch will be provided to all registered participants",
        "Both vegetarian and non-vegetarian food options will be available",
        "Participants must bring their own laptops, required hardware, and all necessary materials",
        "Internet connectivity will not be provided at the venue; participants must arrange their own access if required",
      ],
    },
    {
      icon: FileWarning,
      title: "Code of Conduct",
      items: [
        "All participants are expected to maintain respectful and professional behavior throughout the event",
        "Use of unauthorized tools, unfair practices, or misconduct is strictly prohibited",
        "Participants must maintain discipline within the venue premises at all times",
        "All safety instructions issued by the organizers must be followed without exception",
        "The organizing committee reserves the right to disqualify any team or participant violating the rules",
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
        <div className="max-w-6xl mx-auto space-y-8">
          {/* First Card - Full Width */}
          <div
            className="glass-card p-6 md:p-8 group hover:border-neon-cyan/30 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-cyan/20 to-neon-violet/20 flex items-center justify-center group-hover:from-neon-cyan/30 group-hover:to-neon-violet/30 transition-colors duration-300">
                {(() => {
                  const IconComponent = rules[0].icon;
                  return <IconComponent className="w-6 h-6 text-neon-cyan" />;
                })()}
              </div>
              <h3 className="font-heading font-bold text-xl text-foreground">
                1. {rules[0].title}
              </h3>
            </div>
            <ul className="space-y-3">
              {rules[0].items.map((item, itemIndex) => (
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

          {/* Remaining Cards - 2x2 Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {rules.slice(1).map((section, index) => (
              <div
                key={section.title}
                className="glass-card p-6 md:p-8 group hover:border-neon-cyan/30 transition-all duration-300"
                style={{ animationDelay: `${(index + 1) * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-cyan/20 to-neon-violet/20 flex items-center justify-center group-hover:from-neon-cyan/30 group-hover:to-neon-violet/30 transition-colors duration-300">
                    <section.icon className="w-6 h-6 text-neon-cyan" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-foreground">
                    {index + 2}. {section.title}
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
      </div>
    </section>
  );
};

export default RulesSection;
