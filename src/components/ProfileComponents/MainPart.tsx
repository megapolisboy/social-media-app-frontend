import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Posts from "../PostStuff/Posts";
import AvatarImage from "../UI/AvatarImage";

interface Props {
  userId: string;
}

const MainPart = ({ userId }) => {
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector((state) => state.user.currentUser);

  return (
    <div className="flex-grow max-w-[55%] bg-inherit flex flex-col gap-4">
      <div className="flex justify-around items-center py-2 border-2 border-blue-200 bg-white rounded-2xl">
        <div className="flex flex-col items-center h-full justify-between gap-1">
          <AvatarImage w={20} currentUser={currentUser} />
          <div>{currentUser.name}</div>
        </div>
        <div className="flex gap-5">
          <p className="text-center text-lg 2xl:text-2xl ">
            {currentUser.posts.length} <br /> posts
          </p>
          <p className="text-center text-lg 2xl:text-2xl">
            {currentUser.subscribers?.length} <br /> followers
          </p>
          <p className="text-center text-lg 2xl:text-2xl">
            {currentUser.subscriptions?.length} <br /> following
          </p>
        </div>
        {userId && (
          <div className="flex flex-col justify-center gap-1 items-center">
            <button className="bg-purple-500 w-24 py-2 text-white rounded-md hover:border hover:border-purple-400 hover:bg-purple-100 hover:text-black">
              Follow
            </button>
            <button className="bg-purple-500 w-24 py-2 text-white rounded-md hover:border hover:border-purple-400 hover:bg-purple-100 hover:text-black">
              Text
            </button>
          </div>
        )}
      </div>
      <div className="border-2 border-blue-200 bg-white rounded-2xl grow scrollbar-hide overflow-y-auto">
        <div className="flex justify-end mr-5">
          <div className="flex gap-3">
            <span className="text-slate-400 cursor-pointer">Posts</span>
            <span className="text-purple-400 cursor-pointer">Liked posts</span>
          </div>
        </div>
        <div className="m-2">
          <Posts mode="Page" />
        </div>
      </div>
    </div>
  );
};
export default MainPart;
