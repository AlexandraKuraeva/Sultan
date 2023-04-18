import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
  count: number;
  products: [];
  product: null;
}

const initialState: CounterState = {
  count: 1,
  products: [],
  product: null,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, action) => {
      console.log(action.payload);

      let found = false; // переменная-флаг, будет использована для проверки, нашли ли мы нужный товар в списке

      // ищем товар в списке товаров
      const products = state.products.map((product) => {
        if (product.id === action.payload.id) {
          found = true; // помечаем флаг
          return {
            ...product,
            count: product.count ? product.count + 1 : 1, // если count = 0 или не определен, выставляем его в 1
          };
        }
        return product;
      });

      // если товар не найден, добавляем его в список
      if (!found) {
        products.push({
          ...action.payload,
          count: 1,
        });
      }

      state.products = products; // обновляем значение списка товаров в хранилище

      // отправляем действие обновления списка товаров
     
    },
    decrement: (state) => {
      // if (state.value > 1) state.value -= 1;
    },
    setProduct(state, action) {
      console.log(action.payload);
      state.product = action.payload;
    },
    setProducts(state, action) {
      console.log(action.payload);
      state.products = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, setProduct, setProducts } = counterSlice.actions;

export default counterSlice.reducer;
