import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchCurrentUserPosts, fetchPosts } from "../../features/postsSlice";
import { PostType, UserType } from "../../types";
import Post from "./Post";
import Spinner from "../Spinner";

interface Props {
  mode: "Feed" | "Page";
  user?: UserType;
  isSearchShown?: boolean;
  filter?: "likes" | "following" | "newest" | "popular" | null;
}

const Posts: React.FC<Props> = ({ mode, user, isSearchShown, filter }) => {
  const currentUser = useAppSelector((state) => state.user.currentUser);
  const allPosts = useAppSelector((state) => state.posts.posts);
  const loading = useAppSelector((state) => state.posts.loading);
  const currentUserPosts = useAppSelector(
    (state) => state.posts.currentUserPosts
  );
  const posts =
    mode === "Feed"
      ? allPosts
      : user._id === currentUser._id
      ? currentUserPosts
      : user.posts;
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

  let filteredPosts: PostType[];

  if (!filter) {
    filteredPosts = posts as PostType[];
  } else if (filter === "likes") {
    filteredPosts = (posts as PostType[]).filter(
      (post) =>
        post.likes.includes(currentUser._id) ||
        (post.likes as UserType[]).findIndex(
          (like) => like._id === currentUser._id
        ) !== -1
    );
  } else if (filter === "following") {
    filteredPosts = (posts as PostType[]).filter((post) =>
      currentUser.subscriptions
        .map((user) => user._id)
        .includes((post.creator as UserType)._id)
    );
  } else if (filter === "newest") {
    filteredPosts = (posts as PostType[]).slice(0, 6);
  } else {
    filteredPosts = [...(posts as PostType[])];
    filteredPosts.sort(
      (a: PostType, b: PostType) => b.likes.length - a.likes.length
    );
    filteredPosts = filteredPosts.slice(0, 6);
  }

  return (
    <>
      {loading ? (
        <div className="ml-10">
          <Spinner />
        </div>
      ) : (
        <div
          className={
            (isSearchShown ? "hidden " : "grid ") +
            "lg:grid mt-3 pb-3 gap-6 bg-none grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 overflow-y-auto justify-items-center scrollbar-hide"
          }
        >
          {filteredPosts.map((post) => (
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
