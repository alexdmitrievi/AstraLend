import type { HTMLAttributes } from "react";

type SectionProps = HTMLAttributes<HTMLElement>;

export default function Section({ className = "", ...props }: SectionProps) {
  const classes = ["py-20 sm:py-24 lg:py-32", className]
    .filter(Boolean)
    .join(" ");

  return <section className={classes} {...props} />;
}
