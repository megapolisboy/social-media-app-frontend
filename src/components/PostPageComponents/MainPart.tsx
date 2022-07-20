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
  postId: string;
}

const MainPart = ({ postId }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector((state) => state.user.currentUser);

  function addLikes() {
    dispatch(addLike(post._id));
  }

  const post = useAppSelector((state: RootState) =>
    state.posts.posts.find((post) => post._id === postId)
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
      <div className="flex lg:hidden justify-between items-center">
        <h1 className="block text-2xl mb-1 md:text-3xl text-purple-700 cursor-pointer font-bold">
          !NTROVERT
        </h1>
        <button
          onClick={() => navigate("/messages")}
          className="rounded-full w-8 h-8 flex justify-center items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 hover:text-purple-700 text-bold"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </button>
      </div>

      <div className="border-2 border-blue-200 bg-white rounded-2xl grow scrollbar-hide lg:overflow-y-auto">
        <div className="m-2">
          <div className="flex p-1.5 gap-4 flex-col">
            <div className="grow lg:flex flex-col">
              <img
                className="w-full max-h-[350px] rounded-2xl object-cover"
                src={post?.selectedFile}
                alt=""
              />
              <div
                className={`${
                  post?.title.length > 15 ? "text-[36px]" : "text-[48px]"
                } break-words`}
              >
                {post?.title}
              </div>
              <div className="text-[12px] md:text-[16px] text-slate-400 break-words">
                {post?.tags.join(" ")}
              </div>
              <div className="mt-3 text-[18px] grow break-words">
                {post?.message}
              </div>

              <div className="flex justify-between items-center my-4">
                <div className="flex flex-col gap-2">
                  <div className="text-[14px] md:text-[16px]">
                    {"Created by: " +
                      (typeof post?.creator === "string"
                        ? post?.creator
                        : (post?.creator as UserType).name)}
                  </div>
                  <div className="text-[12px] md:text-[14px] text-[#9C9C9C]">
                    {countTime(post.createdAt)}
                  </div>
                </div>

                <div
                  className="flex gap-1 cursor-pointer hover:bg-slate-100 rounded-sm p-2 items-center"
                  onClick={addLikes}
                >
                  {isPostLikedByCurrentUser() ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-red-500"
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
                      className="h-10 w-10"
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
                  <div className="text-sm sm:text-lg md:text-xl ">{`${
                    post.likes.length
                  } LIKE${post.likes.length !== 1 ? "S" : ""}`}</div>
                </div>
              </div>
            </div>
          </div>
          <Comments postId={postId} />
        </div>
      </div>
    </div>
  );
};
export default MainPart;
