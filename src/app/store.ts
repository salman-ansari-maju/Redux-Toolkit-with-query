import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

// services

import { pokimonApi, todos } from "../services/CounterApi";
const middleware = [todos.middleware, pokimonApi.middleware];
export const store = configureStore({
  reducer: {
    [todos.reducerPath]: todos.reducer,
    [pokimonApi.reducerPath]: pokimonApi.reducer,

    counter: counterReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
