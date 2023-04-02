import React, { useState, useEffect } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Catalog from './page/Catalog';
import Cart from './page/Cart';
import { Route, Routes } from 'react-router-dom';
import Product from './page/Product';

export const ProductContext = React.createContext('');

function App() {
  const [products, setProducts] = React.useState([]);
  useEffect(() => {
    fetch('../../assets/sultan.json')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  },[]);

  return (
    <ProductContext.Provider value={{ products }}>
      <div className="App">
        <div className="wrapper">
          <Header />
          <main className="main">
            <Routes>
              <Route path="/" element={<Catalog />} />
              <Route path="/:id" element={<Product />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </ProductContext.Provider>
  );
}

export default App;
