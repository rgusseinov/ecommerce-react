import React from 'react';
import gPay from '../../assets/img/footer/g-pay.svg';
import appPay from '../../assets/img/footer/app-pay.svg';
import logovisa from '../../assets/img/footer/logovisa.svg';
import master from '../../assets/img/footer/master.svg';
import maestro from '../../assets/img/footer/maestro.svg';
import webMoney from '../../assets/img/footer/web-money.svg';
import qiwi from '../../assets/img/footer/qiwi.svg';
import viber1 from '../../assets/img/footer/viber-1.svg';
import tele1 from '../../assets/img/footer/tele-1.svg';

export const Copyright: React.FC = () => {
  return (
    <>
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
    </>
  );
};
