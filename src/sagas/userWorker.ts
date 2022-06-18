import { PayloadAction } from "@reduxjs/toolkit";
import { call, put } from "redux-saga/effects";
import { authGoogleApi, signInApi, signUpApi } from "../api/user";
import {
  removeUserErrorMessage,
  setUserErrorMessage,
} from "../features/errorSlice";
import {
  setToken,
  setUser,
  SignInPayload,
  SignUpPayload,
} from "../features/userSlice";
import { GoogleResponseType, SignUpResponseType } from "../types";

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
