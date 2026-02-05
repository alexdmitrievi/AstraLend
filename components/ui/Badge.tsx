import type { HTMLAttributes } from "react";

type BadgeProps = HTMLAttributes<HTMLSpanElement>;

export default function Badge({ className = "", ...props }: BadgeProps) {
  const classes = [
    "inline-flex items-center rounded-none border border-steel px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-graphite",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <span className={classes} {...props} />;
}
