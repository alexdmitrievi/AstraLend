"use client";

/*
  Лайтбокс вынесен в отдельный чанк и грузится по первому клику.
  Пока `yet-another-react-lightbox/styles.css` импортировался прямо в
  CatalogGrid, он попадал в роутовый CSS страницы /catalog — а главная
  префетчит этот роут с каждой ссылки на каталог и тянула стили, которые
  на ней не применяются («preloaded but not used» в консоли).
*/

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

export type Slide = {
  src: string;
  alt?: string;
  title?: string;
  description?: string;
};

type CatalogLightboxProps = {
  open: boolean;
  index: number;
  slides: Slide[];
  onClose: () => void;
};

export default function CatalogLightbox({
  open,
  index,
  slides,
  onClose,
}: CatalogLightboxProps) {
  return (
    <Lightbox
      open={open}
      close={onClose}
      index={index}
      slides={slides}
      plugins={[Fullscreen, Zoom]}
      carousel={{ finite: false }}
      controller={{ closeOnPullDown: true, closeOnBackdropClick: true }}
      zoom={{
        maxZoomPixelRatio: 4,
        zoomInMultiplier: 1.8,
        doubleTapDelay: 250,
        doubleClickDelay: 250,
        wheelZoomDistanceFactor: 140,
        pinchZoomDistanceFactor: 140,
      }}
    />
  );
}
