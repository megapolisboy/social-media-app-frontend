import axios from "axios";
import { PostType } from "../types";

// TODO: substitute this w/ real backend.
// ! This is just a boilerplate
const url = "";

const posts = [
  {
    id: 0,
    creator: "Oleg",
    title: "Life in the small town",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse laoreet, sapien non pharetra imperdiet, ipsum lectus eleifend diam, sed interdum arcu ante eu diam. Aliquam erat volutpat. Phasellus gravida mauris sed erat euismod suscipit orci aliquam.",
    tags: ["#happy","#cool"],
    likes: 0,
    image: undefined,
  },
  {
    id: 1,
    creator: "Boris",
    title: "Life in the village",
    message: "pretty refreshing",
    tags: [],
    likes: 0,
    image: undefined,
  },
  {
    id: 2,
    creator: "Vova",
    title: "Life in the capital",
    message: "luxurious",
    tags: [],
    likes: 0,
    image: undefined,
  },
  {
    id: 3,
    creator: "John",
    title: "Life as a coder",
    message: "makes me feel powerful",
    tags: [],
    likes: 0,
    image: undefined,
  },
];

export const fetchPostsApi = async () => {
  // const posts = await axios.get(url);
  return posts;
};

export const addPostApi = async (post: PostType) => {
  // await axios.post(url, post);
  // const posts = await axios.get(url);
  return [...posts, post];
};

export const removePostByIdApi = async (post: PostType) => {
  // await axios.delete(url + "/" + post._id);
  // const posts = await axios.get(url);
  return posts;
};

export const addLikeApi = async (id: number) => {
  return posts;
};
