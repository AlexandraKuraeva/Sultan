import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { CounterState } from '../types';
import { setProducts } from '../redax/CounterSlice';
import imgOp from '../../img/catalog/1.svg';
import search from '../../img/header/search.svg';

const Manufacturer = () => {
  const dispatch = useDispatch();
  type Manufacturer = {
    name: string;
    count: number;
  };

  const products = useSelector(
    (state: { counterSlice: CounterState }) => state.counterSlice.products,
  );
  const [manufacturers, setManufacturers] = useState<Manufacturer[]>([]); // массив производителей
  const [filteredManufacturers, setFilteredManufacturers] = useState<Manufacturer[]>([]);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [query, setQuery] = useState(''); //запрос

  useEffect(() => {
    const manufacturerMap = new Map();

    products.forEach((product) => {
      const { manufacturer } = product;
      if (manufacturerMap.has(manufacturer)) {
        manufacturerMap.set(manufacturer, manufacturerMap.get(manufacturer) + 1);
      } else {
        manufacturerMap.set(manufacturer, 1);
      }
    });

    const manufacturersArr = Array.from(manufacturerMap, ([name, count]) => ({
      name,
      count,
    }));

    setManufacturers(manufacturersArr);
    setFilteredManufacturers(manufacturersArr); // сохраняем все производители в начальный список
  }, [products]);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>): void {
    console.log('обработка запроса');
    const query: string = event.target.value.trim();
    setQuery(query);

    if (query.length > 0) {
      console.log('запрос больше  0');
      const filteredManufacturer = lowercaseManufacturers(query);
      setFilteredManufacturers(filteredManufacturer);
    } else {
      console.log('запрос меньше  0');
      setFilteredManufacturers(manufacturers);
    }
  }

  const lowercaseManufacturers = (query: string) => {
    const queryLowerCase = query.toLowerCase();

    const filteredManufacturers = manufacturers.filter((manufacturer) => {
      const name: string = manufacturer.name.toLowerCase();

      return name.startsWith(queryLowerCase);
    });
    return filteredManufacturers;
  };

  const chooseManufacturer = (name: string) => {
    setIsChecked(!isChecked);
    if (!isChecked) {
      filterByManufacturer(name);
    } else {
      filterByManufacturer('');
    }
  };

  const filterByManufacturer = (name: string) => {
    if (name === '') {
      fetch('https://raw.githubusercontent.com/AlexandraKuraeva/Sultan/main/assets/sultan.json')
        .then((response) => response.json())
        .then((data) => {
          dispatch(setProducts(data));
        });
    } else {
      fetch('https://raw.githubusercontent.com/AlexandraKuraeva/Sultan/main/assets/sultan.json')
        .then((response) => response.json())
        .then((data) => {
          const filteredData = data.filter((item: any) => name === item.manufacturer);
          console.log(filteredData);
          dispatch(setProducts(filteredData));
        });
    }
  };
  return (
    <>
      <p className="filter-prop__title">
        <b>Производитель</b>
      </p>
      <form className=" header__center-search search-box">
        <div className="search-box__wrapper">
          <input
            type="text"
            className="search-box__input "
            placeholder="Поиск..."
            onChange={(event) => handleInputChange(event)}
          />
          <button type="button" className="search-box__btn button-hover">
            <img src={search} alt="поиск" />
          </button>
        </div>
      </form>
      <ul className="filter-prop__list">
        {filteredManufacturers.map((manufacturer, index) => (
          <li className="filter-prop__checkbox" key={manufacturer.name}>
            <input
              id={`prop-${index}`}
              type="checkbox"
              onChange={() => chooseManufacturer(manufacturer.name)}
            ></input>
            <label htmlFor={`prop-${index}`}>
              {manufacturer.name}
              <span>({manufacturer.count})</span>
            </label>
          </li>
        ))}
      </ul>

      {/* <button className="filter-prop__btn" >
        <p>Показать все</p>
        <img src={imgOp} alt="открыть" />
      </button> */}
    </>
  );
};

export default Manufacturer;
