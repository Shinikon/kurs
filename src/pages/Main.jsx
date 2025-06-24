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
        <title>Создание 3D моделей на заказ | Vertex Visions</title>
        <meta
          name="description"
          content="Vertex Visions предлагает услуги по созданию 3D моделей на заказ: архитектурная визуализация, модели для игр и рекламы. Закажите 3D моделирование у профессионалов!"
        />
        <meta
          name="keywords"
          content="3D модели на заказ, 3D моделирование, архитектурная визуализация, 3D модели для игр, 3D модели для рекламы, студия 3D дизайна, создать 3D модель"
        />
        <link rel="canonical" href="https://your-site.com/" />
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
              <p>Отличная работа! Все в срок, всё как договаривались!</p>
            </div>
            <hr />
          </div>
          <div className="section">
            <div>
              <img src={rev2} />
            </div>
            <div>
              <h3>arekushisu_11</h3>
              <p>Профессионалы своего дела. Результат превзошёл ожидания!</p>
            </div>
            <hr />
          </div>
          <div className="section">
            <div>
              <img src={rev3} />
            </div>
            <div>
              <h3>yerilet</h3>
              <p>Буду обращаться снова. Очень доволен работой команды!</p>
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
