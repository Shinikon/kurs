// src/ReviewModal.jsx
import React, { useState } from 'react';
// import './ReviewModal.css'; // Import styles
import add from '../assets/img/addFile.svg'; // Import the add icon
import "../scss/components/_modal.scss"

const ReviewModal = ({ onClose }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [comment, setComment] = useState('');
    const [file, setFile] = useState(null);
    const [agreement, setAgreement] = useState(false);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!agreement) {
            alert('Необходимо согласиться на обработку персональных данных');
            return;
        }

        // Здесь можно добавить код для отправки отзыва на сервер
        console.log('Отправка отзыва:', {
            name,
            email,
            phone,
            comment,
            file,
            agreement,
        });

        onClose(); // Close the modal

        alert('Спасибо за ваш отзыв!'); // Используем alert
    };

    return (
        <div className="review__modal-container">
            <div className="review__file-upload">
                {/* <h3>Загрузите файл</h3> */}
                <label htmlFor="file-upload" className="custom-file-upload">
                    <img src={add} alt="" />
                    <input type="file" id="file-upload" onChange={handleFileChange} style={{ display: 'none' }} />
                {file && <p>Выбранный файл: {file.name}</p>}
                </label>

            </div>
            <form onSubmit={handleSubmit} className="review"> {/* Correct class name here */}
                <div className="review__form-inputs">
                    <div className="review__name-email">
                        <div>
                            <div className="review__form-label"><h3>Имя</h3></div>
                            <input
                                type="text"
                                placeholder="Иванов Иван"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="custom-input"
                            />
                            
                        </div>
                        <div>
                            <div className="review__form-label"><h3>Почта</h3></div>
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="custom-input"
                            />
                        </div>
                    </div>
                    <div className="review__form-label"><h3>Номер телефона</h3></div>
                    <div className="review__phone">
                        <input
                            type="tel"
                            placeholder="+7(---)--- -- --"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="custom-input"
                        />
                    </div>
                    <div className="review__form-label"><h3>Отзыв</h3></div>
                    <div className="review__text-area">
                        <textarea
                            placeholder="Ваш отзыв..."
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            className="custom-textarea"
                        />
                    </div>
                    <div className="review__checkbox">
                        <nobr>
                            <input
                                type="checkbox"
                                id="agreement"
                                checked={agreement}
                                onChange={() => setAgreement(!agreement)}
                            />
                            <label htmlFor="agreement">Согласие на обработку персональных данных</label>
                        </nobr>
                    </div>
                    <button type="submit" className="review__submit-button">Отправить отзыв</button>
                </div>
            </form>
        </div>
    );
};

export default ReviewModal;