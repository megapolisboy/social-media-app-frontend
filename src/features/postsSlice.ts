import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";
import { RootState } from "../app/store";
import { PostType, ShortPostType } from "../types";

interface PostsState {
  posts: PostType[];
  currentUserPosts: PostType[];
  loading: boolean;
}

const initialState: PostsState = {
  posts: [],
  currentUserPosts: [],
  loading: false,
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<ShortPostType>) => {},
    addLike: (state, action: PayloadAction<string>) => {},
    removePostById: (state, action: PayloadAction<string>) => {},
    fetchPosts: (state) => {
      state.loading = true;
    },
    setPosts: (state, action: PayloadAction<PostType[]>) => {
      state.posts = action.payload;
      state.loading = false;
    },
    fetchCurrentUserPosts: (state) => {
      state.loading = true;
    },
    setCurrentUserPosts: (state, action: PayloadAction<PostType[]>) => {
      state.currentUserPosts = action.payload;
      state.loading = false;
    },

    updatePost: (state, action: PayloadAction<PostType>) => {
      const postIndex = state.posts.findIndex(
        (post) => post._id === action.payload._id
      );
      state.posts[postIndex] = action.payload;
    },

    updateCurrentUserPostIfExists: (state, action: PayloadAction<PostType>) => {
      const currentPostIndex = state.currentUserPosts.findIndex(
        (post) => post._id === action.payload._id
      );

      if (currentPostIndex !== -1) {
        state.currentUserPosts[currentPostIndex] = action.payload;
      }
    },

    addNewPost: (state, action: PayloadAction<PostType>) => {
      state.posts = [...state.posts, action.payload];
    },

    addCurrentUserPost: (state, action: PayloadAction<PostType>) => {
      state.currentUserPosts = [...state.currentUserPosts, action.payload];
    },

    removePost: (state, action: PayloadAction<string>) => {
      state.posts = state.posts.filter((post) => post._id !== action.payload);
    },
    removeCurrentUserPost: (state, action: PayloadAction<string>) => {
      state.currentUserPosts = state.currentUserPosts.filter(
        (post) => post._id !== action.payload
      );
    },
  },
});

export const {
  addPost,
  removePostById,
  fetchPosts,
  setPosts,
  addLike,
  fetchCurrentUserPosts,
  setCurrentUserPosts,
  updatePost,
  updateCurrentUserPostIfExists,
  addNewPost,
  addCurrentUserPost,
  removePost,
  removeCurrentUserPost,
} = postsSlice.actions;
export const selectPosts = (state: RootState) => state.posts.posts;
export default postsSlice.reducer;
