import React from 'react';

import CartItemProduct from '../components/CartItemProduct';
import { ProductInterface, CartData } from '../types';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cartItems = useSelector((state: { cartSlice: CartData }) => state.cartSlice.items);

  return (
    <div>
      <h1>Корзина</h1>
      {cartItems.map((cartItem: ProductInterface) => (
        <div key={cartItem.id}>
          <CartItemProduct
            id={cartItem.id}
            title={cartItem.title}
            quality={cartItem.quality}
            price={cartItem.price}
            imageProduct={cartItem.imageProduct}
            brand={cartItem.brand}
            manufacturer={cartItem.manufacturer}
            barcode={cartItem.barcode}
            size={cartItem.size}
            types={cartItem.types}
            category={cartItem.category}
            description={cartItem.description}
          />
        </div>
      ))}
    </div>
  );
};

export default Cart;


