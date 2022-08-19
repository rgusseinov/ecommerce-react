import productImage from '../../assets/img/product-page/main.svg';
import { ProductGalleryItem } from './GalleryItem';

export const ProductGallery: React.FC = () => {
  return (
    <>
      <div className="product-page__gallery product-gallery">
        <div className="product-gallery__main">
          <img src={productImage} alt="" />
        </div>
        <div className="product-gallery__thumbnails product-thumbnails">
          <div className="product-gallery__row">
            <ProductGalleryItem />
            <ProductGalleryItem />
            <ProductGalleryItem />
            <ProductGalleryItem />
          </div>
        </div>
      </div>
    </>
  );
};
