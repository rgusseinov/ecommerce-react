import React from 'react';
import { BreadScrumb } from '../components/BreadScrumb';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { ProductGallery } from '../components/ProductGallery/Gallery';
import { ProductPageDetails } from '../components/ProductPageDetails/ProductPageDetails';

export const ProductPage: React.FC = () => {
  return (
    <>
      <Header
        popupState={undefined}
        triggerDropdownList={function (e: any): void {
          throw new Error('Function not implemented.');
        }}
      />
      <main className="product-page">
        <div className="container">
          <div className="product-page__wrapper">
            <div className="product-page__column">
              <BreadScrumb />
            </div>
            <div className="product-page__column column-content">
              <ProductGallery />
              <ProductPageDetails />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
