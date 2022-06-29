import React from "react";
import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import AvatarImage from "../UI/AvatarImage";
import Comment from "./Comment";

let comments: string[];
comments = ["Apple", "Orange", "Banana"];

interface Props {}

const Comments: React.FC<Props> = ({}) => {
  const name = useAppSelector(
    (state: RootState) => state.posts.current?.creator
  );

  return (
    <div>
      <hr />
      <div className="flex">
        <AvatarImage />
        <div className="">
          <div>{name as string}</div>
          <input className="max-w-[250px] shadow-2xl" type="text" />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-y-5 mt-5">
        {comments.map((comment) => (
          <Comment comment={comment} />
        ))}
      </div>
      <hr />
    </div>
  );
};

export default Comments;
