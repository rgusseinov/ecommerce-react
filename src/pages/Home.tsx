import React from 'react';
import { Header } from '../components/header/Header';
import { Footer } from '../components/Footer';
import { BreadScrumb } from '../components/BreadScrumb';
import { Sort } from '../components/Sort';
import { CategoryFilter } from '../components/CategoryFilter';
import { ProductItemList } from '../components/ProductItemList';
import { Subscription } from '../components/Subscription';

export const Home: React.FC = () => {
  return (
    <>
      <Header />
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
      <Footer />
    </>
  );
};
