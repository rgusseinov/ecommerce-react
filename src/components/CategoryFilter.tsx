import React from 'react';
import rangePrice from '../assets/img/main/product-item/price-range.svg';
import rangeDash from '../assets/img/main/product-item/price-dash.svg';
import arrowDown from '../assets/img/main/product-item/arrow-down.svg';

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
    </div>
  );
};
