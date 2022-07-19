import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";
import { RootState } from "../app/store";
import { CommentType, PostType, ShortPostType } from "../types";

interface PostsState {
  posts: PostType[];
  current?: PostType;
}

export interface AddCommentInput {
  postId: string;
  comment: CommentType;
}

const initialState: PostsState = {
  posts: [],
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setDefault: (state) => initialState,
    addPost: (state, action: PayloadAction<ShortPostType>) => {},
    addLike: (state, action: PayloadAction<string>) => {},
    addComment: (state, action: PayloadAction<AddCommentInput>) => {},
    removePostById: (state, action: PayloadAction<string>) => {},
    fetchPosts: (state) => {},
    setPosts: (state, action: PayloadAction<PostType[]>) => {
      state.posts = action.payload;
    },

    updatePost: (state, action: PayloadAction<PostType>) => {
      const postIndex = state.posts.findIndex(
        (post) => post._id === action.payload._id
      );
      state.posts[postIndex] = action.payload;
    },

    addNewPost: (state, action: PayloadAction<PostType>) => {
      state.posts = [...state.posts, action.payload];
    },

    removePost: (state, action: PayloadAction<string>) => {
      state.posts = state.posts.filter((post) => post._id !== action.payload);
    },

    addCommentToPost: (state, action: PayloadAction<AddCommentInput>) => {
      const post = state.posts.find(
        (post) => post._id === action.payload.postId
      );
      post.comments.push(action.payload.comment);
    },
  },
});

export const {
  setDefault,
  addPost,
  removePostById,
  addComment,
  fetchPosts,
  setPosts,
  addLike,
  updatePost,
  addNewPost,
  removePost,
  addCommentToPost,
} = postsSlice.actions;

export const selectPosts = (state: RootState) => state.posts.posts;
export default postsSlice.reducer;
