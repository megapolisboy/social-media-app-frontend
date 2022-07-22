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
  onClick: () => void;
}

interface LItem {
  cUser: UserType;
  onClick: () => void;
}

const SListItem: React.FC<LItem> = ({ cUser, onClick }) => {
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
    <div
      onClick={(e) => e.stopPropagation()}
      className="flex items-center justify-between"
    >
      <div
      // onClick={() => {
      //   navigate("/profile/" + cUser._id);
      //   onClick();
      // }}
      >
        <AvatarImage currentUser={cUser} w="profile" />
      </div>
      <div>{cUser.name}</div>
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
  );
};

const SList: React.FC<Props> = ({ type, user, onClick }) => {
  return (
    <div className="bg-[#F3EFFE] w-[400px] h-[700px] rounded-3xl flex flex-col gap-4 p-3 overflow-auto border-8 border-white scrollbar-hide">
      {type === "followers" ? (
        <h3 className="self-center text-purple-400 text-[24px]">Followers</h3>
      ) : (
        <h3 className="self-center text-purple-400 text-[24px]">Following</h3>
      )}
      {type === "followers"
        ? user.subscribers.map((u) => (
            <SListItem onClick={onClick} key={u.name} cUser={u} />
          ))
        : user.subscriptions.map((u) => (
            <SListItem onClick={onClick} key={u.name} cUser={u} />
          ))}
    </div>
  );
};
export default SList;
