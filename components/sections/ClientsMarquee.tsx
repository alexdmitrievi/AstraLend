type Client = {
  name: string;
};

type ClientsMarqueeProps = {
  clients: Client[];
};

const getInitials = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");

export default function ClientsMarquee({ clients }: ClientsMarqueeProps) {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <div className="h-px w-10 bg-graphite/60" aria-hidden="true" />
          <h2 className="font-heading text-2xl font-semibold">Нам доверяют</h2>
        </div>
      </div>
      <div className="mt-8">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="h-px w-full bg-graphite/30" aria-hidden="true" />
        </div>
      </div>
      <div className="mt-8 overflow-hidden">
        <div className="marquee flex w-[200%] gap-8">
          {[0, 1].map((row) => (
            <ul
              key={row}
              className="flex w-1/2 min-w-max items-center gap-6 pr-8 sm:gap-8"
              aria-label="Список клиентов"
            >
              {clients.map((client, index) => (
                <li
                  key={`${client.name}-${row}-${index}`}
                  className="flex items-center gap-3 rounded-none border border-steel px-5 py-2 text-sm text-charcoal"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-none border border-steel text-[10px] uppercase tracking-[0.2em] text-charcoal">
                    {getInitials(client.name) || "LG"}
                  </span>
                  <span className="whitespace-nowrap">{client.name}</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
