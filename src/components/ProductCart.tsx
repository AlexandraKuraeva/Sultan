import React from 'react';

import { Route, Routes, Link } from 'react-router-dom';
import Product from '../page/Product';
interface ProductCartProps {
  id: string;
  title: string;
  category: number;
  price: string;
  imageProduct: string;
  manufacturer: string;
  brand: string;
  description: string;
  size: string;
  types: string;
  barcode: string;
}
const ProductCart: React.FC<ProductCartProps> = ({
  title,
  imageProduct,
  price,
  brand,
  manufacturer,
  barcode,
  size,
  types,
  category,
}) => {
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
  let typeSize = types === 'вес' ? '../../img/catalog/m.svg' : '../../img/catalog/v.svg';
  return (
    //  <Routes><Route path="/product" element={<Product/>} />
    //    </Routes>

    <>
      <article className="product-card">
        <div className="product-card__image">
          <img src={imageProduct} alt="Изображение товара" />
        </div>
        <div className="product-card__volum-weight">
          <span>
            <img src={typeSize} alt="тип размера" />
          </span>
          {size}
        </div>
        <div className="product-card__title">
          {' '}
          <div>{title}</div>{' '}
        </div>

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
          <button className="product-card__btn">
            В КОРЗИНУ
            <span>
              <img src="../../img/catalog/basket.svg" alt="корзина" />
            </span>
          </button>
        </div>
      </article>
    </>
  );
};

export default ProductCart;

//   {
//     "barcode": "4604049097548",
//     "imageProduct": "https://lenino-torg.ru/uploads/product/2100/2101/thumbs/70_j8WSRr-8i32UKBlrUzI2k2.jpeg",
//     "title": "Шампунь для волос TIMOTEI МЕРЦАЮЩИЙ БЛЕСК",
//     "types": "",
//     "size": "400",
//     "price": "102",
//     "description": "Шампунь для волос TIMOTEI МЕРЦАЮЩИЙ БЛЕСК 400 мл бренда Timotei . Артикул товара в каталоге 56718. Данный товар представлен в разделе Шампуни категории Средства для ухода за волосами по цене 102 руб. Выбирая шампуни, обращайте внимание на основные характеристики, такие как объём.",
//     "brand": "Timotei",
//     "manufacturer": "Timotei"
//   },
//    {
//     "barcode": "4604049097548",
//     "imageProduct": "",
//     "title": "",
//     "types": "",
//     "size": "",
//     "price": ,
//     "description": "",
//     "brand": "",
//     "manufacturer": ""
//   },
//     {
//     "barcode": "4604049097548",
//     "imageProduct": "",
//     "title": "",
//     "types": "",
//     "size": "",
//     "price": ,
//     "description": "",
//     "brand": "",
//     "manufacturer": ""
//   },
//     {
//     "barcode": "4604049097548",
//     "imageProduct": "",
//     "title": "",
//     "types": "",
//     "size": "",
//     "price": ,
//     "description": "",
//     "brand": "",
//     "manufacturer": ""
//   },
//     {
//     "barcode": "4604049097548",
//     "imageProduct": "",
//     "title": "",
//     "types": "",
//     "size": "",
//     "price": ,
//     "description": "",
//     "brand": "",
//     "manufacturer": ""
//   },
//     {
//     "barcode": "4604049097548",
//     "imageProduct": "",
//     "title": "",
//     "types": "",
//     "size": "",
//     "price": ,
//     "description": "",
//     "brand": "",
//     "manufacturer": ""
//   },
//     {
//     "barcode": "4604049097548",
//     "imageProduct": "",
//     "title": "",
//     "types": "",
//     "size": "",
//     "price": ,
//     "description": "",
//     "brand": "",
//     "manufacturer": ""
//   },
//     {
//     "barcode": "4604049097548",
//     "imageProduct": "",
//     "title": "",
//     "types": "",
//     "size": "",
//     "price": ,
//     "description": "",
//     "brand": "",
//     "manufacturer": ""
//   },
//     {
//     "barcode": "4604049097548",
//     "imageProduct": "",
//     "title": "",
//     "types": "",
//     "size": "",
//     "price": ,
//     "description": "",
//     "brand": "",
//     "manufacturer": ""
//   },
//     {
//     "barcode": "4604049097548",
//     "imageProduct": "",
//     "title": "",
//     "types": "",
//     "size": "",
//     "price": ,
//     "description": "",
//     "brand": "",
//     "manufacturer": ""
//   },
//     {
//     "barcode": "4604049097548",
//     "imageProduct": "",
//     "title": "",
//     "types": "",
//     "size": "",
//     "price": ,
//     "description": "",
//     "brand": "",
//     "manufacturer": ""
//   },
//     {
//     "barcode": "4604049097548",
//     "imageProduct": "",
//     "title": "",
//     "types": "",
//     "size": "",
//     "price": ,
//     "description": "",
//     "brand": "",
//     "manufacturer": ""
//   },
//     {
//     "barcode": "4604049097548",
//     "imageProduct": "",
//     "title": "",
//     "types": "",
//     "size": "",
//     "price": ,
//     "description": "",
//     "brand": "",
//     "manufacturer": ""
//   },
//     {
//     "barcode": "4604049097548",
//     "imageProduct": "",
//     "title": "",
//     "types": "",
//     "size": "",
//     "price": ,
//     "description": "",
//     "brand": "",
//     "manufacturer": ""
//   }
