import React from "react";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import CourseDetailBox from "../../Components/CourseDetailBox/CourseDetailBox";
import LatestCourses from "../../Components/LatestCourses/LatestCourses";
import CommentTextArea from "../../Components/CommentTextArea/CommentTextAera.jsx/CommentTextArea";
import AccordionCourse from "../../Components/Accordion/AccordionCourse";
import "./CourseInfo.css";
export default function CourseInfo() {
  return (
    <div className="">
      <Breadcrumb
        links={[
          { id: 1, title: "صفحه اصلی", to: "" },
          {
            id: 2,
            title: "آموزش برنامه نویسی فرانت اند",
            to: "category-info/frontend",
          },
          {
            id: 3,
            title: "دوره متخصص جاوا اسکریپت",
            to: "course-info/js-expert",
          },
        ]}
      />
      {/* Start course info */}
      <div className="container max-w-7xl px-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 py-10 px-5 border border-solid border-gray-100 shadow-mainShadow mt-5">
          <div>
            <a
              href="#"
              className="text-mainColor rounded-sm py-1 px-4 bg-[#1d3a64] text-xs"
            >
              آموزش برنامه نویسی فرانت اند
            </a>
            <h1 className="mt-8 mb-4 font-bold text-xl md:text-2xl text-[#464749]">
              آموزش 20 کتابخانه جاوااسکریپت برای بازار کار
            </h1>
            <p className="mb-12 text-base md:text-lg text-[#7b868a] text-justify">
              امروزه کتابخانه‌ها کد نویسی را خیلی آسان و لذت بخش تر کرده اند. به
              قدری که حتی امروزه هیچ شرکت برنامه نویسی پروژه های خود را با
              Vanilla Js پیاده سازی نمی کند و همیشه از کتابخانه ها و فریمورک های
              موجود استفاده می کند. پس شما هم اگه میخواید یک برنامه نویس عالی
              فرانت اند باشید، باید کتابخانه های کاربردی که در بازار کار استفاده
              می شوند را به خوبی بلد باشید.
            </p>
          </div>
          <div className="video-player-contaienr">
            <div className="video-container paused" data-volume-level="high">
              <div className="video-controls-container">
                <div className="timeline-container">
                  <div className="timeline">
                    <img className="preview-img" />
                    <div className="thumb-indicator"></div>
                  </div>
                </div>
                <div className="controls">
                  <button className="play-pause-btn">
                    <svg className="play-icon" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M8,5.14V19.14L19,12.14L8,5.14Z"
                      />
                    </svg>
                    <svg className="pause-icon" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M14,19H18V5H14M6,19H10V5H6V19Z"
                      />
                    </svg>
                  </button>
                  <div className="volume-container">
                    <button className="mute-btn">
                      <svg className="volume-high-icon" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z"
                        />
                      </svg>
                      <svg className="volume-low-icon" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M5,9V15H9L14,20V4L9,9M18.5,12C18.5,10.23 17.5,8.71 16,7.97V16C17.5,15.29 18.5,13.76 18.5,12Z"
                        />
                      </svg>
                      <svg className="volume-muted-icon" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M12,4L9.91,6.09L12,8.18M4.27,3L3,4.27L7.73,9H3V15H7L12,20V13.27L16.25,17.53C15.58,18.04 14.83,18.46 14,18.7V20.77C15.38,20.45 16.63,19.82 17.68,18.96L19.73,21L21,19.73L12,10.73M19,12C19,12.94 18.8,13.82 18.46,14.64L19.97,16.15C20.62,14.91 21,13.5 21,12C21,7.72 18,4.14 14,3.23V5.29C16.89,6.15 19,8.83 19,12M16.5,12C16.5,10.23 15.5,8.71 14,7.97V10.18L16.45,12.63C16.5,12.43 16.5,12.21 16.5,12Z"
                        />
                      </svg>
                    </button>
                    {/* <input
                      className="volume-slider"
                      type="range"
                      min="0"
                      max="1"
                      step="any"
                      value="1"
                    /> */}
                  </div>
                  <div className="duration-container">
                    <div className="current-time">0:00</div>/
                    <div className="total-time">10:00</div>
                  </div>

                  <button className="speed-btn wide-btn">1x</button>
                  <button className="full-screen-btn">
                    <svg className="open" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"
                      />
                    </svg>
                    <svg className="close" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"
                      />
                    </svg>
                  </button>
                  <button className="theater-btn">
                    <svg className="tall" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M19 6H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H5V8h14v8z"
                      />
                    </svg>
                    <svg className="wide" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M19 7H5c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm0 8H5V9h14v6z"
                      />
                    </svg>
                  </button>
                  <button className="mini-player-btn">
                    <svg viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zm-10-7h9v6h-9z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <video id="intro" poster="/images/js.jpg">
                <source
                  type="video/mp4"
                  src="https://www.aparat.com/v/nFuy0"
                ></source>
              </video>
            </div>
          </div>
        </div>
      </div>
      {/*End course info */}
      <div className="container max-w-7xl px-2">
        <div className="my-2 grid grid-cols-12 gap-x-3 py-3">
          {/* Start right section */}
          <div className="col-span-12 lg:col-span-8">
            {/* { Start Mobile designe} */}
            <div className="lg:hidden block bg-white p-5 mt-1 mb-3 rounded-sm shadow-[0_5px_30px_rgba(70,72,77,0.08)]">
              <div className="flex items-center justify-center gap-x-1 text-white shadow-[0_5px_30px_rgba(70,72,77,0.08)] bg-mainColor p-4 rounded-lg mb-3">
                <span className="font-bold">قیمت:</span>
                <span className="font-bold">250,000 تومان</span>
              </div>
              <div className="flex items-center justify-center gap-x-1 text-white shadow-[0_5px_30px_rgba(70,72,77,0.08)] bg-[#1fbd50] p-3 rounded-lg">
                <i className="fa-solid fa-graduation-cap w-6 h-6 self-start"></i>
                <a href="#" className="font-bold">
                  ثبت نام در دوره
                </a>
              </div>
            </div>
            {/* { Finish Mobile designe} */}
            {/* Start course boxes info */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 py-1">
              <CourseDetailBox
                icon={"fa-circle-info"}
                title={"وضعیت دوره"}
                text={"تکمیل دوره"}
              />
              <CourseDetailBox
                icon={"fa-clock"}
                title={"مدت زمان دوره"}
                text={"88 ساعت"}
              />
              <CourseDetailBox
                icon={"fa-calendar-days"}
                title={"آخرین به روز رسانی"}
                text={"88 ساعت"}
              />
              <CourseDetailBox
                icon={"fa-users"}
                title={"روش پشتیبانی"}
                text={"آنلاین"}
              />
              <CourseDetailBox
                icon={"fa-bag-shopping"}
                title={"پیش نیاز"}
                text={"HTML & CSS"}
              />
              <CourseDetailBox
                icon={"fa-video"}
                title={"نوع مشاهده"}
                text={"آنلاین"}
              />
            </div>
            {/* Finish course boxes info */}
            {/* Start teacher info box */}
            <div className="bg-white p-5 mt-1 rounded-sm shadow-[0_5px_30px_rgba(70,72,77,0.08)]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-5 text-[#7b868a]">
                  <img
                    src="/images/profile-teacher.jpg"
                    alt=""
                    className="h-14 w-14 rounded-full object-cover"
                  />
                  <div className="flex flex-col items-start gap-y-1">
                    <span className="font-bold">محمد حسینی</span>
                    <span className="text-xs">Front End developer</span>
                  </div>
                </div>
                <div className="text-white bg-mainColor flex p-2.5 rounded-md font-bold gap-x-1">
                  <i className="fas fa-chalkboard-teacher"></i>
                  <span>مدرس</span>
                </div>
              </div>
              <p className="mt-3 p-2 text-[#7b868a] text-sm leading-6">
                من سال 89 وارد دنیای برنامه نویسی شدم و کارم رو با برنامه نویسی
                اندروید شروع کردم. بعد از سه سال تصمیم گرفتم وارد حوزه وب بشم و
                در زمینه فرانت فعالیتم رو اد ادامه بدم.
              </p>
            </div>
            {/* Finish teacher info box */}

            {/* Start course introduction */}
            <div className="bg-white p-5 my-5  rounded-sm shadow-[0_5px_30px_rgba(70,72,77,0.08)]">
              <div className="gap-y-5 text-[#7b868a] mt-2">
                <h3 className="text-xl md:text-2xl leading-10 p-1 font-bold inline border-b-2 border-solid border-mainColor text-black">
                  آموزش 20 کتابخانه جاوااسکریپت برای بازار کار
                </h3>
                <img
                  src="/images/js-intro.jpg"
                  alt=""
                  className="w-full rounded-xl my-7"
                />
                <p className="leading-6 text-justify my-5">
                  کتابخانه های بسیار زیادی برای زبان جاوا اسکریپت وجود دارد و
                  سالانه چندین کتابخانه جدید نیز به این لیست اضافه می شود که در
                  بازار کار به شدت از آن ها استفاده می شود و اگر بدون بلد بودن
                  این کتابخانه ها وارد بازار کار شوید، خیلی اذیت خواهید شد و حتی
                  ممکن است ناامید شوید!
                </p>
                <p className="leading-6 text-justify my-5">
                  در این دوره نحوه کار با 20 مورد از پر استفاده ترین کتابخانه
                  های جاوا اسکریپت به صورت پروژه محور به شما عزیزان آموزش داده
                  می شود تا هیچ مشکلی برای ورود به بازار کار نداشته باشید
                </p>
              </div>
              <div className="gap-y-5 text-[#7b868a] mt-2">
                <h3 className="text-xl md:text-2xl leading-10 p-1 font-bold inline border-b-2 border-solid border-mainColor text-black">
                  هدف از این دوره چیست؟ (تنها راه ورود به بازار کار و کسب درآمد)
                </h3>
                <img
                  src="	http://localhost:3001/images/info/2.jpg"
                  alt=""
                  className="w-full rounded-xl my-7"
                />
                <p className="leading-6 text-justify my-5">
                  کتابخانه های بسیار زیادی برای زبان جاوا اسکریپت وجود دارد و
                  سالانه چندین کتابخانه جدید نیز به این لیست اضافه می شود که در
                  بازار کار به شدت از آن ها استفاده می شود و اگر بدون بلد بودن
                  این کتابخانه ها وارد بازار کار شوید، خیلی اذیت خواهید شد و حتی
                  ممکن است ناامید شوید!
                </p>
                <p className="leading-6 text-justify my-5">
                  در این دوره نحوه کار با 20 مورد از پر استفاده ترین کتابخانه
                  های جاوا اسکریپت به صورت پروژه محور به شما عزیزان آموزش داده
                  می شود تا هیچ مشکلی برای ورود به بازار کار نداشته باشید
                </p>
                <p className="leading-6 text-justify my-5">
                  در این دوره سعی کردیم علاوه بر آموزش مستقیم هر کتابخانه، نحوه
                  یادگیری یک کتابخانه جدید را نیز به شما عزیزان آموزش دهیم تا
                  بعد از گذراندن دوره، دیگر وابسته هیچ دوره یا شخص خاصی نباشید و
                  اگر کتابخانه جدیدی به دنیای جاوا اسکریپت و وب اضافه شد، به
                  راحتی بتوانید آن را یاد بگیرید.
                </p>
              </div>
              <div className="flex flex-col gap-5 mt-10 border border-solid border-gray-100  p-3 ">
                <AccordionCourse />
                <AccordionCourse />
              </div>
            </div>
            {/* Finish course introduction */}
            <CommentTextArea />
          </div>
          {/* Finish right section */}
          {/* Start left section */}
          <aside className="col-span-12 lg:col-span-4">
            <div className="bg-white p-5 mt-1 rounded-sm shadow-[0_5px_30px_rgba(70,72,77,0.08)] hidden lg:block">
              <div className="flex items-center justify-center gap-x-1 text-white shadow-[0_5px_30px_rgba(70,72,77,0.08)] bg-mainColor p-4 rounded-lg mb-3">
                <span className="font-bold">قیمت:</span>
                <span className="font-bold">250,000 تومان</span>
              </div>
              <div className="flex items-center justify-center gap-x-1 text-white shadow-[0_5px_30px_rgba(70,72,77,0.08)] bg-[#1fbd50] p-3 rounded-lg">
                <i className="fa-solid fa-graduation-cap w-6 h-6 self-start"></i>
                <a href="#" className="font-bold">
                  ثبت نام در دوره
                </a>
              </div>
            </div>

            <div className="bg-white p-5 my-3 rounded-sm shadow-[0_5px_30px_rgba(70,72,77,0.08)]">
              <div className="border-2 border-solid border-slate-200 rounded-md p-4 flex items-center justify-center gap-x-1">
                <i className="fas fa-user-graduate w-7 h-7 self-start text-gray-600"></i>
                <span>تعداد دانشجو:</span>
                <span className="bg-gray-400 p-2 text-white rounded-md">
                  180
                </span>
              </div>
              <div className="flex justify-center items-center gap-x-3 mt-5 text-[#7b868a]">
                <div className="flex items-center gap-x-1 border-l border-solid border-gray-200 px-5">
                  <i className="far fa-comments w-7 h-7 ml-2"></i>
                  <span>67</span>
                  <span>دیدگاه</span>
                </div>
                <div className="flex items-center gap-x-1 px-5">
                  <i className="far fa-eye w-7 h-7 ml-2"></i>
                  <span>1,520</span>
                  <span>بازدید</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-5 my-3 rounded-sm shadow-[0_5px_30px_rgba(70,72,77,0.08)] text-[#7b868a]">
              <div className="flex items-center gap-x-1">
                <i className="fas fa-link w-6 h-6"></i>
                <h6 className="font-bold">لینک کوتاه</h6>
              </div>
              <span className="flex justify-center mt-3 p-2 border border-solid border-gray-300 rounded-md text-sm">
                https://geeklearn.ir/?p=117472
              </span>
            </div>
            <div className="bg-white p-5 my-3 rounded-sm shadow-[0_5px_30px_rgba(70,72,77,0.08)] text-[#7b868a]">
              <div className="flex items-center gap-x-1">
                <i className="fa fa-tag"></i>
                <h6 className="font-bold">برچسب ها</h6>
              </div>
              <div className="mt-5 flex flex-wrap items-center gap-3 text-[#56626E]">
                <a
                  href="#"
                  className="bg-gray-200 p-1.5 text-sm rounded-sm hover:bg-gray-300 transition-colors"
                >
                  دوره آموزشی
                </a>
                <a
                  href="#"
                  className="bg-gray-200 p-1.5 text-sm rounded-sm hover:bg-gray-300 transition-colors"
                >
                  دوره آموزشی
                </a>
                <a
                  href="#"
                  className="bg-gray-200 p-1.5 text-sm rounded-sm hover:bg-gray-300 transition-colors"
                >
                  دوره آموزشی
                </a>
                <a
                  href="#"
                  className="bg-gray-200 p-1.5 text-sm rounded-sm hover:bg-gray-300 transition-colors"
                >
                  دوره آموزشی
                </a>
              </div>
            </div>
          </aside>
          {/* Finish left section */}
        </div>
      </div>
      <LatestCourses />
    </div>
  );
}
