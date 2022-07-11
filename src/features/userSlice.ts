import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NavigateFunction } from "react-router-dom";
import { RootState } from "../app/store";
import { PostType, UserLongType, UserShortType, UserType } from "../types";

interface UserState {
  currentUser: UserType | undefined;
  currentlyOpenUser: UserType | undefined;
  token: string | undefined;
  users: UserType[];
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
  currentlyOpenUser: undefined,
  token: undefined,
  users: [],
};

export const postsSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signUp: (state, action: PayloadAction<SignUpPayload>) => {},

    signIn: (state, action: PayloadAction<SignInPayload>) => {},

    getAllUsers: (state, action: PayloadAction<string>) => {
      console.log("!!!");
    },

    authGoogle: (state, action: PayloadAction<string>) => {
      // TODO: call sign in with tokenId api
    },
    logout: (state) => {
      state.token = undefined;
      state.currentUser = undefined;
    },

    getCurrentlyOpenUser: (state, action: PayloadAction<string>) => {},

    subscribe: (state, action: PayloadAction<string>) => {},

    setUser: (state, action: PayloadAction<UserType>) => {
      state.currentUser = action.payload;
    },

    removeUser: (state) => {
      state.currentUser = undefined;
    },

    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },

    addSubscription: (state, action: PayloadAction<UserType>) => {
      state.currentUser.subscriptions.push(action.payload);
      const user = state.users.find((user) => user._id === action.payload._id);
      user.subscribers.push(state.currentUser);
    },
    removeSubscription: (state, action: PayloadAction<UserType>) => {
      state.currentUser.subscriptions = state.currentUser.subscriptions.filter(
        (subscription) => subscription._id !== action.payload._id
      );
      const user = state.users.find((user) => user._id === action.payload._id);
      user.subscribers = user.subscribers.filter(
        (sub) => sub._id !== state.currentUser._id
      );
    },

    setUsers: (state, action: PayloadAction<UserType[]>) => {
      state.users = action.payload;
    },

    updateUsersPost: (state, action: PayloadAction<PostType>) => {
      const user = state.users.find(
        (user) => user._id === (action.payload.creator as UserType)._id
      );

      user.posts = (user.posts as PostType[]).filter(
        (post) => post._id !== action.payload._id
      );

      user.posts.push(action.payload);
    },

    setCurrentlyOpenUser: (state, action: PayloadAction<UserType>) => {
      state.currentlyOpenUser = action.payload;
    },
  },
});

export const {
  authGoogle,
  logout,
  setUser,
  signUp,
  signIn,
  getAllUsers,
  subscribe,
  removeUser,
  getCurrentlyOpenUser,
  setToken,
  addSubscription,
  removeSubscription,
  setUsers,
  updateUsersPost,
  setCurrentlyOpenUser,
} = postsSlice.actions;

export const selectUser = (state: RootState) => state.user.currentUser;
export const selectUsers = (state: RootState) => state.user.users;
export const selectCurrentlyOpenUser = (state: RootState) =>
  state.user.currentlyOpenUser;

export default postsSlice.reducer;
