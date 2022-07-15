import React, { useState } from 'react';
import logo from '../../assets/img/header/logo.svg';
import compareIcon from '../../assets/img/header/compare.svg';
import favIcon from '../../assets/img/header/fav.svg';
import shoppingCart from '../../assets/img/header/shopping-cart.svg';
import smallScooter from '../../assets/img/shopping-cart/popup/small-scooter.svg';
import trash from '../../assets/img/shopping-cart/popup/trash.svg';
import electricScooter from '../../assets/img/header/category-menu/electric-scooter.svg';
import mountainBike from '../../assets/img/header/category-menu/mountain-bike.svg';
import scooter2 from '../../assets/img/header/category-menu/scooter-2.svg';
import vacuumCleaner from '../../assets/img/header/category-menu/vacuum-cleaner.svg';
import weighingScale from '../../assets/img/header/category-menu/weighing-scale.svg';

export const HeaderMiddle: React.FC = () => {
  const [catalogShow, setCatalogShow] = useState<boolean>(false);
  const [shoppingCartShow, setShoppingCartShow] = useState<boolean>(false);

  const toggleCatalog = () => setCatalogShow(!catalogShow);
  const toggleShoppingCart = () => setShoppingCartShow(!shoppingCartShow);

  return (
    <>
      <div className="header__middle header-middle">
        <div className="container">
          <div className="wrapper">
            <div className="header-middle__column header-logo">
              <div className="header__logo">
                <img src={logo} alt="Kugoo" className="logo" />
              </div>
            </div>
            <div className="header-middle__column header-catalog">
              <a
                href="#"
                className={
                  catalogShow ? 'menu-catalog__link show' : 'menu-catalog__link'
                }
                onClick={toggleCatalog}
              >
                <div className="menu-catalog__icon"></div>
                <div className="menu-catalog__label">Каталог</div>
              </a>
            </div>
            <div className="header-middle__column header-search">
              <div className="wrapper">
                <form action="" className="form-search">
                  <div className="form-search__dropdown search-dropdown">
                    <div className="search-dropdown__label">Везде</div>
                    <div className="search-dropdown__icon down"></div>
                  </div>
                  <div className="form-search__searchbar searchbar">
                    <input
                      type="text"
                      className="searchbar__input"
                      placeholder="Искать самокат KUGO"
                    />
                    <input
                      type="submit"
                      className="searchbar__submit"
                      value=""
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="header-middle__column header-shopping">
              <div className="header-shopping__block compare">
                <img src={compareIcon} alt="compare" />
              </div>
              <div className="header-shopping__block favourite">
                <img src={favIcon} alt="fav" />
              </div>
              <a
                className="header-shopping__block h-shopping-cart"
                onClick={toggleShoppingCart}
              >
                <img src={shoppingCart} alt="shopping-cart" />
                Корзина
              </a>
              <div
                className={
                  shoppingCartShow
                    ? 'header__s-cart-popup s-cart-popup show'
                    : 'header__s-cart-popup s-cart-popup'
                }
              >
                <div className="s-cart-popup__top">
                  <div className="s-cart-popup__container">
                    <h4 className="s-cart-popup__title">В вашей корзине</h4>
                    <span className="s-cart-popup__info">2 товара</span>
                  </div>
                </div>
                <div className="s-cart-popup__content">
                  <div className="s-cart-popup__row">
                    <div className="s-cart-popup__item">
                      <div className="s-cart-popup__container">
                        <div className="s-cart-popup__image">
                          <img src={smallScooter} alt="small scooter" />
                        </div>
                        <div className="s-cart-popup__details s-cart-details">
                          <h5 className="s-cart-details__title">
                            Kugoo Kirin M4
                          </h5>
                          <span className="s-cart-details__price">
                            29 900 ₽
                          </span>
                          <span className="s-cart-details__qty">1 шт</span>
                        </div>
                        <span className="s-cart-popup__remove">
                          <img src={trash} alt="remove" />
                        </span>
                      </div>
                    </div>
                    <div className="s-cart-popup__item">
                      <div className="s-cart-popup__container">
                        <div className="s-cart-popup__image">
                          <img src={smallScooter} alt="small scooter" />
                        </div>
                        <div className="s-cart-popup__details s-cart-details">
                          <h5 className="s-cart-details__title">
                            Kugoo Kirin M4
                          </h5>
                          <span className="s-cart-details__price">
                            29 900 ₽
                          </span>
                          <span className="s-cart-details__qty">1 шт</span>
                        </div>
                        <span className="s-cart-popup__remove">
                          <img src={trash} alt="remove" />
                        </span>
                      </div>
                    </div>
                    <div className="s-cart-popup__item">
                      <div className="s-cart-popup__container">
                        <div className="s-cart-popup__image">
                          <img src={smallScooter} alt="small scooter" />
                        </div>
                        <div className="s-cart-popup__details s-cart-details">
                          <h5 className="s-cart-details__title">
                            Kugoo Kirin M4
                          </h5>
                          <span className="s-cart-details__price">
                            29 900 ₽
                          </span>
                          <span className="s-cart-details__qty">1 шт</span>
                        </div>
                        <span className="s-cart-popup__remove">
                          <img src={trash} alt="remove" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="s-cart-popup__footer s-cart-footer">
                  <div className="s-cart-popup__container">
                    <div className="s-cart-footer__price-block">
                      <span className="s-cart-footer__label">Сумма:</span>
                      <h4 className="s-cart-footer__price">59 800 ₽</h4>
                    </div>
                    <a href="#" className="s-cart-footer__checkout">
                      Оформить заказ
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          catalogShow
            ? 'header__middle header-overlay show'
            : 'header__middle header-overlay'
        }
      >
        <div className="container">
          <div className="header-overlay__wrapper overlay-wrapper">
            <div className="header-overlay__column catalog-category">
              <div className="catalog-category__body">
                <ul className="catalog-category__list">
                  <li className="catalog-category__item">
                    <a href="#" className="catalog-category__link active">
                      <img
                        className="catalog-category__icon"
                        src={electricScooter}
                        alt="icon"
                      />
                      <p className="catalog-category__text">Электросамокаты</p>
                    </a>
                  </li>
                  <li className="catalog-category__item">
                    <a href="#" className="catalog-category__link">
                      <img
                        className="catalog-category__icon"
                        src={scooter2}
                        alt="icon"
                      />
                      <p className="catalog-category__text">Электроскутеры</p>
                    </a>
                  </li>
                  <li className="catalog-category__item">
                    <a href="#" className="catalog-category__link">
                      <img
                        className="catalog-category__icon"
                        src={mountainBike}
                        alt="icon"
                      />
                      <p className="catalog-category__text">
                        Электровелосипеды
                      </p>
                    </a>
                  </li>
                  <li className="catalog-category__item">
                    <a href="#" className="catalog-category__link">
                      <img
                        className="catalog-category__icon"
                        src={vacuumCleaner}
                        alt="icon"
                      />
                      <p className="catalog-category__text">Робот-пылесосы</p>
                    </a>
                  </li>
                  <li className="catalog-category__item">
                    <a href="#" className="catalog-category__link">
                      <img
                        className="catalog-category__icon"
                        src={weighingScale}
                        alt="icon"
                      />
                      <p className="catalog-category__text">Весы</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="header-overlay__column catalog-subcategory">
              <div className="catalog-subcategory__block">
                <p className="catalog-subcategory__title">Особенности</p>
                <ul className="catalog-subcategory__list">
                  <li className="catalog-subcategory__item">
                    <a href="#" className="catalog-subcategory__link">
                      Внедорожный
                    </a>
                  </li>
                  <li className="catalog-subcategory__item">
                    <a href="#" className="catalog-subcategory__link">
                      Городской
                    </a>
                  </li>
                  <li className="catalog-subcategory__item">
                    <a href="#" className="catalog-subcategory__link">
                      Зимний
                    </a>
                  </li>
                  <li className="catalog-subcategory__item">
                    <a href="#" className="catalog-subcategory__link">
                      С сиденьем
                    </a>
                  </li>
                  <li className="catalog-subcategory__item">
                    <a href="#" className="catalog-subcategory__link">
                      Без сиденья
                    </a>
                  </li>
                </ul>
              </div>

              <div className="catalog-subcategory__block">
                <p className="catalog-subcategory__title">Для кого</p>
                <ul className="catalog-subcategory__list">
                  <li className="catalog-subcategory__item">
                    <a href="#" className="catalog-subcategory__link">
                      Для детей и подростков
                    </a>
                  </li>
                  <li className="catalog-subcategory__item">
                    <a href="#" className="catalog-subcategory__link">
                      Для взрослых
                    </a>
                  </li>
                  <li className="catalog-subcategory__item">
                    <a href="#" className="catalog-subcategory__link">
                      Для пенсионеров
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
