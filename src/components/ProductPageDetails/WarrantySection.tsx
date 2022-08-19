export const ProductWarrantySection: React.FC = () => {
  return (
    <>
      <div className="product-info__section info-section product-warranty">
        <div className="info-section__title">Гарантия</div>
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
                  <span className="product-box__label">Стандартная 1 год</span>
                  <div className="product-box__sublabel">Бесплатно</div>
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
                  <span className="product-box__label">Расширенная 2 года</span>
                  <div className="product-box__sublabel">2 990 руб.</div>
                </div>
              </div>
            </label>
          </div>
          <div className="product-info__border-line"></div>
        </div>
      </div>
    </>
  );
};
