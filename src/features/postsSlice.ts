import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";
import { RootState } from "../app/store";
import { PostType } from "../types";

interface PostsState {
  posts: PostType[];
}

const initialState: PostsState = {
  posts: [
    {
      id:0,
      creator: "Test User",
      time : "35",
      title: "New Year",
      message: "omg",
      tags: ["#happy"],
      image: undefined,
      likes:3,
    },
  ],
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<PostType>) => {},
    addLike :  (state, action: PayloadAction<PostType>) => {
      for (let i = 0; i < state.posts.length; i++) {
        if(state.posts[i].id === action.payload.id){
          state.posts[i] = {...action.payload, likes:action.payload.likes+1}
        }
      }
    },
    removePostById: (state, action: PayloadAction<number>) => {
      state.posts = state.posts.filter(s => s.id !== action.payload);
    },
    fetchPosts: (state) => {},
    setPosts: (state, action: PayloadAction<PostType[]>) => {
      state.posts = action.payload;
    },
  },
});

export const { addPost, removePostById, fetchPosts, setPosts, addLike} = postsSlice.actions;
export const selectPosts = (state: RootState) => state.posts.posts;
export default postsSlice.reducer;
