import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CartItemProduct from '../components/CartItemProduct';
import { ProductInterface, CartData } from '../types';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../redax/CartSlice';
import Modal from '../components/Modal';

const Cart = () => {
  const [modalActive, setModalActive] = useState<boolean>(false);
  const cartItems = useSelector((state: { cartSlice: CartData }) => state.cartSlice.items);
  const totalPrice = useSelector((state: { cartSlice: CartData }) => state.cartSlice.totalPrice);
  const dispatch= useDispatch();
  const orderProduct = () => {
    setModalActive(true);
	 dispatch(clearCart([]));
  };
  return (
    <>
      <div className="cart">
        <div className="container">
          <h1 className="cart__title title">Корзина</h1>
          {cartItems.length !== 0 ? (
            <div>
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
              <div className="cart__final">
                <button className="cart__btn button-hover" onClick={() => orderProduct()}>
                  Оформить заказ
                </button>
                <div className="description__price">{totalPrice} ₸</div>
              </div>
            </div>
          ) : (
            <div className="cart__empty">
              {''}
              <p>В корзине нет товаров</p>
              <Link to="/" className="header__center-btn-catalog btn button-hover">
                За покупками
              </Link>
            </div>
          )}
        </div>
      </div>
      <Modal setActive={setModalActive} active={modalActive} />
    </>
  );
};

export default Cart;
