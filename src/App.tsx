import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { ProductPage } from './pages/ProductPage';
import { ShoppingCart } from './pages/ShoppingCart';
import { NotFound } from './pages/NotFound';
import '../src/scss/App.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
