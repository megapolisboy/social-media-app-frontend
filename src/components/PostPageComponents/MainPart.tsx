import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import { tokenLogout } from "../../features/tokenSlice";
import { addLike } from "../../features/postsSlice";
import {
  getCurrentlyOpenUser,
  logout,
  selectCurrentlyOpenUser,
  subscribe,
} from "../../features/userSlice";
import { UserType } from "../../types";
import Comments from "../CommentsStuff/Comments";
import Posts from "../PostStuff/Posts";
import RecomendationsWheel from "../RecomendationsWheel";
import AvatarImage from "../UI/AvatarImage";

//@ts-ignore
import { DateTime } from "luxon";

interface Props {
  userId: string;
}

const MainPart = ({ userId }) => {
  const [isBeingLiked, setIsBeignLiked] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector((state) => state.user.currentUser);
  const [filter, setFilter] = useState<"likes" | null>(null);

  const potentialUser = useAppSelector(selectCurrentlyOpenUser);
  let user: UserType;

  if (userId && potentialUser && potentialUser._id !== currentUser._id) {
    user = potentialUser;
  } else {
    user = currentUser;
  }

  function addLikes() {
    addBeingLikeEffect();
    dispatch(addLike(post._id));
  }

  const isFollowed = (user: UserType) => {
    const following = currentUser.subscriptions.find(
      (sub) => sub._id === user._id
    );

    return Boolean(following);
  };

  const addBeingLikeEffect = () => {
    setIsBeignLiked(true);
    setTimeout(() => setIsBeignLiked(false), 100);
  };

  useEffect(() => {
    dispatch(getCurrentlyOpenUser(userId || currentUser._id));
  }, [dispatch, currentUser._id, userId, currentUser.subscriptions]);

  const post = useAppSelector((state: RootState) =>
    state.posts.posts.find((post) => post._id === id)
  );

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
    <div className="flex-grow w-full lg:max-w-[55%] bg-inherit flex flex-col gap-4">
      <div className="border-2 border-blue-200 bg-white rounded-2xl grow scrollbar-hide overflow-y-auto">
        <div className="m-2">
        <div className="flex p-1.5 gap-4 flex-col-reverse lg:flex-row">
         <div className="grow ml-2  lg:flex flex-col">
           <div
            className={`${
              (post?.title.length as any) > 15 ? "text-[36px]" : "text-[48px]"
            } `}
          >
            {post?.title}
          </div>
          <div className="mt-3 text-[12px] md:text-[16px] text-slate-400">
            {post?.tags.join(" ")}
          </div>
          <div className="mt-6 md:mt-12 text-[18px] grow">{post?.message}</div>
          
          <div className="flex">
            <div>
              <div className="mt-4 text-[14px] md:text-[16px]">
                {"Created by : " +
                  (typeof post?.creator === "string"
                    ? post?.creator
                    : (post?.creator as UserType).name)}
              </div>
              <div className="mt-1 text-[12px] md:text-[14px] text-[#9C9C9C]">{countTime(post.createdAt)}</div>
            </div>
            
            <div
              className="flex gap-1 cursor-pointer hover:bg-slate-100 rounded-sm p-2 mt-2 ml-2 items-center"
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
              <div className="text-[12px] md:text-[16px] lg:text-[16px]">{`${post.likes.length} LIKE${
                post.likes.length !== 1 ? "S" : ""
              }`}</div>
            </div>
          </div>
        </div>
        <img className="lg:w-[50%] w-[100%] max-h-[350px] rounded-2xl object-cover" src={post?.selectedFile} alt="" />
      </div>
      {/*ADD REAL COMMENTS*/}
      <Comments />
      {/* comments={post?.comments} */}
      </div>
      </div>
    </div>
  );
};
export default MainPart;
