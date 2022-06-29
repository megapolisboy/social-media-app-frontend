import { PayloadAction } from "@reduxjs/toolkit";
import { call, put } from "redux-saga/effects";
import {
  addLikeApi,
  addPostApi,
  fetchCurrentUserPostsApi,
  fetchPostsApi,
  removePostByIdApi,
} from "../api/posts";
import {
  addCurrentUserPost,
  addNewPost,
  removeCurrentUserPost,
  removePost,
  setCurrentUserPosts,
  setPosts,
  updateCurrentUserPostIfExists,
  updatePost,
} from "../features/postsSlice";
import { PostType } from "../types";

//TODO: add error handling

export function* handleFetchCurrentUserPosts(): Generator {
  const posts = (yield call(fetchCurrentUserPostsApi)) as unknown as PostType[];
  yield put(setCurrentUserPosts(posts));
}

export function* handleAddPost(action: any): Generator {
  const post = (yield call(addPostApi, action.payload)) as unknown as PostType;
  yield put(addNewPost(post));
  yield put(addCurrentUserPost(post));
}

export function* handleRemovePostById(
  action: PayloadAction<string>
): Generator {
  try {
    yield call(removePostByIdApi, action.payload);
    yield put(removePost(action.payload));
    yield put(removeCurrentUserPost(action.payload));
  } catch (err) {
    console.log(err);
  }
}

export function* handleFetchPosts(): Generator {
  const posts = (yield call(fetchPostsApi)) as unknown as PostType[];
  yield put(setPosts(posts));
}

export function* handleAddLike(action: PayloadAction<string>): Generator {
  const post = (yield call(addLikeApi, action.payload)) as unknown as PostType;
  yield put(updatePost(post));
  yield put(updateCurrentUserPostIfExists(post));
}
