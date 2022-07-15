import React from 'react';
import { Link } from 'react-router-dom';
import compare from '../assets/img/main/product-item/compare.svg';
// import productImage from '../assets/img/main/product-item/product-image.png';
import capacity from '../assets/img/main/product-item/capacity.svg';
import power from '../assets/img/main/product-item/power.svg';
import speed from '../assets/img/main/product-item/speed.svg';
import timer from '../assets/img/main/product-item/timer.svg';
import shoppingCart2 from '../assets/img/main/product-item/shopping-cart2.svg';
import fav from '../assets/img/main/product-item/fav.svg';
import arrowLeft from '../assets/img/main/product-item/thumbnail-arrow-left.svg';
import arrowRight from '../assets/img/main/product-item/thumbnail-arrow-right.svg';
import scooterImg1 from '../assets/img/main/product-item/scooter-img-1.png';
import scooterImg2 from '../assets/img/main/product-item/scooter-img-2.png';
import scooterImg3 from '../assets/img/main/product-item/scooter-img-3.png';

export const ProductItem: React.FC = () => {
  return (
    <Link to="/product/1" className="products-list__item product-list-item">
      <div className="product-list-item__thumbnail product-thumbnail">
        <div className="product-thumbnail__container">
          <div className="product-thumbnail__marketing product-marketing">
            <div className="product-marketing__label hit">Хит</div>
            <div className="product-marketing__compare">
              <img src={compare} alt="kugoo" />
            </div>
          </div>

          <div className="product-thumbnail__image">
            <div className="image-switch">
              <div className="image-switch__item img1">
                <div className="image-switch__image">
                  <img src={scooterImg1} alt="kugoo" />
                </div>
              </div>
              <div className="image-switch__item img2">
                <div className="image-switch__image">
                  <img src={scooterImg2} alt="kugoo" />
                </div>
              </div>
              <div className="image-switch__item img3">
                <div className="image-switch__image">
                  <img src={scooterImg3} alt="kugoo" />
                </div>
              </div>
            </div>
            <ul className="product-thumbnail__navs thumbnail-navs">
              <li className="thumbnail-navs__item arrow-left">
                <img src={arrowLeft} alt="kugoo" />
              </li>
              <li className="thumbnail-navs__item arrow-right">
                <img src={arrowRight} alt="kugoo" />
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="product-list-item__body product-body">
        <div className="product-body__container">
          <div className="product-body__block product-title">
            Kugoo Kirin M4
          </div>
          <div className="product-body__block product-tech-params">
            <div className="product-tech-params__list params-list">
              <div className="params-list__item">
                <img src={capacity} alt="kugoo" />
                2000 mAh
              </div>
              <div className="params-list__item">
                <img src={power} alt="kugoo" />
                1,2 л.с.
              </div>
            </div>
            <div className="product-tech-params__list params-list">
              <div className="params-list__item">
                <img src={speed} alt="kugoo" />
                60 км/ч
              </div>
              <div className="params-list__item">
                <img src={timer} alt="kugoo" />5 часов 5 часов
              </div>
            </div>
          </div>
          <div className="product-body__block product-shopping">
            <div className="product-shopping__price product-section-price">
              <div className="product-section-price__discount">39 900 ₽</div>
              <div className="product-section-price__current">29 900 ₽</div>
            </div>
            <div className="product-shopping__buy shopping-cart">
              <div className="shopping-cart__icon circled">
                <img src={shoppingCart2} alt="kugoo" />
              </div>
              <div className="shopping-cart__icon circled">
                <img src={fav} alt="kugoo" />
              </div>
            </div>
          </div>
          <div className="product-body__block">
            <input
              type="button"
              className="buy-oneclick"
              value="Купить в 1 клик"
            />
          </div>
        </div>
      </div>
    </Link>
  );
};
