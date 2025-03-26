import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

import Modal from "../components/Modal";
const EmblaCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel({ ...options, loop: true }, [
    AutoScroll({
      speed: 1.5,
      scrollAmount: 3,
      playOnInit: true,
      stopOnInteraction: false,
    }),
  ]);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll;
    if (!autoScroll) return;

    setIsPlaying(autoScroll.isPlaying());
    emblaApi
      .on("autoScroll:play", () => setIsPlaying(true))
      .on("autoScroll:stop", () => setIsPlaying(false))
      .on("reInit", () => setIsPlaying(autoScroll.isPlaying()));

    // Обработчики событий для взаимодействия пользователя
    const onInteraction = () => {
      autoScroll.stop(); // Останавливаем при любом взаимодействии
      setIsPlaying(false);
    };

    const onSettle = () => {
      // Запускаем снова через небольшой промежуток времени (например, 3 секунды)
      setTimeout(() => {
        if (!isPlaying) {
          // Проверяем, что не играем уже
          autoScroll.play();
          setIsPlaying(true);
        }
      }, 500); // 3 секунды (3000 миллисекунд)
    };

    emblaApi
      .on("dragStart", onInteraction)
      .on("pointerDown", onInteraction)
      .on("settle", onSettle); // Когда перетаскивание закончилось

    return () => {
      // Функция очистки
      emblaApi
        .off("dragStart", onInteraction)
        .off("pointerDown", onInteraction)
        .off("settle", onSettle);
    };
  }, [emblaApi, isPlaying]); // Добавлена isPlaying в зависимости useEffect

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((imageUrl, index) => (
            <div className="embla__slide" key={index}>
              <img
                src={imageUrl}
                alt={`Слайд ${index + 1}`}
                onClick={() => {
                  setIsModalOpen(true);
                  setSelectedImage(imageUrl);
                }}
                style={{ cursor: "pointer" }}
              />
            </div>
          ))}
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {selectedImage && (
          <div className="modal-image-container">
            <img src={selectedImage} alt="Увеличенное изображение" />
          </div>
        )}
      </Modal>
    </div>
  );
};

export default EmblaCarousel;
