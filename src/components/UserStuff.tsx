import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { isArray } from "util";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getAllUsers, selectUsers, subscribe } from "../features/userSlice";
import { UserType } from "../types";
import AvatarImage from "./UI/AvatarImage";

interface Props {
  isSearchShown?: boolean;
  setIsSearchShown?: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserStuff: React.FC<Props> = ({ isSearchShown, setIsSearchShown }) => {
  const posts = useAppSelector((state) => state.posts.posts).slice(0, 3);
  const currentUser = useAppSelector((state) => state.user.currentUser);
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.user.users);
  const navigate = useNavigate();

  const [search, setSearch] = useState<string>("");

  const isFollowed = (user: UserType) => {
    const following = currentUser.subscriptions.find(
      (sub) => sub._id === user._id
    );

    return Boolean(following);
  };

  const searchForUsers = () => {
    dispatch(getAllUsers(search));
    setSearch("");
  };

  useEffect(() => {
    dispatch(getAllUsers(""));
  }, [dispatch]);

  return (
    <div
      className={
        (isSearchShown ? "flex " : "hidden ") +
        "md:w-96 bg-inherit md:border-l-2 border-white md:flex flex-col gap-5 p-5"
      }
    >
      <div className="flex items-center gap-3 sm:gap-10 md:gap-3">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
          className="h-16 w-4/5 border-4 text-white p-5 text-xl placeholder:text-white text-center border-white bg-inherit rounded-full focus:outline-none"
        />
        <button
          onClick={searchForUsers}
          className="hover:bg-purple-300 rounded-full bg-inherit w-12 h-12 flex items-center justify-center border-2 border-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white font-bold"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-between mx-1">
          <h2 className="text-xl">Suggestions</h2>
        </div>
        <div className="flex flex-col gap-4 mt-2 border-b border-white h-52 py-4 overflow-y-auto scrollbar-hide ">
          {Array.isArray(users) &&
            users
              .filter((user) => user._id !== currentUser._id)
              .map((user) => (
                <div
                  key={user._id}
                  className="flex justify-between items-center"
                >
                  <div
                    onClick={() => navigate("/profile/" + user._id)}
                    className="flex justify-start gap-4 items-center cursor-pointer"
                  >
                    <AvatarImage w={12} currentUser={user} />
                    <div className="">{user.name}</div>
                  </div>
                  {!isFollowed(user) ? (
                    <button
                      onClick={() => dispatch(subscribe(user._id))}
                      className="bg-purple-500 w-24 h-8 text-white rounded-md hover:border hover:border-purple-400 hover:bg-purple-100 hover:text-black"
                    >
                      Follow
                    </button>
                  ) : (
                    <button
                      onClick={() => dispatch(subscribe(user._id))}
                      className="bg-purple-300 border border-white w-24 h-8 text-black rounded-md hover:border hover:border-purple-400 hover:bg-purple-100 hover:text-black"
                    >
                      Following
                    </button>
                  )}
                </div>
              ))}
        </div>
      </div>
      <div className="flex flex-col">
        <h2 className="text-xl">Recommended Posts</h2>
        <div className="flex flex-col gap-[2px]">
          {posts.map((post) => (
            <div
              key={post._id}
              onClick={() => navigate(`/${post._id}`)}
              className="cursor-pointer flex bg-white w-full mt-3 rounded-2xl justify-start items-center px-3 py-1 gap-3"
            >
              <img
                className="w-28 rounded-2xl h-14 object-cover blur-[1px]"
                src={
                  post.selectedFile ||
                  "http://northeastchamber.org/wp-content/uploads/2021/06/fireworks.jpeg"
                }
                alt=""
              />
              <div>
                <div className="text-xl">{post.title}</div>
                <div className="text-slate-300 text-xs">
                  {post.tags.toString()}
                </div>
                <div className="text-sm text-purple-400">{post.message}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default UserStuff;
