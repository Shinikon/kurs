// src/ReviewModal.jsx
import React, { useState } from 'react';
import Modal from './Modal';
import './ReviewModal.css';
import add from './add.png';

const ReviewModal = ({ isOpen, onClose }) => {
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

        onClose();
    };

    return (
        <form onSubmit={handleSubmit} className="review-modal">
            <div className="review-file-upload" onClick={() => document.getElementById('fileInput').click()}>
                <span>
                    <h2>Прикрепить файл</h2>
                    <img src={add} alt="Прикрепить файл" />
                </span>
                <input type="file" id="fileInput" style={{ display: 'none' }} onChange={handleFileChange} />
            </div>

            <div className="review-form-inputs">
                <div className="review-name-email">
                    <div>
                        <div className="review-form-label"><h3>Имя</h3></div>
                        <input
                            type="text"
                            placeholder="Иванов Иван"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <div className="review-form-label"><h3>Почта</h3></div>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </div>
                <div className="review-form-label"><h3>Номер телефона</h3></div>
                <div className="review-phone">
                    <input
                        type="tel"
                        placeholder="+7(---)--- -- --"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <div className="review-form-label"><h3>Отзыв</h3></div>
                <div className="review-text-area">
                    <textarea
                        placeholder="Ваш отзыв"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />
                </div>
                <div className="review-checkbox">
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
                <button type="submit" className="review-submit-button">Отправить отзыв</button>
            </div>
        </form>

    );
};

export default ReviewModal;