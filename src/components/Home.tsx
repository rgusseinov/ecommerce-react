import React from 'react';
import { BreadScrumb } from './BreadScrumb';
import { Sort } from './Sort';
import { CategoryFilter } from './CategoryFilter';
import { ProductItemList } from './ProductItemList';
import { Subscription } from './Subscription';

export const Home: React.FC = () => {
  return (
    <>
      <main className="product">
        <div className="container">
          <BreadScrumb />
          <Sort />
          <section className="product__page-content">
            <CategoryFilter />
            <ProductItemList />
          </section>
        </div>
        <Subscription />
      </main>
    </>
  );
};
