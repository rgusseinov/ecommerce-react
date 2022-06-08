import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Header } from './components/Header';
import { ProductPage } from './components/ProductPage';
import { ShoppingCart } from './components/ShoppingCart';
import '../src/scss/App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<ShoppingCart />} />
      </Routes>
    </div>
  );
}

export default App;
