import { takeEvery } from "redux-saga/effects";
import {
  addComment,
  addLike,
  addPost,
  fetchCurrentUserPosts,
  fetchPosts,
  removePostById,
} from "../features/postsSlice";
import {
  authGoogle,
  signIn,
  signUp,
  subscribe,
  unsubscribe,
} from "../features/userSlice";
import {
  handleAddComment,
  handleAddLike,
  handleAddPost,
  handleFetchCurrentUserPosts,
  handleFetchPosts,
  handleRemovePostById,
} from "./postsWorker";
import {
  handleAuthGoogle,
  handleSignIn,
  handleSignUp,
  handleSubscribe,
  handleUnsubscribe,
} from "./userWorker";

export function* watcherSaga() {
  yield takeEvery(addPost.type, handleAddPost);
  yield takeEvery(removePostById.type, handleRemovePostById);
  yield takeEvery(fetchPosts.type, handleFetchPosts);
  yield takeEvery(addLike.type, handleAddLike);
  yield takeEvery(addComment.type, handleAddComment);

  yield takeEvery(authGoogle.type, handleAuthGoogle);
  yield takeEvery(signUp.type, handleSignUp);
  yield takeEvery(signIn.type, handleSignIn);
  yield takeEvery(subscribe.type, handleSubscribe);
  yield takeEvery(unsubscribe.type, handleUnsubscribe);

  yield takeEvery(fetchCurrentUserPosts.type, handleFetchCurrentUserPosts);
}
