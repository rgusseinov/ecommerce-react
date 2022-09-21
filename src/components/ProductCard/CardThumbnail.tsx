import compare from '../../assets/img/main/product-item/compare.svg';
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

        <div className="product-thumbnail__image">
          <div className="image-switch">
            <Gallery />
          </div>
        </div>
      </div>
    </div>
  );
};
