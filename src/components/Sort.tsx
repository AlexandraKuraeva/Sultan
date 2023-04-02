import React, { useState, useContext } from 'react';
import products from '../../assets/sultan.json';
import { CatalogContext } from '../page/Catalog';

const Sort = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { handleSortChang, sortType } = useContext(CatalogContext);

  let list = ['по названию', 'по убыванию цены', 'по возрастанию цены'];

  let sortName = list[sortType];
  

  const handleToggle = () => {
    setOpen(!open);
  };
console.log(sortType);
  return (
    <>
      <div className="catalog-sort" onClick={() => handleToggle()}>
        <button className="catalog-sort__placeholder">
          <b>Сортировка:</b>
          <span>{sortName}</span>
        </button>
        <div className="catalog-sort__popup">
          {open && (
            <ul>
              {list.map((category, index: number) => (
                <li
                  key={category}
                  className={sortType === index ? 'menu__category  active' : 'menu__category'}
                  onClick={() => handleSortChang(index)}
                >
                  {category}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default Sort;