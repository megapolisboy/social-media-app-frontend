import { takeEvery } from "redux-saga/effects";
import { addPost, fetchPosts, removePostById } from "../features/postsSlice";
import {
  handleAddPost,
  handleFetchPosts,
  handleRemovePostById,
} from "./postsWorker";

export function* watcherSaga() {
  yield takeEvery(addPost.type, handleAddPost);
  yield takeEvery(removePostById.type, handleRemovePostById);
  yield takeEvery(fetchPosts.type, handleFetchPosts);
}
