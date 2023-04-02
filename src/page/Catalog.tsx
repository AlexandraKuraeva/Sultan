import React, { useState, useEffect } from 'react';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import FilterLeft from '../components/FilterLeft';

import CatalogBody from '../components/CatalogBody';


export const CatalogContext = React.createContext('');

const Catalog = () => {
	  
  const [clicked, setClicked] = useState(false); //проверка на выбор элементов управления
  const [products, setProducts] = useState([]); //данные
  const [sortType, setSortType] = useState(0); //сортировка
  const [selectedCategory, setSelectedCategory] = useState<number | null>(); //выбранная категория
  const [isMobile, setIsMobile] = useState<boolean>(false); //адаптив

  // Фильтрация по категориям
  const handleCategorySelect = (index: number) => {
    console.log(index);
    if (index === null) {
      fetch('../../assets/sultan.json')
        .then((response) => response.json())
        .then((data) => {
          setProducts(data);
          setSelectedCategory(null);
        });
    } else {
      fetch('../../assets/sultan.json')
        .then((response) => response.json())
        .then((data) => {
          const filteredData = data.filter((item) => index === item.category);
          setProducts(filteredData);
          setSelectedCategory(index);
        });
    }
  };
console.log(products);
  //Сортировка
  const handleSortChang = (index: number) => {
    console.log(index);
    if (index === null) {
      fetch('../../assets/sultan.json')
        .then((response) => response.json())
        .then((data) => {
          setProducts(data);
          setSortType(0);
        });
    } else {
      fetch('../../assets/sultan.json')
        .then((response) => response.json())
        .then((data) => {
          let res =
            index === 0
              ? data.sort((a, b) => a.title.localeCompare(b.title))
              : index === 1
              ? data.sort((a, b) => b.price - a.price)
              : index === 2
              ? data.sort((a, b) => a.price - b.price)
              : data;
          setProducts(res);
          setSortType(index);
          setSelectedCategory(undefined);
        });
    }
  };

  useEffect(() => {
    if (!clicked) {
      fetch('../../assets/sultan.json')
        .then((response) => response.json())
        .then((data) => {
          setProducts(data);
          setClicked(true);
        });
    }
  }, [clicked]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1190); // задаем пороговое значение ширины экрана - 1190px
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    
      <>
        
        <CatalogContext.Provider
          value={{ handleCategorySelect, selectedCategory, sortType, handleSortChang, products }}
        >
          <div className="container">
            <a className="box-btn box-btn_back">
              <img src="../../img/catalog/2.svg" alt="назад" />
              <p>Назад</p>
            </a>

            <section className="catalog__sort-title">
              <h1 className="catalog__title title">Косметика и гигиена</h1>
              {isMobile && <FilterLeft />}
              {!isMobile && <Sort />}
            </section>

            <Categories />

            {isMobile && <Sort />}

            <div className="catalog__container">
              {!isMobile && <FilterLeft />}
              <CatalogBody products={products} />
            </div>
          </div>
        </CatalogContext.Provider>
      </>
    
  );
  
};

export default Catalog;
