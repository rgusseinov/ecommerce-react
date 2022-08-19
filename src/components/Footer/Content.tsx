import React from 'react';

export const Content: React.FC = () => {
  return (
    <>
      <section className="footer__content footer-content">
        <div className="footer-content__column">
          <div className="footer-content__catalog">
            <div className="footer-content__block footer-nav">
              <div className="footer-nav__title">Каталог товаров</div>
              <ul className="footer-nav__list">
                <li>
                  <a href="#" className="footer-nav__link">
                    Электросамокаты
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-nav__link">
                    Электроскутеры
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-nav__link">
                    Электровелосипеды
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-nav__link">
                    Электровелосипеды
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-content__for-buyer">
            <div className="footer-content__block footer-nav buyer-column-1">
              <div className="footer-nav__title">Покупателям</div>
              <ul className="footer-nav__list">
                <li>
                  <a href="#" className="footer-nav__link">
                    Сервисный центр
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-nav__link">
                    Доставка и оплата
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-nav__link">
                    Рассрочка
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-nav__link">
                    Тест-драйв
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-content__block footer-nav w-header">
              <div className="footer-nav__title w-header"></div>
              <ul className="footer-nav__list">
                <li>
                  <a href="#" className="footer-nav__link">
                    Блог
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-nav__link">
                    Сотрудничество
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-nav__link">
                    Контакты
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-nav__link">
                    Акции
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-content__column">
          <div className="footer-content__header">
            <div className="footer-nav__title">Контакты</div>
            <div className="footer-nav__cta">Заказать звонок</div>
          </div>
          <div className="footer-nav__container">
            <div className="footer-nav__row nav-row-1">
              <div className="footer-content__block footer-nav footer-contact">
                <div className="footer-nav__contact label">Call-центр</div>
                <div className="footer-nav__contact number">
                  +7 (800) 505-54-61
                </div>
                <div className="footer-nav__contact time">
                  Пн-Вс 10:00 - 20:00
                </div>
              </div>
              <div className="footer-content__block footer-nav footer-contact">
                <div className="footer-nav__contact label">Сервисный центр</div>
                <div className="footer-nav__contact phone">
                  +7 (499) 350-76-92
                </div>
                <div className="footer-nav__contact time">
                  Пн-Вс 10:00 - 20:00
                </div>
              </div>
            </div>
            <div className="footer-nav__row nav-row-2">
              <div className="footer-content__block footer-nav footer-contact">
                <div className="footer-nav__contact address">
                  Магазин в Москве ул. Ткацкая, 5 стр. 16
                </div>
                <div className="footer-nav__contact phone">
                  +7 (499) 406 15 87
                </div>
              </div>
              <div className="footer-content__block footer-nav footer-contact">
                <div className="footer-nav__contact label">
                  Магазин в Санкт-Петербургеул. Фрунзе, 2
                </div>
                <div className="footer-nav__contact phone">
                  +7 (499) 406 15 87
                </div>
              </div>
              <div className="footer-content__block footer-nav footer-contact">
                <div className="footer-nav__contact label">
                  Магазин в Краснодаре
                </div>
                <div className="footer-nav__contact phone">
                  + 7 (800) 505 54 61
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bottom-h-line"></div>
    </>
  );
};
