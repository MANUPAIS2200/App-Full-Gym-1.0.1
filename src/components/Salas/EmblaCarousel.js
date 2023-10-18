import React, { useState, useEffect, useCallback, useRef } from "react";
import { PrevButton, NextButton } from "./EmblaCarouselButtons";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { mediaByIndex } from "./media";
import "./embla.css";

const EmblaCarousel = ({ slides, options = { loop: false } }) => {
  const autoplay = useRef(
    Autoplay(
      { delay: 3000, stopOnInteraction: false },
      (emblaRoot) => emblaRoot.parentElement
    )
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [autoplay.current]);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
    autoplay.current.reset();
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
    autoplay.current.reset();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  // Agrega un estado para controlar si el carrusel está expandido o no
  const [isExpanded, setExpanded] = useState(false);

  // Función para manejar la expansión y contracción del carrusel
  const handleExpandToggle = () => {
    setExpanded(!isExpanded);
  };

  return (
    <div className="carousel-container">
      <div className="title-container">
        <div className="carousel-title">Título del Carrusel</div>
        <div className="arrow-button" style={{ width: '20px', height: '27.2px' }}>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="46"
    height="27.2"
    viewBox="0 0 58 34"
    fill="none"
  >
    <path
      d="M54 4L29 29.0711L3.99999 4.00301"
      stroke="black"
      stroke-width="8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</div>

      </div>
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((index) => (
              <div className="embla__slide" key={index}>
                <div className="embla__slide__inner">
                  <img
                    className="embla__slide__img"
                    src={mediaByIndex(index)}
                    alt="A cool cat."
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      </div>
    </div>
  );
};

export default EmblaCarousel;
