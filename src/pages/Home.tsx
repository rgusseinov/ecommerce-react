import React from 'react';
import { Footer } from '../components/Footer/Footer';
import { BreadScrumb } from '../components/BreadScrumb';
import { Sort } from '../components/Sort';
import { Subscription } from '../components/Subscription';
import { Header } from '../components/Header/Header';
import { CategoryFilter } from '../components/CategoryFilter/CategoryFilter';
import { ProductCardList } from '../components/ProductCard/CardList';

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
            <ProductCardList />
          </section>
        </div>
        <Subscription />
      </main>
      <Footer />
    </>
  );
};
