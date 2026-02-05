import type { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

export default function Button({
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex min-h-[48px] items-center justify-center rounded-none border px-6 py-3 text-sm font-medium transition duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-graphite/70 focus-visible:ring-offset-2 focus-visible:ring-offset-stone disabled:cursor-not-allowed disabled:opacity-60";
  const variantClasses =
    variant === "primary"
      ? "border-graphite bg-graphite text-white hover:bg-charcoal"
      : "border-graphite bg-transparent text-graphite hover:bg-graphite hover:text-white";
  const classes = [baseClasses, variantClasses, className]
    .filter(Boolean)
    .join(" ");

  return <button className={classes} {...props} />;
}
