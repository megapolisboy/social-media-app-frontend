import React from "react";
import { useAppSelector } from "../../app/hooks";
import AvatarImage from "../UI/AvatarImage";

interface Props {
  comment: any;
}

const Comment: React.FC<Props> = ({ comment }) => {
  const currentUser = useAppSelector((state) => state.user.currentUser);
  return (
    <div className="flex bg-[#F8F8F8] border-[1px] border-zinc-300 rounded-xl pl-6">
      <div>
        <div className="text-[#A974FF]">Test User</div>
        <div>Lorem ipsum dolor sit amet, conse...</div>
      </div>
    </div>
  );
};

export default Comment;
