import React from "react";
import Typewriter from "typewriter-effect";
import LandingCount from "../LandingCount/LandingCount";
export default function Landing() {
  return (
    <div className="bg-[url('../public/images/header-bg.png')] bg-[#F8F9FA] bg-no-repeat bg-cover py-10">
      <div className="container 2xl:max-w-[1280px]">
        <div className="grid lg:grid-cols-2 grid-cols-1 items-start justify-between px-5 lg:p-0">
          <div className="flex flex-col gap-3 p-1 ">
            <span>پیشرفت های خارق العاده...</span>
            <h6>با آموزش های حرفه ای گیک لرن</h6>
            <h3 className="text-xl lg:text-2xl">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("ما به هر قیمتی دوره آموزشی تولید نمی کنیم !")
                    .start()
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString(
                      "ما اینجا هستیم تا مسیر یادگیری رو برات هموار تر کنیم!"
                    )
                    .start()
                    .pauseFor(2000);
                }}
                options={{
                  loop: true,
                }}
              />
            </h3>
            <div className="flex relative">
              <input
                type="text"
                placeholder="چی دوست داری یاد بگیری..؟"
                className="w-full h-14 border border-solid border-[#ced4da] rounded-md px-3 "
              />
              <button className="absolute left-1 top-1 h-12 bg-mainColor px-4 text-white rounded-md hover:bg-hoverColor transition-colors">
                <i className="fa fa-search h-5 w-5"></i>
              </button>
            </div>
            <div className="flex justify-between items-center lg:w-3/4 w-full mt-12">
              <div className=" p-5 flex flex-col gap-5">
                <div className="flex flex-col items-center gap-2">
                  <LandingCount counter={20}></LandingCount>
                  <h4 className="text-xl lg:text-2xl text-[#56626E]">
                    دوره آموزشی
                  </h4>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <LandingCount counter={420}></LandingCount>
                  <h4 className="text-xl lg:text-2xl text-[#56626E]">دانشجو</h4>
                </div>
              </div>
              <div className=" p-5 flex flex-col gap-5">
                <div className="flex flex-col items-center gap-2">
                  <LandingCount counter={25}></LandingCount>
                  <h4 className="text-xl lg:text-2xl text-[#56626E]">
                    استاد مجرب
                  </h4>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <LandingCount counter={586}></LandingCount>
                  <h4 className="text-xl lg:text-2xl text-[#56626E]">
                    ساعت آموزش
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex justify-end ">
            <img src="/images/header-left-bg_prev_ui.png" alt="" className="" />
          </div>
        </div>
      </div>
    </div>
  );
}
