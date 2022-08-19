import circleBlue from '../../assets/img/product-page/circle-blue.svg';
import circlePink from '../../assets/img/product-page/circle-pink.svg';
import circleRed from '../../assets/img/product-page/circle-red.svg';

export const ProductColorSection: React.FC = () => {
  return (
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
                <span className="product-box__label">Без упаковки</span>
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
                <div className="product-box__sublabel">Розовый</div>
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
                <div className="product-box__sublabel">Синий</div>
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
                <div className="product-box__sublabel">Красный</div>
              </div>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};
