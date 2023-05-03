import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CounterState } from '../types';

const initialState: CounterState = {
  products: [],
  product: null,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, action) => {
      const { id } = action.payload;

      const productIndex = state.products.findIndex((product) => product.id === id);
      if (productIndex !== -1) {
        state.products[productIndex].quality += 1;
      } else {
        console.log('добавился в корзину в первый раз');
        state.products.push({ ...action.payload, quality: 1 });
      }
    },
    decrement: (state, action) => {
      const { id } = action.payload;

      const productIndex = state.products.findIndex((product) => product.id === id);
      if (productIndex !== -1) {
        if (action.payload.quality > 1) {
          state.products[productIndex].quality -= 1;
        } else {
          console.log('остался 1 товар, не могу уменьшить');
        }
      }
    },
    setProduct(state, action) {
      state.product = action.payload;
    },
    setProducts(state, action) {
      state.products = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, setProduct, setProducts } = counterSlice.actions;

export default counterSlice.reducer;
