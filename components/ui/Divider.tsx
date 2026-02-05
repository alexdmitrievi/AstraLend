import type { HTMLAttributes } from "react";

type DividerProps = HTMLAttributes<HTMLHRElement>;

export default function Divider({ className = "", ...props }: DividerProps) {
  const classes = ["h-px w-full bg-graphite/40", className]
    .filter(Boolean)
    .join(" ");

  return <hr className={classes} {...props} />;
}
