import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NavigateFunction } from "react-router-dom";
import { RootState } from "../app/store";
import {
  CurrentUserType,
  PostType,
  StoryType,
  UserLongType,
  UserShortType,
  UserType,
} from "../types";
import { AddCommentInput, SetCommentInput } from "./postsSlice";

interface UserState {
  currentUser: CurrentUserType | undefined;
  currentlyOpenUser: UserType | undefined;
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
  users: [],
};

export const postsSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setDefault: (state) => initialState,

    signUp: (state, action: PayloadAction<SignUpPayload>) => {},

    signIn: (state, action: PayloadAction<SignInPayload>) => {},

    getAllUsers: (state, action: PayloadAction<string>) => {},

    getCurrentUser: (state) => {},

    authGoogle: (state, action: PayloadAction<string>) => {
      // TODO: call sign in with tokenId api
    },
    logout: (state) => {
      state.currentUser = undefined;
    },

    getCurrentlyOpenUser: (state, action: PayloadAction<string>) => {},

    subscribe: (state, action: PayloadAction<string>) => {},

    addStory: (state, action: PayloadAction<File>) => {},

    setUser: (state, action: PayloadAction<UserType>) => {
      state.currentUser = action.payload as CurrentUserType;
    },

    removeUser: (state) => {
      state.currentUser = undefined;
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

      user.posts = [action.payload, ...user.posts];
    },

    setCurrentlyOpenUser: (state, action: PayloadAction<UserType>) => {
      state.currentlyOpenUser = action.payload;
    },

    updateCurrentlyOpenUserPost: (state, action: PayloadAction<PostType>) => {
      if (!state.currentlyOpenUser) return;
      const postIndex = state.currentlyOpenUser?.posts.findIndex(
        (post: PostType) => post._id === action.payload._id
      );

      if (postIndex !== -1) {
        state.currentlyOpenUser.posts[postIndex] = action.payload;
      }
    },

    addStoryToCurrentUser: (state, action: PayloadAction<StoryType>) => {
      state.currentUser.stories = [
        ...state.currentUser.stories,
        action.payload,
      ];
    },

    fetchCurrentUserPosts: (state) => {},

    addCurrentUserPost: (state, action: PayloadAction<PostType>) => {
      state.currentUser.posts = [action.payload, ...state.currentUser.posts];
    },

    removeCurrentUserPost: (state, action: PayloadAction<string>) => {
      state.currentUser.posts = state.currentUser.posts.filter(
        (post) => post._id !== action.payload
      );
    },

    setCurrentUserPosts: (state, action: PayloadAction<PostType[]>) => {
      if (!state.currentUser) return;
      state.currentUser.posts = action.payload || [];
    },

    updateCurrentUserPostIfExists: (state, action: PayloadAction<PostType>) => {
      const currentPostIndex = state.currentUser.posts.findIndex(
        (post) => post._id === action.payload._id
      );

      if (currentPostIndex !== -1) {
        state.currentUser.posts[currentPostIndex] = action.payload;
      }
    },

    addCommentToCurrentUserPost: (
      state,
      action: PayloadAction<SetCommentInput>
    ) => {
      const post = state.currentUser.posts.find(
        (post) => post._id === action.payload.postId
      );
      if (!post) return;
      post.comments.push(action.payload.comment);
    },
  },
});

export const {
  setDefault,
  authGoogle,
  logout,
  setUser,
  signUp,
  signIn,
  addStory,
  getAllUsers,
  getCurrentUser,
  fetchCurrentUserPosts,
  subscribe,
  removeUser,
  getCurrentlyOpenUser,
  addSubscription,
  removeSubscription,
  setUsers,
  updateUsersPost,
  setCurrentlyOpenUser,
  updateCurrentlyOpenUserPost,
  addStoryToCurrentUser,
  addCurrentUserPost,
  removeCurrentUserPost,
  setCurrentUserPosts,
  updateCurrentUserPostIfExists,
  addCommentToCurrentUserPost,
} = postsSlice.actions;

export const selectUser = (state: RootState) => state.user.currentUser;
export const selectUsers = (state: RootState) => state.user.users;
export const selectCurrentlyOpenUser = (state: RootState) =>
  state.user.currentlyOpenUser;

export default postsSlice.reducer;
