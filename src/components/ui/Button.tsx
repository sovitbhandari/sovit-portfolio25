import React from "react";

type Variant = "solid" | "outline" | "ghost";
type Size = "sm" | "md";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = CommonProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

function classes(variant: Variant, size: Size, className: string) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:opacity-50";
  const sizes =
    size === "sm" ? "h-9 min-h-[36px] px-3 text-sm" : "h-11 min-h-[44px] px-5 text-sm";
  const styles =
    variant === "outline"
      ? "border border-border bg-transparent text-ink hover:border-border-hover hover:bg-surface"
      : variant === "ghost"
        ? "text-ink-secondary hover:text-ink hover:bg-surface"
        : "bg-accent text-bg hover:brightness-110";
  return `${base} ${sizes} ${styles} ${className}`;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "solid",
  size = "md",
  className = "",
  children,
  ...rest
}) => {
  const cls = classes(variant, size, className);

  if ("href" in rest && rest.href) {
    const { href, ...anchorRest } = rest as ButtonAsLink;
    return (
      <a href={href} className={cls} {...anchorRest}>
        {children}
      </a>
    );
  }

  const buttonRest = rest as ButtonAsButton;
  return (
    <button className={cls} {...buttonRest}>
      {children}
    </button>
  );
};
