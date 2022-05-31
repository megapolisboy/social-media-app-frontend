import { PostType } from "../types";

// TODO: substitute this w/ real backend.
// ! This is just a boilerplate
const posts = [
  {
    creator: "Oleg",
    title: "Life in the small town",
    message: "good",
    tags: [],
    image: undefined,
  },
  {
    creator: "Boris",
    title: "Life in the village",
    message: "pretty refreshing",
    tags: [],
    image: undefined,
  },
  {
    creator: "Vova",
    title: "Life in the capital",
    message: "luxurious",
    tags: [],
    image: undefined,
  },
  {
    creator: "John",
    title: "Life as a coder",
    message: "makes me feel powerful",
    tags: [],
    image: undefined,
  },
];

export const fetchPostsApi = async () => {
  return posts;
};

export const addPostApi = async (post: PostType) => {
  return [...posts, post];
};

export const removePostByIdApi = async (post: PostType) => {
  return posts;
};
