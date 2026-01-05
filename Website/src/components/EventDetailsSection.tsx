import { FileText, Image, HelpCircle, Wrench, Lightbulb } from "lucide-react";

const EventDetailsSection = () => {
  const events = [
    {
      icon: FileText,
      title: "Paper Presentation",
      description: "Present your innovative research papers and technical ideas to a panel of expert judges. Showcase your analytical thinking and communication skills.",
      color: "neon-cyan",
    },
    {
      icon: Image,
      title: "Poster Presentation",
      description: "Display your creative posters highlighting technical concepts, innovations, or research findings in a visually engaging format.",
      color: "neon-pink",
    },
    {
      icon: HelpCircle,
      title: "Tech Quiz",
      description: "Test your technical knowledge in this exciting quiz competition covering various domains of technology and science.",
      color: "neon-violet",
    },
    {
      icon: Wrench,
      title: "Workshop",
      description: "Hands-on learning sessions conducted by industry experts. Gain practical skills and insights into cutting-edge technologies.",
      color: "neon-cyan",
    },
    {
      icon: Lightbulb,
      title: "Project Expo",
      description: "Exhibit your innovative projects and prototypes. Demonstrate your problem-solving abilities and technical implementation skills.",
      color: "neon-pink",
    },
  ];

  const colorClasses = {
    "neon-cyan": {
      bg: "bg-neon-cyan/20",
      text: "text-neon-cyan",
      border: "hover:border-neon-cyan/50",
      glow: "hover:shadow-[0_0_30px_hsl(var(--neon-cyan)/0.3)]",
    },
    "neon-pink": {
      bg: "bg-neon-pink/20",
      text: "text-neon-pink",
      border: "hover:border-neon-pink/50",
      glow: "hover:shadow-[0_0_30px_hsl(var(--neon-pink)/0.3)]",
    },
    "neon-violet": {
      bg: "bg-neon-violet/20",
      text: "text-neon-violet",
      border: "hover:border-neon-violet/50",
      glow: "hover:shadow-[0_0_30px_hsl(var(--neon-violet)/0.3)]",
    },
  };

  return (
    <section id="events" className="section-container relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-neon-pink/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-neon-cyan/10 rounded-full blur-[150px]" />

      <div className="relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            <span className="neon-text-gradient">Our</span> Events
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4">
            Explore the exciting events at TECHFEST 2K25
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {events.map((event, index) => {
            const colors = colorClasses[event.color as keyof typeof colorClasses];
            return (
              <div
                key={event.title}
                className={`glass-card p-6 group transition-all duration-300 ${colors.border} ${colors.glow}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <div className={`w-16 h-16 rounded-2xl ${colors.bg} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                    <event.icon className={`w-8 h-8 ${colors.text}`} />
                  </div>
                  <div>
                    <h4 className={`font-heading font-bold text-xl ${colors.text} mb-2`}>
                      {event.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EventDetailsSection;
