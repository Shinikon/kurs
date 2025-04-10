import React, { useState } from "react";
import "../scss/components/_orderForm.scss"; 

const OrderForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [about, setAbout] = useState("");
  const [activeIndex, setActiveIndex] = useState(null);

  const buttons = [
    { label: "Архитектурная визуализация", index: 0 },
    { label: "3D-модели для видеоигр", index: 1 },
    { label: "Модели для рекламы", index: 2 },
  ];

  const handleButtonClick = (index) => {
    setActiveIndex(index);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Отправка данных:", { name, phone, email, about, activeIndex });

    setName("");
    setPhone("");
    setEmail("");
    setAbout("");
    setActiveIndex(null);

    alert("Форма успешно отправлена!");
  };

  return (
    <div>
      <form className="order__form" onSubmit={handleSubmit}>
        {" "}
        <label htmlFor="name">
          <input
            type="text"
            id="name"
            name="name"
            className="custom-input"
            placeholder="Ваше имя..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label htmlFor="phone">
          <input
            type="text"
            id="phone"
            name="phone"
            className="custom-input"
            placeholder="Номер телефона"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>
        <label htmlFor="email">
          <input
            type="email"
            id="email"
            name="email"
            className="custom-input"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="about">
          <textarea
            id="about"
            name="about"
            placeholder="Немного о проекте"
            className="custom-textarea"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
          />
        </label>
        <div className="order__categories">
          <h3>Необходимая услуга:</h3>
          <div className="order__categories_button-group">
            {buttons.map(({ label, index }) => (
              <button
                key={index}
                className={`order__categories_button-group_btn ${
                  activeIndex === index
                    ? "order__categories_button-group_btn_active"
                    : ""
                }`}
                onClick={() => handleButtonClick(index)}
                type="button"
              >
                {label}
              </button>
            ))}
          </div>
        </div>
        <button type="submit" className="order__form_submit-button">
          Отправить
        </button>{" "}
      </form>
    </div>
  );
};

export default OrderForm;
