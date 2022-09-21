/* eslint-disable prettier/prettier */
import React from 'react';
import classNames from 'classnames';
import arrowDownIcon from '../assets/img/main/product-item/arrow-down.svg';
import popupProps from '../types/types';

export const Sort: React.FC<popupProps> = ({ popupState, triggerDropdownList }) => {
  const toggleSortByPrice = (evt: any) => triggerDropdownList(evt);
  const toggleSortByParams = (evt: any) => triggerDropdownList(evt);

  const classSortByPrice = classNames({
    'sortby-controls__price sort-btn sortby-price': true,
    selected: popupState.isSortByPriceShowing
  });

  const classSortByPriceInner = classNames({
    'sortby-price-popup price-popup': true,
    show: popupState.isSortByPriceShowing
  });

  // console.log(`price`, popupState.isSortByPriceShowing);
  return (
    <div className="product__sortby-header sortby-header">
      <div className="sortby-header__block label">Фильтр</div>
      <div className="sortby-header__block sortby-controls">
        <div className="sortby-controls__label">Сортировать:</div>

        <div
          className={classSortByPrice}
          data-type="sortby-price"
          onClick={toggleSortByPrice}
        >
          <div className="sortby-price__container" data-type="sortby-price">
            По цене
            <img src={arrowDownIcon} alt="По цене" />
          </div>
          <div className={classSortByPriceInner}>
            <div className="sortby-price-popup__item">Сначало дорогие</div>
            <div className="sortby-price-popup__item selected">
              Сначала дешёвые
            </div>
          </div>
        </div>

        <div
          className={`sortby-controls__params sortby-params sort-btn ${popupState.isSortByParamsShowing ? 'selected' : ''
            }`}
          data-type="sortby-params"
          onClick={toggleSortByParams}
        >
          <div className="sortby-params__container" data-type="sortby-params">
            По дальности хода
            <img src={arrowDownIcon} alt="По дальности хода" />
          </div>
          <div
            className={`sortby-params-popup params-popup ${popupState.isSortByParamsShowing ? 'show' : ''}`}
          >
            <div className="sortby-params-popup__item" data-type="sortby-params">Все</div>
            <div className="sortby-params-popup__item selected">
              По дальности хода
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
