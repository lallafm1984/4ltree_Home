import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  href?: string;
}

export function Button({
  variant = "primary",
  size = "md",
  children,
  href,
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-brand-indigo hover:bg-brand-indigo-dark text-white focus:ring-brand-indigo shadow-lg hover:shadow-xl hover:-translate-y-0.5",
    secondary:
      "bg-brand-amber hover:bg-brand-amber-dark text-white focus:ring-brand-amber shadow-lg hover:shadow-xl hover:-translate-y-0.5",
    outline:
      "border-2 border-brand-indigo text-brand-indigo hover:bg-brand-indigo hover:text-white focus:ring-brand-indigo",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
