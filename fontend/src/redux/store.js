import { configureStore } from "@reduxjs/toolkit";
import { forgotPasswordReducer, userReducer } from "./reducers/userReducer";

const store = configureStore({
  reducer: {
    user: userReducer,
    forgotPassword: forgotPasswordReducer,
  },
});

export default store;
