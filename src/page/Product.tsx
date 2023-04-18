import React, { useContext, useEffect, useState } from 'react';
import { useParams, Route } from 'react-router-dom';
import { ProductContext } from '../App';
import m from '/img/catalog/m.svg';
import v from '/img/catalog/v.svg';
import basket from '/img/catalog/basket.svg';
import dow from '/img/catalog/dow.svg';
import share from '/img/catalog/share.svg';
import ProductCart from '../components/ProductCart';
import Count from '../components/Count';
import { useSelector, useDispatch } from 'react-redux';
import { setProduct } from '../redax/CounterSlice';
import { addItem } from '../redax/CartSlice';

const Product = () => {
  const { count, products, product, } = useSelector((state: RootState) => state.counterSlice);
  console.log(product);
  const dispatch = useDispatch();

  // //   const { products, addToCart, product, setProduct, count, handleIncreaseCount, cartItems } =
  // //     useContext(ProductContext);

  const onClickAdd = () => {
    const item = {
      id: product.id,
      title: product.title,
      imageProduct: product.imageProduct,
      price: product.price,
      value: count,
    };
    console.log(item);
    dispatch(addItem(item));
  };

  interface Product {
    id: string;
    title: string;
    category: number | null | undefined;
    price: string;
    imageProduct: string;
    manufacturer: string;
    brand: string;
    description: string;
    size: string;
    types: string;
    barcode: string;
  }

  // //   interface ProductContext {
  // //     products: Product[];
  // //   }

  let typeSize = product && product.types === 'вес' ? m : v;
  const { id } = useParams();

  useEffect(() => {
    const selectedProduct = products.find((product: Product) => product.id === id);
    dispatch(setProduct(selectedProduct));
  }, [id, products]);

  if (!product) {
    return <p>Загрузка данных...</p>;
  }
  return (
    <>
      <section className="product">
        <div className="container">
          <div className="product__wrapperr">
            <div className="product__img">
              <img src={product.imageProduct} alt="изображение товара" />
            </div>
            <div className="product__description description">
              <div className="description__inner">
                <p className="description__label">В наличии</p>
                <p className="description__title">{product.title}</p>
                <div className="description__volum-weight">
                  <span>
                    <img src={typeSize} alt="тип размера" />
                  </span>
                  {product.size}
                </div>
                <div className="description__product-price">
                  <div className="description__price">{product.price} ₸</div>
                  <div className="description__count count">
                    <Count product={count} />
						
                  </div>
                  <button
                    onClick={onClickAdd}
                    className="description__product-card product-card__btn"
                  >
                    В КОРЗИНУ
                    <span>
                      <img src={basket} alt="корзина" />
                    </span>
                  </button>
                </div>
                <ul className="description__share share">
                  <li className="share__item">
                    <img src={share} alt="поделиться" />
                  </li>
                  <li className="share__item">
                    <p>
                      При покупке от <b>10 000 ₸</b> бесплатная доставка по Кокчетаву и области
                    </p>
                  </li>
                  <li className="share__item">
                    <span>Прайс-лист</span>
                    <img src={dow} alt="скачать" />{' '}
                  </li>
                </ul>
                <ul className="description__info ">
                  <li className="">
                    Производитель:
                    <span>{product.manufacturer}</span>
                  </li>
                  <li className="">
                    Бренд:
                    <span>{product.brand}</span>
                  </li>
                  <li className="">
                    Артикул:
                    <span>460404</span>
                  </li>
                  <li className="">
                    Штрихкод:
                    <span>{product.barcode}</span>
                  </li>
                </ul>
                <div className="description__subtitle">
                  <h4>Описание</h4>
                  <p>{product.description}</p>
                </div>
                <div className="description__line"></div>
                <div className="description__subtitle">
                  <h4>Характеристики</h4>
                  <ul className="description__specifications">
                    <li>
                      Назначение:
                      <span> {product.title}</span>
                    </li>
                    <li>
                      Производитель:
                      <span> {product.manufacturer}</span>
                    </li>
                    <li>
                      Бренд:
                      <span> {product.brand}</span>
                    </li>
                    <li>
                      Штрихкод:
                      <span> {product.barcode}</span>
                    </li>
                    <li>
                      Вес:
                      <span> {product.size}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
