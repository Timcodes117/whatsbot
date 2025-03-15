import ChatPop from "@/components/chat-pop";
import MainHeader from "@/components/header";
import { color_theme_enum } from "@/utils/theme_enum";
import React from "react";

const page = () => {
  return (
    <>
      <MainHeader />

      <section className="flex flex-row lg:items-center max-w-screen-2xl mx-auto min-h-[100vh] lg:px-24 px-5 relative overflow-hidden">
        <div className="flex flex-col lg:justify-center relative **:transition-all **:duration-500">
          
          <div className="-z-10 scale-50 lg:scale-100 hero_blur2 left-0 top-5 origin-bottom-left" />
          <div className="-z-10 scale-50 lg:scale-100 hero_blur lg:-bottom-10 bottom-0 right-0 " />
          <div className="flex flex-row gap-5 items-center lg:mt-0 mt-[100px]">
            <p className="text-xs lg:text-sm">AI BUSINESS CHATBOT</p>
            <div className=" w-[100px]  lg:w-[200px] h-[1px] invert-50 bg-black"></div>
          </div>
          <div className="flex flex-col">
            <p className="text-[11vw] sm:text-[70px] xl:text-[80px] ">Your</p>
            <p className="text-[11vw] sm:text-[70px] xl:text-[80px]  leading-12">
              Smart{" "}
              <span className="font-medium" style={{ color: color_theme_enum.MAIN }}>WhatsApp</span>{" "}
            </p>
            <p className="text-[11vw] sm:text-[70px] xl:text-[80px] ">Assistant</p>
          </div>
          <br />
          <div className="flex items-center justify-center w-fit scale-75 origin-top-left lg:scale-100">
            <div className="hero_action_btn flex items-center flex-row gap-4 justify-center"></div>
            <button className=" flex items-center  flex-row gap-4 justify-center absolute  ">
              <p className="text-[18px] font-semibold text-black">Get Started</p>
              <div className="w-[35px] h-[35px] bg-[url(/go.svg)] bg-center bg-contain bg-no-repeat" />
            </button>
          </div>
        </div>

        <div className="w-[600px] h-[80vh] -z-10 absolute -right-56 md:right-0 -bottom-20 lg:bottom-0 flex flex-col justify-end scale-90 origin-bottom-right overflow-hidden">
          <div className="flex flex-col absolute bottom-5 w-full px-10  ">
          <div className="lg:flex flex-row justify-end hidden ">
          <ChatPop message="Get started" userTyper="you" />
          </div>
          <ChatPop message="Hello there, how can I help?" userTyper="bot" />
          <ChatPop message="Weather reports?" userTyper={"reply"} />
          <ChatPop message="News Today?" userTyper="reply" />
          <div className="lg:mb-0 mb-20"></div>
          <br />
          <br />
          </div>

          <div className="w-[550px] bg-[url(/hero_img.svg)] h-[550px] bg-contain bg-center bg-no-repeat"></div>
        </div>
      </section>

      <section className="w-full h-[100vh]"></section>
    </>
  );
};

export default page;
