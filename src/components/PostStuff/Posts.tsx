import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchCurrentUserPosts, fetchPosts } from "../../features/postsSlice";
import { PostType, UserType } from "../../types";
import Post from "./Post";
import Spinner from "../Spinner";

interface Props {
  mode: "Feed" | "Page";
  user?: UserType;
}

const Posts: React.FC<Props> = ({ mode, user }) => {
  const currentUser = useAppSelector((state) => state.user.currentUser);
  const allPosts = useAppSelector((state) => state.posts.posts);
  const loading = useAppSelector((state) => state.posts.loading);
  const currentUserPosts = useAppSelector(
    (state) => state.posts.currentUserPosts
  );
  const posts = mode === "Feed" ? allPosts : currentUserPosts;
  const dispatch = useAppDispatch();
  const isProfilePage = currentUser._id === user?._id;
  useEffect(() => {
    if (mode === "Feed") {
      // TODO: add limitatiton
      dispatch(fetchPosts());
    } else {
      dispatch(fetchCurrentUserPosts());
    }
  }, [mode]);
  return (
    <>
      {loading ? (
        <div className="ml-10">
          <Spinner />
        </div>
      ) : (
        <div className="grid mt-3 pb-3 gap-6 bg-none grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 overflow-y-auto justify-items-center scrollbar-hide">
          {posts.map((post) => (
            <Post
              post={post as PostType}
              key={(post as PostType)._id}
              mode={mode}
              isProfilePage={isProfilePage}
            />
          ))}
        </div>
      )}
    </>
  );
};
export default Posts;
