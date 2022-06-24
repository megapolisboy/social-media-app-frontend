import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchPosts } from "../features/postsSlice";
import { PostType } from "../types";
import Post from "./Post";

const Posts: React.FC = () => {
  const posts = useAppSelector((state) => state.posts.posts);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  return (
    <div className="grow">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10">
        {posts.map((post) => (
          <Post post={post} key={post._id} />
        ))}
      </div>
    </div>
  );
};
export default Posts;
