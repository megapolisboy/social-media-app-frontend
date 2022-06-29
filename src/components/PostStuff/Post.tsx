import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { removePostById, setCurrent } from "../../features/postsSlice";
import { PostType, UserType } from "../../types";
import { addLike } from "../../features/postsSlice";
import { useNavigate } from "react-router-dom";
//@ts-ignore
import { DateTime } from "luxon";
import { useState } from "react";

interface Props {
  post: PostType;
  mode: "Feed" | "Page";
}

const Post: React.FC<Props> = ({ post, mode }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector((state) => state.user.currentUser);

  const [isBeingLiked, setIsBeignLiked] = useState(false);

  const addBeingLikeEffect = () => {
    setIsBeignLiked(true);
    setTimeout(() => setIsBeignLiked(false), 100);
  };

  function removePost() {
    dispatch(removePostById(post._id));
  }

  function addLikes() {
    addBeingLikeEffect();
    dispatch(addLike(post._id));
  }

  const moveToPostPage = () => {
    dispatch(setCurrent(post));
    navigate(`/${post._id}`);
  };

  const countTime = (isoString: string) => {
    const date1 = DateTime.now();
    const date2 = DateTime.fromISO(post.createdAt);
    const diff = date1.diff(date2, [
      "years",
      "months",
      "days",
      "hours",
      "minutes",
      "seconds",
    ]);
    const time = diff.toObject();
    if (time.years && time.years > 0) return `${time.years} years ago`;
    if (time.months && time.months > 0) return `${time.months} months ago`;
    if (time.days && time.days > 0) return `${time.days} days ago`;
    if (time.hours && time.hours > 0) return `${time.hours} hours ago`;
    if (time.minutes && time.minutes > 0)
      return `${Math.round(time.minutes)} minutes ago`;
    if (time.seconds) return `${Math.round(time.seconds)} seconds ago`;
  };

  const isPostLikedByCurrentUser = () => {
    const likes = (post.likes as UserType[]).filter(
      (user) => user.email === currentUser.email
    );

    return likes.length > 0;
  };

  return (
    <div
      className={`shadow-2xl rounded-lg w-[300px] h-[370px] justify-self-center ${
        isBeingLiked ? "scale-110" : ""
      }`}
      onDoubleClick={addLikes}
    >
      <div className="relative">
        <div className="z-[1] flex absolute  w-full text-white justify-between px-5">
          <div className="">
            <div className="mt-2 font-bold text-xl">
              {(post.creator as UserType).name}
            </div>
            <div>{countTime(post.createdAt)}</div>
          </div>
          <h1
            onClick={moveToPostPage}
            className="cursor-pointer transition duration-700 ease-in-out hover:scale-125 hover:font-bold"
          >
            . . .
          </h1>
        </div>
        <img
          className="rounded-t-lg h-40 w-full object-cover"
          src={
            post.selectedFile ||
            "http://northeastchamber.org/wp-content/uploads/2021/06/fireworks.jpeg"
          }
          alt=""
        />
      </div>
      <div className="flex flex-col px-5 gap-3 mt-5">
        <div className="text-slate-300">
          {post.tags.join(" ").length > 30
            ? `${post.tags.join(" ").substring(0, 30)}...`
            : post.tags.join(" ")}
        </div>
        <div className="text-[36px]">
          {post.title.length > 12
            ? `${post.title.substring(0, 12)}...`
            : post.title}
        </div>
        <div className="">
          {post.message.length > 32
            ? `${post.message.substring(0, 32)}...`
            : post.message}
        </div>
        <div className="flex w-full justify-between -ml-2">
          <div
            className="flex gap-1 cursor-pointer hover:bg-slate-100 rounded-sm p-2"
            onClick={addLikes}
          >
            {isPostLikedByCurrentUser() ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-red-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clip-rule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            )}

            <div>{`${post.likes.length} LIKE${
              post.likes.length !== 1 ? "S" : ""
            }`}</div>
          </div>
          {mode === "Page" && (
            <div
              className="flex cursor-pointer hover:bg-slate-100 rounded-sm p-2"
              onClick={removePost}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
              <div>DELETE</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Post;
