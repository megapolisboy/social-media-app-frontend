import { addPost } from "../features/postsSlice";

export function* watcherSaga() {
  yield takeEvery(addPost.type, handleAddPost);
  yield takeEvery(removePostById.type, handleRemovePostById);
  yield takeEvery(fetchPosts.type, handleFetchPosts);
}
