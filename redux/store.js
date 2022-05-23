import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./carSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
  },
});
