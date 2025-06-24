import React, { useState } from "react";
import { Link } from "react-router-dom";
import ModalTrigger from "../components/ModalTrigger";
import ReviewModal from "../components/ReviewModal";
import { Helmet } from "react-helmet";
import "../scss/app.scss";
import Specialists from "../components/Specialists";
import "../scss/components/_buttons.scss";
import box from "../assets/img/plastic.svg";
import rev1 from "../assets/img/rev1.svg";
import rev2 from "../assets/img/rev2.svg";
import rev3 from "../assets/img/rev3.svg";
import mod1 from "../assets/img/arch.svg";
import mod2 from "../assets/img/game.svg";
import mod3 from "../assets/img/hr.svg";
import mod11 from "../assets/img/arch1.svg";
import mod21 from "../assets/img/game1.svg";
import mod31 from "../assets/img/hr1.svg";

function Main() {
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const handleCloseReviewModal = () => {
    setIsReviewModalOpen(false);
  };

  return (
    <div className="main">
      {/* SEO мета-теги через React Helmet */}
      <Helmet>
        <title>Vertex Visions — Создание 3D моделей на заказ</title>
        <meta
          name="description"
          content="Vertex Visions — студия 3D дизайна, создающая высококачественные 3D модели на заказ для архитектуры, игр и рекламы. Закажите моделирование у профессионалов!"
        />
        <meta
          name="keywords"
          content="3D модели на заказ, 3D моделирование, архитектурная визуализация, 3D модели для игр, 3D модели для рекламы, студия 3D дизайна, создать 3D модель"
        />
        <link rel="canonical" href="https://shinikon.github.io/kurs/" />
        <meta
          property="og:title"
          content="Vertex Visions — Создание 3D моделей на заказ"
        />
        <meta
          property="og:description"
          content="Vertex Visions — студия 3D дизайна, создающая высококачественные 3D модели на заказ для архитектуры, игр и рекламы."
        />
        <meta property="og:url" content="https://shinikon.github.io/kurs/" />
        <meta property="og:type" content="website" />
        <meta
          name="twitter:title"
          content="Vertex Visions — Создание 3D моделей на заказ"
        />
        <meta
          name="twitter:description"
          content="Vertex Visions — студия 3D дизайна, создающая высококачественные 3D модели на заказ для архитектуры, игр и рекламы."
        />
      </Helmet>

      {/* Основной заголовок страницы */}
      <div className="main__title">
        <h1>Создаём 3D-модели под ваши задачи</h1>
      </div>

      {/* Блок "О нас" */}
      <div className="main__block">
        <div className="main__block_aboutUs">
          <div>
            <div className="main__background-image-container">
              <img
                src={box}
                alt="Background Image"
                className="main__background-image"
              />
            </div>
            <div className="text-content">
              <p>
                Metaform – это ведущая студия 3D-моделирования, предлагающая
                широкий спектр высококачественных услуг для различных отраслей.
                Наша команда опытных специалистов создаёт реалистичные и
                детализированные 3D-модели, анимацию и визуализации. Мы
                используем передовые технологии, чтобы удовлетворить потребности
                клиентов из разных сфер: архитектуры, видеоигр и рекламы. С нами
                вы получаете индивидуальный подход, своевременную сдачу проектов
                и высокое качество исполнения. Обращайтесь к нам за качественным
                3D-моделированием.
              </p>
            </div>
          </div>
          <Link to="/contacts">
            <button className="main__block_btn">Связаться с нами</button>
          </Link>
        </div>

        {/* Блок специалистов */}
        <div className="main__block_spec">
          <h2 className="main__block_spec_title">Наши специалисты</h2>
          <Specialists />
          <Link to="/Portfolio">
            <button className="main__block_spec_btn">
              Посмотреть портфолио
            </button>
          </Link>
        </div>
      </div>

      {/* Блок услуг */}
      <div className="main__serv">
        <h2 className="main__serv-title">Наши услуги</h2>
        <section className="main__serv_services">
          <ModalTrigger
            children={
              <img
                src={mod1}
                alt="Архитектура"
                className="main__serv_services_img"
              />
            }
            modalContent={
              <div className="modal-content-wrapper">
                <img src={mod11} alt="Архитектура" />
                <div className="modal-text-content">
                  <h3>Архитектурная визуализация</h3>
                  <p>
                    Архитектурная 3D-визуализация — это процесс создания
                    реалистичных трехмерных изображений зданий, интерьеров и
                    ландшафтов. Она используется архитекторами, дизайнерами и
                    застройщиками для презентаций, планирования и маркетинга.
                  </p>
                  <ul>
                    <li>Презентация проектов</li>
                    <li>Планирование и проектирование</li>
                    <li>Маркетинг и продажи</li>
                    <li>Обучение и образование</li>
                  </ul>
                  <p>Закажите проект и убедитесь в этом сами.</p>
                  <Link to="/order">
                    <button>
                      <h3>Заказать проект</h3>
                    </button>
                  </Link>
                </div>
              </div>
            }
          />

          {/* Модальные окна для других услуг */}
          <div className="main__serv_services_side">
            <ModalTrigger
              children={
                <img
                  src={mod2}
                  alt="Игры"
                  className="main__serv_services_side_img"
                />
              }
              modalContent={
                <div className="modal-content-wrapper">
                  <img src={mod21} alt="Игры" />
                  <div className="modal-text-content">
                    <h3>3D-модели для видеоигр</h3>
                    <p>
                      Создание 3D-персонажей и окружений для видеоигр — наша
                      специализация. Мы поможем вам создать уникальный игровой
                      мир, который погрузит игроков в яркий виртуальный опыт.
                    </p>
                    <ul>
                      <li>Разработка персонажей</li>
                      <li>Проектирование окружения</li>
                      <li>Анимация и взаимодействие</li>
                    </ul>
                    <p>Закажите проект и убедитесь в этом сами.</p>
                    <Link to="/order">
                      <button>
                        <h3>Заказать проект</h3>
                      </button>
                    </Link>
                  </div>
                </div>
              }
            />

            <ModalTrigger
              children={
                <img
                  src={mod3}
                  alt="HR"
                  className="main__serv_services_side_img"
                />
              }
              modalContent={
                <div className="modal-content-wrapper">
                  <img src={mod31} alt="HR" />
                  <div className="modal-text-content">
                    <h3>Модели для рекламы</h3>
                    <p>
                      Используйте 3D-модели в рекламе, чтобы повысить
                      вовлечённость и эффективность ваших кампаний. Мы создаём
                      визуализации продуктов, которые выделяются и запоминаются.
                    </p>
                    <ul>
                      <li>Презентация продуктов</li>
                      <li>Визуализация концепций</li>
                      <li>Увеличение вовлеченности</li>
                    </ul>
                    <p>Закажите проект и убедитесь в этом сами.</p>
                    <Link to="/order">
                      <button>
                        <h3>Заказать проект</h3>
                      </button>
                    </Link>
                  </div>
                </div>
              }
            />
          </div>
        </section>
      </div>

      {/* Блок отзывов + ссылки на авторитетные ресурсы */}
      <div className="main__reviews">
        <div className="main__reviews_top">
          <div className="main__reviews_top_block">
            <Link to="/Order" style={{ textDecoration: "none" }}>
              <button className="btn">
                <span>
                  <h2>01</h2>
                </span>
                <h3>Оформи заказ</h3>
              </button>
            </Link>
            <button className="btn">
              <span>
                <h2>02</h2>
              </span>
              <h3>Получи готовую 3D-модель</h3>
            </button>
            <ModalTrigger
              modalContent={
                <ReviewModal
                  isOpen={isReviewModalOpen}
                  onClose={handleCloseReviewModal}
                />
              }
              isReview={true}
            >
              <button className="btn">
                <span>
                  <h2>03</h2>
                </span>
                <h3>Напиши отзыв</h3>
              </button>
            </ModalTrigger>
          </div>
          <hr />
        </div>

        {/* Отзывы клиентов */}
        <div className="main__reviews_bottom">
          <div className="section">
            <div>
              <img src={rev1} />
            </div>
            <div>
              <h3>SatisfiedCustomer</h3>
              <p>
                Работа со студией оставила исключительно положительные
                впечатления! С самого начала, ребята проявили себя как настоящие
                профессионалы, внимательно выслушав все наши пожелания и
                предложив креативные решения. Процесс создания 3D-модели был
                полностью прозрачным – мы всегда были в курсе хода работы и
                могли оперативно вносить корректировки. Качество исполнения
                просто потрясающее, модель получилась детально проработанной и
                невероятно реалистичной. И всё это – в оговоренные сроки!
                Большое спасибо за профессионализм и индивидуальный подход!
                Рекомендую всем, кто ценит качество и оперативность!
              </p>
            </div>
            <hr />
          </div>
          <div className="section">
            <div>
              <img src={rev2} />
            </div>
            <div>
              <h3>𝖺𝗋𝖾𝗄𝗎𝗌𝗁𝗂𝗌𝗎_11</h3>
              <p>
                Мы получили полный контроль над процессом создания модели от
                начала и до конца. Команда профессионалов буквально с нуля
                собрала нашу модельку, проявив себя настоящими экспертами. Они
                не только великолепно справились с технической частью, но и
                предложили уникальный и впечатляющий дизайн, который идеально
                отразил наши ожидания. Было приятно наблюдать за их слаженной
                работой и профессиональным подходом к каждому этапу. Они не
                только учли все наши пожелания, но и предложили ценные советы,
                которые значительно улучшили конечный результат. Благодаря их
                эффективности и преданности делу, вся работа была выполнена на
                высочайшем уровне и в невероятно короткие сроки. Искренне
                благодарим команду за их профессионализм, креативность и
                оперативность! Результат превзошёл все наши ожидания!
              </p>
            </div>
            <hr />
          </div>
          <div className="section">
            <div>
              <img src={rev3} />
            </div>
            <div>
              <h3>yerilet</h3>
              <p>
                Не могу не поделиться восторгом от сотрудничества со студией
                MetaForm! Заказ был достаточно сложный, но ребята справились
                блестяще! От первоначальной концепции до финальной рендеринга –
                всё было выполнено на высшем уровне. Они проявили не только
                высочайший профессионализм в моделировании, но и чувство стиля,
                воплотив в жизнь наши самые смелые идеи. Быстрая коммуникация и
                оперативная обратная связь делали сотрудничество максимально
                комфортным. Результат превзошел все ожидания – модель выглядит
                просто потрясающе! Огромное спасибо за ваш труд и
                профессионализм! Безусловно, буду обращаться к вам снова и
                рекомендовать всем своим знакомым!
              </p>
            </div>
          </div>
        </div>

        {/* Ссылки на авторитетные ресурсы */}
        <div className="main__reviews_sources">
          <h3>Рекомендуем:</h3>
          <ul>
            <li>
              <a
                href="https://www.cgtrader.com"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                CGTrader
              </a>{" "}
              — платформа для покупки и продажи 3D-моделей
            </li>
            <li>
              <a
                href="https://www.artstation.com"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                ArtStation
              </a>{" "}
              — цифровые художники и портфолио
            </li>
            <li>
              <a
                href="https://www.behance.net"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                Behance
              </a>{" "}
              — дизайн-портфолио от Adobe
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Main;
