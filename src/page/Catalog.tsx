import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import arrowBack from '../../img/catalog/arrow_back.svg';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import FilterLeft from '../components/FilterLeft';
import CatalogBody from '../components/CatalogBody';
import { setProducts } from '../redax/CounterSlice';
import { ContextValue } from '../types';

export const CatalogContext = React.createContext<ContextValue>({
  handleCategorySelect: (category: number) => {},
  selectedCategory: undefined,
  sortType: 0,
  handleSortChange: (sortType: number) => {},
  
});
const Catalog = () => {
  const dispatch = useDispatch();
  const [clicked, setClicked] = useState(false); //проверка на выбор элементов управления

  const [sortType, setSortType] = useState(0); //сортировка
  const [selectedCategory, setSelectedCategory] = useState<number | null | undefined>(); //выбранная категория
  const [isMobile, setIsMobile] = useState<boolean>(false); //адаптив

  // Фильтрация по категориям
  const handleCategorySelect = (index: number) => {
    if (index === null) {
      fetch('https://raw.githubusercontent.com/AlexandraKuraeva/Sultan/main/assets/sultan.json')
        .then((response) => response.json())
        .then((data) => {
          dispatch(setProducts(data));
          setSelectedCategory(null);
        });
    } else {
      fetch('https://raw.githubusercontent.com/AlexandraKuraeva/Sultan/main/assets/sultan.json')
        .then((response) => response.json())
        .then((data) => {
          const filteredData = data.filter((item: any) => index === item.category);
          dispatch(setProducts(filteredData));
          setSelectedCategory(index);
        });
    }
  };

  //Сортировка
  const handleSortChange = (index: number) => {
    console.log(index);
    if (index === null) {
      fetch('https://raw.githubusercontent.com/AlexandraKuraeva/Sultan/main/assets/sultan.json')
        .then((response) => response.json())
        .then((data) => {
          dispatch(setProducts(data));
          setSortType(0);
        });
    } else {
      fetch('https://raw.githubusercontent.com/AlexandraKuraeva/Sultan/main/assets/sultan.json')
        .then((response) => response.json())
        .then((data) => {
          let res =
            index === 0
              ? data.sort((a: any, b: any) => a.title.localeCompare(b.title))
              : index === 1
              ? data.sort((a: any, b: any) => b.price - a.price)
              : index === 2
              ? data.sort((a: any, b: any) => a.price - b.price)
              : data;
          dispatch(setProducts(res));
          setSortType(index);
          setSelectedCategory(undefined);
        });
    }
  };

  useEffect(() => {
    if (!clicked) {
      fetch('https://raw.githubusercontent.com/AlexandraKuraeva/Sultan/main/assets/sultan.json')
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
        value={{ handleCategorySelect, selectedCategory, sortType, handleSortChange}}
      >
        <div className="container">
          <a className="box-btn box-btn_back">
            <img src={arrowBack} alt="назад" />
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
            <CatalogBody />
          </div>
        </div>
      </CatalogContext.Provider>
    </>
  );
};

export default Catalog;
