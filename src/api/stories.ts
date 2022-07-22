import axios from "axios";

const api = axios.create({
  // baseURL: "https://social-media-app-introvert.herokuapp.com",
  baseURL: "http://localhost:5000",
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

export const fetchStoriesApi = async () => {
  const result = await api.get("/stories");
  return result.data;
};
