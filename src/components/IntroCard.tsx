import React from 'react'


interface Props {
    text: String;
    sorce: string;
    height: number;
  }

const IntroCard: React.FC<Props> = ({ text,sorce,height }) => {
  let style = {};
  switch (height) {
    case 1:
      style = {width:'300px', height:'400px', marginTop:'20vh'};
      break;
    case 2:
      style = {width:'300px', height:'400px', marginTop:'30vh'};
      break;
    case 3:
      style = {width:'300px', height:'400px', marginTop:'40vh'};
      break;
    default:
      break;
  }

  return (
    <div style={style} className='border-[#fff] border-[5px] rounded-[20px] items-center justify-center flex flex-col'>
        <h1 style={{color:'#fff', WebkitTextStroke:'1px #A974FF', fontSize:'40px', marginTop:'5px'}}>{text}</h1>
        <div style={{height:'100%'}} className='items-center justify-center flex' >
          <div className='border-[#fff] border-[5px]  p-1 rounded-full flex w-[200px] h-[200px] justify-center mb-8' >
              <img style={{width:'128px', height:'128px',}} src={sorce} alt="" className='self-center'/>
              <div style={{width:'10px', height:'195px', marginTop:'-5px', transform: 'rotate(40deg)'}} className='bg-[#fff] absolute'></div>
          </div>
        </div>
    </div>
  )
}

export default IntroCard;