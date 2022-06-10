import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import postsReducer from "../features/postsSlice";
import userReducer from "../features/userSlice";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
