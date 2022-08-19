import deliveryTruck from '../../assets/img/product-page/delivery-truck.svg';
import like from '../../assets/img/product-page/like.svg';

export const ProductShoppingSection: React.FC = () => {
  return (
    <>
      <div className="product-info__section shopping-section shopping">
        <div className="shopping__container">
          <div className="shopping__header">
            <div className="shopping__title">45 900 руб.</div>
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
                Бесплатная доставка по РФ
              </div>
              <div className="shopping-text__subtitle">
                от 1 дня при заказе до 01.09
              </div>
            </div>
          </div>
          <div className="shopping__cta shopping-cta">
            <div className="shopping__cta btn btn-primary">Купить в 1 клик</div>
            <div className="shopping__cta btn btn-bordered">
              Добавить в корзину
            </div>
          </div>
        </div>
      </div>
      <div className="shopping__footer">Хотите купить позже?</div>
    </>
  );
};
