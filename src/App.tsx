import { BreadScrumb } from './components/BreadScrumb';
import { Header } from './components/Header';
import { Sort } from './components/Sort';
import { CategoryFilter } from './components/CategoryFilter';
import '../src/scss/App.scss';
import { ProductItem } from './components/ProductItem';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="product">
        <div className="container">
          <BreadScrumb />
          <Sort />

          {/* <!-- Page content with products  --> */}
          <section className="product__page-content">
          <CategoryFilter />
            <div className="product__products-body products-body">
              <div className="products-body__list products-list">
                <ProductItem />            
              </div>
              </div>
          </section>

          <section className="product__subscription product-subscription">
            <div className="wrappper">
              <div className="container subscription-container">

                <div className="product-subscription__body">
                  <div className="product-subscription__column subscription-label">
                    Оставьте свою почту и станьте первым, кто получит скидку на новые самокаты
                  </div>
                  <div className="product-subscription__column subscription-form">
                    <form action="#" className="subscription-form__form">
                      <input type="text" className="subscription-form__input" value="Введите Ваш email" />
                      <input type="вsubmit" className="subscription-form__submit" value="Подписаться" />
                    </form>
                  </div>
                </div>

              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
