import React, { useContext } from 'react';
import { CatalogContext } from '../page/Catalog';

const Categories = () => {
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
      <section className="categories">
        <div className="container">
          <ul className="categories__menu">
            {categories.map((category, index) => (
              <li
                key={index}
                className={selectedCategory === index ? 'menu__category  active' : 'menu__category'}
                onClick={() => handleCategorySelect(index)}
              >
                <a href="#!" className="menu__category-link">
                  {category}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Categories;

// className={props.selectedMenu === 'home' ? 'active' : ''} onClick={() => props.handleMenuSelect('home')}
