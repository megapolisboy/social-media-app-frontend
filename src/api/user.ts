import axios from "axios";
import {
  PostType,
  SignUpResponseType,
  UserLongType,
  UserShortType,
  UserType,
} from "../types";

// TODO: substitute this w/ real backend.
// ! This is just a boilerplate
const api = axios.create({ baseURL: "http://localhost:5000" });

export const authGoogleApi = async (a: string) => {
  // const posts = await axios.get(url);
  return {};
};

export const signUpApi = async (user: UserLongType) => {
  const userObj: SignUpResponseType = await api.post("/user/signup", user);
  return userObj;
};

export const signInApi = async (user: UserShortType) => {
  const userObj: SignUpResponseType = await api.post("/user/signin", user);
  return userObj;
};
