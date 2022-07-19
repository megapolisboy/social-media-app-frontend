import { PayloadAction } from "@reduxjs/toolkit";
import { call, put } from "redux-saga/effects";
import {
  addStoryApi,
  authGoogleApi,
  getAllUsersApi,
  getCurrentUserApi,
  getUserByIdApi,
  signInApi,
  signUpApi,
  subscribeApi,
} from "../api/user";
import {
  removeUserErrorMessage,
  setUserErrorMessage,
} from "../features/errorSlice";
import { setToken } from "../features/tokenSlice";
import {
  addStoryToCurrentUser,
  addSubscription,
  removeSubscription,
  setCurrentlyOpenUser,
  setDefault,
  setUser,
  setUsers,
  SignInPayload,
  SignUpPayload,
} from "../features/userSlice";
import {
  GoogleResponseType,
  SignUpResponseType,
  StoryType,
  UserType,
} from "../types";

export function* handleGetCurrentUser(): Generator {
  const user = (yield call(getCurrentUserApi)) as unknown as UserType;
  yield put(setUser(user));
}

export function* handleAuthGoogle(action: PayloadAction<string>): Generator {
  const data = (yield call(
    authGoogleApi,
    action.payload
  )) as unknown as GoogleResponseType;
  yield put(setUser(data.result));
  yield put(setToken(data.token));
}

export function* handleSignUp(action: PayloadAction<SignUpPayload>): Generator {
  try {
    const user: any = yield call(signUpApi, action.payload.user);
    const data = user.data as SignUpResponseType;
    action.payload.navigate("/");
    yield put(setUser(data.result));
    yield put(setToken(data.token));
    yield put(removeUserErrorMessage());
  } catch (err: any) {
    yield put(setUserErrorMessage(err.response.data.message));
  }
}

export function* handleSignIn(action: PayloadAction<SignInPayload>): Generator {
  try {
    const user: any = yield call(signInApi, action.payload.user);
    const data = user.data as SignUpResponseType;
    action.payload.navigate("/");
    yield put(setUser(data.result));
    yield put(setToken(data.token));
    yield put(removeUserErrorMessage());
  } catch (err: any) {
    yield put(setUserErrorMessage(err.response.data.message));
  }
}

export function* handleSubscribe(action: PayloadAction<string>): Generator {
  try {
    const result = (yield call(subscribeApi, action.payload)) as any;
    const act: string = result.action;
    const user: UserType = result.user;

    if (act === "subscribe") {
      yield put(addSubscription(user));
    } else {
      yield put(removeSubscription(user));
    }
  } catch (err: any) {
    alert("Can't subscribe");
  }
}

export function* handleGetAllUsers(action: PayloadAction<string>): Generator {
  try {
    const users = (yield call(getAllUsersApi, action.payload)) as UserType[];
    yield put(setUsers(users));
  } catch (err: any) {
    console.log("Error while fetching users");
  }
}

export function* handleGetCurrentlyOpenUser(
  action: PayloadAction<string>
): Generator {
  try {
    const user = (yield call(getUserByIdApi, action.payload)) as UserType;
    yield put(setCurrentlyOpenUser(user));
  } catch (err: any) {
    console.log("Error while fetching user");
  }
}

export function* handleAddStory(action: PayloadAction<string>): Generator {
  try {
    const story = (yield call(addStoryApi, action.payload)) as StoryType;
    yield put(addStoryToCurrentUser(story));
  } catch (err: any) {
    console.log("Error while adding story");
  }
}

export function* handleLogoutForUsers(): Generator {
  yield put(setDefault());
}
