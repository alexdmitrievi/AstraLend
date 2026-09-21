const reviews = [
  {
    name: "Светлана К.",
    city: "Омск",
    text: "Заказывали диваны и кресла для переговорной зоны офиса. Всё сделали точно в срок, качество материалов выше ожиданий.",
  },
  {
    name: "Дмитрий П.",
    city: "Новосибирск",
    text: "Угловой диван нестандартных размеров: учли все пожелания по ткани и форме, привезли и установили без нареканий.",
  },
  {
    name: "Марина Л.",
    city: "Москва",
    text: "Кровать с мягким изголовьем стала украшением спальни. Мастера приехали на замер и предложили несколько вариантов обивки.",
  },
];

export default function Stats() {
  return (
    <section aria-label="Отзывы заказчиков" className="section-pad bg-linen">
      <div className="wrap">
        <p className="eyebrow">Отзывы заказчиков</p>

        <div className="mt-10 grid gap-8 [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]">
          {reviews.map((review) => (
            <blockquote
              key={review.name}
              className="flex flex-col gap-5 border-t border-steel pt-7"
            >
              <p className="font-heading text-[19px] font-medium leading-[1.6] text-ink before:content-['«'] after:content-['»']">
                {review.text}
              </p>
              <footer className="mt-auto text-[13px] tracking-[0.06em] text-ash">
                {review.name} · {review.city}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
