import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { tokenLogout } from "../../features/tokenSlice";
import {
  getCurrentlyOpenUser,
  logout,
  selectCurrentlyOpenUser,
  subscribe,
} from "../../features/userSlice";
import { UserType } from "../../types";
import Posts from "../PostStuff/Posts";
import AvatarImage from "../UI/AvatarImage";

interface Props {
  userId: string;
}

const MainPart = ({ userId }) => {
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

  const isFollowed = (user: UserType) => {
    const following = currentUser.subscriptions.find(
      (sub) => sub._id === user._id
    );

    return Boolean(following);
  };

  useEffect(() => {
    dispatch(getCurrentlyOpenUser(userId || currentUser._id));
  }, [dispatch, currentUser._id, userId, currentUser.subscriptions]);

  return (
    <div className="flex-grow w-full lg:max-w-[55%] bg-inherit flex flex-col gap-4">
      <div className="flex lg:hidden justify-between items-center">
        <h1 className="block text-2xl mb-1 md:text-3xl text-purple-700 cursor-pointer font-bold">
          INTROVERT
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
      <div className="hidden md:flex justify-around items-center py-2 border-2 border-blue-200 bg-white rounded-2xl">
        <div className="flex flex-col items-center h-full gap-1">
          <AvatarImage w="profile" currentUser={user} />
          <div className="text-center">{user.name}</div>
        </div>
        <div className="flex gap-2 md:gap-5 text-md sm:text-lg">
          <p className="text-center 2xl:text-2xl ">
            {user.posts?.length} <br /> posts
          </p>
          <p className="text-center 2xl:text-2xl">
            {user.subscribers?.length} <br /> followers
          </p>
          <p className="text-center 2xl:text-2xl">
            {user.subscriptions?.length} <br /> following
          </p>
        </div>
        {userId ? (
          <div className="flex flex-col justify-center gap-1 items-center">
            {!isFollowed(user) ? (
              <button
                onClick={() => dispatch(subscribe(user._id))}
                className="bg-purple-500 w-24 py-2 text-white rounded-md hover:border hover:border-purple-400 hover:bg-purple-100 hover:text-black"
              >
                Follow
              </button>
            ) : (
              <button
                onClick={() => dispatch(subscribe(user._id))}
                className="bg-purple-300 py-2 border border-white w-24 text-black rounded-md hover:border hover:border-purple-400 hover:bg-purple-100 hover:text-black"
              >
                Following
              </button>
            )}
            <button className="bg-purple-500 w-24 py-2 text-white rounded-md hover:border hover:border-purple-400 hover:bg-purple-100 hover:text-black">
              Text
            </button>
          </div>
        ) : (
          <div className="flex flex-col justify-center gap-1 items-center">
            <button
              onClick={() => {
                dispatch(logout());
                dispatch(tokenLogout());
              }}
              className="bg-purple-500 w-24 py-2 text-white rounded-md hover:border hover:border-purple-400 hover:bg-purple-100 hover:text-black"
            >
              Log out
            </button>
            <button className="flex-1 font-bold bg-[#8d5cf8] w-24 py-2 text-white rounded-md hover:border hover:border-[#b3b6ff] hover:bg-blue-100 hover:text-black">
              PREMIUM
            </button>
          </div>
        )}
      </div>

      <div className="flex gap-6 md:hidden items-center p-2 border-2 border-blue-200 bg-white rounded-2xl">
        <AvatarImage w="profile" currentUser={user} />
        <div className="flex flex-1 flex-col gap-2 items-start">
          <div className="text-center text-xl text-purple-600">{user.name}</div>
          <div className="w-full flex justify-around text-md gap-2 sm:text-lg">
            <p className="text-center 2xl:text-2xl ">
              {user.posts?.length} <br /> posts
            </p>
            <p className="text-center 2xl:text-2xl">
              {user.subscribers?.length} <br /> followers
            </p>
            <p className="text-center 2xl:text-2xl">
              {user.subscriptions?.length} <br /> following
            </p>
          </div>
          {userId ? (
            <div className="w-full flex gap-4 items-center">
              {!isFollowed(user) ? (
                <button
                  onClick={() => dispatch(subscribe(user._id))}
                  className="flex-1 bg-purple-500 py-2 text-white rounded-md hover:border hover:border-purple-400 hover:bg-purple-100 hover:text-black"
                >
                  Follow
                </button>
              ) : (
                <button
                  onClick={() => dispatch(subscribe(user._id))}
                  className="flex-1 bg-purple-300 py-2 border border-white text-black rounded-md hover:border hover:border-purple-400 hover:bg-purple-100 hover:text-black"
                >
                  Following
                </button>
              )}
              <button className="flex-1 bg-purple-500 w-24 py-2 text-white rounded-md hover:border hover:border-purple-400 hover:bg-purple-100 hover:text-black">
                Text
              </button>
            </div>
          ) : (
            <div className="w-full flex gap-4 items-center">
              <button
                onClick={() => {
                  dispatch(logout());
                  dispatch(tokenLogout());
                }}
                className="flex-1 bg-purple-500 w-24 py-2 text-white rounded-md hover:border hover:border-purple-400 hover:bg-purple-100 hover:text-black"
              >
                Log out
              </button>
              <button className="flex-1 font-bold bg-[#8d5cf8] w-24 py-2 text-white rounded-md hover:border hover:border-[#b3b6ff] hover:bg-blue-100 hover:text-black">
                PREMIUM
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="border-2 border-blue-200 bg-white rounded-2xl grow scrollbar-hide overflow-y-auto">
        <div className="flex justify-end mr-5">
          <div className="flex gap-3">
            <span
              className={`${
                !filter ? "font-bold" : ""
              } text-slate-400 cursor-pointer`}
              onClick={() => setFilter(null)}
            >
              Posts
            </span>
            <span
              onClick={() => setFilter("likes")}
              className={`${
                filter === "likes" ? "font-bold" : ""
              } text-purple-400 cursor-pointer`}
            >
              Liked posts
            </span>
          </div>
        </div>
        <div className="m-2">
          <Posts mode="Page" user={user} filter={filter} />
        </div>
      </div>
    </div>
  );
};
export default MainPart;
