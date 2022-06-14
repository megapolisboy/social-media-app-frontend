import { PayloadAction } from "@reduxjs/toolkit";
import { call, put } from "redux-saga/effects";
import { authGoogleApi, signInApi, signUpApi } from "../api/user";
import { setToken, setUser } from "../features/userSlice";
import {
  SignUpResponseType,
  UserLongType,
  UserShortType,
  UserType,
} from "../types";

export function* handleAuthGoogle(action: PayloadAction<string>): Generator {
  const user = (yield call(
    authGoogleApi,
    action.payload
  )) as unknown as UserType;
  yield put(setUser(user));
}

export function* handleSignUp(action: PayloadAction<UserLongType>): Generator {
  const user: any = yield call(signUpApi, action.payload);
  const data = user.data as SignUpResponseType;
  yield put(setUser(data.result));
  yield put(setToken(data.token));
}

export function* handleSignIn(action: PayloadAction<UserShortType>): Generator {
  const user: any = yield call(signInApi, action.payload);
  const data = user.data as SignUpResponseType;
  yield put(setUser(data.result));
  yield put(setToken(data.token));
  console.log(data);
}
