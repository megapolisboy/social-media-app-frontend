import { PayloadAction } from "@reduxjs/toolkit";
import { call, put } from "redux-saga/effects";
import {
  authGoogleApi,
  getAllUsersApi,
  signInApi,
  signUpApi,
  subscribeApi,
} from "../api/user";
import {
  removeUserErrorMessage,
  setUserErrorMessage,
} from "../features/errorSlice";
import {
  addSubscription,
  removeSubscription,
  setToken,
  setUser,
  setUsers,
  SignInPayload,
  SignUpPayload,
} from "../features/userSlice";
import { GoogleResponseType, SignUpResponseType, UserType } from "../types";

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

export function* handleGetAllUsers(): Generator {
  try {
    const users = (yield call(getAllUsersApi)) as UserType[];
    yield put(setUsers(users));
  } catch (err: any) {
    console.log("Error while fetching users");
  }
}
