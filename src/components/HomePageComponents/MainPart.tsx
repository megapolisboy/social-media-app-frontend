import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import MobileMenu from "../Mobile/MobileMenu";
import Posts from "../PostStuff/Posts";
import AvatarImage from "../UI/AvatarImage";
import { addStory } from "../../features/userSlice";
import { fetchStories } from "../../features/storiesSlice";

interface Props {
  isSearchShown: boolean;
  setIsSearchShown: React.Dispatch<React.SetStateAction<boolean>>;
}

const MainPart: React.FC<Props> = ({ isSearchShown, setIsSearchShown }) => {
  const currentUser = useAppSelector((state) => state.user.currentUser);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [filter, setFilter] = useState<
    "following" | "newest" | "popular" | null
  >(null);

  const usersWithStories = useAppSelector((state) => state.stories.stories);

  const handleFileInputChange = (e) => {
    let file = e.target.files[0];
    dispatch(addStory(file));
  };

  useEffect(() => {
    dispatch(fetchStories());
  }, []);

  return (
    <div className="w-full flex-grow lg:max-w-[55%] bg-inherit flex flex-col">
      <div className="flex lg:hidden justify-between items-center">
        <h1 className="block text-2xl md:text-3xl mb-1 text-purple-700 cursor-pointer font-bold">
          !NTROVERT
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
        <div
          className="flex flex-col items-center gap-1"
          // onClick={() => navigate("/profile")}
        >
          <div className="rounded-full h-16 w-16 relative cursor-pointer">
            <div onClick={() => navigate("/stories/current")}>
              <AvatarImage w="profile" currentUser={currentUser} />
            </div>
            <div className="absolute bottom-0 right-0 bg-blue-700 h-5 w-5 flex justify-center items-center text-white rounded-full">
              <label htmlFor="file-upload">+</label>
              <input
                id="file-upload"
                type="file"
                className="hidden"
                onChange={handleFileInputChange}
              />
            </div>
          </div>
          <div className="text-xs">
            {currentUser.name.split(" ")[0].slice(0, 10) +
              (currentUser.name.split(" ")[0].length > 10 ? "..." : "")}
          </div>
        </div>
        {/* {usersWithStories.map((user) => (
          <div
            key={user.userId}
            className="flex flex-col items-center gap-1"
            onClick={() => navigate("/stories/" + user.userId)}
          >
            <AvatarImage
              w="profile"
              currentUser={{ name: user.userName, picture: user.userAvatar }}
            />
            <div className="text-xs">
              {user.userName.split(" ")[0].slice(0, 10) +
                (user.userName.split(" ")[0].length > 10 ? "..." : "")}
            </div>
          </div>
        ))} */}
      </div>
      <div
        className={
          (isSearchShown ? "hidden " : "flex ") + "lg:flex justify-between mt-2"
        }
      >
        <span className="hidden lg:block">Feeds</span>
        <div className="flex gap-3">
          <span
            onClick={() => setFilter(null)}
            className={`${
              !filter ? "font-bold" : ""
            } text-slate-400 cursor-pointer`}
          >
            All
          </span>
          <span
            onClick={() => setFilter("following")}
            className={`${
              filter === "following" ? "font-bold" : ""
            } text-slate-500 cursor-pointer`}
          >
            Following
          </span>
          <span
            onClick={() => setFilter("newest")}
            className={`${
              filter === "newest" ? "font-bold" : ""
            } text-gray-400 cursor-pointer`}
          >
            Newest
          </span>
          <span
            onClick={() => setFilter("popular")}
            className={`${
              filter === "popular" ? "font-bold" : ""
            } text-purple-400 cursor-pointer`}
          >
            Popular
          </span>
        </div>
      </div>
      <Posts mode="Feed" isSearchShown={isSearchShown} filter={filter} />
    </div>
  );
};
export default MainPart;
