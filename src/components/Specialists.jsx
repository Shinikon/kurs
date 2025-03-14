import React from 'react';
import data from '../OurSpec';
import "../scss/app.scss";

const prepareData = (data, repeatCount) => {
  const repeatedData = [];
  for (let i = 0; i < repeatCount; i++) {
    repeatedData.push(...data.map((item, index) => ({
      ...item,
      isLast: (i === repeatCount - 1) && (index === data.length - 1),
    })));
  }
  return repeatedData;
};

const Specialists = () => {
  const repeatCount = 3;
  const preparedData = prepareData(data, repeatCount);

  if (!data || data.length === 0) {
    return <p>Нет данных для отображения специалистов.</p>;
  }

  return (
    <div className="specialists"> {/* Корневой контейнер */}
      {preparedData.map((specialist) => (
        <div
          className="specialists_card"
          key={specialist.id}
          style={{ borderBottom: specialist.isLast ? 'none' : '1px solid white' }}
        >
          <img
            src={specialist.imageUrl}
            alt={specialist.title}
            className="specialists_image"
          />
          <div className="specialists_info">
            <p className="specialists_title">{specialist.title}</p>
            <p className="specialists_description">{specialist.descriptionn}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Specialists;