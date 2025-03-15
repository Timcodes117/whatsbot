import React from 'react'

interface props{
    userTyper: "bot" | "reply" | "you";
    message: string;
}

const ChatPop = (details:props) => {
  return (
    <div style={{
        backdropFilter: "blur(10px)",
        width: details.userTyper == "you" ? 250 : "fit",
        
        
        background: details.userTyper == "you" ? "rgba(0, 255, 77, 0.8)" : "rgba(217, 217, 217, 0.7)"
    }} className='w-fit p-3 px-3 rounded-[20px] my-2 text-black'>
        <p className='font-bold text-sm capitalize'>{details.userTyper == "reply" ? "Quick reply" : details.userTyper}</p>
        <p className=' text-[18px]'>{details.message}</p>
    </div>
  )
}

export default ChatPop