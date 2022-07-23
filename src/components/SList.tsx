import { SubmitHandler, useForm } from "react-hook-form";
import { isRegularExpressionLiteral } from "typescript";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { addPost } from "../features/postsSlice";
import FileBase from "react-file-base64";
import { useState } from "react";
import React from "react";
import { UserType } from "../types";
import AvatarImage from "./UI/AvatarImage";
import { subscribe } from "../features/userSlice";
import { useNavigate } from "react-router-dom";

interface Props {
  type: string;
  user: UserType;
  hideForm: () => void;
}

interface LItem {
  cUser: UserType;
  hideForm: () => void;
}

const SListItem: React.FC<LItem> = ({ cUser, hideForm }) => {
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector((state) => state.user.currentUser);
  const navigate = useNavigate();

  const isFollowed = (user: UserType) => {
    const following = currentUser.subscriptions.find(
      (sub) => sub._id === user._id
    );
    return Boolean(following);
  };

  return (
    <div className="flex items-center justify-between">
      <div
        className="flex justify-start items-center gap-3 cursor-pointer"
        onClick={() => {
          navigate("/profile/" + cUser._id);
          hideForm();
        }}
      >
        <AvatarImage currentUser={cUser} w="profile" />
        <div>{cUser.name}</div>
      </div>

      {cUser._id !== currentUser._id && (
        <div>
          {!isFollowed(cUser) ? (
            <button
              onClick={() => dispatch(subscribe(cUser._id))}
              className="bg-purple-500 w-24 h-8 text-white rounded-md hover:border hover:border-purple-400 hover:bg-purple-100 hover:text-black"
            >
              Follow
            </button>
          ) : (
            <button
              onClick={() => dispatch(subscribe(cUser._id))}
              className="bg-purple-300 border border-white w-24 h-8 text-black rounded-md hover:border hover:border-purple-400 hover:bg-purple-100 hover:text-black"
            >
              Following
            </button>
          )}
        </div>
      )}
    </div>
  );
};

const SList: React.FC<Props> = ({ hideForm, type, user }) => {
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="relative w-full bg-[#F3EFFE] max-w-[400px] h-[600px] rounded-3xl flex flex-col gap-4 p-3 overflow-auto border-8 border-white scrollbar-hide"
    >
      {type === "followers" ? (
        <h3 className="self-center text-purple-500 text-[24px]">Followers</h3>
      ) : (
        <h3 className="self-center text-purple-500 text-[24px]">Following</h3>
      )}
      <button
        className="absolute right-3 top-3 rounded-full hover:bg-gray-200 p-1"
        onClick={hideForm}
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
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <div className="overflow-y-auto scrollbar-hide flex flex-col gap-3">
        {type === "followers"
          ? user.subscribers.map((u) => (
              <SListItem hideForm={hideForm} key={u._id} cUser={u} />
            ))
          : user.subscriptions.map((u) => (
              <SListItem hideForm={hideForm} key={u._id} cUser={u} />
            ))}
      </div>
    </div>
  );
};
export default SList;
