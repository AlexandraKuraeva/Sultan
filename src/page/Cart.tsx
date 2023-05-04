import React from 'react';

import CartItemProduct from '../components/CartItemProduct';
import { ProductInterface, CartData } from '../types';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cartItems = useSelector((state: { cartSlice: CartData }) => state.cartSlice.items);

  return (
    <>
      <div className="cart">
        <div className="container">
          <h1 className="cart__title title">Корзина</h1>
          <ul className="cart__list">
            {' '}
            {cartItems.map((cartItem: ProductInterface) => (
              <li key={cartItem.id} className="cart-product__item">
                <CartItemProduct
                  id={cartItem.id}
                  title={cartItem.title}
                  quantity={cartItem.quantity}
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
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Cart;


