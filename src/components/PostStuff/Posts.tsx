import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchCurrentUserPosts, fetchPosts } from "../../features/postsSlice";
import { PostType } from "../../types";
import Post from "./Post";
import Spinner from "../Spinner";

interface Props {
  mode: "Feed" | "Page";
}

const Posts: React.FC<Props> = ({ mode }) => {
  const allPosts = useAppSelector((state) => state.posts.posts);
  // const loading = useAppSelector((state) => state.posts.loading);
  const loading = false;
  const currentUserPosts = useAppSelector(
    (state) => state.posts.currentUserPosts
  );
  const posts = mode === "Feed" ? allPosts : currentUserPosts;
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (mode === "Feed") {
      // TODO: add limitatiton
      dispatch(fetchPosts());
    } else {
      // dispatch(fetchCurrentUserPosts)
      dispatch(fetchCurrentUserPosts());
    }
    console.log(currentUserPosts);
  }, [mode]);
  return (
    <div className="grow">
      {loading ? (
        <div className="ml-10">
          <Spinner />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10 pb-5">
          {posts.map((post) => (
            <Post post={post} key={post._id} mode={mode} />
          ))}
        </div>
      )}
    </div>
  );
};
export default Posts;
