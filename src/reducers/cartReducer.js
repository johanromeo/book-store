import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itemsInCart: 0,
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addBookToCart(state, action) {
      state.cart.push(action.payload);
      state.itemsInCart += 1;
    },
    checkout(state) {
      state.cart = [];
      state.itemsInCart = 0;
    },
  },
});

export const { addBookToCart, checkout } = cartSlice.actions;

export default cartSlice.reducer;
