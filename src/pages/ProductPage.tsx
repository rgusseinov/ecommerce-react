import React from 'react';
import { BreadScrumb } from '../components/BreadScrumb';
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
                  <div className="product-thumbnail">
                    <img src={productThumbnail} alt="" />
                  </div>
                  <div className="product-thumbnail active">
                    <img src={productThumbnail} alt="" />
                  </div>
                  <div className="product-thumbnail">
                    <img src={productThumbnail} alt="" />
                  </div>
                  <div className="product-thumbnail">
                    <img src={productThumbnail} alt="" />
                  </div>
                  <div className="product-thumbnail">
                    <img src={productThumbnail} alt="" />
                  </div>
                  <div className="product-thumbnail">
                    <img src={productThumbnail} alt="" />
                  </div>
                  <div className="product-thumbnail">
                    <img src={productThumbnail} alt="" />
                  </div>
                </div>
                <div className="product-gallery__row">
                  <div className="product-thumbnail">
                    <img src={productThumbnail} alt="" />
                  </div>
                  <div className="product-thumbnail">
                    <img src={productThumbnail} alt="" />
                  </div>
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
                      <div className="product-subtitle__item">
                        ???????????????????? 350
                      </div>
                      <div className="product-subtitle__item">
                        ???????????? 196 ??????
                      </div>
                      <div className="product-subtitle__item">
                        ??????????????: 2200000000026
                      </div>
                    </div>
                    <div className="product-subtitle__row">
                      <div className="product-subtitle__item">
                        <img src={activeIcon} alt="?? ??????????????" />?? ??????????????
                      </div>
                      <div className="product-subtitle__item">
                        <img src={compare} alt="????????????????" />
                        ????????????????
                      </div>
                      <div className="product-subtitle__item">
                        <img src={share} alt="????????????????????" />
                        ????????????????????
                      </div>
                    </div>
                  </div>
                  <div className="product-basic__price product-price">
                    <div className="product-price__block price-block">
                      <span className="price-block__main-price">39 900 ???</span>
                      <div className="price-block__discount-price">
                        29 900 ???
                      </div>
                    </div>
                    <div className="product-price__block price-block price-block-bg">
                      <div className="price-block__wrapper">
                        <div className="price-block__icon">
                          <img src={card} alt="??????????????????" />
                        </div>
                        <div className="price-block__info">
                          <span>??????????????????:</span>
                          <br /> 1 760 ??? ?? ?????????? / 24 ????????????
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="product-info__section info-section">
                  <div className="info-section__title">
                    ????????????????????????
                    <img src={info} />
                  </div>

                  <div className="info-section__body e-type">
                    <div className="info-section__row">
                      <label className="e-type__label">
                        <input
                          type="radio"
                          name="equipmentType"
                          value="basic"
                          className="e-type__checkbox h-checkbox"
                        />
                        <div className="info-section product-box basic">
                          ??????????????
                        </div>
                      </label>

                      <label className="e-type__label">
                        <input
                          type="radio"
                          name="equipmentType"
                          value="max"
                          className="e-type__checkbox h-checkbox"
                        />
                        <div className="info-section product-box max">
                          ???????????? MAX
                        </div>
                      </label>
                    </div>
                    <div className="info-section__row">
                      <label className="e-type__label">
                        <input
                          type="radio"
                          name="equipmentType"
                          value="vip"
                          className="e-type__checkbox h-checkbox"
                        />
                        <div className="info-section product-box vip">
                          VIP-????????????
                        </div>
                      </label>
                    </div>
                    <div className="product-info__border-line"></div>
                  </div>

                  <div className="info-section__footer info-subsection">
                    <div className="info-subsection__label">????????????????</div>
                    <div className="info-subsection__content subsection-content">
                      <div className="subsection-content__block">
                        <div className="subsection-content__main-title">
                          ?????????????????????? ????????????????????
                        </div>
                        <div className="subsection-content__secondary-title">
                          + ?????????????????? (?? ??????.???????????????????? ?????????????? ????????????????)
                        </div>
                        <div className="subsection-content__sub">7600 ??????.</div>
                      </div>
                      <div className="subsection-content__block settings">
                        <a href="#" className="settings__link">
                          ????????????????
                        </a>
                      </div>
                    </div>
                    <div className="product-info__border-line"></div>
                  </div>
                </div>

                <div className="product-info__section info-section product-warranty">
                  <div className="info-section__title">????????????????</div>
                  <div className="info-section__body">
                    <div className="info-section__row">
                      <label className="product-warranty__label">
                        <input
                          type="radio"
                          name="productWarranty"
                          className="product-warranty__checkbox h-checkbox"
                          value="standard"
                        />
                        <div className="info-section__box product-box">
                          <div className="product-box__wrapper">
                            <span className="product-box__label">
                              ?????????????????????? 1 ??????
                            </span>
                            <div className="product-box__sublabel">
                              ??????????????????
                            </div>
                          </div>
                        </div>
                      </label>
                      <label className="product-warranty__label">
                        <input
                          type="radio"
                          name="productWarranty"
                          className="product-warranty__checkbox h-checkbox"
                          value="extended"
                        />
                        <div className="info-section__box product-box">
                          <div className="product-box__wrapper">
                            <span className="product-box__label">
                              ?????????????????????? 2 ????????
                            </span>
                            <div className="product-box__sublabel">
                              2 990 ??????.
                            </div>
                          </div>
                        </div>
                      </label>
                    </div>
                    <div className="product-info__border-line"></div>
                  </div>
                </div>

                <div className="product-info__section info-section additional-service">
                  <div className="info-section__title">
                    ???????????????????????????? ????????????
                  </div>
                  <div className="info-section__body">
                    <div className="info-section__row">
                      <label className="additional-service__label">
                        <input
                          type="radio"
                          name="additionalService"
                          className="additional-service__checkbox h-checkbox"
                          value="no"
                        />
                        <div className="info-section_box product-box empty-service-box">
                          <div className="product-box__wrapper">
                            <span className="product-box__label">??????</span>
                          </div>
                        </div>
                      </label>
                      <label className="additional-service__label">
                        <input
                          type="radio"
                          name="additionalService"
                          className="additional-service__checkbox h-checkbox"
                          value="extended"
                        />
                        <div className="info-section_box product-box">
                          <div className="product-box__wrapper">
                            <span className="product-box__label">
                              ?????????????????????? 2 ????????
                            </span>
                            <div className="product-box__sublabel">
                              2 990 ??????.
                            </div>
                          </div>
                        </div>
                      </label>
                    </div>

                    <div className="info-section__row">
                      <label className="additional-service__label">
                        <input
                          type="radio"
                          name="additionalService"
                          className="additional-service__checkbox h-checkbox"
                          value="no"
                        />
                        <div className="info-section_box product-box">
                          <div className="product-box__wrapper">
                            <span className="product-box__label">
                              ??????????????????????????
                            </span>
                            <div className="product-box__sublabel">
                              3 850 ??????.
                            </div>
                          </div>
                        </div>
                      </label>
                      <label className="additional-service__label">
                        <input
                          type="radio"
                          name="additionalService"
                          className="additional-service__checkbox h-checkbox"
                          value="extended"
                        />
                        <div className="info-section_box product-box">
                          <div className="product-box__wrapper">
                            <span className="product-box__label">
                              ?????????????????????? 2 ????????
                            </span>
                            <div className="product-box__sublabel">
                              2 990 ??????.
                            </div>
                          </div>
                        </div>
                      </label>
                    </div>
                    <div className="product-info__border-line"></div>
                  </div>
                </div>

                <div className="product-info__section gift-section">
                  <div className="gift-section__header">
                    <div className="gift-section__title">
                      ???????????????????? ????????????????
                    </div>
                    <div className="gift-section__right-block">
                      ???? ?????????? ?????????? <span>06:34:23:02</span>
                    </div>
                  </div>
                  <div className="gift-section__body">
                    <div className="gift-section__gift-box gift-box">
                      <div className="gift-box__title">
                        2 ?????????????? ?????? ??????????????
                      </div>
                      <div className="gift-box__row">
                        <div className="gift-box__block gift-block">
                          <img src={book} />
                          ?????????? ??6 ???????????????? ???? ??????????????????????????????????, ???? ?????????????? ????
                          ???????????? ?????????? ????????????.
                        </div>
                        <div className="gift-box__block gift-block">
                          <img src={phoneHolder} />
                          ?????????????????????????? ?????????????????? ?????? ????????????????
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="product-info__section info-section product-color">
                  <div className="info-section__body">
                    <div className="info-section__row">
                      <label className="product-color__label">
                        <input
                          type="radio"
                          name="productColor"
                          className="product-color__checkbox h-checkbox"
                          value="without"
                        />
                        <div className="info-section_box product-box empty-color-box">
                          <div className="product-box__wrapper">
                            <span className="product-box__label">
                              ?????? ????????????????
                            </span>
                          </div>
                        </div>
                      </label>
                      <label className="product-color__label">
                        <input
                          type="radio"
                          name="productColor"
                          className="product-color__checkbox h-checkbox"
                          value="pink"
                        />
                        <div className="info-section_box product-box">
                          <div className="product-box__wrapper">
                            <span className="product-box__label">
                              <img src={circlePink} alt="Circle pink" />
                            </span>
                            <div className="product-box__sublabel">??????????????</div>
                          </div>
                        </div>
                      </label>
                    </div>

                    <div className="info-section__row">
                      <label className="product-color__label">
                        <input
                          type="radio"
                          name="productColor"
                          className="product-color__checkbox h-checkbox"
                          value="blue"
                        />
                        <div className="info-section_box product-box">
                          <div className="product-box__wrapper">
                            <span className="product-box__label">
                              <img src={circleBlue} alt="Circle blue" />
                            </span>
                            <div className="product-box__sublabel">??????????</div>
                          </div>
                        </div>
                      </label>
                      <label className="product-color__label">
                        <input
                          type="radio"
                          name="productColor"
                          className="product-color__checkbox h-checkbox"
                          value="blue"
                        />
                        <div className="info-section_box product-box">
                          <div className="product-box__wrapper">
                            <span className="product-box__label">
                              <img src={circleRed} alt="Circle red" />
                            </span>
                            <div className="product-box__sublabel">??????????????</div>
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="product-info__section shopping-section shopping">
                  <div className="shopping__container">
                    <div className="shopping__header">
                      <div className="shopping__title">45 900 ??????.</div>
                      <div className="shopping__right-block">
                        <img src={like} />
                      </div>
                    </div>
                    <div className="shopping__middle shopping-middle">
                      <div className="shopping__image">
                        <img src={deliveryTruck} alt="truck" />
                      </div>
                      <div className="shopping-text">
                        <div className="shopping-text__title">
                          ???????????????????? ???????????????? ???? ????
                        </div>
                        <div className="shopping-text__subtitle">
                          ???? 1 ?????? ?????? ???????????? ???? 01.09
                        </div>
                      </div>
                    </div>
                    <div className="shopping__cta shopping-cta">
                      <div className="shopping__cta btn btn-primary">
                        ???????????? ?? 1 ????????
                      </div>
                      <div className="shopping__cta btn btn-bordered">
                        ???????????????? ?? ??????????????
                      </div>
                    </div>
                  </div>
                </div>
                <div className="shopping__footer">???????????? ???????????? ???????????</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
