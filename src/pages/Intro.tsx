import React from 'react'
import IntroCard from '../components/IntroCard'
import Logo from '../components/UI/Logo'
import img1 from "../img/heart.png"
import img2 from "../img/peace.png"
import img3 from '../img/world-peace.png'
import { useNavigate } from "react-router-dom"

export const Intro = () => {
  const navigate = useNavigate();
  
  const moveToSignIn = () => {
    navigate(`/signIn`);
  };

  const moveToSignUp = () => {
    navigate(`/signUp`);
  };

  let style = {
    backgroundImage: 'linear-gradient(180deg, transparent 50%, white 50%), linear-gradient(90deg, white 50%, transparent 50%);'
  }
  return (
    <div className='bg-[#F2F5FD] flex absolute justify-center' style={{top:'0', bottom:'0',left:'0', right:'0'}}>
      <Logo/>
      <div className='absolute flex mt-4' style={{right:'1%'}}>
        <div className='p-1 border-[#A974FF] border-2 rounded-[10px] cursor-pointer' onClick={moveToSignIn}>Sign In</div>
        <div className='p-1 border-[#A974FF] border-2 ml-2 rounded-[10px] bg-[#A974FF] cursor-pointer' onClick={moveToSignUp}>Sign Up</div>
      </div>
      <div className='w-[80%] flex justify-between'>
        <IntroCard height={1} sorce={img1} text={'!Likes'} />
        <div className='border-[#fff] border-[5px]  p-1 rounded-full flex w-[10px] h-[200px] mt-[35vh]'></div>
        <IntroCard height={2} sorce={img2} text={'!Friends'}/>
        <div className='border-[#fff] border-[5px]  p-1 rounded-full flex w-[10px] h-[200px] mt-[45vh]'></div>
        <IntroCard height={3} sorce={img3} text={'!Social'}/>
      </div>
      
      
    </div>
  )
}
