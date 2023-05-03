import React, { useContext } from 'react';
import { ProductInterface } from '../types';
import { Link } from 'react-router-dom';

import basket from '/img/catalog/basket.svg';
import m from '/img/catalog/m.svg';
import v from '/img/catalog/v.svg';
import { useDispatch } from 'react-redux';
import { addItem } from '../redax/CartSlice';

const ProductCart: React.FC<ProductInterface> = ({
  id,
  title,
  imageProduct,
  price,
  brand,
  description,
  manufacturer,
  barcode,
  size,
  types,
  category,
  quantity,
}) => {
  const dispatch = useDispatch();
  const onClickAdd = () => {
    const item = {
      id,
      title,
      imageProduct,
      price,
      brand,
      description,
      manufacturer,
      barcode,
      size,
      types,
      category,
      quantity,
    };
    console.log(item);
    dispatch(addItem(item));
  };

  let categories = [
    'Уход за телом',
    'Уход за руками',
    'Уход за ногами',
    'Уход за лицом',
    'Уход за волосами',
    'Средства для загара',
    'Средства для бритья',
    'Подарочные наборы',
    'Гигиеническая продукция',
    'Гигиена полости рта',
    'Бумажная продукция',
  ];
  let typeSize = types === 'вес' ? m : v;
  return (
    <>
      <article className="product-card">
        <div className="product-card__wrapper">
          <Link key={id} to={`/product/${id}`}>
            <div className="product-card__image">
              <img src={imageProduct} alt="Изображение товара" />
            </div>
          </Link>
          <div className="product-card__volum-weight">
            <span>
              <img src={typeSize} alt="тип размера" />
            </span>
            {size}
          </div>
          <Link key={title} to={`/product/${id}`}>
            <div className="product-card__title">
              {' '}
              <div>{title}</div>{' '}
            </div>
          </Link>
          <div className="product-card__info">
            <p className="product-card__info-text">
              Штрихкод: <span>{barcode}</span>
            </p>
            <p className="product-card__info-text">
              Производитель: <span>{manufacturer}</span>
            </p>
            <p className="product-card__info-text">
              Бренд: <span>{brand}</span>
            </p>
            <p className="product-card__info-text">
              Тип ухода: <span>{categories[category]}</span>
            </p>
          </div>
          <div className="product-card__footer">
            <p className="product-card__price">{price} ₸</p>
            <button onClick={onClickAdd} className="product-card__btn">
              В КОРЗИНУ
              <span>
                <img src={basket} alt="корзина" />
              </span>
            </button>
          </div>
        </div>
      </article>
    </>
  );
};

export default ProductCart;

