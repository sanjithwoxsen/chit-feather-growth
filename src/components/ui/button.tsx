import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden group",
  {
    variants: {
      variant: {
        default: "bg-gradient-button backdrop-blur-glass border border-white/30 text-foreground shadow-button hover:shadow-glow hover:scale-105 hover:border-primary/50 transition-all duration-400",
        peacock: "bg-gradient-peacock text-white shadow-peacock hover:shadow-glow hover:scale-110 border-0 font-semibold transition-all duration-500 hover:brightness-110 relative before:absolute before:inset-0 before:bg-white/10 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300",
        aurora: "bg-gradient-aurora text-white shadow-peacock hover:shadow-glow hover:scale-110 border-0 font-semibold transition-all duration-500 hover:brightness-110",
        destructive:
          "bg-gradient-button backdrop-blur-glass border border-red-500/30 text-red-400 shadow-button hover:shadow-[0_0_25px_rgba(239,68,68,0.6)] hover:scale-105",
        outline:
          "bg-gradient-glass backdrop-blur-glass border border-white/40 text-foreground shadow-glass hover:shadow-glow hover:scale-105 hover:border-primary/60 hover:text-primary transition-all duration-400",
        secondary:
          "bg-gradient-button backdrop-blur-glass border border-white/25 text-foreground shadow-button hover:shadow-glow hover:scale-105",
        ghost: "bg-transparent hover:bg-gradient-glass hover:backdrop-blur-glass hover:text-primary transition-all duration-300 hover:scale-105",
        link: "text-primary underline-offset-4 hover:underline hover:text-primary-glow transition-colors hover:scale-105",
      },
      size: {
        default: "h-11 px-6 rounded-xl",
        sm: "h-9 rounded-lg px-4",
        lg: "h-12 rounded-2xl px-8 text-base font-semibold",
        icon: "h-10 w-10 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
