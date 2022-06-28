import axios from "axios";
import { PostType, ShortPostType } from "../types";

// TODO: substitute this w/ real backend.
// ! This is just a boilerplate
const api = axios.create({
  baseURL: "https://social-media-app-introvert.herokuapp.com",
});

api.interceptors.request.use((req) => {
  const localStorageData = localStorage.getItem("persist:root");
  const user = JSON.parse(localStorageData || "").user;
  const token = JSON.parse(user).token;
  if (token) {
    req.headers!.Authorization = "Bearer " + token;
  }
  return req;
});

export const fetchPostsApi = async () => {
  const result = await api.get("/posts");
  return result.data;
};

export const fetchCurrentUserPostsApi = async () => {
  const result = await api.get("/posts/currentUserPosts");
  return result.data;
};

export const addPostApi = async (post: ShortPostType) => {
  await api.post("/posts", post);
  const result = await fetchPostsApi();
  return result;
};

export const removePostByIdApi = async (id: string) => {
  await api.delete("/posts/" + id);
  const result = await fetchPostsApi();
  return result;
};

export const addLikeApi = async (id: string) => {
  await api.patch(`/posts/${id}/likePost`);
  const result = await fetchPostsApi();
  return result;
};
