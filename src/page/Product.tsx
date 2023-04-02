import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../App';

const Product = () => {


//   useEffect(() => {
//     fetch('../../assets/sultan.json/product/' + `${products.id}`)
//       .then((response) => response.json())
//       .then((data) => setProduct(data))
//       .catch((error) => console.log(error));
//   }, [id]);

 

  return (
    <>
      <section className="product">
        <div className="container">
          <div className="product__wrapperr">
            <div className="product__img">
              <img src="" alt="изображение товара" />
            </div>
            <div className="product__description description">
              <div className="description__inner">
                <p className="description__label">В наличии</p>
                <p className="description__title">{product.title}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
