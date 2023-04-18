import React, { useState, useEffect } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Catalog from './page/Catalog';
import Cart from './page/Cart';
import { Route, Routes } from 'react-router-dom';
import Product from './page/Product';
import { useSelector, useDispatch } from 'react-redux';
import { setProduct, setProducts } from './redax/CounterSlice';
// import CounterState from './redax/CounterSlice'
export interface ProductInterface {
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
interface ContextValue {
  product: ProductInterface | undefined;
  setProduct: (product: ProductInterface | undefined) => void;
  cartItems: ProductInterface[];
  addToCart: (item: ProductInterface) => void;
  removeFromCart: (item: string) => void;
  products: ProductInterface[];
  count: number;
  handleIncreaseCount: (count: number) => void;
}

export const ProductContext = React.createContext<ContextValue>({
  product: undefined,
  setProduct: () => {},
  cartItems: [],
  addToCart: (item: ProductInterface) => {},
  removeFromCart: (item: string) => {},
  products: [],
  count: 1,
  handleIncreaseCount: (count: number) => {},
});

function App() {
  const dispatch = useDispatch();
//   const product = useSelector((state) => state.counterSlice.product);
 
//   const [product, setProduct] = useState<ProductInterface | undefined>(undefined);
//   const [products, setProducts] = useState([]); //Получаем все товары
  const [cartItems, setCartItems] = useState<ProductInterface[]>([]); // Создаем состояние корзины, в котором инициализируем пустой массив товаров
  //   const [count, setCount] = useState(1);
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/AlexandraKuraeva/Sultan/main/assets/sultan.json')
      .then((response) => response.json())
      .then((data) => {
        dispatch(setProducts(data));
      });
  }, []);

//   // Функция для добавления товара в корзину
//   const addToCart = (item: ProductInterface) => {
//     // Проверяем, есть ли уже такой товар в корзине
//     const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

//     if (isItemInCart) {
//       console.log('Этот товар уже в корзине');
//       return; // Если товар уже в корзине, не добавляем его, а прекращаем выполнение функции
//     }

//     // Создаем новый массив на основе текущего состояния корзины и добавляем новый товар к его концу
//     const newCartItems = [...cartItems, item];

//     // Обновляем состояние корзины
//     setCartItems(newCartItems);
//   };

  // Функция для удаления товара из корзины
  const removeFromCart = (item: string) => {
    const updatedCartItems = cartItems.filter((cartItem) => cartItem.id !== item);

    setCartItems(updatedCartItems);
  };
  // Функция увеличения кол-ва товара
  //   const handleIncreaseCount = (count: number, id) => {
  //     setProduct((product) => ({
  //       ...product,
  //       count: setCount(count + 1),
  //     }));
  //     console.log(product);
  //   };
  // Функция уменьшения кол-ва товара
  //   const handleDecreaseCount = (count: number) => {
  //     if (count > 1) {
  //       setCount(count - 1);
  //     }
  //   };

  return (
    <ProductContext.Provider
      value={{
        setCartItems,
        cartItems,
      //   products,
      //   addToCart,
      //   product,
        setProduct,
        removeFromCart,

        //   handleIncreaseCount,
      }}
    >
      <div className="App">
        <div className="wrapper">
          <Header />
          <main className="main">
            <Routes>
              <Route path="/" element={<Catalog />} />
              <Route path="/product/:id" element={<Product />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </ProductContext.Provider>
  );
}

export default App;
