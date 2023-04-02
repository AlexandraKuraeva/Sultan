import React, { useContext } from 'react';

import Categories from './Categories';
import LeftCategories from './LeftCategories';
import Manufacturer from './Manufacturer';
import imgOp from '../../img/catalog/1.svg';
import { CatalogContext } from '../page/Catalog';

const FilterLeft = () => {
  
  

  return (
    <>
      <aside className="catalog__left">
        <div className="filter mod-only-mb">
          <div className="filter__title-block">
            <p className="filter__title">ПОДБОР ПО ПАРАМЕТРАМ</p>

            <button className="filter__btn box-btn">
              <img src={imgOp} alt="открыть" />
            </button>
          </div>

          <ul>
            <li className="filter-prop">
              <p className="filter-prop__title">
                Цена <b>₸</b>
              </p>
              <div className="filter-prop__controls">
                <div className="filter-prop__input">
                  <input type="text" className="filter-prop__input" />
                  <span className="filter-prop__formatted"></span>
                </div>
                <div className="filter-prop__input">
                  <input type="text" className="filter-prop__input" />
                  <span className="filter-prop__formatted"></span>
                </div>
              </div>
            </li>
            <li className="filter-prop">
              <Manufacturer />
            </li>
          </ul>
          <div className="filter-prop__list-cat">
            <LeftCategories />
          </div>
        </div>
      </aside>
    </>
  );
};

export default FilterLeft;

// // массив производителей
// const manufacturers = [
//   { id: 1, name: 'Apple' },
//   { id: 2, name: 'Samsung' },
//   { id: 3, name: 'Huawei' },
//   { id: 4, name: 'Xiaomi' },
//   { id: 5, name: 'Sony' }
// ];

// // функция для фильтрации списка производителей по поисковому запросу
// function filterManufacturers(query) {
//   const queryLowerCase = query.toLowerCase();
//   const filteredManufacturers = manufacturers.filter(manufacturer => {
//     const name = manufacturer.name.toLowerCase();
//     return name.startsWith(queryLowerCase);
//   });
//   return filteredManufacturers;
// }

// // обработчик события при вводе текста в input
// document.getElementById('search-input').addEventListener('input', event => {
//   const query = event.target.value.trim();

//   // поиск запускается, когда пользователь вводит три символа и больше
//   if (query.length >= 3) {
//     const filteredManufacturers = filterManufacturers(query);

//     // очистка списка производителей от старых элементов
//     const manufacturersList = document.getElementById('manufacturers-list');
//     manufacturersList.innerHTML = '';

//     // добавление отфильтрованных производителей в список
//     filteredManufacturers.forEach(manufacturer => {
//       const manufacturerItem = document.createElement('li');
//       manufacturerItem.textContent = manufacturer.name;
//       manufacturersList.appendChild(manufacturerItem);
//     });
//   }
// });
