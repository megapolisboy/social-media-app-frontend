import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NavigateFunction } from "react-router-dom";
import { RootState } from "../app/store";
import { UserLongType, UserShortType, UserType } from "../types";

interface UserState {
  currentUser: UserType | undefined;
  token: string | undefined;
}

export interface SignUpPayload {
  user: UserLongType;
  navigate: NavigateFunction;
}

export interface SignInPayload {
  user: UserShortType;
  navigate: NavigateFunction;
}

const initialState: UserState = {
  currentUser: undefined,
  token: undefined,
};

export const postsSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signUp: (state, action: PayloadAction<SignUpPayload>) => {},

    signIn: (state, action: PayloadAction<SignInPayload>) => {},

    authGoogle: (state, action: PayloadAction<string>) => {
      // TODO: call sign in with tokenId api
    },
    logout: (state) => {
      state.token = undefined;
      state.currentUser = undefined;
    },

    subscribe: (state, action: PayloadAction<string>) => {},

    unsubscribe: (state, action: PayloadAction<string>) => {},

    setUser: (state, action: PayloadAction<UserType>) => {
      state.currentUser = action.payload;
    },

    removeUser: (state) => {
      state.currentUser = undefined;
    },

    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },

    addSubscriber: (state, action: PayloadAction<UserType>) => {
      state.currentUser.subscribers.push(action.payload);
    },
    removeSubscriber: (state, action: PayloadAction<UserType>) => {
      state.currentUser.subscribers = state.currentUser.subscribers.filter(
        (subscriber) => subscriber._id !== action.payload._id
      );
    },
  },
});

export const {
  authGoogle,
  logout,
  setUser,
  signUp,
  signIn,
  subscribe,
  unsubscribe,
  removeUser,
  setToken,
  addSubscriber,
  removeSubscriber,
} = postsSlice.actions;
export const selectUser = (state: RootState) => state.user.currentUser;
export default postsSlice.reducer;
