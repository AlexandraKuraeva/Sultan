import React, { useContext, useState, useEffect } from 'react';

import imgOp from '../../img/catalog/1.svg';
import { CatalogContext } from '../page/Catalog';

const Manufacturer = () => {
  const { products } = useContext(CatalogContext);
  const [manufacturers, setManufacturers] = useState([]); // массив производителей
  const [filteredManufacturers, setFilteredManufacturers] = useState();

  const [query, setQuery] = useState(''); //запрос

  useEffect(() => {
    const manufacturerMap = new Map();

    products.forEach((product) => {
      if (manufacturerMap.has(product.manufacturer)) {
        manufacturerMap.set(product.manufacturer, manufacturerMap.get(product.manufacturer) + 1);
      } else {
        manufacturerMap.set(product.manufacturer, 1);
      }
    });

    const manufacturersArr = [];

    manufacturerMap.forEach((value, key) => {
      manufacturersArr.push({ name: key, count: value });
    });

    setManufacturers(manufacturersArr);
  }, [filteredManufacturers]);

  function handleInputChange(event) {
    const query = event.target.value.trim();
    setQuery(query);

    if (query.length >= 3) {
      const filteredManufacturers = filterManufacturers(query);
      setManufacturers(filteredManufacturers);
    } else {
      setFilteredManufacturers(manufacturers);
    }
  }
  function filterManufacturers(query) {
    const queryLowerCase = query.toLowerCase();
    const filteredManufacturers = manufacturers.filter((manufacturer) => {
      const name = manufacturer.name.toLowerCase();
      return name.startsWith(queryLowerCase);
    });
    return filteredManufacturers;
  }

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
            // value={}
            onChange={(event) => handleInputChange(event)}
          />
          <button type="button" className="search-box__btn">
            <img src="../../img/header/search.svg" alt="поиск" />
          </button>
        </div>
      </form>
      <ul className="filter-prop__list">
        {
          manufacturers.map((manufacturer) => (
            <li className="filter-prop__checkbox" key={manufacturer.name}>
              <input id="prop-0" type="checkbox"></input>
              <label htmlFor="prop-0">
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
