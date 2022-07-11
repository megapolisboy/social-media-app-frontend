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
  getAllUsers,
  getCurrentlyOpenUser,
  signIn,
  signUp,
  subscribe,
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
  handleGetAllUsers,
  handleGetCurrentlyOpenUser,
  handleSignIn,
  handleSignUp,
  handleSubscribe,
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
  yield takeEvery(getAllUsers.type, handleGetAllUsers);
  yield takeEvery(getCurrentlyOpenUser.type, handleGetCurrentlyOpenUser);

  yield takeEvery(fetchCurrentUserPosts.type, handleFetchCurrentUserPosts);
}
