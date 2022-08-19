import productThumbnail from '../../assets/img/product-page/small-image.svg';

export const ProductGalleryItem: React.FC = () => {
  return (
    <div className="product-thumbnail">
      <img src={productThumbnail} alt="" />
    </div>
  );
};
