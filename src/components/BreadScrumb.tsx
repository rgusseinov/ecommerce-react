import React from 'react';
export const BreadScrumb: React.FC = () => {
  return (
    <div className="product__breadcrumb">
      <ol className="breadscrumb__list">
        <li className="breadscrumb__item">Главная</li>
        <li className="breadscrumb__item">Каталог</li>
        <li className="breadscrumb__item active">Электросамокаты</li>
      </ol>
    </div>
  );
};
