import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";
import { logout } from "../features/userSlice";

interface Props {
  makeFormVisible: () => void;
  page: "Home" | "Messages" | "Settings" | "Profile" | "Saved Posts";
}

const Menu: React.FC<Props> = ({ makeFormVisible, page }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <div className="hidden lg:flex w-80 bg-white rounded-2xl flex-col justify-between">
      <div className="flex flex-col p-2 gap-2">
        <h1 className="text-4xl text-purple-700 cursor-pointer font-bold">
          INTROVERT
        </h1>
        <h2 className="text-lg">Menu</h2>
        <button
          onClick={() => navigate("/")}
          className={
            "homePageMenuButton " +
            (page === "Home" ? "shadow-md text-black" : "")
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          Home
        </button>
        <button
          onClick={() => navigate("/messages")}
          className={
            "homePageMenuButton " +
            (page === "Messages" ? "shadow-md text-black" : "")
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
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
          Messages
        </button>
        <button
          onClick={() => navigate("/profile")}
          className={
            "homePageMenuButton " +
            (page === "Profile" ? "shadow-md text-black" : "")
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
          Profile
        </button>
        <button
          className={
            "homePageMenuButton " +
            (page === "Saved Posts" ? "shadow-md text-black" : "")
          }
          onClick={() => navigate("/savedPosts")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
            />
          </svg>
          Saved Posts
        </button>
        <button
          className={
            "homePageMenuButton " +
            (page === "Settings" ? "shadow-md text-black" : "")
          }
          onClick={() => navigate("/settings")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          Settings
        </button>
        <button
          onClick={makeFormVisible}
          className="flex gap-2 w-full text-lg rounded-lg border hover:text-white bg-purple-300 hover:bg-purple-400 text-left px-3 py-2"
        >
          <div className="bg-purple-600 rounded-full flex justify-center  items-center w-6 h-6 ">
            <div className="text-white">+</div>
          </div>
          Add Post
        </button>
      </div>
      <div className="p-2">
        <button
          onClick={() => dispatch(logout())}
          className="homePageMenuButton text-purple-500 hover:shadow-none hover:text-red-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
          Log Out
        </button>
      </div>
    </div>
  );
};
export default Menu;
