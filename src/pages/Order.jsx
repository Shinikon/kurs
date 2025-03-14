import '../scss/app.scss';
import '../scss/components/_buttons.scss';
import React, { useState } from 'react';
import ButtonGroup from '../components/ButtonGroup'
import box from '../assets/img/plastic.svg';

function Order() {

    return (

      <div className="wrapper">
        <div className="order">
          <h2 className="main__title">
            Заказать проект
          </h2>
          <div className="block">
            <div>
              <h3>О задаче</h3>
            </div>
            <div className="form">
              <form action="">
                <label>
                  <p>Ваше имя...</p>
                  <input type="text" name="name" />
                  <p>Номер телефона</p>
                  <input type="text" name="email" />
                  <p>Email</p>
                  <input type="text" name="phone" />
                  <p>Немного о проекте</p>
                  <input type="text" name="about" />
                </label>
              </form>
            </div>
          </div>
          <div className="img">
          <div className="background-image-container">
                <img src={box} alt="Background Image" className="background-image" />
          </div>
          </div>
          <div className="block"
          style={{
            marginTop:'80px'
          }}>
            <div>
              <h3>Необходимая услуга</h3>
            </div>
            <div className="categories">
            <ButtonGroup />
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Order;