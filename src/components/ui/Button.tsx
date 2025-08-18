import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  variant?: "solid" | "outline";
  size?: "sm" | "md";
  children: React.ReactNode;
};

export const Button: React.FC<Props> = ({
  asChild,
  variant = "solid",
  size = "md",
  className = "",
  children,
  ...rest
}) => {
  const base = "inline-flex items-center justify-center rounded-md transition";
  const sizes = size === "sm" ? "h-9 px-3 text-sm" : "h-10 px-4";
  const styles =
    variant === "outline"
      ? "border border-slate-200 bg-white text-slate-900 hover:bg-slate-50"
      : "bg-slate-900 text-white hover:bg-slate-800";

  if (asChild) {
    // for anchor-as-button
    return (
      <a className={`${base} ${sizes} ${styles} ${className}`} {...(rest as any)}>
        {children}
      </a>
    );
  }
  return (
    <button className={`${base} ${sizes} ${styles} ${className}`} {...rest}>
      {children}
    </button>
  );
};
