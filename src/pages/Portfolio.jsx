import spec1 from '../assets/img/specPortf1.svg'
import spec2 from '../assets/img/specPortf2.svg'
import spec3 from '../assets/img/specPortf3.svg'

function Portfolio() {
    return (
      <div className="wrapper">
        <div className="portfolio">
          <div className="main__title">
            <h1 style={{
              width:'1072px'
            }}>Портфолио специалистов Metaform</h1>
          </div>

          <div className="portfolio__spec">
            <div className="section">
              <div>
                <img src={spec1} />
              </div>
              <div>
                <h3>@Shinka4u</h3>
                <p>Основное направление: Архитектурная визуализация</p>
                <p>Я владею полным циклом производства: от обработки исходных данных и моделирования до текстурирования, освещения и постобработки. Использую передовые программные решения, такие как [перечислить используемые программы, например: 3ds Max, Revit, Lumion, V-Ray, Corona Renderer, Photoshop].</p>
              </div>
            </div>

            {/* СЛАЙДЕР */}
            
            <div className="section">
              <div>
                <img src={spec2} />
              </div>
              <div>
                <h3>@Shinka4u</h3>
                <p>Основное направление: Архитектурная визуализация</p>
                <p>Я владею полным циклом производства: от обработки исходных данных и моделирования до текстурирования, освещения и постобработки. Использую передовые программные решения, такие как [перечислить используемые программы, например: 3ds Max, Revit, Lumion, V-Ray, Corona Renderer, Photoshop].</p>
              </div>
            </div>
            
            {/* СЛАЙДЕР */}
            
            <div className="section">
              <div>
                <img src={spec3} />
              </div>
              <div>
                <h3>@Shinka4u</h3>
                <p>Основное направление: Архитектурная визуализация</p>
                <p>Я владею полным циклом производства: от обработки исходных данных и моделирования до текстурирования, освещения и постобработки. Использую передовые программные решения, такие как [перечислить используемые программы, например: 3ds Max, Revit, Lumion, V-Ray, Corona Renderer, Photoshop].</p>
              </div>
            </div>
            
            {/* СЛАЙДЕР */}
            
          </div>
        </div>
      </div>
    );
  }
  
  export default Portfolio;