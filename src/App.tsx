import React, { useState, useEffect } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Catalog from './page/Catalog';
import Cart from './page/Cart';
import { Route, Routes } from 'react-router-dom';
import Product from './page/Product';
interface Product {
  id: string;
  title: string;
  category: number | null | undefined;
  price: string;
  imageProduct: string;
  manufacturer: string;
  brand: string;
  description: string;
  size: string;
  types: string;
  barcode: string;
}
interface ContextValue {

  products: Product[];
}

export const ProductContext = React.createContext<ContextValue>({
 
  products: [],
});

function App() {
  const [products, setProducts] = React.useState([]);
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/AlexandraKuraeva/Sultan/main/assets/sultan.json')
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
              <Route path="/product/:id" element={<Product />} />
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
