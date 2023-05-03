import React, { useContext } from 'react';

import { ProductInterface, CounterState } from '../types';

import ProductCart from './ProductCart';
import { useSelector } from 'react-redux';
const CatalogBody = () => {
  const products = useSelector(
    (state: { counterSlice: CounterState }) => state.counterSlice.products,
  );
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
              quality={product.quality}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default CatalogBody;
