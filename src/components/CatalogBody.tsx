import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { CatalogContext } from '../page/Catalog';
interface Product {
  id: string;
  title: string;
  category: number;
  price: string;
  imageProduct: string;
  manufacturer: string;
  brand: string;
  description: string;
  size: string;
  types: string;
  barcode: string;
}

import ProductCart from './ProductCart';
const CatalogBody = () => {
	 const { products } = useContext(CatalogContext);
 console.log(products);
  return (
    <>
      <section className="catalog__body">
        <div className="catalog__list">
          {products.map((product: Product) => (
            <Link key={product.id} to={`/${product.id}`}>
              <ProductCart
                id={product.id}
                key={product.title}
                title={product.title}
                price={product.price}
                imageProduct={product.imageProduct}
                brand={product.brand}
                manufacturer={product.manufacturer}
                barcode={product.barcode}
                size={product.size}
                types={product.types}
                category={product.category}
                description={product.description}
              />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default CatalogBody;


    

// import React, {useState} from "react";
// import CatalogBody from "./CatalogBody";
// import Sort from "./Sort";

// const Catalog = () => {
//   const [selectedSort, setSelectedSort] = useState("priceAsc");

//   const handleSortChange = (sort) => {
//     setSelectedSort(sort);
//   };

//   return (
//     <div className="catalog">
//       <Sort onSortChange={handleSortChange} />
//       <CatalogBody selectedSort={selectedSort} />
//     </div>
//   );
// };

// export default Catalog;
// ```


// import React from "react";

// const Sort = ({ onSortChange }) => {
//   const handleSortChange = (e) => {
//     onSortChange(e.target.value);
//   };

//   return (
//     <div className="sort">
//       <label>
//         Сортировать по:
//         <select onChange={handleSortChange}>
//           <option value="priceAsc">Цене (возрастание)</option>
//           <option value="priceDesc">Цене (убывание)</option>
//           <option value="nameAsc">Названию (возрастание)</option>
//           <option value="nameDesc">Названию (убывание)</option>
//         </select>
//       </label>
//     </div>
//   );
// };





// import React from "react";
// import Card from "./Card";

// const CatalogBody = ({selectedSort}) => {
//   const getSortedData = (unsortedData) => {
//     switch (selectedSort) {
//       case "priceAsc":
//         return unsortedData.sort((a, b) => a.price - b.price);
//       case "priceDesc":
//         return unsortedData.sort((a, b) => b.price - a.price);
//       case "nameAsc":
//         return unsortedData.sort((a, b) => a.name.localeCompare(b.name));
//       case "nameDesc":
//         return unsortedData.sort((a, b) => b.name.localeCompare(a.name));
//       default:
//         return unsortedData;
//     }
//   };

//   const data = [
//     { id: 1, name: "Product A", price: 10 },
//     { id: 2, name: "Product B", price: 20 },
//     { id: 3, name: "Product C", price: 30 },
//     { id: 4, name: "Product D", price: 40 },
//   ];
  
//   const sortedData = getSortedData(data);

//   return (
//     <div className="catalog-body">
//       {sortedData.map((item) => (
//         <Card key={item.id} name={item.name} price={item.price} />
//       ))}
//     </div>
//   );
// };
