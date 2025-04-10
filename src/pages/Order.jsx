import "../scss/app.scss";
import "../scss/components/_buttonGroup.scss";
import React from "react";
import box from "../assets/img/plastic.svg";
import OrderForm from "../components/OrderForm";

function Order() {
  return (
    <div className="wrapper">
      <div className="order">
        <h2 className="order__title">Заказать проект</h2>
        <div className="order__block">
          {/* <div> */}
          <h3>О задаче:</h3>

        </div>
        <OrderForm />
        <div className="order__img">
          <div className="order__img_container">
            <img
              src={box}
              alt="Background Image"
              className="order__img_container_background"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
