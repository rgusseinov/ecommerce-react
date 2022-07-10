import React from 'react';
import rangePrice from '../assets/img/main/product-item/price-range.svg';
import rangeDash from '../assets/img/main/product-item/price-dash.svg';
import arrowDown from '../assets/img/main/product-item/arrow-down.svg';
import fire from '../assets/img/sidebar/icon-fire.svg';
import scooterSmall from '../assets/img/sidebar/scooter-small.svg';
import operator from '../assets/img/sidebar/operator.png';

export const CategoryFilter: React.FC = () => {
  return (
    <div className="product__category-filters category-filters">
      <div className="category-filters__container">
        <div className="filter-block filter-price">
          <div className="filter-block__header">Цена</div>
          <div className="filter-block__body">
            <div className="filter-block__price-range price-range">
              <img src={rangePrice} alt="price-range" />
            </div>
            <div className="filter-block__price-input price-input">
              <input type="text" className="price-input__from" />
              <img src={rangeDash} alt="price-dash" />
              <input type="text" className="price-input__to" />
            </div>
          </div>
        </div>

        <div className="filter-block filter-type">
          <div className="filter-block__header">Тип</div>
          <div className="filter-block__body">
            <div className="filter-block__item">
              <label className="filter-checkbox">
                <input type="checkbox" className="filter-checkbox__input" />{' '}
                Внедорожный
                <div className="filter-checkbox__hidden"></div>
              </label>
            </div>
            <div className="filter-block__item">
              <label className="filter-checkbox">
                <input type="checkbox" className="filter-checkbox__input" />{' '}
                Городской
                <div className="filter-checkbox__hidden"></div>
              </label>
            </div>
            <div className="filter-block__item">
              <label className="filter-checkbox">
                <input type="checkbox" className="filter-checkbox__input" />{' '}
                Зимний
                <div className="filter-checkbox__hidden"></div>
              </label>
            </div>
          </div>
        </div>

        <div className="filter-block filter-person">
          <div className="filter-block__header">Для кого</div>
          <div className="filter-block__body">
            <div className="filter-block__item">
              <label className="filter-checkbox">
                <input type="checkbox" className="filter-checkbox__input" /> Для
                взрослого
                <div className="filter-checkbox__hidden"></div>
              </label>
            </div>
            <div className="filter-block__item">
              <label className="filter-checkbox">
                <input type="checkbox" className="filter-checkbox__input" /> Для
                ребенка
                <div className="filter-checkbox__hidden"></div>
              </label>
            </div>
            <div className="filter-block__item">
              <label className="filter-checkbox">
                <input type="checkbox" className="filter-checkbox__input" /> Для
                пенcионера
                <div className="filter-checkbox__hidden"></div>
              </label>
            </div>
          </div>
        </div>

        <div className="filter-block filter-weight">
          <div className="filter-block__header">Вес</div>
          <div className="filter-block__body">
            <div className="filter-block__item">
              <label className="filter-checkbox">
                <input type="checkbox" className="filter-checkbox__input" />{' '}
                Легкие (до 15 кг)
                <div className="filter-checkbox__hidden"></div>
              </label>
            </div>
            <div className="filter-block__item">
              <label className="filter-checkbox">
                <input type="checkbox" className="filter-checkbox__input" />{' '}
                Средние (15-30 кг)
                <div className="filter-checkbox__hidden"></div>
              </label>
            </div>
            <div className="filter-block__item">
              <label className="filter-checkbox">
                <input type="checkbox" className="filter-checkbox__input" />{' '}
                Тяжелые (свыше 30 кг)
                <div className="filter-checkbox__hidden"></div>
              </label>
            </div>
          </div>
        </div>
        <div className="filter-block show-more-filters">
          Показать весь фильтр
          <img src={arrowDown} alt="Вниз" />
        </div>
      </div>
      <div className="page-sidebar_sidebar-adv sidebar-adv">
        <div className="sidebar-adv__container">
          <div className="sidebar-adv__product-of-month product-of-month">
            <div className="product-of-month__header">
              <div className="product-of-month__container">
                <div className="product-of-month__icon">
                  <img src={fire} alt="Fire" />
                </div>
                <h4 className="product-of-month__title">Товар месяца</h4>
              </div>
            </div>

            <div className="product-of-month__content">
              <div className="product-of-month__container">
                <div className="product-of-month__image">
                  <img src={scooterSmall} alt="Fire" />
                </div>
                <div className="product-of-month__body">
                  <h4 className="product-of-month__label">Kugoo Kirin M4</h4>
                  <span className="product-of-month__price">29 900 ₽</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="product__question sidebar-question">
        <div className="sidebar-question__container">
          <div className="sidebar-question__image">
            <img src={operator} alt="Manager" />
          </div>
          <div className="sidebar-question__body">Задать вопрос менеджеру</div>
        </div>
      </div>
    </div>
  );
};
