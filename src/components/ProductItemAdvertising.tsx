import React from 'react';
import { Link } from 'react-router-dom';
import arrowRight from '../assets/img/main/product-item/arrow-right.svg';
import bannerMan from '../assets/img/main/product-item/banner-man-2.png';

export const ProductItemAdvertising: React.FC = () => {
  return (
    <Link
      to="/product/1"
      className="products-list__item product-list-item adv-block"
    >
      <div className="adv-block__header">
        <div className="adv-block__container">
          <h4>Не можете выбрать подходящую модель?</h4>
          <p>Пройдите тест и подберите самокат по своим параметрам</p>
          <div className="adv-block__cta">
            Подобрать самокат
            <img src={arrowRight} alt="kugoo" />
          </div>
        </div>
      </div>
      <div className="product-list-item__body product-body adv-block-body">
        <div className="product-body__container">
          <div className="adv-block-body__image">
            <img src={bannerMan} alt="kugoo" />
          </div>
        </div>
      </div>
    </Link>
  );
};
