import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { CartData, ProductInterface } from '../types';

const initialState: CartData = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state: CartData, action: PayloadAction<ProductInterface>) => {
      const findItem = state.items.findIndex((obj) => obj.id === action.payload.id);
      console.log(findItem);

      if (findItem > -1) {
        state.items[findItem].quality += 1;
      } else {
        console.log('добавился в корзину в первый раз');
        state.items.push(action.payload);
      }
    },
    incrementQuantityCart: (state, action) => {
      const { id } = action.payload;
      const productIndex = state.items.findIndex((product) => product.id === id);
      if (productIndex !== -1) {
        state.items[productIndex].quality += 1;
      }
    },
    decrementQuantityCart: (state, action) => {
      const { id } = action.payload;
      const productIndex = state.items.findIndex((product) => product.id === id);
      if (productIndex !== -1) {
        if (state.items[productIndex].quality > 1) {
          state.items[productIndex].quality -= 1;
        } else {
          console.log('остался 1 товар, не могу уменьшить');
        }
      }
    },

    getCartTotal: (state: CartData) => {
      let { totalQuantity, totalPrice } = state.items.reduce(
        (cartTotal, cartItem) => {
          const { price, quality } = cartItem;
          const itemTotal = +price * quality;
          cartTotal.totalPrice += itemTotal;
          cartTotal.totalQuantity += quality;
          return cartTotal;
        },
        {
          totalPrice: 0,
          totalQuantity: 0,
        },
      );
      state.totalPrice = parseInt(totalPrice.toFixed(2));
      state.totalQuantity = totalQuantity;
    },
    removeProduct: (state, action) => {
      console.log('удалить из корзины');
      const { id } = action.payload;
      const productIndex = state.items.findIndex((item) => item.id === id);
      if (productIndex !== -1) {
        state.items.splice(productIndex, 1);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addItem,
  removeProduct,
  incrementQuantityCart,
  decrementQuantityCart,
  getCartTotal,
} = cartSlice.actions;

export default cartSlice.reducer;
