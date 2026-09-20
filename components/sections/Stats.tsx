const reviews = [
  {
    name: "Светлана К.",
    city: "Омск",
    text: "Заказывали диваны и кресла для переговорной зоны нашего офиса. Всё сделали точно в срок, качество материалов выше ожиданий. Сотрудники в восторге — уютно и солидно одновременно.",
  },
  {
    name: "Дмитрий П.",
    city: "Новосибирск",
    text: "Долго выбирал мастерскую для изготовления углового дивана нестандартных размеров. АСТРА справилась идеально: учли все пожелания по ткани и форме, привезли и установили без нареканий.",
  },
  {
    name: "Марина Л.",
    city: "Москва",
    text: "Кровать с мягким изголовьем стала настоящим украшением спальни. Мастера приехали на замер, предложили несколько вариантов обивки. Результат — именно то, что я хотела видеть.",
  },
];

export default function Stats() {
  return (
    <section
      aria-label="Отзывы клиентов"
      className="section-pad bg-linen"
    >
      <div className="wrap">
        <p className="eyebrow">Отзывы</p>

        <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-12">
          {reviews.map((review) => (
            <blockquote key={review.name} className="border-t border-steel pt-8">
              <p className="font-heading text-[19px] font-medium leading-[1.5] text-ink before:content-['«'] after:content-['»']">
                {review.text}
              </p>
              <footer className="mt-6 text-[12px] uppercase tracking-[0.16em] text-ash">
                {review.name} · {review.city}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
