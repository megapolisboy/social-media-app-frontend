import { call, put } from "redux-saga/effects";
import { addPostApi, fetchPostsApi, removePostByIdApi } from "../api/posts";
import { setPosts } from "../features/postsSlice";
import { PostType } from "../types";

export function* handleAddPost(action: any): Generator {
  const posts = (yield call(
    addPostApi,
    action.payload
  )) as unknown as PostType[];
  yield put(setPosts(posts));
}

export function* handleRemovePostById(action: any): Generator {
  // TODO: change payload to ID
  const posts = (yield call(
    removePostByIdApi,
    action.payload
  )) as unknown as PostType[];
  yield put(setPosts(posts));
}

export function* handleFetchPosts(action: any): Generator {
  const posts = (yield call(fetchPostsApi)) as unknown as PostType[];
  yield put(setPosts(posts));
}
