import React, { useContext } from 'react';

import LeftCategories from './LeftCategories';
import Manufacturer from './Manufacturer';
import imgOp from '../../img/catalog/1.svg';

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
