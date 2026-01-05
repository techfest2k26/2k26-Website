import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 font-heading",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)]",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-glass-border bg-transparent hover:bg-muted hover:text-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:shadow-[0_0_20px_hsl(var(--secondary)/0.5)]",
        ghost: "hover:bg-muted hover:text-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        neon: "relative bg-gradient-to-r from-neon-cyan via-neon-pink to-neon-violet text-primary-foreground font-bold hover:shadow-[0_0_30px_hsl(var(--neon-cyan)/0.5),0_0_60px_hsl(var(--neon-pink)/0.3)] hover:scale-105 active:scale-95",
        "neon-outline": "relative border-2 border-neon-cyan bg-transparent text-neon-cyan hover:bg-neon-cyan/10 hover:shadow-[0_0_20px_hsl(var(--neon-cyan)/0.5)] hover:scale-105 active:scale-95",
        "neon-pink": "relative bg-neon-pink text-primary-foreground font-bold hover:shadow-[0_0_30px_hsl(var(--neon-pink)/0.5)] hover:scale-105 active:scale-95",
        "neon-violet": "relative bg-neon-violet text-primary-foreground font-bold hover:shadow-[0_0_30px_hsl(var(--neon-violet)/0.5)] hover:scale-105 active:scale-95",
        glass: "glass-card border-glass-border text-foreground hover:bg-glass/90 hover:border-neon-cyan/50 hover:shadow-[0_0_20px_hsl(var(--neon-cyan)/0.3)]",
        hero: "bg-primary text-primary-foreground font-bold text-lg hover:shadow-[0_0_40px_hsl(var(--primary)/0.6)] hover:scale-105 active:scale-95",
        "hero-outline": "border-2 border-foreground/30 bg-transparent text-foreground hover:border-primary hover:text-primary hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-xl px-8 text-base",
        xl: "h-14 rounded-xl px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };