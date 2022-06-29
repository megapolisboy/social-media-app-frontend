import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";
import { RootState } from "../app/store";
import { PostType, ShortPostType } from "../types";

interface PostsState {
  posts: PostType[];
  current?: PostType;
  currentUserPosts: PostType[];
}

const initialState: PostsState = {
  posts: [],
  current: {
    _id: "0",
    creator: "Oleg",
    title: "Life in the small town",
    message: "goodfd guihgiuhfdusghi dufhgidsugh",
    tags: ["#happy", "#cool"],
    likes: [],
    selectedFile: "",
    comments: [],
    createdAt: "",
  },
  currentUserPosts: [],
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<ShortPostType>) => {},
    addLike: (state, action: PayloadAction<string>) => {},
    removePostById: (state, action: PayloadAction<string>) => {},
    fetchPosts: (state) => {},
    setPosts: (state, action: PayloadAction<PostType[]>) => {
      state.posts = action.payload;
    },
    setCurrent: (state, action: PayloadAction<PostType>) => {
      state.current = action.payload;
    },
    fetchCurrentUserPosts: (state) => {},
    setCurrentUserPosts: (state, action: PayloadAction<PostType[]>) => {
      state.currentUserPosts = action.payload;
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
  setCurrent,
  setCurrentUserPosts,
} = postsSlice.actions;

export const selectPosts = (state: RootState) => state.posts.posts;
export default postsSlice.reducer;
