import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import AvatarImage from "../UI/AvatarImage";
import Comment from "./Comment";
import { addComment } from "../../features/postsSlice";
import { CommentType } from "../../types";

interface Props {
  postId: string;
}

const Comments: React.FC<Props> = ({ postId }) => {
  const dispatch = useAppDispatch();
  const [isAddButtonGreen, setIsAddButtonGreen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const currentUser = useAppSelector((state) => state.user.currentUser);
  const name = useAppSelector(
    (state: RootState) => state.posts.current?.creator
  );

  const post = useAppSelector((state: RootState) =>
    state.posts.posts.find((post) => post._id === postId)
  );

  const makeButtonGreen = () => {
    setIsAddButtonGreen(true);
    setTimeout(() => setIsAddButtonGreen(false), 5000);
  };

  const addMessage = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!message) return;
    dispatch(addComment({ postId, comment: message }));
    setMessage("");
    makeButtonGreen();
  };

  return (
    <div className="flex flex-col mb-9 lg:mb-0">
      <div className="w-full">
        <div className="flex flex-row items-center justify-between">
          <AvatarImage w="user" currentUser={currentUser} />
          <input
            className="grow mx-3 border-2 border-zinc-300 rounded-md p-1"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            type="text"
            placeholder="Write your thoughts here..."
          />
          <button
            onClick={addMessage}
            className="bg-inherit border-none h-8 w-8 rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={
                (isAddButtonGreen
                  ? "text-green-600 "
                  : "text-gray-700 hover:text-black ") + "h-8 w-8"
              }
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-y-2 mt-3">
        <h3>Other thoughts</h3>
        <div className="flex flex-col gap-y-5">
          {post.comments.map((comment) => (
            <Comment comment={comment as CommentType} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Comments;
