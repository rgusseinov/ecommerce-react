import React from 'react';
import { ProductItemAdvertising } from '../ProductItemAdvertising';
import { ProductCard } from './Card';

export const ProductCardList: React.FC = () => {
  return (
    <div className="product__products-body products-body">
      <div className="products-body__list products-list">
        <ProductCard />
        <ProductCard />
        <ProductItemAdvertising />
      </div>
      <div className="products-body__list products-list">
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};
