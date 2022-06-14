import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { logout } from "../features/userSlice";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const token = useAppSelector((state) => state.user.token);
  const currentUser = useAppSelector((state) => state.user.currentUser);
  const dispatch = useAppDispatch();
  return (
    <div
      className="flex bg-white rounded-lg border-4 shadow-lg border-gray-300 w-full 
    text-center py-10 justify-between text-3xl items-center px-5"
    >
      <h1 className="text-3xl md:text-5xl font-serif">INTROVERT</h1>
      <div className="hidden md:flex items-center gap-5 ">
        {!currentUser ? (
          <button className="w-10 h-10 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        ) : (
          <button className="w-10 h-10 cursor-pointer bg-purple-700 text-xl text-white rounded-full text-center">
            {currentUser.name[0].toUpperCase()}
          </button>
        )}
        {currentUser && (
          <button className="p-2 rounded-md bg-white border-none cursor-pointer text-2xl hover:bg-gray-200">
            {currentUser?.name}
          </button>
        )}
        {token && (
          <button
            onClick={() => dispatch(logout())}
            className="bg-blue-500 rounded-lg text-white text-lg px-3 py-2 hover:bg-blue-700"
          >
            LOG OUT
          </button>
        )}
      </div>
      <div className="relative inline-block text-left md:hidden">
        <div>
          <button
            type="button"
            className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
            onClick={() => setMenuActive(!menuActive)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        <div
          className={` ${
            !menuActive && "hidden"
          } origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`}
          role="menu"
          tabIndex={-1}
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="py-1" role="none">
            <button
              className="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
              id="menu-item-0"
              tabIndex={-1}
            >
              Log in
            </button>
            <button
              className="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
              id="menu-item-1"
              tabIndex={-1}
            >
              Test User
            </button>
            <button
              className="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
              id="menu-item-2"
              tabIndex={-1}
            >
              Log out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
