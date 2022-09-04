import React, { useState } from 'react';
import classNames from 'classnames';
import arrowDownIcon from '../assets/img/main/product-item/arrow-down.svg';

export const Sort: React.FC = () => {
  const [showSortByPrice, setShowSortByPrice] = useState<boolean>(false);
  const [showSortByParam, setShowSortByParam] = useState<boolean>(false);

  const classSortByPrice = classNames({
    'sortby-controls__price sort-btn sortby-price': true,
    selected: showSortByPrice
  });

  const classShowSortByPrice = classNames({
    'sortby-price-popup price-popup': true,
    show: showSortByPrice
  });

  return (
    <div className="product__sortby-header sortby-header">
      <div className="sortby-header__block label">Фильтр</div>
      <div className="sortby-header__block sortby-controls">
        <div className="sortby-controls__label">Сортировать:</div>
        <div
          className={classSortByPrice}
          onClick={() => setShowSortByPrice(!showSortByPrice)}
        >
          <div className="sortby-price__container">
            По цене
            <img src={arrowDownIcon} alt="По цене" />
          </div>
          <div className={classShowSortByPrice}>
            <div className="sortby-price-popup__item">Сначало дорогие</div>
            <div className="sortby-price-popup__item selected">
              Сначала дешёвые
            </div>
          </div>
        </div>
        <div
          className={`sortby-controls__params sortby-params sort-btn ${
            showSortByParam ? 'selected' : ''
          }`}
          onClick={() => setShowSortByParam(!showSortByParam)}
        >
          <div className="sortby-params__container">
            По дальности хода
            <img src={arrowDownIcon} alt="По дальности хода" />
          </div>
          <div
            className={
              showSortByParam
                ? 'sortby-params-popup params-popup show'
                : 'sortby-params-popup params-popup'
            }
          >
            <div className="sortby-params-popup__item">Все</div>
            <div className="sortby-params-popup__item selected">
              По дальности хода
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
