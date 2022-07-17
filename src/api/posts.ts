import axios from "axios";
import { AddCommentInput } from "../features/postsSlice";
import { PostType, ShortPostType } from "../types";

const api = axios.create({
  baseURL: "https://social-media-app-introvert.herokuapp.com",
  // baseURL: "http://localhost:5000",
});

api.interceptors.request.use((req) => {
  const localStorageData = localStorage.getItem("persist:root");
  const user = JSON.parse(localStorageData || "").token;
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
  return post.data;
};

export const addCommentApi = async (input: AddCommentInput) => {
  const { postId: id, comment } = input;
  const createdComment = await api.post(`/posts/${id}/comment`, comment);
  return createdComment.data;
};
