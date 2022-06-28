import { PayloadAction } from "@reduxjs/toolkit";
import { call, put } from "redux-saga/effects";
import {
  addLikeApi,
  addPostApi,
  fetchCurrentUserPostsApi,
  fetchPostsApi,
  removePostByIdApi,
} from "../api/posts";
import { setCurrentUserPosts, setPosts } from "../features/postsSlice";
import { PostType } from "../types";

export function* handleFetchCurrentUserPosts(): Generator {
  const posts = (yield call(fetchCurrentUserPostsApi)) as unknown as PostType[];
  yield put(setCurrentUserPosts(posts));
}

export function* handleAddPost(action: any): Generator {
  const posts = (yield call(
    addPostApi,
    action.payload
  )) as unknown as PostType[];
  yield put(setPosts(posts));
  yield handleFetchCurrentUserPosts();
}

export function* handleRemovePostById(action: any): Generator {
  // TODO: change payload to ID
  const posts = (yield call(
    removePostByIdApi,
    action.payload
  )) as unknown as PostType[];
  yield put(setPosts(posts));
  yield handleFetchCurrentUserPosts();
}

export function* handleFetchPosts(): Generator {
  const posts = (yield call(fetchPostsApi)) as unknown as PostType[];
  yield put(setPosts(posts));
}

export function* handleAddLike(action: PayloadAction<string>): Generator {
  const posts = (yield call(
    addLikeApi,
    action.payload
  )) as unknown as PostType[];
  yield put(setPosts(posts));
  yield handleFetchCurrentUserPosts();
}
