import React, { useState, useEffect, useRef } from 'react';
import { Footer } from '../components/Footer/Footer';
import { BreadScrumb } from '../components/BreadScrumb';
import { Sort } from '../components/Sort';
import { Subscription } from '../components/Subscription';
import { Header } from '../components/Header/Header';
import { CategoryFilter } from '../components/CategoryFilter/CategoryFilter';
import { ProductCardList } from '../components/ProductCard/CardList';

export const Home: React.FC = () => {
  const elementRef = useRef<any>();
  const [popupState, setPopupState] = useState<any>({
    isCallcenterShowing: false,
    isMenuShowing: false,
    isShoppingCartShowing: false,
    isSortByPriceShowing: false,
    isSortByParamsShowing: false
  });
  const popupDataTypeList = [
    'call-center',
    'catalog',
    'shopping-cart',
    'sortby-price',
    'sortby-params'
  ];
  const triggerDropdownList = (e: any) => {
    const { type } = e.target.dataset;

    switch (type) {
      case 'call-center':
        setPopupState((prev: any) => ({
          isCallcenterShowing: !popupState.isCallcenterShowing
        }));
        break;
      case 'catalog':
        setPopupState((prev: any) => ({
          isMenuShowing: !popupState.isMenuShowing
        }));
        break;
      case 'shopping-cart':
        setPopupState((prev: any) => ({
          isShoppingCartShowing: !popupState.isShoppingCartShowing
        }));
        break;
      case 'sortby-price':
        setPopupState((prev: any) => ({
          isSortByPriceShowing: !popupState.isSortByPriceShowing
        }));
        break;
      case 'sortby-params':
        setPopupState((prev: any) => ({
          isSortByParamsShowing: !popupState.isSortByParamsShowing
        }));
        break;
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      const { type } = event.target.dataset;
      if (!popupDataTypeList.includes(type)) {
        setPopupState({});
      }
    };
    document.body.addEventListener('click', handleClickOutside);
    return () => document.body.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <>
      <Header
        popupState={popupState}
        triggerDropdownList={triggerDropdownList}
      />
      <main className="product" ref={elementRef}>
        <div className="container">
          <BreadScrumb />
          <Sort
            popupState={popupState}
            triggerDropdownList={triggerDropdownList}
          />
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
