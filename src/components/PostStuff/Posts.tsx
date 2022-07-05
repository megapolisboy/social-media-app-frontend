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
  const loading = useAppSelector((state) => state.posts.loading);
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
      dispatch(fetchCurrentUserPosts());
    }
    console.log(currentUserPosts);
  }, [mode]);
  return (
    <>
      {loading ? (
        <div className="ml-10">
          <Spinner />
        </div>
      ) : (
        <div className="grid -ml-9 gap-6 grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 justify-items-start overflow-y-auto scrollbar-hide">
          {posts.map((post) => (
            <Post post={post} key={post._id} mode={mode} />
          ))}
        </div>
      )}
    </>
  );
};
export default Posts;
