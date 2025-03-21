import spec1 from "../assets/img/specPortf1.svg";
import spec2 from "../assets/img/specPortf2.svg";
import spec3 from "../assets/img/specPortf3.svg";

import slide1 from "../assets/img/slide1.svg";
import slide2 from "../assets/img/slide2.svg";
import slide3 from "../assets/img/slide3.svg";
import slide4 from "../assets/img/slide4.svg";
import slide5 from "../assets/img/slide5.svg";

import slide6 from "../assets/img/slide6.svg";
import slide7 from "../assets/img/slide7.svg";
import slide8 from "../assets/img/slide8.svg";
import slide9 from "../assets/img/slide9.svg";
import slide10 from "../assets/img/slide10.svg";

// import slide1 from "../assets/img/slide1.svg";
// import slide2 from "../assets/img/slide2.svg";
// import slide3 from "../assets/img/slide3.svg";
// import slide4 from "../assets/img/slide4.svg";
// import slide5 from "../assets/img/slide5.svg";

import EmblaCarousel from "../components/Carousel";
import "../scss/components/_carousel.scss";

const OPTIONS = { loop: true };
const SLIDE_URLS1 = [slide1, slide2, slide3, slide4, slide5];

const SLIDE_URLS2 = [slide6, slide7, slide8, slide9, slide10];

function Portfolio() {
  return (
    <div className="wrapper">
      <div className="portfolio">
        <div className="portfolio__title">
          <h1
            style={{
              width: "1072px",
            }}
          >
            Портфолио специалистов Metaform
          </h1>
        </div>

        <div className="portfolio__spec">
          <div className="section">
            <div>
              <img src={spec1} />
            </div>
            <div>
              <h3>@Shinka4u</h3>
              <p>Основное направление: Архитектурная визуализация</p>
              <p>
                Я владею полным циклом производства: от обработки исходных
                данных и моделирования до текстурирования, освещения и
                постобработки. Использую передовые программные решения, такие
                как [перечислить используемые программы, например: 3ds Max,
                Revit, Lumion, V-Ray, Corona Renderer, Photoshop].
              </p>
            </div>
          </div>

          <EmblaCarousel slides={SLIDE_URLS1} options={OPTIONS} />

          <div className="section">
            <div>
              <img src={spec2} />
            </div>
            <div>
              <h3>@Shinka4u</h3>
              <p>Основное направление: Архитектурная визуализация</p>
              <p>
                Я владею полным циклом производства: от обработки исходных
                данных и моделирования до текстурирования, освещения и
                постобработки. Использую передовые программные решения, такие
                как [перечислить используемые программы, например: 3ds Max,
                Revit, Lumion, V-Ray, Corona Renderer, Photoshop].
              </p>
            </div>
          </div>

          <EmblaCarousel slides={SLIDE_URLS2} options={OPTIONS} />

          <div className="section">
            <div>
              <img src={spec3} />
            </div>
            <div>
              <h3>@Shinka4u</h3>
              <p>Основное направление: Архитектурная визуализация</p>
              <p>
                Я владею полным циклом производства: от обработки исходных
                данных и моделирования до текстурирования, освещения и
                постобработки. Использую передовые программные решения, такие
                как [перечислить используемые программы, например: 3ds Max,
                Revit, Lumion, V-Ray, Corona Renderer, Photoshop].
              </p>
            </div>
          </div>

          {/* СЛАЙДЕР */}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
