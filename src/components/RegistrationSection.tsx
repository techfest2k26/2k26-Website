import { Button } from "@/components/ui/button";
import { User, Users, Users2, UsersRound, FileCheck, FileX } from "lucide-react";

const RegistrationSection = () => {
  const registrationOptions = [
    {
      team: "Solo",
      icon: User,
      options: [
        {
          label: "Without Hardcopy Certificate",
          price: "₹200",
          url: "https://forms.gle/aWFW5mZgTNG2heFP9",
        },
        {
          label: "With Hardcopy Certificate",
          price: "₹350",
          url: "https://forms.gle/gBPdNj3QCGAZxDNw6",
        },
      ],
    },
    {
      team: "Duo",
      icon: Users,
      options: [
        {
          label: "Without Hardcopy Certificate",
          price: "₹400",
          url: "https://forms.gle/CGvSnEs5DJ7AtvQ46",
        },
        {
          label: "With Hardcopy Certificate",
          price: "₹550",
          url: "https://forms.gle/K2sYZN7GpbTDQVBW9",
        },
      ],
    },
    {
      team: "Trio",
      icon: Users2,
      options: [
        {
          label: "Without Hardcopy Certificate",
          price: "₹600",
          url: "https://forms.gle/3a1KSox7f8aRqjRNA",
        },
        {
          label: "With Hardcopy Certificate",
          price: "₹750",
          url: "https://forms.gle/cd6kQeSbtkvGXBrT9",
        },
      ],
    },
    {
      team: "Team of Four",
      icon: UsersRound,
      options: [
        {
          label: "Without Hardcopy Certificate",
          price: "₹800",
          url: "https://forms.gle/QYJmgxY8TB7vEJMG6",
        },
        {
          label: "With Hardcopy Certificate",
          price: "₹950",
          url: "https://forms.gle/d1QpFqowPDhUCKrN9",
        },
      ],
    },
  ];

  return (
    <section id="register" className="section-container relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-pink/10 rounded-full blur-[200px]" />

      <div className="relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            <span className="neon-text-gradient">Register</span> for Events
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4">
            Choose your team size and certificate preference to register
          </p>
        </div>

        {/* Registration Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {registrationOptions.map((category, catIndex) => (
            <div
              key={category.team}
              className="glass-card p-6 md:p-8"
              style={{ animationDelay: `${catIndex * 0.1}s` }}
            >
              {/* Team Type Header */}
              <div className="flex items-center gap-4 mb-6 pb-4 border-b border-glass-border">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-cyan to-neon-pink flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-foreground">
                  {category.team}
                </h3>
              </div>

              {/* Options */}
              <div className="space-y-4">
                {category.options.map((option, optIndex) => (
                  <div
                    key={option.label}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors duration-300"
                  >
                    <div className="flex items-center gap-3">
                      {option.label.includes("Without") ? (
                        <FileX className="w-5 h-5 text-muted-foreground shrink-0" />
                      ) : (
                        <FileCheck className="w-5 h-5 text-neon-cyan shrink-0" />
                      )}
                      <div>
                        <p className="font-medium text-foreground text-sm">
                          {option.label}
                        </p>
                        <p className="text-lg font-heading font-bold text-neon-cyan">
                          {option.price}
                        </p>
                      </div>
                    </div>
                    <Button
                      variant={optIndex === 1 ? "neon" : "neon-outline"}
                      size="sm"
                      className="shrink-0"
                      onClick={() => window.open(option.url, "_blank")}
                    >
                      Register
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground text-sm max-w-xl mx-auto">
            Note: Registration fee is non-refundable.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;
