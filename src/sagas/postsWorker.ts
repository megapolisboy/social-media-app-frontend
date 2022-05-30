export function* handleAddPost(action: any) {
  //TODO: call an api here
  // const posts = yield api.addPost(action.payload)
  yield put(setPosts(posts));
}

export function* handleRemovePostById(action: any) {
  // TODO: call an api here
  // const posts = yield api.removePostById(action.payload)
  yield put(setPosts(posts));
}

export function* handleFetchPosts(action: any) {
  //TODO: call an api here
  // const posts = yield api.rfetchPosts(action.payload)
  yield put(setPosts(posts));
}
