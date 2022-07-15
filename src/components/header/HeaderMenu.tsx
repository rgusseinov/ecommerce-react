import React from 'react';

export const HeaderMenu: React.FC = () => {
  return (
    <>
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
    </>
  );
};
