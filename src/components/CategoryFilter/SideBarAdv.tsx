import fire from '../../assets/img/sidebar/icon-fire.svg';
import scooterSmall from '../../assets/img/sidebar/scooter-small.svg';

export const SideBarAdv: React.FC = () => {
  return (
    <div className="page-sidebar_sidebar-adv sidebar-adv">
      <div className="sidebar-adv__container">
        <div className="sidebar-adv__product-of-month product-of-month">
          <div className="product-of-month__header">
            <div className="product-of-month__container">
              <div className="product-of-month__icon">
                <img src={fire} alt="Fire" />
              </div>
              <h4 className="product-of-month__title">Товар месяца</h4>
            </div>
          </div>

          <div className="product-of-month__content">
            <div className="product-of-month__container">
              <div className="product-of-month__image">
                <img src={scooterSmall} alt="Fire" />
              </div>
              <div className="product-of-month__body">
                <h4 className="product-of-month__label">Kugoo Kirin M4</h4>
                <span className="product-of-month__price">29 900 ₽</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
