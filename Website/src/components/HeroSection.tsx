import { Button } from "@/components/ui/button";
import { Sparkles, ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan/20 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-pink/20 rounded-full blur-[100px] animate-float" style={{ animationDelay: "-3s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-violet/10 rounded-full blur-[120px]" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--glass-border)/0.3)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--glass-border)/0.3)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Powered By Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-neon-cyan/30 mb-8 animate-fade-in-up">
            <Sparkles className="w-4 h-4 text-neon-cyan" />
            <span className="text-sm font-medium text-muted-foreground">
              Powered by <span className="text-neon-cyan">AiQubit Association</span>
            </span>
          </div>

          {/* Main Title */}
          <h1 
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-black mb-6 animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="neon-text-gradient">TECHFEST</span>
            <br />
            <span className="text-foreground">2K26</span>
          </h1>

          {/* Subtitle */}
          <p 
            className="text-xl md:text-2xl lg:text-3xl font-heading font-semibold text-muted-foreground mb-4 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            A National Level Technical Fest
          </p>

          {/* Tagline */}
          <p 
            className="text-base md:text-lg text-muted-foreground/80 mb-10 max-w-2xl animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            Where Innovation Meets Excellence. Join thousands of tech enthusiasts 
            from across the nation for coding, creativity, and competition.
          </p>

          {/* Action Buttons */}
          <div 
            className="flex flex-col sm:flex-row items-center gap-4 mb-8 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Button 
              variant="hero-outline" 
              size="lg"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              About Event
            </Button>
            <Button 
              variant="hero-outline" 
              size="lg"
              onClick={() => document.getElementById('rules')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Guidelines
            </Button>
          </div>

          {/* CTA Button */}
          <div 
            className="animate-fade-in-up"
            style={{ animationDelay: "0.5s" }}
          >
            <Button 
              variant="neon" 
              size="xl"
              className="animate-glow-pulse"
              onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Register Now
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div 
            className="mt-12 animate-bounce"
            style={{ animationDelay: "1s" }}
          >
              <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <span className="text-xs font-medium">Scroll Down</span>
                <ChevronDown className="w-5 h-5" />
              </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
