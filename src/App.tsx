import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Header } from './components/header/Header';
import { ProductPage } from './pages/ProductPage';
import { ShoppingCart } from './pages/ShoppingCart';
import { Footer } from './components/Footer';
import { NotFound } from './pages/NotFound';
import '../src/scss/App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
