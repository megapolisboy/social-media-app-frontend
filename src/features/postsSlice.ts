import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";
import { RootState } from "../app/store";
import { CommentType, PostType, ShortPostType } from "../types";

interface PostsState {
  posts: PostType[];
  current?: PostType;
  currentUserPosts: PostType[];
  loading: boolean;
}

export interface AddCommentInput {
  postId: string;
  comment: CommentType;
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
  loading: false,
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<ShortPostType>) => {},
    addLike: (state, action: PayloadAction<string>) => {},
    addComment: (state, action: PayloadAction<AddCommentInput>) => {},
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
    setCurrent: (state, action: PayloadAction<PostType>) => {
      state.current = action.payload;
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

    addCommentToPost: (state, action: PayloadAction<AddCommentInput>) => {
      const post = state.posts.find(
        (post) => post._id === action.payload.postId
      );
      post.comments.push(action.payload.comment);
    },

    addCommentToCurrentUserPost: (
      state,
      action: PayloadAction<AddCommentInput>
    ) => {
      const post = state.currentUserPosts.find(
        (post) => post._id === action.payload.postId
      );
      post.comments.push(action.payload.comment);
    },
  },
});

export const {
  addPost,
  removePostById,
  addComment,
  fetchPosts,
  setPosts,
  addLike,
  fetchCurrentUserPosts,
  setCurrent,
  setCurrentUserPosts,
  updatePost,
  updateCurrentUserPostIfExists,
  addNewPost,
  addCurrentUserPost,
  removePost,
  removeCurrentUserPost,
  addCommentToPost,
  addCommentToCurrentUserPost,
} = postsSlice.actions;

export const selectPosts = (state: RootState) => state.posts.posts;
export default postsSlice.reducer;
