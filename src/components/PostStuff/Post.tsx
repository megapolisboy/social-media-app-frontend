import { PostType } from "../../types";
import { useNavigate } from "react-router-dom";
import LikeButton from "../UI/LikeButton";
import DeleteButton from "../UI/DeleteButton";
import { useAppDispatch } from "../../app/hooks";
import { setCurrent } from "../../features/postsSlice";

interface Props {
  post: PostType;
}

const Post: React.FC<Props> = ({ post }) => {
  const navigate = useNavigate();

  const moveToPostPage = () => {
    navigate(`/${post.id}`);
  };

  const dispatch = useAppDispatch();
  const setcurrent = () =>{
    dispatch(setCurrent(post))
  }

  return (
    <div className="shadow-2xl rounded-lg w-[300px] h-[350px] justify-self-center ">
      <div className="relative">
        <div className="z-[1] flex absolute  w-full text-white justify-between px-2.5">
          <div className="">
            <div className="">{post.creator}</div>
            <div>{post.time + " min ago"}</div>
          </div>
          <h1
            onClick={()=> {moveToPostPage(); setcurrent();}}
            className="cursor-pointer transition duration-700 ease-in-out hover:scale-125 hover:font-bold"
          >
            . . .
          </h1>
        </div>
        <img
          className="blur-[1px] rounded-t-lg"
          src="http://northeastchamber.org/wp-content/uploads/2021/06/fireworks.jpeg"
          alt=""
        />
      </div>
      <div className="grid grid-cols-1 gap-3 px-2.5">
        <div className="text-slate-300">{post.tags.join(" ")}</div>
        <div className="text-[36px]">
          {post.title.length > 15
            ? `${post.title.substring(0, 15)}...`
            : post.title}
        </div>
        <div className="">
          {post.message.length > 32
            ? `${post.message.substring(0, 32)}...`
            : post.message}
        </div>
        <div className="flex w-full justify-between px-2.5">
            <LikeButton  post={post}/>
            <DeleteButton  post={post}/>
        </div>
      </div>
    </div>
  );
};
export default Post;
