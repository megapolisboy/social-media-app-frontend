import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";
import { RootState } from "../app/store";
import { PostType } from "../types";

interface PostsState {
  posts: PostType[];
  current?:PostType;
}

const initialState: PostsState = {
  posts: [],
  current:{
    id: 0,
    creator: "Oleg",
    title: "Life in the small town",
    message: "goodfd guihgiuhfdusghi dufhgidsugh",
    tags: ["#happy","#cool"],
    likes: 0,
    image: undefined,
  },
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<PostType>) => {},
    addLike: (state, action: PayloadAction<number>) => {},
    removePostById: (state, action: PayloadAction<number>) => {},
    fetchPosts: (state) => {},
    setPosts: (state, action: PayloadAction<PostType[]>) => {
      state.posts = action.payload;
    },
    setCurrent: (state, action: PayloadAction<PostType>) => {
      state.current = action.payload;
    },
  },
});

export const { addPost, removePostById, fetchPosts, setPosts, addLike, setCurrent } =
  postsSlice.actions;
export const selectPosts = (state: RootState) => state.posts.posts;
export default postsSlice.reducer;
