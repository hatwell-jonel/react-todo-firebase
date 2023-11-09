import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";
import authReducer from "../features/auth/authSlice";

const store = configureStore({
    reducer: {
       todo: todoReducer,
       authentication: authReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: false, // Disable serializable value checking
    }),
})

export default store;