import capacity from '../../assets/img/main/product-item/capacity.svg';
import power from '../../assets/img/main/product-item/power.svg';
import speed from '../../assets/img/main/product-item/speed.svg';
import timer from '../../assets/img/main/product-item/timer.svg';
import shoppingCart2 from '../../assets/img/main/product-item/shopping-cart2.svg';
import fav from '../../assets/img/main/product-item/fav.svg';

export const CardDetails: React.FC = () => {
  return (
    <div className="product-list-item__body product-body">
      <div className="product-body__container">
        <div className="product-body__block product-title">Kugoo Kirin M4</div>
        <div className="product-body__block product-tech-params">
          <div className="product-tech-params__list params-list">
            <div className="params-list__item">
              <img src={capacity} alt="kugoo" />
              2000 mAh
            </div>
            <div className="params-list__item">
              <img src={power} alt="kugoo" />
              1,2 л.с.
            </div>
          </div>
          <div className="product-tech-params__list params-list">
            <div className="params-list__item">
              <img src={speed} alt="kugoo" />
              60 км/ч
            </div>
            <div className="params-list__item">
              <img src={timer} alt="kugoo" />5 часов 5 часов
            </div>
          </div>
        </div>
        <div className="product-body__block product-shopping">
          <div className="product-shopping__price product-section-price">
            <div className="product-section-price__discount">39 900 ₽</div>
            <div className="product-section-price__current">29 900 ₽</div>
          </div>
          <div className="product-shopping__buy shopping-cart">
            <div className="shopping-cart__icon circled">
              <img src={shoppingCart2} alt="kugoo" />
            </div>
            <div className="shopping-cart__icon circled">
              <img src={fav} alt="kugoo" />
            </div>
          </div>
        </div>
        <div className="product-body__block">
          <input
            type="button"
            className="buy-oneclick"
            value="Купить в 1 клик"
          />
        </div>
      </div>
    </div>
  );
};
