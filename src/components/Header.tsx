import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { logout } from "../features/userSlice";
import AvatarImage from "./AvatarImage";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const token = useAppSelector((state) => state.user.token);
  const currentUser = useAppSelector((state) => state.user.currentUser);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  return (
    <>
      <div
        className="flex bg-white rounded-lg border-4 shadow-lg border-gray-300 w-full 
    text-center py-10 justify-between text-3xl items-center px-5"
      >
        <h1
          className="text-3xl md:text-5xl font-serif cursor-pointer"
          onClick={() => navigate("/")}
        >
          INTROVERT
        </h1>
        <div
          onClick={() => navigate("/page")}
          className="cursor-pointer hidden md:flex items-center gap-5 "
        >
          <AvatarImage />
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
              <AvatarImage />
            </button>
          </div>
        </div>
      </div>
      {currentUser && (
        <div
          className={`${!menuActive && "hidden"} absolute w-screen h-screen`}
          onClick={() => setMenuActive(!menuActive)}
        >
          <div
            className={`origin-top-right top-28 z-40 absolute right-8 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`}
            role="menu"
            tabIndex={-1}
            aria-orientation="vertical"
            aria-labelledby="menu-button"
          >
            <div className="py-1" role="none">
              <button
                className="text-gray-700 block px-4 py-2 w-full text-left text-sm cursor-pointer hover:bg-slate-200"
                role="menuitem"
                id="menu-item-1"
                tabIndex={-1}
                onClick={() => navigate("/page")}
              >
                {currentUser?.name}
              </button>
              <button
                className="text-gray-700 block px-4 py-2 w-full text-left text-sm cursor-pointer hover:bg-slate-200"
                role="menuitem"
                id="menu-item-2"
                tabIndex={-1}
                onClick={() => dispatch(logout())}
              >
                Log out
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
