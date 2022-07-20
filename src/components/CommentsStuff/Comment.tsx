import React from "react";
import { useAppSelector } from "../../app/hooks";
import { CommentType } from "../../types";
import AvatarImage from "../UI/AvatarImage";

interface Props {
  comment: CommentType;
}

const Comment: React.FC<Props> = ({ comment }) => {
  const currentUser = useAppSelector((state) => state.user.currentUser);
  return (
    <div className="flex bg-[#F8F8F8] border-[1px] border-zinc-300 rounded-xl px-3 py-2">
      <div>
        <div className="text-lg text-purple-600">
          {comment.creator as unknown as string}
        </div>
        <div>{comment.message}</div>
      </div>
    </div>
  );
};

export default Comment;
