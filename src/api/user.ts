import axios from "axios";
import {
  GoogleResponseType,
  GoogleUser,
  PostType,
  SignUpResponseType,
  StoryType,
  UserLongType,
  UserShortType,
  UserType,
} from "../types";

// TODO: substitute this w/ real backend.
// ! This is just a boilerplate
const api = axios.create({
  baseURL: "https://social-media-app-introvert.herokuapp.com",
  // baseURL: "http://localhost:5000",
});

const tokenApi = axios.create({
  baseURL: "https://social-media-app-introvert.herokuapp.com",
  // baseURL: "http://localhost:5000",
});

tokenApi.interceptors.request.use((req) => {
  const localStorageData = localStorage.getItem("persist:root");
  const user = JSON.parse(localStorageData || "").token;
  const token = JSON.parse(user).token;
  if (token) {
    req.headers!.Authorization = "Bearer " + token;
  }
  return req;
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

export const subscribeApi = async (userId: string) => {
  const result = await tokenApi.patch("/user/subscribe/" + userId);
  return result.data;
};

export const getAllUsersApi = async (search: string): Promise<UserType[]> => {
  const users = await tokenApi.get("/user/" + search);
  return users.data;
};

export const getUserByIdApi = async (userId: string): Promise<UserType> => {
  const user = await tokenApi.get("/user/id/" + userId);
  return user.data;
};

export const addStoryApi = async (story: string): Promise<StoryType> => {
  const result = await tokenApi.post("/user/story", { story });
  return result.data;
};

export const getCurrentUserApi = async (): Promise<UserType> => {
  const result = await tokenApi.get("/user/current");
  console.log(result);
  return result.data;
};
