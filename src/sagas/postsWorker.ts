import { PayloadAction } from "@reduxjs/toolkit";
import { call, put } from "redux-saga/effects";
import {
  addCommentApi,
  addLikeApi,
  addPostApi,
  fetchCurrentUserPostsApi,
  fetchPostsApi,
  removePostByIdApi,
} from "../api/posts";
import {
  AddCommentInput,
  addCommentToCurrentUserPost,
  addCommentToPost,
  addCurrentUserPost,
  addNewPost,
  removeCurrentUserPost,
  removePost,
  setCurrentUserPosts,
  setPosts,
  updateCurrentUserPostIfExists,
  updatePost,
} from "../features/postsSlice";
import {
  getCurrentlyOpenUser,
  updateCurrentlyOpenUserPost,
  updateUsersPost,
} from "../features/userSlice";
import { CommentType, PostType, UserType } from "../types";

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
  yield put(updateUsersPost(post));
  yield put(updateCurrentlyOpenUserPost(post));
}

export function* handleAddComment(
  action: PayloadAction<AddCommentInput>
): Generator {
  const comment = (yield call(
    addCommentApi,
    action.payload
  )) as unknown as CommentType;
  yield put(addCommentToPost({ postId: action.payload.postId, comment }));
  yield put(
    addCommentToCurrentUserPost({ postId: action.payload.postId, comment })
  );
}
