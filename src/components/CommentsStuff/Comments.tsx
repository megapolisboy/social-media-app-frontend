import React from "react";
import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import AvatarImage from "../UI/AvatarImage";
import Comment from "./Comment";

let comments: string[];
comments = ["Apple", "Orange", "Banana"];

interface Props {
  comments?:[]
}

const Comments: React.FC<Props> = ({}) => {
  const currentUser = useAppSelector((state) => state.user.currentUser);
  const name = useAppSelector(
    (state: RootState) => state.posts.current?.creator
  );

  return (
    <div className="flex flex-col">
      <hr />
      <div className="w-[100%]">
        <div className="flex flex-row mt-2 pl-1 ">
          <div className="grow justify-items-center">
            {/* <AvatarImage currentUser={} ></AvatarImage> */}
            <div className="text-center text-[10px] md:text-[16px]">{name as string}Test User</div> {/*add ... if neme > 10 chars*/}
          </div>
          <input className="ml-1 w-[70%] md:w-[80%] border-2 border-zinc-300 rounded-md p-1 " type="text" placeholder="Write your thoughts here..."/>
          <button className="bg-[#D4E5F6] rounded-md ml-1 text-[12px] p-2 md:text-[16px] md:w-[10%]">ADD</button>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-y-5 mt-5">
        <h3>Other thoughts</h3>
        {comments.map((comment) => (
          <Comment comment={comment} />
        ))}
      </div>
      
    </div>
  );
};

export default Comments;
