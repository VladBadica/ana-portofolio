import { useEffect, useRef } from "react";
import { t } from "../../i18n/index.js";
import "./ImageLightbox.css";

export default function ImageLightbox({ images, index, onClose, onNavigate }) {
  const closeRef = useRef(null);
  const isOpen = index !== null && index >= 0;
  const image = isOpen ? images[index] : null;

  useEffect(() => {
    if (!isOpen) return;

    const previouslyFocused = document.activeElement;
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";

    function handleKeydown(event) {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") onNavigate((index + 1) % images.length);
      if (event.key === "ArrowLeft") onNavigate((index - 1 + images.length) % images.length);
    }

    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
      document.body.style.overflow = "";
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus();
    };
  }, [isOpen, index, images.length, onClose, onNavigate]);

  if (!isOpen) return null;

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={image.alt}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <button ref={closeRef} type="button" className="lightbox__close" onClick={onClose} aria-label={t.lightbox.close}>
        <span aria-hidden="true">{t.lightbox.close}</span>
      </button>

      <button
        type="button"
        className="lightbox__nav lightbox__nav--prev"
        onClick={() => onNavigate((index - 1 + images.length) % images.length)}
        aria-label={t.lightbox.previous}
      >
        <ChevronIcon direction="left" />
      </button>

      <figure className="lightbox__figure">
        <img key={image.id} src={image.src} alt={image.alt} />
        <figcaption className="lightbox__caption">
          {image.alt}
          <span className="lightbox__count">
            {index + 1} / {images.length}
          </span>
        </figcaption>
      </figure>

      <button
        type="button"
        className="lightbox__nav lightbox__nav--next"
        onClick={() => onNavigate((index + 1) % images.length)}
        aria-label={t.lightbox.next}
      >
        <ChevronIcon direction="right" />
      </button>
    </div>
  );
}

function ChevronIcon({ direction }) {
  const flip = direction === "left" ? "scale(-1, 1)" : undefined;
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" style={{ transform: flip }} aria-hidden="true">
      <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
