import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = "primary",
      size = "md",
      icon,
      iconPosition = "right",
      disabled,
      type = "button",
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-mono text-xs uppercase tracking-wider font-medium transition-all duration-200 cursor-pointer disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-2 select-none";

    const sizeStyles = {
      sm: "h-8 px-3.5 gap-1.5 text-[11px]",
      md: "h-10 px-5 gap-2 text-xs",
      lg: "h-12 px-7 gap-2.5 text-sm",
    }[size];

    const variantStyles = {
      primary:
        "bg-[#1c1e28] hover:bg-[#262938] text-[#f0f0f4] border border-[#2e3244] hover:border-[#454b63] shadow-sm active:translate-y-[1px]",
      secondary:
        "bg-[#101116] hover:bg-[#181a22] text-[#a8abbf] hover:text-[#f0f0f4] border border-[#1e202b] hover:border-[#2e3244]",
      outline:
        "bg-transparent hover:bg-[#181a22] text-[#f0f0f4] border border-[#2a2c3a] hover:border-[#52566f]",
      ghost:
        "bg-transparent hover:bg-[#181a22] text-[#9496a4] hover:text-[#f0f0f4] border border-transparent",
    }[variant];

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        className={cn(baseStyles, sizeStyles, variantStyles, className)}
        {...props}
      >
        {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";
