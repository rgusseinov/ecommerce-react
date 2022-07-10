import React from 'react';
import { ProductItem } from './ProductItem';
import { ProductItemAdvertising } from './ProductItemAdvertising';

export const ProductItemList: React.FC = () => {
  return (
    <div className="product__products-body products-body">
      <div className="products-body__list products-list">
        <ProductItem />
        <ProductItem />
        <ProductItemAdvertising />
      </div>
      <div className="products-body__list products-list">
        <ProductItem />
        <ProductItem />
      </div>
    </div>
  );
};
