import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";
import { RootState } from "../app/store";
import { PostType, ShortPostType } from "../types";

interface PostsState {
  posts: PostType[];
}

const initialState: PostsState = {
  posts: [],
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
  },
});

export const { addPost, removePostById, fetchPosts, setPosts, addLike } =
  postsSlice.actions;
export const selectPosts = (state: RootState) => state.posts.posts;
export default postsSlice.reducer;
