import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { removePostById } from "../../features/postsSlice";
import { PostType, UserType } from "../../types";
import { addLike } from "../../features/postsSlice";
import { useNavigate } from "react-router-dom";
//@ts-ignore
import { DateTime } from "luxon";
import { useState } from "react";
import LinesEllipsis from "react-lines-ellipsis";

interface Props {
  post: PostType;
  mode: "Feed" | "Page";
  isProfilePage?: boolean;
}

const Post: React.FC<Props> = ({ post, mode, isProfilePage }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector((state) => state.user.currentUser);

  const [isBeingLiked, setIsBeignLiked] = useState(false);
  const [isMenuShown, setIsMenuShown] = useState(false);

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
    navigate(`/posts/${post._id}`);
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
    const likes = post.likes.filter((user) =>
      typeof user === "object"
        ? user._id === currentUser._id
        : user === currentUser._id
    );
    return likes.length > 0;
  };

  return (
    <>
      {isMenuShown && (
        <div
          className="absolute top-0 w-full z-10 h-full"
          onClick={() => setIsMenuShown(false)}
        ></div>
      )}
      <div
        className={`relative rounded-lg shadow-md border border-purple-200 w-[225px] h-[278px] bg-white ${
          isBeingLiked ? "scale-110" : ""
        }`}
        onDoubleClick={addLikes}
      >
        {isMenuShown && (
          <div className="z-20 absolute top-5 right-0">
            <ul className="flex flex-col items-center w-16 text-purple-600 bg-purple-100 rounded-lg">
              <li className="cursor-pointer" onClick={moveToPostPage}>
                More
              </li>
              <li className="w-3/4 h-1 bg-blue-200 rounded-lg"></li>
              <li className="cursor-pointer">Save</li>
            </ul>
          </div>
        )}

        <div className="relative">
          <div className="z-[1] flex absolute w-full text-white justify-between px-3">
            <div className="">
              <div className="mt-2 font-bold text-xl">
                {mode === "Feed" && (post.creator as UserType).name}
              </div>
              <div>{countTime(post.createdAt)}</div>
            </div>
            <h1
              onClick={() => setIsMenuShown(!isMenuShown)}
              className="cursor-pointer transition duration-700 ease-in-out hover:scale-125 hover:font-bold"
            >
              . . .
            </h1>
          </div>
          <img
            className="rounded-t-lg h-28 w-full object-cover"
            src={
              post.selectedFile ||
              "http://northeastchamber.org/wp-content/uploads/2021/06/fireworks.jpeg"
            }
            alt=""
          />
        </div>
        <div className="flex flex-col px-3 gap-[6px] mt-3">
          <div className="text-slate-300">
            <LinesEllipsis
              text={post.tags.join(" ")}
              maxLine={1}
              basedOn="letters"
              style={{ overflowWrap: "anywhere" }}
            />
          </div>
          <div className="text-[28px]">
            {
              <LinesEllipsis
                text={post.title}
                maxLine={1}
                basedOn="letters"
                style={{ overflowWrap: "anywhere" }}
              />
            }
          </div>
          <div className="">
            <LinesEllipsis
              text={post.message}
              basedOn="letters"
              maxLine={1}
              style={{ overflowWrap: "anywhere" }}
            />
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
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
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
            {mode === "Page" && isProfilePage && (
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
    </>
  );
};
export default Post;
