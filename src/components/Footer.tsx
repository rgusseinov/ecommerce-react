import React from 'react';
import logo from '../assets/img/header/logo.svg';
import playMarket from '../assets/img/footer/play-market.svg';
import appStore from '../assets/img/footer/app-store.svg';
import vk from '../assets/img/footer/vk.svg';
import insta from '../assets/img/footer/insta.svg';
import youtube from '../assets/img/footer/youtube.svg';
import telegram from '../assets/img/footer/telegram.svg';
import gPay from '../assets/img/footer/g-pay.svg';
import appPay from '../assets/img/footer/app-pay.svg';
import logovisa from '../assets/img/footer/logovisa.svg';
import master from '../assets/img/footer/master.svg';
import maestro from '../assets/img/footer/maestro.svg';
import webMoney from '../assets/img/footer/web-money.svg';
import qiwi from '../assets/img/footer/qiwi.svg';
import viber1 from '../assets/img/footer/viber-1.svg';
import tele1 from '../assets/img/footer/tele-1.svg';

/* header/logo.svg
        /play-market.svg
        app-store.svg
        vk.svg
        Insta
        youtube
        telegram
        /g-pay  app-pay.svg logovisa.svg master.svg maestro.svg /web-money.svg qiwi.svg
        viber-1
        tele-1 */

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
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
                  <div className="footer-nav__contact label">
                    Сервисный центр
                  </div>
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
        <section className="footer__social footer-social">
          <div className="footer-social__column">
            <div className="footer-social__logo">
              <img src={logo} alt="Logo" />
            </div>
            <div className="footer-social__app-markets">
              <img src={playMarket} alt="Play market" />
              <img src={appStore} alt="App store" />
            </div>
          </div>
          <div className="footer-social__column f-social-block">
            <div className="f-social-block__item">
              <img src={vk} alt="Vk" />
              <div className="f-social-block__content">
                <div className="f-social-block__label">Вконтакте</div>
                <div className="f-social-block__info">3 300</div>
              </div>
            </div>
            <div className="f-social-block__item">
              <img src={insta} alt="Insta" />
              <div className="f-social-block__content">
                <div className="f-social-block__label">Instagram</div>
                <div className="f-social-block__info">10 602</div>
              </div>
            </div>
            <div className="f-social-block__item">
              <img src={youtube} alt="Insta" />
              <div className="f-social-block__content">
                <div className="f-social-block__label">YouTube</div>
                <div className="f-social-block__info">3 603</div>
              </div>
            </div>
            <div className="f-social-block__item">
              <img src={telegram} alt="Insta" />
              <div className="f-social-block__content">
                <div className="f-social-block__label">Telegram</div>
                <div className="f-social-block__info">432</div>
              </div>
            </div>
          </div>
        </section>
        <div className="bottom-h-line"></div>
        <section className="footer__copyright footer-copyright">
          <div className="footer-copyright__column">
            <ul className="footer-copyright__list">
              <li>
                <a href="#" className="footer-copyright__link">
                  Реквизиты
                </a>
              </li>
              <li>
                <a href="#" className="footer-copyright__link">
                  Политика конфиденциальности
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-copyright__column footer-copyright-block">
            <div className="footer-copyright__container">
              <div className="footer-copyright__block payment-block">
                <div className="payment-block__container">
                  <img src={gPay} alt="Payment" />
                </div>
                <div className="payment-block__container">
                  <img src={appPay} alt="Payment" />
                </div>
                <div className="payment-block__container">
                  <img src={logovisa} alt="Payment" />
                </div>
                <div className="payment-block__container">
                  <img src={master} alt="Payment" />
                </div>
                <div className="payment-block__container">
                  <img src={maestro} alt="Payment" />
                </div>
                <div className="payment-block__container">
                  <img src={webMoney} alt="Payment" />
                </div>
                <div className="payment-block__container">
                  <img src={qiwi} alt="Payment" />
                </div>
              </div>
              <div className="footer-copyright__block chat-block">
                <span>Online чат:</span>
                <img src={viber1} alt="Chat" />
                <img src={tele1} alt="Chat" />
                <img src={tele1} alt="Chat" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};
