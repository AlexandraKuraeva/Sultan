import { ProductInterface, CounterState } from '../types';

import m from '/img/catalog/m.svg';
import v from '/img/catalog/v.svg';
import del from '/img/catalog/del.svg';
import Count from './Count';
import { useDispatch, useSelector } from 'react-redux';
import { removeProduct } from '../redax/CartSlice';

const CartItemProduct = (props: ProductInterface) => {
  const { product } = useSelector((state: { counterSlice: CounterState }) => state.counterSlice);
  const dispatch = useDispatch();
  const removeProductCart = () => {
    dispatch(removeProduct(props));
  };

  let typeSize = props.types === 'вес' ? m : v;
  return (
    <>
      <div className="cart-product__wrapper">
        <img src={props.imageProduct} alt="изображение товара" className="cart-product__img"/>
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
          <div className="description__price">{+props.price * props.quantity} ₸</div>
          <div className="description__count count">
            <Count productId={props.id} product={product} />
          </div>

          <button
            onClick={removeProductCart}
            className="description__product-card product-card__btn"
          >
            <span>
              <img src={del} alt="корзина" />
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default CartItemProduct;
