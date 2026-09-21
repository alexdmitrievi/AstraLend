"use client";

export type FilterOption<T extends string> = {
  value: T;
  label: string;
};

type FilterRowProps<T extends string> = {
  label: string;
  options: FilterOption<T>[];
  value: T;
  onChange: (value: T) => void;
};

export default function FilterRow<T extends string>({
  label,
  options,
  value,
  onChange,
}: FilterRowProps<T>) {
  return (
    <div className="grid items-baseline gap-3 border-b border-steel py-5 sm:grid-cols-[130px_1fr] sm:gap-6">
      <span className="text-[12px] uppercase tracking-[0.16em] text-ash">
        {label}
      </span>

      <div className="flex flex-wrap gap-2" role="group" aria-label={label}>
        {options.map((option) => {
          const isActive = option.value === value;

          return (
            <button
              key={option.value || "all"}
              type="button"
              onClick={() => onChange(option.value)}
              aria-pressed={isActive}
              className={[
                "focus-ring min-h-[36px] cursor-pointer border px-4 py-2 text-[13px] transition-colors duration-300",
                isActive
                  ? "border-ink bg-ink text-white"
                  : "border-steel bg-transparent text-charcoal hover:border-ink hover:text-ink",
              ].join(" ")}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
