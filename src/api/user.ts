import axios from "axios";
import {
  GoogleResponseType,
  GoogleUser,
  PostType,
  SignUpResponseType,
  UserLongType,
  UserShortType,
  UserType,
} from "../types";

// TODO: substitute this w/ real backend.
// ! This is just a boilerplate
const api = axios.create({
  // baseURL: "https://social-media-app-introvert.herokuapp.com",
  baseURL: "http://localhost:5000",
});

export const authGoogleApi = async (
  token: string
): Promise<GoogleResponseType> => {
  const data = (await api.post("/user/signin/google", { token })).data;
  const result: GoogleUser = data.result;
  const jwtToken: string = data.token;
  return { result, token: jwtToken };
};

export const signUpApi = async (user: UserLongType) => {
  const userObj: SignUpResponseType = await api.post("/user/signup", user);
  return userObj;
};

export const signInApi = async (user: UserShortType) => {
  const userObj: SignUpResponseType = await api.post("/user/signin", user);
  return userObj;
};
