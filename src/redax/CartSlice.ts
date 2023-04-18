import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface cartState {
  items: [];
}

const initialState: cartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    //  addItem: (state, action) => {
    //    state.items.push(action.payload);
    // 	console.log(action.payload);
    //  },
    addItem: (state, action) => {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
console.log(action.payload.id)
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
    },

    removeCart: (state, action) => {  
      state.items = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItem, removeCart } = cartSlice.actions;

export default cartSlice.reducer;

// Функция для добавления товара в корзину
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
