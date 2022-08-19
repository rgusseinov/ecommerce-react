import compare from '../../assets/img/main/product-item/compare.svg';
import arrowLeft from '../../assets/img/main/product-item/thumbnail-arrow-left.svg';
import arrowRight from '../../assets/img/main/product-item/thumbnail-arrow-right.svg';
import scooterImg1 from '../../assets/img/main/product-item/scooter-img-1.png';
import scooterImg2 from '../../assets/img/main/product-item/scooter-img-2.png';
import scooterImg3 from '../../assets/img/main/product-item/scooter-img-3.png';

export const CardThumbnail: React.FC = () => {
  return (
    <div className="product-list-item__thumbnail product-thumbnail">
      <div className="product-thumbnail__container">
        <div className="product-thumbnail__marketing product-marketing">
          <div className="product-marketing__label hit">Хит</div>
          <div className="product-marketing__compare">
            <img src={compare} alt="kugoo" />
          </div>
        </div>

        <div className="product-thumbnail__image">
          <div className="image-switch">
            <div className="image-switch__item img1">
              <div className="image-switch__image">
                <img src={scooterImg1} alt="kugoo" />
              </div>
            </div>
            <div className="image-switch__item img2">
              <div className="image-switch__image">
                <img src={scooterImg2} alt="kugoo" />
              </div>
            </div>
            <div className="image-switch__item img3">
              <div className="image-switch__image">
                <img src={scooterImg3} alt="kugoo" />
              </div>
            </div>
          </div>
          <ul className="product-thumbnail__navs thumbnail-navs">
            <li className="thumbnail-navs__item arrow-left">
              <img src={arrowLeft} alt="kugoo" />
            </li>
            <li className="thumbnail-navs__item arrow-right">
              <img src={arrowRight} alt="kugoo" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
