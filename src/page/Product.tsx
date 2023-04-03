import React, { useContext, useEffect, useState } from 'react';
import { useParams, Route } from 'react-router-dom';
import { ProductContext } from '../App';

const Product = () => {
	 const { products } = useContext(ProductContext);
  const [product, setProduct] = useState<Product | undefined>(undefined);

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

  interface ProductContext {
    products: Product[];
  }

  const { id } = useParams();

 

  useEffect(() => {
    const selectedProduct = products.find((product) => product.id === id);
    setProduct(selectedProduct);
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
