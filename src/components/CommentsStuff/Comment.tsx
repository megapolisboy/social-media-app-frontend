import React from "react";
import { useAppSelector } from "../../app/hooks";
import AvatarImage from "../UI/AvatarImage";

interface Props {
  comment: any;
}

const Comment: React.FC<Props> = ({ comment }) => {
  const currentUser = useAppSelector((state) => state.user.currentUser);
  return (
    <div className="flex">
      <AvatarImage w={5} currentUser={currentUser} />
      <div>
        <div>vvvvv</div>
        <div>{comment}</div>
      </div>
    </div>
  );
};

export default Comment;
