import React, { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, setProducts, setProduct } from '../redax/CounterSlice';
import { incrementQuantityCart, decrementQuantityCart } from '../redax/CartSlice';
import { CartData, ProductInterface, CounterState } from '../types';
interface Props {
  productId: string;
  product: ProductInterface | null;
}
const Count = ({ productId, product }: Props) => {
  const products = useSelector(
    (state: { counterSlice: CounterState }) => state.counterSlice.products,
  );
  const items = useSelector((state: { cartSlice: CartData }) => state.cartSlice.items);
  const dispatch = useDispatch();
  const addedToCart = items.find((product) => product.id === productId);
  console.log(addedToCart);
  useEffect(() => {
    dispatch(setProduct(product)); // обновляем значение product  в сторе
  }, [dispatch, product]);

  const setCounterIncrement = () => {
    // ищем товар с нужным id
    const targetProduct = products.find(({ id }) => id === productId);
    if (targetProduct) {
      console.log(targetProduct);
      if (!addedToCart) dispatch(increment(targetProduct));
      else {
        dispatch(incrementQuantityCart(targetProduct));
      }
    }
  };

  const setCounterDecrement = () => {
    const targetProduct = products.find(({ id }) => id === productId);
    console.log(targetProduct);
    if (targetProduct) {
      console.log(targetProduct);
      if (!addedToCart) dispatch(decrement(targetProduct));
      else {
        dispatch(decrementQuantityCart(targetProduct));
      }
    }
  };
  const counterCart = items.find(({ id }) => id === productId)?.quality;

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
      <span className="count__input">{counterCart || product ? product?.quality : 1}</span>

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
