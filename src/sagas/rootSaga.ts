import { takeEvery } from "redux-saga/effects";
import {
  addLike,
  addPost,
  fetchPosts,
  removePostById,
} from "../features/postsSlice";
import { authGoogle, signIn, signUp } from "../features/userSlice";
import {
  handleAddLike,
  handleAddPost,
  handleFetchPosts,
  handleRemovePostById,
} from "./postsWorker";
import { handleAuthGoogle, handleSignIn, handleSignUp } from "./userWorker";

export function* watcherSaga() {
  yield takeEvery(addPost.type, handleAddPost);
  yield takeEvery(removePostById.type, handleRemovePostById);
  yield takeEvery(fetchPosts.type, handleFetchPosts);
  yield takeEvery(addLike.type, handleAddLike);

  yield takeEvery(authGoogle.type, handleAuthGoogle);
  yield takeEvery(signUp.type, handleSignUp);
  yield takeEvery(signIn.type, handleSignIn);
}
