import { Trophy, Users, Award, Lightbulb, Rocket, Target } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Users,
      title: "National Participation",
      description: "Students from 100+ colleges across India",
    },
    {
      icon: Trophy,
      title: "Multiple Events",
      description: "15+ technical competitions and challenges",
    },
    {
      icon: Award,
      title: "Certificates & Prizes",
      description: "Cash prizes worth ₹50,000+ and certificates",
    },
    {
      icon: Target,
      title: "Industry Challenges",
      description: "Real-world problems from leading companies",
    },
  ];

  return (
    <section id="about" className="section-container relative">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-neon-violet/10 rounded-full blur-[150px]" />

      <div className="relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            <span className="neon-text-gradient">About</span> The Event
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4">
            Organized by the Department of Computer Science & Engineering
          </p>
        </div>

        {/* Main Content Card */}
        <div className="glass-card p-8 md:p-12 max-w-4xl mx-auto mb-16">
          <div className="flex items-start gap-6">
            <div className="hidden md:flex shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-neon-cyan to-neon-violet items-center justify-center">
              <Rocket className="w-8 h-8 text-primary-foreground" />
            </div>
            <div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4 flex items-center gap-3">
                <Lightbulb className="w-6 h-6 text-neon-cyan md:hidden" />
                Welcome to TECHFEST 2K25
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                TECHFEST 2K25 is a flagship national-level technical festival organized by the 
                Computer Science Association. This 24-hour coding marathon brings together the 
                brightest minds from colleges across India to compete, innovate, and showcase 
                their technical prowess.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From intense hackathons to creative coding challenges, robotics to web development 
                competitions – TECHFEST 2K25 offers a platform for students to push their boundaries, 
                learn from industry experts, and network with like-minded tech enthusiasts. Whether 
                you're a seasoned coder or just starting your tech journey, there's something here 
                for everyone.
              </p>
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className="glass-card p-6 text-center group hover:border-neon-cyan/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--neon-cyan)/0.2)]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-muted flex items-center justify-center group-hover:bg-neon-cyan/20 transition-colors duration-300">
                <item.icon className="w-7 h-7 text-neon-cyan" />
              </div>
              <h4 className="font-heading font-bold text-foreground mb-2">
                {item.title}
              </h4>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
