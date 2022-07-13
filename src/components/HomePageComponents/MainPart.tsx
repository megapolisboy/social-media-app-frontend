import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import MobileMenu from "../Mobile/MobileMenu";
import Posts from "../PostStuff/Posts";
import AvatarImage from "../UI/AvatarImage";

interface Props {
  isSearchShown: boolean;
  setIsSearchShown: React.Dispatch<React.SetStateAction<boolean>>;
}

const MainPart: React.FC<Props> = ({ isSearchShown, setIsSearchShown }) => {
  const currentUser = useAppSelector((state) => state.user.currentUser);
  const navigate = useNavigate();

  return (
    <div className="w-full flex-grow lg:max-w-[55%] bg-inherit flex flex-col">
      <div className="flex lg:hidden justify-between items-center">
        <h1 className="block text-2xl md:text-3xl mb-1 text-purple-700 cursor-pointer font-bold">
          INTROVERT
        </h1>
        <button
          onClick={() => navigate("/messages")}
          className="rounded-full w-8 h-8 flex justify-center items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 hover:text-purple-700 text-bold"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </button>
      </div>
      <div className="flex-none border-b-2 border-white flex gap-3 overflow-x-scroll h-28 scrollbar scrollbar-thumb-purple-300 scrollbar-track-white">
        {/* followers.map(follower => <Storie storie={follower.storie})/> */}
        <div
          className="flex flex-col items-center gap-1"
          onClick={() => navigate("/profile")}
        >
          <div className="rounded-full h-16 w-16 relative cursor-pointer">
            <AvatarImage w="profile" currentUser={currentUser} />
            <div className="absolute bottom-0 right-0 bg-blue-700 h-5 w-5 flex justify-center items-center text-white rounded-full">
              <span>+</span>
            </div>
          </div>
          <div className="text-xs">
            {currentUser.name.split(" ")[0].slice(0, 10) +
              (currentUser.name.split(" ")[0].length > 10 ? "..." : "")}
          </div>
        </div>
        {currentUser.subscriptions.map((user) => (
          <div
            className="flex flex-col items-center gap-1"
            onClick={() => navigate("/profile/" + user._id)}
          >
            <AvatarImage w="profile" currentUser={user} />
            <div className="text-xs">
              {user.name.split(" ")[0].slice(0, 10) +
                (user.name.split(" ")[0].length > 10 ? "..." : "")}
            </div>
          </div>
        ))}
      </div>
      <div
        className={
          (isSearchShown ? "hidden " : "flex ") + "lg:flex justify-between "
        }
      >
        <span className="hidden lg:block">Feeds</span>
        <div className="flex gap-3">
          <span className="text-slate-400 cursor-pointer">All</span>
          <span className="text-slate-500 cursor-pointer">Following</span>
          <span className="text-gray-400 cursor-pointer">Newest</span>
          <span className="text-purple-400 cursor-pointer">Popular</span>
        </div>
      </div>
      <Posts mode="Feed" isSearchShown={isSearchShown} />
    </div>
  );
};
export default MainPart;
