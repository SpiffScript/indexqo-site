import React from "react";

export type SectionProps = {
  children: React.ReactNode;
  className?: string;
  bg?: string; // pass Tailwind classes like "bg-white", "bg-stone-50", etc.
};

export const Section: React.FC<SectionProps> = ({ children, className = "", bg = "" }) => {
  const classes = [bg, className].filter(Boolean).join(" ");

  return <section className={classes}>{children}</section>;
};
