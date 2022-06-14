import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import postsReducer from "../features/postsSlice";
import userReducer from "../features/userSlice";
import { watcherSaga } from "../sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(watcherSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
