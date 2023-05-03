import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Footer from './components/Footer';
import Header from './components/Header';
import Catalog from './page/Catalog';
import Cart from './page/Cart';
import Product from './page/Product';

import { setProducts } from './redax/CounterSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/AlexandraKuraeva/Sultan/main/assets/sultan.json')
      .then((response) => response.json())
      .then((data) => {
        dispatch(setProducts(data));
      });
  }, []);

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<Catalog />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
