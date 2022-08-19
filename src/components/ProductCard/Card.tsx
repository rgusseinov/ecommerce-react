import React from 'react';
import { Link } from 'react-router-dom';
import { CardThumbnail } from './CardThumbnail';
import { CardDetails } from './CardDetails';

export const ProductCard: React.FC = () => {
  return (
    <Link to="/product/1" className="products-list__item product-list-item">
      <CardThumbnail />
      <CardDetails />
    </Link>
  );
};
