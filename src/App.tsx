import { BreadScrumb } from './components/BreadScrumb';
import { Header } from './components/Header';
import { Sort } from './components/Sort';
import { CategoryFilter } from './components/CategoryFilter';
import { ProductItemList } from './components/ProductItemList';
import '../src/scss/App.scss';

function App() {
  return (
    <div className="App">
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
      </main>
    </div>
  );
}

export default App;
