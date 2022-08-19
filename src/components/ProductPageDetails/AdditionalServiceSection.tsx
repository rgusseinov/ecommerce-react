export const ProductAdditionalServiceSection: React.FC = () => {
  return (
    <div className="product-info__section info-section additional-service">
      <div className="info-section__title">Дополнительные услуги</div>
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
                <span className="product-box__label">Нет</span>
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
                <span className="product-box__label">Расширенная 2 года</span>
                <div className="product-box__sublabel">2 990 руб.</div>
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
                <span className="product-box__label">Гидроизоляция</span>
                <div className="product-box__sublabel">3 850 руб.</div>
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
                <span className="product-box__label">Расширенная 2 года</span>
                <div className="product-box__sublabel">2 990 руб.</div>
              </div>
            </div>
          </label>
        </div>
        <div className="product-info__border-line"></div>
      </div>
    </div>
  );
};
