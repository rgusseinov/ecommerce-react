import React from 'react';
import logo from '../../assets/img/header/logo.svg';
import playMarket from '../../assets/img/footer/play-market.svg';
import appStore from '../../assets/img/footer/app-store.svg';
import vk from '../../assets/img/footer/vk.svg';
import insta from '../../assets/img/footer/insta.svg';
import youtube from '../../assets/img/footer/youtube.svg';
import telegram from '../../assets/img/footer/telegram.svg';

export const Social: React.FC = () => {
  return (
    <>
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
    </>
  );
};
