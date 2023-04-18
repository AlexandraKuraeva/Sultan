import React, { useContext } from 'react';
import { CatalogContext } from '../page/Catalog';
const LeftCategories = () => {
	const { handleCategorySelect, selectedCategory } = useContext(CatalogContext);
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
  return (
    <>
      <ul className="filter-prop__categories">
        {categories.map((category, index) => (
          <li
            key={index}
            className={
              selectedCategory === index
                ? 'filter-prop__category menu__category active'
                : 'filter-prop__category menu__category'
            }
            onClick={() => handleCategorySelect(index)}
          >
            <a href="#!" className="filter-prop__category-link">
              {category}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default LeftCategories;
