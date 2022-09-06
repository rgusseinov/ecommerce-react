/* eslint-disable prettier/prettier */
import React from 'react';
import viberIcon from '../../assets/img/header/viber.svg';
import whatsappIcon from '../../assets/img/header/whatsapp.svg';
import telegramIcon from '../../assets/img/header/telegram.svg';
import plusCallIcon from '../../assets/img/header/plus-call.svg';
import classNames from 'classnames';

type HeaderTopProps = {
  popupState: any,
  triggerDropdownList: (e: any) => void
};

export const HeaderTop: React.FC<HeaderTopProps> = ({ popupState, triggerDropdownList }) => {
  const toggleCallcenterPopup = (evt: any) => {
    triggerDropdownList(evt);
  };

  const classCallCenter = classNames({
    'header-contact__callcenter-popup callcenter-popup': true,
    show: popupState.isCallcenterShowing ? 'show' : ''
  });
  // console.log(`popupState`, popupState);
  return (
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
            <a href="#" className="header-contact__call" onClick={toggleCallcenterPopup}>
              <div className="header-contact__phone" data-type="call-center">+7 (800) 505-54-61</div>
              <div className="header-contact__phone-icon">
                <img src={plusCallIcon} data-type="call-center" />
              </div>
            </a>
            <div
              className={classCallCenter}
            >
              <div className="callcenter-popup__item">
                <div className="callcenter-popup__container">
                  <div className="callcenter-popup__details сс-popup-details">
                    <h5 className="сс-popup-details__title">Сервисный центр</h5>
                    <div className="сс-popup-details__price">
                      + 7 (499) 350 76 92
                    </div>
                  </div>
                </div>
              </div>
              <div className="callcenter-popup__item">
                <div className="callcenter-popup__container">
                  <div className="callcenter-popup__details сс-popup-details">
                    <h5 className="сс-popup-details__title">Сервисный центр</h5>
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
                    <h5 className="сс-popup-details__title">Сервисный центр</h5>
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
    </div >
  );
};
