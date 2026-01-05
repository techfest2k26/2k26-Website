import { FileText, Image, HelpCircle, Wrench, Lightbulb } from "lucide-react";

const EventDetailsSection = () => {
  const events = [
    {
      icon: FileText,
      title: "Mindcrest",
      formalName: "Paper Presentation",
      description: "This event category provides a professional platform for participants to present technical ideas, research insights, and innovative solutions. It focuses on clarity of thought, technical understanding, and effective communication of concepts.",
      color: "neon-cyan",
    },
    {
      icon: Image,
      title: "Code Patch",
      formalName: "Code Debugging",
      description: "This category is designed to test participants’ ability to analyze code, identify errors, and implement correct solutions within a given time. It emphasizes logical thinking, coding accuracy, and problem-solving skills.",
      color: "neon-pink",
    },
    {
      icon: Lightbulb,
      title: "Createx",
      formalName: "Project Expo",
      description: "This event category allows participants to showcase projects, models, and prototypes that address real-world challenges. It highlights creativity, technical implementation, and the practical impact of proposed solutions.",
      color: "neon-violet",
    },
    {
      icon: HelpCircle,
      title: "BrainWave",
      formalName: "Tech Quiz",
      description: "A fast-paced quiz that challenges participants on core technical concepts and emerging technologies. The event sharpens analytical thinking, accuracy, and quick decision-making in a competitive setting.",
      color: "neon-cyan",
    },
    {
      icon: Wrench,
      title: "Techforge",
      formalName: "Workshop",
      description: "This event category focuses on hands-on learning and skill development through guided sessions. It aims to enhance practical knowledge, industry awareness, and confidence in applying modern technologies.",
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
        <div className="max-w-6xl mx-auto space-y-6">
          {/* First Row - 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.slice(0, 3).map((event, index) => {
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
                      <h4 className={`font-heading font-bold text-xl ${colors.text} mb-1`}>
                        {event.title}
                      </h4>
                      <p className="text-xs text-muted-foreground/60 font-light mb-3">
                        {event.formalName}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Second Row - 2 Cards Centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {events.slice(3).map((event, index) => {
              const colors = colorClasses[event.color as keyof typeof colorClasses];
              return (
                <div
                  key={event.title}
                  className={`glass-card p-6 group transition-all duration-300 ${colors.border} ${colors.glow}`}
                  style={{ animationDelay: `${(index + 3) * 0.1}s` }}
                >
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className={`w-16 h-16 rounded-2xl ${colors.bg} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                      <event.icon className={`w-8 h-8 ${colors.text}`} />
                    </div>
                    <div>
                      <h4 className={`font-heading font-bold text-xl ${colors.text} mb-1`}>
                        {event.title}
                      </h4>
                      <p className="text-xs text-muted-foreground/60 font-light mb-3">
                        {event.formalName}
                      </p>
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
      </div>
    </section>
  );
};

export default EventDetailsSection;
