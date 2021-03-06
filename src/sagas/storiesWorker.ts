import { call, put } from "redux-saga/effects";
import { fetchStoriesApi } from "../api/stories";
import { setDefault, setStories } from "../features/storiesSlice";
import { UserWithStoriesType } from "../types";

export function* handleFetchStories(): Generator {
  const stories = (yield call(
    fetchStoriesApi
  )) as unknown as UserWithStoriesType[];
  yield put(setStories(stories));
}

export function* handleLogoutForStories(): Generator {
  yield put(setDefault());
}
