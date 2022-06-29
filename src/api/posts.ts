import axios from "axios";
import { PostType, ShortPostType } from "../types";

// TODO: substitute this w/ real backend.
// ! This is just a boilerplate
const api = axios.create({
  baseURL: "https://social-media-app-introvert.herokuapp.com",
  // baseURL: "http://localhost:5000",
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
  const newPost = await api.post("/posts", post);
  return newPost.data;
};

export const removePostByIdApi = async (id: string) => {
  await api.delete("/posts/" + id);
};

export const addLikeApi = async (id: string) => {
  const post = await api.patch(`/posts/${id}/likePost`);
  console.log(post.data);
  return post.data;
};
