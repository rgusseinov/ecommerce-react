import activeIcon from '../../assets/img/product-page/active-icon.svg';
import compare from '../../assets/img/product-page/compare.svg';
import share from '../../assets/img/product-page/share.svg';
import card from '../../assets/img/product-page/card.svg';

export const ProductBasicSection: React.FC = () => {
  return (
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
            <img src={activeIcon} alt="В наличии" />В наличии
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
            <div className="price-block__icon">
              <img src={card} alt="Рассрочка" />
            </div>
            <div className="price-block__info">
              <span>Рассрочка:</span>
              <br /> 1 760 ₽ в месяц / 24 месяца
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
