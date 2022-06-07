import logo from '../assets/img/header/logo.svg';
import viberIcon from '../assets/img/header/viber.svg';
import whatsappIcon from '../assets/img/header/whatsapp.svg';
import telegramIcon from '../assets/img/header/telegram.svg';
import plusCallIcon from '../assets/img/header/plus-call.svg';
import catalogIcon from '../assets/img/header/catalog-icon.svg';
import compareIcon from '../assets/img/header/compare.svg';
import favIcon from '../assets/img/header/fav.svg';
import shoppingCart from '../assets/img/header/shopping-cart.svg';

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__top">
          <div className="header__column header-top">
            <div className="header-top-menu">
              <div className="header-top-menu__block">
                <a href="/" className="header-top-menu__link">Сервис</a>
              </div>
              <div className="header-top-menu__block">
                <a href="/" className="header-top-menu__link">Сотрудничество</a>
              </div>
              <div className="header-top-menu__block">
                <a href="/" className="header-top-menu__link">Заказать зконок</a>
              </div>
              <div className="header-top-menu__block block-social">
                <a href="/" className="block-social viber"><img src={viberIcon} alt="" /></a>
                <a href="/" className="block-social whatsapp"><img src={whatsappIcon} alt=""/></a>
                <a href="/" className="block-social telegram"><img src={telegramIcon} alt=""/></a>								
              </div>
            </div>
          </div>
          <div className="header__column header-contact">
            <div className="header-contact__phone">+7 (800) 505-54-61</div>
            <div className="header-contact__phone-icon"><img src={plusCallIcon} alt=""/></div>
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
              <div className="menu-catalog">
                <div className="menu-catalog__icon">
                  <img src={catalogIcon} alt="catalog" />
                </div>
                <div className="menu-catalog__label">Каталог</div>
              </div>
            </div>

            <div className="header-middle__column header-search">
              <div className="wrapper">
                <form action="" className="form-search">
                  <div className="form-search__dropdown search-dropdown">
                    <div className="search-dropdown__label">Везде</div>
                    <div className="search-dropdown__icon down"></div>
                  </div>
                  <div className="form-search__searchbar searchbar">
                    <input type="text" className="searchbar__input" placeholder="Искать самокат KUGO"/>
                    <input type="submit" className="searchbar__submit" value=""/>
                  </div>
                </form>
              </div>
            </div>

            <div className="header-middle__column header-shopping">
              <div className="header-shopping__block compare"><img src={compareIcon} alt="compare" /></div>
              <div className="header-shopping__block favourite"><img src={favIcon} alt="fav" /></div>
              <div className="header-shopping__block cart">
                <img src={shoppingCart} alt="shopping-cart" />Корзина
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
                <li><a href="/" className="menu-list__link">О Магазине</a></li>
                <li>
                  <a href="/" className="menu-list__link">Доставка и оплата</a>
                  <span className="menu-list__menu-icon bank">Доступна рассрочка</span>
                </li>
                <li><a href="/" className="menu-list__link">Тест-драйв</a></li>
                <li><a href="/" className="menu-list__link">Блог</a></li>
                <li><a href="/" className="menu-list__link">Контакты</a></li>
                <li>
                  <a href="/" className="menu-list__link">Акции</a>
                  <span className="menu-list__menu-icon percent"></span>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
  </header>);
}