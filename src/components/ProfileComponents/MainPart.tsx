import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  getCurrentlyOpenUser,
  selectCurrentlyOpenUser,
  subscribe,
} from "../../features/userSlice";
import { UserType } from "../../types";
import Posts from "../PostStuff/Posts";
import AvatarImage from "../UI/AvatarImage";

interface Props {
  userId: string;
}

const MainPart = ({ userId }) => {
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector((state) => state.user.currentUser);

  const potentialUser = useAppSelector(selectCurrentlyOpenUser);
  let user: UserType;

  if (potentialUser && potentialUser._id !== currentUser._id) {
    user = potentialUser;
  } else {
    user = currentUser;
  }

  const isFollowed = (user: UserType) => {
    const following = currentUser.subscriptions.find(
      (sub) => sub._id === user._id
    );

    return Boolean(following);
  };

  useEffect(() => {
    dispatch(getCurrentlyOpenUser(userId));
  }, [userId, currentUser.subscriptions]);

  return (
    <div className="flex-grow max-w-[55%] bg-inherit flex flex-col gap-4">
      <div className="flex justify-around items-center py-2 border-2 border-blue-200 bg-white rounded-2xl">
        <div className="flex flex-col items-center h-full gap-1">
          <AvatarImage w={20} currentUser={user} />
          <div>{user.name}</div>
        </div>
        <div className="flex gap-5">
          <p className="text-center text-lg 2xl:text-2xl ">
            {user.posts?.length} <br /> posts
          </p>
          <p className="text-center text-lg 2xl:text-2xl">
            {user.subscribers?.length} <br /> followers
          </p>
          <p className="text-center text-lg 2xl:text-2xl">
            {user.subscriptions?.length} <br /> following
          </p>
        </div>
        {userId && (
          <div className="flex flex-col justify-center gap-1 items-center">
            {!isFollowed(user) ? (
              <button
                onClick={() => dispatch(subscribe(user._id))}
                className="bg-purple-500 w-24 py-2 text-white rounded-md hover:border hover:border-purple-400 hover:bg-purple-100 hover:text-black"
              >
                Follow
              </button>
            ) : (
              <button
                onClick={() => dispatch(subscribe(user._id))}
                className="bg-purple-300 py-2 border border-white w-24 text-black rounded-md hover:border hover:border-purple-400 hover:bg-purple-100 hover:text-black"
              >
                Following
              </button>
            )}
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
          <Posts mode="Page" user={user} />
        </div>
      </div>
    </div>
  );
};
export default MainPart;
