import "../scss/app.scss";
import "../scss/components/_buttons.scss";
import React, { useState } from "react";
import ButtonGroup from "../components/ButtonGroup";
import box from "../assets/img/plastic.svg";

function Order() {
  return (
    <div className="wrapper">
      <div className="order">
        <h2 className="order__title">Заказать проект</h2>
        <div className="order__block">
          <div>
            <h3>О задаче</h3>
          </div>
          <div className="order__block_form">
            <form action="">
              {/* <label> */}
              <label htmlFor="">
                {/* <p>Ваше имя...</p> */}
                <input
                  type="text"
                  name="name"
                  className="custom-input"
                  placeholder="Ваше имя..."
                />
              </label>
              <label htmlFor="">
                {/* <p>Номер телефона</p> */}
                <input
                  type="text"
                  name="email"
                  className="custom-input"
                  placeholder="Номер телефона"
                />
              </label>
              <label htmlFor="">
                {/* <p>Email</p> */}
                <input
                  type="text"
                  name="phone"
                  className="custom-input"
                  placeholder="Email"
                />
              </label>
              <label htmlFor="">
                {/* <p>Немного о проекте</p> */}
                <textarea
                  type="text"
                  name="about"
                  placeholder="Немного о проекте"
                  className="custom-textarea"
                />
              </label>
              {/* </label> */}
            </form>
          </div>
        </div>
        <div className="order__img">
          <div className="order__img_container">
            <img
              src={box}
              alt="Background Image"
              className="order__img_container_background"
            />
          </div>
        </div>
        <div className="order__box">
          <h3>Необходимая услуга</h3>
          <div className="order__block_categories">
            <ButtonGroup />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
