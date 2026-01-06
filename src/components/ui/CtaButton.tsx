import React from "react";

type ButtonVariant = "primary" | "secondary" | "light" | "dark" | "outline";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  withIcon?: boolean;
  href?: string; // if provided, render as <a>
  className?: string;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-none px-5 py-3 text-sm font-semibold tracking-tight transition-colors " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-50 " +
  "disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-slate-900 text-stone-50 border border-slate-900 hover:bg-slate-800 hover:border-slate-800",
  secondary:
    "bg-stone-50 text-slate-900 border border-stone-300 hover:border-stone-400 hover:bg-stone-100",
  light:
    "bg-slate-100 text-slate-900 border border-slate-200 hover:bg-slate-200 hover:border-slate-400",
  dark:
    "bg-slate-950 text-stone-50 border border-slate-950 hover:bg-slate-900 hover:border-slate-900",
  // Alias to keep existing calls working
  outline:
    "bg-transparent text-slate-900 border border-stone-300 hover:border-stone-400 hover:bg-stone-100",
};

function ArrowIcon() {
  return (
    <span aria-hidden="true" className="inline-flex items-center">
      →
    </span>
  );
}

export const CtaButton: React.FC<ButtonProps> = ({
  variant = "primary",
  withIcon = false,
  href,
  className = "",
  children,
  ...props
}) => {
  const cls = `${base} ${variants[variant]} ${className}`.trim();

  // Render as anchor when href is provided (useful for external links)
  if (href) {
    const { onClick, ...rest } = props;
    return (
      <a
        href={href}
        onClick={onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>}
        className={cls}
        {...(rest as unknown as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        <span>{children}</span>
        {withIcon ? <ArrowIcon /> : null}
      </a>
    );
  }

  return (
    <button className={cls} {...props}>
      <span>{children}</span>
      {withIcon ? <ArrowIcon /> : null}
    </button>
  );
};
