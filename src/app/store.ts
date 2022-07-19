import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import postsReducer from "../features/postsSlice";
import userReducer from "../features/userSlice";
import errorReducer from "../features/errorSlice";
import tokenReducer from "../features/tokenSlice";
import storiesReducer from "../features/storiesSlice";
import { watcherSaga } from "../sagas/rootSaga";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
  posts: postsReducer,
  user: userReducer,
  error: errorReducer,
  token: tokenReducer,
  stories: storiesReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["token"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false })
      .concat(sagaMiddleware)
      .concat(thunk),
});

sagaMiddleware.run(watcherSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
