import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../App';
import CartItemProduct from '../components/CartItemProduct';
import { ProductInterface } from '../App';
import { useSelector } from 'react-redux';


const Cart = () => {
//   const { cartItems, removeFromCart, } = useContext(ProductContext);
const cartItems = useSelector((state: cartState) => state.cartSlice.items);
 console.log(cartItems);

 
  return (
    <div>
      <h1>Корзина</h1>
      {cartItems.map((cartItem: ProductInterface) => (
        <ul>
          <CartItemProduct
            id={cartItem.id}
            key={cartItem.id}
            title={cartItem.title}
            price={cartItem.price}
            imageProduct={cartItem.imageProduct}
            brand={cartItem.brand}
            manufacturer={cartItem.manufacturer}
            barcode={cartItem.barcode}
            size={cartItem.size}
            types={cartItem.types}
            category={cartItem.category}
            description={cartItem.description}
            // removeFromCart={removeFromCart} // передаем как свойство
            cartItems={cartItems.count}
          />
        </ul>
      ))}
    </div>
  );
};

export default Cart;
