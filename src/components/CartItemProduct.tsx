import React, { useContext } from 'react';
import { ProductInterface, ProductContext } from '../App';

import m from '/img/catalog/m.svg';
import v from '/img/catalog/v.svg';
import del from '/img/catalog/del.svg';
import Count from './Count';
import { useDispatch, useSelector } from 'react-redux';

const CartItemProduct = (props: ProductInterface & { removeFromCart: (id: string) => void }) => {
  //   const { count, product, setCartItems } = useContext(ProductContext);

  // const cartItems = useSelector((state: cartState) => state.cartSlice.items.find((obj) => obj.id === props.id));
  // console.log(cartItems);
  const dispatch = useDispatch;
  //   const removeCart = () => {

  //   };

  let typeSize = props.types === 'вес' ? m : v;
  return (
    <li key={props.id} className="cart-product__item">
      <img src={props.imageProduct} alt="изображение товара" />
      <div className="cart-product__description description">
        <div className="description__volum-weight">
          <span>
            <img src={typeSize} alt="тип размера" />
          </span>
          {props.size}
        </div>
        <div className="description__title">{props.title}</div>
        <div className="description__text">{props.description}</div>
      </div>
      <div className="description__product-price">
        <div className="description__price">{+props.price} ₸</div>
        <div className="description__count count">
          <Count />
        </div>
        <button className="description__product-card product-card__btn">
          <span>
            <img src={del} alt="корзина" />
          </span>
        </button>
      </div>
    </li>
  );
};

export default CartItemProduct;
