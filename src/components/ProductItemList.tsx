import { ProductItem } from './ProductItem';

export const ProductItemList: React.FC = () => {
  return (
    <div className="product__products-body products-body">
      <div className="products-body__list products-list">
        <ProductItem />
        <ProductItem />
        <ProductItem />        
      </div>
      <div className="products-body__list products-list">
        <ProductItem />
        <ProductItem />     
      </div>
    </div>);
}
