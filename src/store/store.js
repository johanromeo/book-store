import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "../reducers/booksReducer";
import cartReducer from "../reducers/cartReducer";

const store = configureStore({
  reducer: {
    books: booksReducer,
    cart: cartReducer,
  },
});

export default store;
