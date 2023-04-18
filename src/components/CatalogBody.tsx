import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CatalogContext } from '../page/Catalog';
import { ProductInterface } from '../App';
// interface Product {
//   id: string;
//   title: string;
//   category: number;
//   price: string;
//   imageProduct: string;
//   manufacturer: string;
//   brand: string;
//   description: string;
//   size: string;
//   types: string;
//   barcode: string;
// }

import ProductCart from './ProductCart';
import { useSelector } from 'react-redux';
const CatalogBody = () => {
//   const { products } = useContext(CatalogContext);
const products = useSelector((state: RootState) => state.counterSlice.products);
  console.log(products);
  return (
    <>
      <section className="catalog__body">
        <div className="catalog__list">
          {products.map((product: ProductInterface) => (
            <ProductCart
              id={product.id}
              key={product.id}
              title={product.title}
              price={product.price}
              imageProduct={product.imageProduct}
              brand={product.brand}
              manufacturer={product.manufacturer}
              barcode={product.barcode}
              size={product.size}
              types={product.types}
              category={product.category}
              description={product.description}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default CatalogBody;
