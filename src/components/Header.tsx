import React from 'react';
// import { Link } from 'react-router-dom';
import logo from '../assets/img/header/logo.svg';
import viberIcon from '../assets/img/header/viber.svg';
import whatsappIcon from '../assets/img/header/whatsapp.svg';
import telegramIcon from '../assets/img/header/telegram.svg';
import plusCallIcon from '../assets/img/header/plus-call.svg';
// import catalogIcon from '../assets/img/header/catalog-icon.svg';
import compareIcon from '../assets/img/header/compare.svg';
import favIcon from '../assets/img/header/fav.svg';
import shoppingCart from '../assets/img/header/shopping-cart.svg';
import smallScooter from '../assets/img/shopping-cart/popup/small-scooter.svg';
import trash from '../assets/img/shopping-cart/popup/trash.svg';
import electricScooter from '../assets/img/header/category-menu/electric-scooter.svg';
import mountainBike from '../assets/img/header/category-menu/mountain-bike.svg';
import scooter2 from '../assets/img/header/category-menu/scooter-2.svg';
import vacuumCleaner from '../assets/img/header/category-menu/vacuum-cleaner.svg';
import weighingScale from '../assets/img/header/category-menu/weighing-scale.svg';

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__top">
        <div className="container">
          <div className="wrapper">
            <div className="header__column header-top">
              <div className="header-top-menu">
                <div className="header-top-menu__block">
                  <a href="#" className="header-top-menu__link">
                    Сервис
                  </a>
                </div>
                <div className="header-top-menu__block">
                  <a href="#" className="header-top-menu__link">
                    Сотрудничество
                  </a>
                </div>
                <div className="header-top-menu__block">
                  <a href="#" className="header-top-menu__link">
                    Заказать зконок
                  </a>
                </div>
                <div className="header-top-menu__block block-social">
                  <a href="#" className="block-social viber">
                    <img src={viberIcon} />
                  </a>
                  <a href="#" className="block-social whatsapp">
                    <img src={whatsappIcon} />
                  </a>
                  <a href="#" className="block-social telegram">
                    <img src={telegramIcon} />
                  </a>
                </div>
              </div>
            </div>
            <div className="header__column header-contact">
              <a href="#" className="header-contact__call">
                <div className="header-contact__phone">+7 (800) 505-54-61</div>
                <div className="header-contact__phone-icon">
                  <img src={plusCallIcon} />
                </div>
              </a>

              <div className="header-contact__callcenter-popup callcenter-popup">
                <div className="callcenter-popup__item">
                  <div className="callcenter-popup__container">
                    <div className="callcenter-popup__details сс-popup-details">
                      <h5 className="сс-popup-details__title">
                        Сервисный центр
                      </h5>
                      <div className="сс-popup-details__price">
                        + 7 (499) 350 76 92
                      </div>
                    </div>
                  </div>
                </div>
                <div className="callcenter-popup__item">
                  <div className="callcenter-popup__container">
                    <div className="callcenter-popup__details сс-popup-details">
                      <h5 className="сс-popup-details__title">
                        Сервисный центр
                      </h5>
                      <div className="сс-popup-details__price">
                        + 7 (499) 350 76 92
                      </div>
                      <span className="сс-popup-details__tel">
                        пн-сб 10:00 - 19:00
                      </span>
                    </div>
                  </div>
                </div>
                <div className="callcenter-popup__item">
                  <div className="callcenter-popup__container">
                    <div className="callcenter-popup__details сс-popup-details">
                      <h5 className="сс-popup-details__title">
                        Сервисный центр
                      </h5>
                      <div className="сс-popup-details__price">
                        + 7 (499) 350 76 92
                      </div>
                      <span className="сс-popup-details__tel">
                        пн-сб 10:00 - 19:00
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="header__middle header-middle">
        <div className="container">
          <div className="wrapper">
            <div className="header-middle__column header-logo">
              <div className="header__logo">
                <img src={logo} alt="Kugoo" className="logo" />
              </div>
            </div>

            <div className="header-middle__column header-catalog">
              <a href="#" className="menu-catalog__link">
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
              <a className="header-shopping__block h-shopping-cart">
                <img src={shoppingCart} alt="shopping-cart" />
                Корзина
              </a>
              <div className="header__s-cart-popup s-cart-popup">
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
      <div className="header__middle header-overlay">
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
      <div className="header__menu header-menu">
        <div className="wrapper">
          <div className="container">
            <nav className="header-menu__menu">
              <ul className="header-menu__list menu-list">
                <li>
                  <a href="#" className="menu-list__link">
                    О Магазине
                  </a>
                </li>
                <li>
                  <a href="#" className="menu-list__link">
                    Доставка и оплата
                  </a>
                  <span className="menu-list__menu-icon bank">
                    Доступна рассрочка
                  </span>
                </li>
                <li>
                  <a href="#" className="menu-list__link">
                    Тест-драйв
                  </a>
                </li>
                <li>
                  <a href="#" className="menu-list__link">
                    Блог
                  </a>
                </li>
                <li>
                  <a href="#" className="menu-list__link">
                    Контакты
                  </a>
                </li>
                <li>
                  <a href="#" className="menu-list__link">
                    Акции
                  </a>
                  <span className="menu-list__menu-icon percent"></span>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
