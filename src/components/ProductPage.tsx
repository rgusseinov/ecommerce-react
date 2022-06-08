import { BreadScrumb } from "./BreadScrumb";
import productImage from '../assets/img/product-page/main.svg';
import productThumbnail from '../assets/img/product-page/small-image.svg';
import activeIcon from '../assets/img/product-page/active-icon.svg';
import compare from '../assets/img/product-page/compare.svg';
import share from '../assets/img/product-page/share.svg';

import card from '../assets/img/product-page/card.svg';
import book from '../assets/img/product-page/book.svg';
import circleBlue from '../assets/img/product-page/circle-blue.svg';
import circlePink from '../assets/img/product-page/circle-pink.svg';
import circleRed from '../assets/img/product-page/circle-red.svg';
import deliveryTruck from '../assets/img/product-page/delivery-truck.svg';
import info from '../assets/img/product-page/info-icon.svg';
import like from '../assets/img/product-page/like.svg';
import phoneHolder from '../assets/img/product-page/phone-holder.svg';


export const ProductPage: React.FC = () => {
  return (
    <main className="product-page">
      <div className="container">
        <div className="product-page__wrapper">
          <div className="product-page__column">
            <BreadScrumb />
          </div>
          <div className="product-page__column column-content">
            <div className="product-page__gallery product-gallery">
              <div className="product-gallery__main">
                <img src={productImage} alt="" />
              </div>
              <div className="product-gallery__thumbnails product-thumbnails">
                <div className="product-gallery__row">
                  <div className="product-thumbnail"><img src={productThumbnail} alt="" /></div>
                  <div className="product-thumbnail active"><img src={productThumbnail} alt=""/></div>
                  <div className="product-thumbnail"><img src={productThumbnail} alt=""/></div>
                  <div className="product-thumbnail"><img src={productThumbnail} alt=""/></div>
                  <div className="product-thumbnail"><img src={productThumbnail} alt=""/></div>
                  <div className="product-thumbnail"><img src={productThumbnail} alt=""/></div>
                  <div className="product-thumbnail"><img src={productThumbnail} alt=""/></div>
                </div>
                <div className="product-gallery__row">
                  <div className="product-thumbnail"><img src={productThumbnail} alt=""/></div>
                  <div className="product-thumbnail"><img src={productThumbnail} alt=""/></div>
                </div>
              </div>
            </div>
            
            <div className="product-page__info product-info">
              <div className="product-info__container">
                <div className="product-info__basic-info product-basic">
                  <div className="product-basic__title">
                    <h1>Kugoo Kirin M4</h1>
                  </div>
                  <div className="product-basic__subtitle product-subtitle">
                    <div className="product-subtitle__row">
                      <div className="product-subtitle__item">Просмотров 350</div>
                      <div className="product-subtitle__item">Купили 196 раз</div>
                      <div className="product-subtitle__item">Артикул: 2200000000026</div>
                    </div>
                    <div className="product-subtitle__row">
                      <div className="product-subtitle__item">
                        <img src={activeIcon} alt="В наличии" />
                        В наличии
                      </div>
                      <div className="product-subtitle__item">
                        <img src={compare} alt="Сравнить" />
                        Сравнить
                      </div>
                      <div className="product-subtitle__item">
                        <img src={share} alt="Поделиться" />
                        Поделиться
                      </div>
                    </div>
                    
                  </div>
                  <div className="product-basic__price product-price">
                    <div className="product-price__block price-block">
                      <span className="price-block__main-price">39 900 ₽</span>
                      <div className="price-block__discount-price">29 900 ₽</div>
                    </div>
                    <div className="product-price__block price-block price-block-bg">
                      <div className="price-block__wrapper">
                        <div className="price-block__icon"><img src={card} alt="Рассрочка" /></div>
                        <div className="price-block__info">
                          <span>Рассрочка:</span>
                          <br/> 1 760 ₽ в месяц / 24 месяца
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
    
                <div className="product-info__section info-section"> 
                  <div className="info-section__title">Комплектация <img src={info} alt="Комплектация"/></div>
                  
                  <div className="info-section__body">
                    <div className="info-section__row">
                      <div className="info-section product-box selected basic">Базовая</div>
                      <div className="info-section product-box max">Версия MAX</div>
                    </div>
                    <div className="info-section__row">
                      <div className="info-section product-box vip">VIP-версия</div>
                    </div>
                    <div className="product-info__border-line"></div>
                  </div>
                  <div className="info-section__footer info-subsection">
                    <div className="info-subsection__label">Покрышки</div>
                    <div className="info-subsection__content subsection-content">
                      <div className="subsection-content__block">
                        <div className="subsection-content__main-title">Внедорожная шипованная</div>
                        <div className="subsection-content__secondary-title">+ установка (с доп.комплектом базовых покрышек)</div>
                        <div className="subsection-content__sub">7600 руб.</div>
                      </div>
                      <div className="subsection-content__block settings">
                        <a href="/" className="settings__link">Изменить</a>
                      </div>
                    </div>
                    <div className="product-info__border-line"></div>
                  </div>							
                </div>
    
                <div className="product-info__section info-section">
                  <div className="info-section__title">Гарантия</div>
                  <div className="info-section__body">
                    <div className="info-section__row">
                      <div className="info-section__box product-box selected">
                        <div className="product-box__wrapper">	
                          <span className="product-box__label">Стандартная 1 год</span>
                          <div className="product-box__sublabel">Бесплатно</div>
                        </div>
                      </div>
                      <div className="info-section__box product-box">
                        <div className="product-box__wrapper">
                          <span className="product-box__label">Расширенная 2 года</span>
                          <div className="product-box__sublabel">2 990 руб.</div>
                        </div>
                      </div>
                    </div>							
                  </div>
                </div>
    
                <div className="product-info__section info-section">
                  <div className="info-section__title">Дополнительные услуги</div>
                    <div className="info-section__body">
                      <div className="info-section__row">
                        <div className="info-section_box product-box">
                          <div className="product-box__wrapper">
                            <span className="product-box__label">Нет</span>
                          </div>
                        </div>
                        <div className="info-section_box product-box">
                          <div className="product-box__wrapper">
                            <span className="product-box__label">Расширенная 2 года</span>
                            <div className="product-box__sublabel">2 990 руб.</div>
                          </div>
                        </div>
                      </div>
                      <div className="info-section__row">
                        <div className="info-section_box product-box">
                          <div className="product-box__wrapper">
                            <span className="product-box__label">Гидроизоляция</span>
                            <div className="product-box__sublabel">3 850 руб.</div>
                          </div>
                        </div>
                        <div className="info-section_box product-box">
                          <div className="product-box__wrapper">
                            <span className="product-box__label">Гидроизоляция <br /> и настройка</span>
                            <div className="product-box__sublabel">3 409 руб. (-30%)</div>
                          </div>
                        </div>
                      </div>
                      <div className="product-info__border-line"></div>
                    </div>
                  </div>
    
                  <div className="product-info__section gift-section">
                    <div className="gift-section__header">
                      <div className="gift-section__title">Подарочная упаковка</div>
                      <div className="gift-section__right-block">До конца акции <span>06:34:23:02</span></div>
                    </div>
                    <div className="gift-section__body">
                      <div className="gift-section__gift-box gift-box">
                        <div className="gift-box__title">2 подарка при покупке</div>
                        <div className="gift-box__row">
                          <div className="gift-box__block gift-block">
                            <img src={book} alt="Gift" />
                            Книга «6 вопросов об электротранспорте, на которые вы должны знать ответ».
                          </div>
                          <div className="gift-box__block gift-block">
                            <img src={phoneHolder} alt="Gift" />
                            Универсальный держатель для телефона
                          </div>										
                        </div>
                      </div>
                    </div>
                  </div>
    
                  
                  <div className="product-info__section info-section product-color-section">
                    <div className="info-section__body">
                      <div className="info-section__row">
                        <div className="info-section_box product-box">
                          <div className="product-box__wrapper">
                            <span className="product-box__label">Без упаковки</span>
                          </div>
                        </div>
                        <div className="info-section_box product-box">
                          <div className="product-box__wrapper">
                            <span className="product-box__label">
                              <img src={circlePink} alt="Circle Pink" />
                            </span>
                            <div className="product-box__sublabel">Розовый</div>
                          </div>
                        </div>
                      </div>
                      <div className="info-section__row">
                        <div className="info-section_box product-box">
                          <div className="product-box__wrapper">
                            <span className="product-box__label">
                              <img src={circleBlue} alt="Circle Blue" />
                            </span>
                            <div className="product-box__sublabel">Розовый</div>
                          </div>
                        </div>
                        <div className="info-section_box product-box">
                          <div className="product-box__wrapper">
                            <span className="product-box__label">
                              <img src={circleRed} alt="Circle Red" />
                            </span>
                            <div className="product-box__sublabel">Красный</div>
                          </div>
                        </div>
                      </div>	
                    </div>
                  </div>
    
                  <div className="product-info__section shopping-section shopping">
                    <div className="shopping__container">
                      <div className="shopping__header">
                        <div className="shopping__title">45 900 руб.</div>
                        <div className="shopping__right-block"><img src={like} alt="Нравится" /></div>
                      </div>
                      <div className="shopping__middle shopping-middle">
                        <div className="shopping__image">
                          <img src={deliveryTruck} alt="truck" />
                        </div>
                        <div className="shopping-text">
                          <div className="shopping-text__title">
                            Бесплатная доставка по РФ
                          </div>
                          <div className="shopping-text__subtitle">
                            от 1 дня при заказе до 01.09
                          </div>
                        </div>
                      </div>
                      <div className="shopping__cta shopping-cta">
                        <div className="shopping__cta btn btn-primary">Купить в 1 клик</div>
                        <div className="shopping__cta btn btn-bordered">Добавить в корзину</div>
                      </div>
                    </div>								
                  </div>						
                  <div className="shopping__footer">Хотите купить позже?</div>
                    
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>);
}
