/* eslint-disable @typescript-eslint/no-explicit-any */
import compare from '../../assets/img/main/product-item/compare.svg';
import arrowLeft from '../../assets/img/main/product-item/thumbnail-arrow-left.svg';
import arrowRight from '../../assets/img/main/product-item/thumbnail-arrow-right.svg';
import { Gallery } from './Gallery';

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

        <div className="product-thumbnail__image_test">
          <div className="image-switch_test">
            <br />
            <Gallery />
          </div>
          <ul className="product-thumbnail__navs thumbnail-navs">
            {/*<li className="thumbnail-navs__item arrow-left" data-type="left">
              <img src={arrowLeft} alt="kugoo" data-type="left" />
            </li>
            <li className="thumbnail-navs__item arrow-right" data-type="right">
              <img src={arrowRight} alt="kugoo" data-type="right" />
            </li>*/}
          </ul>
        </div>
      </div>
    </div>
  );
};
