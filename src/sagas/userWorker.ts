import { PayloadAction } from "@reduxjs/toolkit";
import { NavigateFunction } from "react-router-dom";
import { call, put } from "redux-saga/effects";
import { authGoogleApi, signInApi, signUpApi } from "../api/user";
import {
  setToken,
  setUser,
  SignInPayload,
  SignUpPayload,
} from "../features/userSlice";
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

export function* handleSignUp(action: PayloadAction<SignUpPayload>): Generator {
  const user: any = yield call(signUpApi, action.payload.user);
  const data = user.data as SignUpResponseType;
  action.payload.navigate("/");
  yield put(setUser(data.result));
  yield put(setToken(data.token));
}

export function* handleSignIn(action: PayloadAction<SignInPayload>): Generator {
  const user: any = yield call(signInApi, action.payload.user);
  const data = user.data as SignUpResponseType;
  action.payload.navigate("/");
  yield put(setUser(data.result));
  yield put(setToken(data.token));
}
