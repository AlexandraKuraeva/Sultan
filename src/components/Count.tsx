import React, { useEffect, useState } from 'react';
import { ProductInterface } from '../App';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, setProducts } from '../redax/CounterSlice';
import { addItem } from '../redax/CartSlice';

const Count = () => {
  const {  products, product } = useSelector((state: RootState) => state.counterSlice);
  //   const counter = useSelector((state: RootState) => state.counterSlice.value);
// const {c} = useSelector((state: cartState) => state.cartSlice);
  const dispatch = useDispatch();

  const setCounterIncrement = () => {
    const item = {
      id: product.id,
      title: product.title,
      imageProduct: product.imageProduct,
      price: product.price,
      count: product.count,
    };

    dispatch(addItem(item));
    dispatch(setProducts(products));
  };
  const setCounterDecrement = () => {
    dispatch(decrement(product));
  };
  //   const count = useSelector((state) => {
  //     state;
  //   });

  return (
    <>
      <button
        onClick={setCounterDecrement}
        className="count__minus js-count-minus"
        type="button"
        title="Уменьшить количество"
        data-disabled=""
      >
        -
      </button>
      <span className="count__input">{}</span>
      <button
        onClick={setCounterIncrement}
        className="count__plus js-count-plus"
        type="button"
        title="Увеличить количество"
      >
        +
      </button>
    </>
  );
};

export default Count;
