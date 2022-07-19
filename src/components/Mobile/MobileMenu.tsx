import React from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  makeFormVisible: () => void;
  setIsSearchShown?: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenu: React.FC<Props> = ({ makeFormVisible, setIsSearchShown }) => {
  const navigate = useNavigate();
  return (
    <div className="z-10 fixed flex lg:hidden justify-between sm:justify-center sm:gap-12 px-2 h-12 bg-white border-purple-200 w-full bottom-0 left-0 rounded-t-2xl border-2">
      <button
        className="mobileMenuButton"
        onClick={() => {
          navigate("/");
          setIsSearchShown(false);
        }}
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
      </button>
      <button className="mobileMenuButton" onClick={() => navigate("/profile")}>
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
      </button>
      <button className="mobileMenuButton" onClick={makeFormVisible}>
        <div className="bg-purple-600 rounded-full flex justify-center  items-center w-6 h-6 ">
          <div className="text-white">+</div>
        </div>
      </button>
      <button
        className="mobileMenuButton"
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
      </button>
      <button
        className="mobileMenuButton"
        onClick={() => {
          if (!setIsSearchShown) {
            navigate("/search");
          } else {
            setIsSearchShown(true);
          }
        }}
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
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
    </div>
  );
};
export default MobileMenu;
