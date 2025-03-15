import ChatPop from "@/components/chat-pop";
import MainHeader from "@/components/header";
import { color_theme_enum } from "@/utils/theme_enum";
import React from "react";

const page = () => {
  return (
    <>
      <MainHeader />

      <section className="flex flex-row items-center max-w-screen-2xl mx-auto min-h-[100vh] px-24 relative">
        <div className="flex flex-col justify-center relative">
          <br />
          <div className="-z-10 hero_blur2 " />
          <div className="-z-10 hero_blur -bottom-10 right-10 " />
          <div className="flex flex-row gap-5 items-center">
            <p className="text-sm">AI BUSINESS CHATBOT</p>
            <div className="w-[200px] h-[1px] bg-black"></div>
          </div>
          <div className="flex flex-col">
            <p className="text-[80px]">Your</p>
            <p className="text-[80px] leading-12">
              Smart{" "}
              <span className="font-medium" style={{ color: color_theme_enum.MAIN }}>WhatsApp</span>{" "}
            </p>
            <p className="text-[80px]">Assistant</p>
          </div>
          <br />
          <div className="flex items-center justify-center w-fit ">
            <div className="hero_action_btn flex items-center flex-row gap-4 justify-center"></div>
            <button className=" flex items-center flex-row gap-4 justify-center absolute">
              <p className="text-[18px] font-semibold text-black">Get Started</p>
              <div className="w-[35px] h-[35px] bg-[url(/go.svg)] bg-center bg-contain bg-no-repeat" />
            </button>
          </div>
        </div>

        <div className="w-[600px] h-[80vh]  absolute right-0 bottom-0 flex flex-col justify-end ">
          <div className="flex flex-col absolute bottom-5 w-full px-10">
          <div className="flex flex-row justify-end">
          <ChatPop message="Get started" userTyper="you" />
          </div>
          <ChatPop message="Hello there, how can I help?" userTyper="bot" />
          <ChatPop message="Weather reports?" userTyper={"reply"} />
          <ChatPop message="News Today?" userTyper="reply" />
          </div>

          <div className="w-[600px] bg-[url(/hero_img.svg)] h-[500px] bg-contain bg-center bg-no-repeat"></div>
        </div>
      </section>
    </>
  );
};

export default page;
