import React from "react";
import IntroCard from "../components/IntroCard";
import Logo from "../components/UI/Logo";
import img1 from "../img/heart.png";
import img2 from "../img/peace.png";
import img3 from "../img/world-peace.png";
import { useNavigate } from "react-router-dom";

export const Intro = () => {
  const navigate = useNavigate();

  const moveToSignIn = () => {
    navigate(`/signIn`);
  };

  const moveToSignUp = () => {
    navigate(`/signUp`);
  };

  let style = {
    backgroundImage:
      "linear-gradient(180deg, transparent 50%, white 50%), linear-gradient(90deg, white 50%, transparent 50%);",
  };
  return (
    <div
      className="bg-gradient-to-tr from-pink-200 to-violet-300 flex flex-col absolute overflow-y-auto"
      style={{ top: "0", bottom: "0", left: "0", right: "0" }}
    >
      <div className="flex justify-between pl-2 pr-2">
        <Logo />
        <div className="flex mt-4 flex-col md:flex-row gap-1">
          <div
            className="p-1 border-[#A974FF] border-2 rounded-[10px] cursor-pointer h-[40px] text-center"
            onClick={moveToSignIn}
          >
            Sign In
          </div>
          <div
            className="p-1 border-[#A974FF] border-2 rounded-[10px] bg-[#A974FF] cursor-pointer h-[40px] text-center"
            onClick={moveToSignUp}
          >
            Sign Up
          </div>
        </div>
      </div>
      <div className="w-[100%] flex justify-center lg:justify-between flex-wrap gap-2 md:gap-[10%] lg:gap-2 p-2 md:h-[100%]">
        <IntroCard
          className="md:mt-[10%] lg:mt-[1%]"
          sorce={img1}
          text={"!Likes"}
        />
        <div className="hidden lg:flex border-[#fff] border-[5px]  p-1 rounded-full w-[10px] h-[200px] mt-[20vh]"></div>
        <IntroCard
          className="md:mt-[10%] lg:mt-[6%]"
          sorce={img2}
          text={"!Friends"}
        />
        <div className="hidden lg:flex border-[#fff] border-[5px]  p-1 rounded-full flex w-[10px] h-[200px] mt-[30vh]"></div>
        <IntroCard className="lg:mt-[11%]" sorce={img3} text={"!Social"} />
      </div>
    </div>
  );
};
