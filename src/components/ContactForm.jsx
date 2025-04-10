import React, { useState } from 'react';
import '../scss/components/_contactForm.scss'; 

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [agreement, setAgreement] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!agreement) {
      alert('Необходимо согласиться с политикой конфиденциальности');
      return;
    }

    console.log('Отправка формы:', {
      name,
      email,
      phone,
      message,
      agreement,
    });

    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
    setAgreement(false);

    alert('Сообщение успешно отправлено!');
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__left">
        <div className="form__group">
          <label htmlFor="name"><h3>Имя</h3></label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ваше имя"
          />
        </div>
        <div className="form__group">
          <label htmlFor="email"><h3>Email</h3></label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Ваш email"
          />
        </div>
        <div className="form__group">
          <label htmlFor="phone"><h3>Телефон</h3></label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Ваш телефон"
          />
        </div>
      </div>

      <div className="form__right">
        <div className="form__group">
          <label htmlFor="message"><h3>Сообщение</h3></label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ваше сообщение"
          />
        </div>

        <div className="form__bottom">
        <div className="form__agreement">
          <input
            type="checkbox"
            id="agreement"
            checked={agreement}
            onChange={() => setAgreement(!agreement)}
          />
          <label htmlFor="agreement">Я согласен с политикой конфиденциальности</label>
        </div>

        <button type="submit" className="form__submit-button">Отправить</button>
      </div>
      </div>
    </form>
  );
};

export default ContactForm;