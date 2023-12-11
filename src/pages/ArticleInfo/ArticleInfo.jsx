import React from "react";
import "./ArticleInfo.css";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import CommentTextArea from "../../Components/CommentTextArea/CommentTextAera.jsx/CommentTextArea";
export default function ArticleInfo() {
  return (
    <div>
      <Breadcrumb
        links={[
          { id: 1, title: "صفحه اصلی", to: "" },
          {
            id: 2,
            title: "مقالات",
            to: "category-info/frontend",
          },
          {
            id: 3,
            title: "عنوان مقاله",
            to: "course-info/js-expert",
          },
        ]}
      />
      {/* Start main section */}
      <section className="container max-w-7xl px-2">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 py-10 px-5 mt-0 lg:mt-5">
          {/* {Start right section} */}
          <div className="col-span-12 lg:col-span-9">
            <div className=" border border-solid border-gray-100 shadow-mainShadow p-5 rounded-sm mb-5">
              <h1 className="text-xl lg:text-2xl font-bold border-b-2 border-solid border-slate-200 pb-2">
                Redux چیست و چرا در توسعه وب اهمیت دارد؟
              </h1>
              <div className="flex flex-wrap gap-5 md:text-sm text-xs text-[#56626E] my-5">
                <div className="flex items-center gap-1">
                  <i className="fa-solid fa-pen"></i>
                  <span>حسین جوادی</span>
                </div>
                <div className="flex items-center gap-1">
                  <i className="fa-solid fa-clock"></i>
                  <span>10 تیر 1402</span>
                </div>
                <div className="flex items-center gap-1">
                  <i className="fa-solid fa-eye"></i>
                  <span>220</span>
                </div>

                <div className="flex items-center gap-1">
                  <i className="fa-solid fa-folder"></i>
                  <span>دسته بندی :تکنولوژی</span>
                </div>
              </div>
              <img
                src="/images/redux-logo.png"
                alt="Redux-logo"
                className="border border-solid border-slate-400"
              />
              <div className="flex flex-col gap-10 px-2 my-5 text-[#212529] text-sm text-[1rem]">
                <p className="text-justify leading-8">
                  اگر بخواهیم به این سوال پاسخ دهیم که Redux چیست، طبق تعریف
                  اینطور باید بگوییم که یک کانتینر قابل پیش‌بینی state برای
                  برنامه‌های جاوااسکریپت است. برای این که معنای آن را دقیق‌تر
                  درک کنیم ابتدا باید با تعدادی از تعاریف آشنا شویم. در این
                  مقاله قصد داریم تا این مفاهیم را باهم بررسی کنیم.
                </p>
                <div>
                  <h2 className="text-lg md:text-xl font-bold mb-5">
                    نگاهی عمیق‌تر به stateها
                  </h2>
                  <p className="text-justify leading-8">
                    این مثال را در نظر بگیرید: شما از اپلیکیشن X در گوشی خود
                    استفاده می‌کنید، برخی کارها را با آن برنامه انجام می‌دهید و
                    سپس به برنامه Y می‌روید و کارهای مختلفی را در آن انجام
                    می‌دهید. در همین حین متوجه می‌شوید که کاری را در برنامه X
                    فراموش کرده‌اید، بنابراین به اولین برنامه برمی‌گردید. وقتی
                    آن برنامه اصلی را دوباره باز می‌کنید در همان stateای که
                    آخرین بار آن را ترک کردید در همان حالت قرار دارد.
                  </p>
                </div>
                <div>
                  <p className="text-justify leading-8">
                    سه اصل مهم برای state وجود دارد:
                  </p>
                  <ul className="list-disc p-5 leading-8">
                    <li>
                      state یک برنامه، همیشه در یک آبجکت جاوااسکریپت ذخیره
                      می‌شود.
                    </li>
                    <li>
                      اگرچه state فقط خواندنی است، اما می‌توان با توصیف تغییرات
                      و با استفاده از یک action جاوااسکریپتی آن را تغییر داد.
                    </li>
                    <li>
                      تغییرات یک state توسط یک تابع کاهنده انجام می‌شود که state
                      فعلی را می‌پذیرد و از طریق یک action در صورت تغییر، state
                      جدید و در صورت عدم تغییر، state اولیه را برمی‌گرداند.
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-3">
                  <h2 className="text-lg md:text-xl font-bold">Redux چیست؟</h2>
                  <p className="text-justify leading-8">
                    اگر بخواهیم خلاصه بگوییم که Redux چیست، راهی برای مدیریت
                    state است یا می‌توان گفت یک حافظه پنهان یا ذخیره‌سازی است که
                    می‌تواند توسط همه کامپوننت‌ها با روشی ساختاریافته قابل
                    دسترسی باشد.
                  </p>
                  <p className="text-justify leading-8">
                    Redux زمانی شروع شد که فیس‌بوک با ساختار
                    Model-View-Controller به مشکل برخورد. MVC یک الگوی طراحی نرم
                    افزاری است که یک برنامه را به سه جزء تقسیم می‌کند: Model
                    (منطق مربوط به داده‌ها)، View (منطق UI برای یک اپلیکیشن) و
                    Controller (رابط بین Model و View). هنگامی که فیس‌بوک نیاز
                    به مقیاس‌گذاری گسترده داشت، ساختار MVC شروع به شکست آن‌ها
                    کرد.
                  </p>
                  <p className="text-justify leading-8">
                    در این مرحله، فیس‌بوک Flux را منتشر کرد، که روشی یک‌ طرفه
                    برای به‌روزرسانی کامپوننت View و مدیریت اقدامات مبتنی بر
                    کاربر است.
                  </p>
                  <p className="text-justify leading-8">
                    در ژوئن ۲۰۱۵، دن آبراموف Redux را ایجاد کرد که بر اساس Flux
                    فیس‌بوک و زبان برنامه نویسی Elm است. تغییرات بزرگی که
                    آبراموف در Redux ایجاد کرد این بود که او فقط از یک store
                    استفاده کرد و dispatcher را حذف کرد. dispatcher یک برنامه
                    مخصوصی است که با یک زمانبند ارتباط برقرار می‌کند و یک فرآیند
                    را به state مورد نظر می‌رساند.
                  </p>
                  <p className="text-justify leading-8">
                    store راهی برای ذخیره و مدیریت مداوم مجموعه‌ای از داده‌ها
                    است. Flux از چندین store استفاده کرد در حالی که Redux فقط یک
                    store دارد. بنابراین اگر کامپوننت‌های متعددی در یک برنامه
                    داریم، تنها یک store وجود دارد که state کامپوننت‌ها را
                    مدیریت کند. آن store می‌تواند هر state داده شده را به هر
                    کامپوننتی انتقال دهد، و آن را به یک مدل فوق‌العاده مؤثر و
                    کارآمد تبدیل ‌کند.
                  </p>
                </div>
              </div>
              <div
                className="flex justify-center items-center gap-2 text-gray-500
            mt-14 text-xl"
              >
                <h3 className="text-sm font-bold">اشتراک گذاری :</h3>
                <a href="#">
                  <i className="fa-brands fa-telegram"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </div>
            </div>
            <CommentTextArea />
          </div>
          {/* {Finish right section} */}

          {/* {Start left section} */}
          <div className="lg:col-span-3 col-span-12">
            <div className="border border-solid border-gray-100 shadow-mainShadow p-5 rounded-sm text-[#7b868a]">
              <div className="flex items-center gap-x-1">
                <i className="fa fa-tag"></i>
                <h6 className="font-bold">برچسب ها</h6>
              </div>
              <div className="mt-5 flex flex-wrap items-center gap-3 text-[#56626E]">
                <a
                  href="#"
                  className="bg-gray-200 p-1.5 text-sm rounded-sm hover:bg-gray-300 transition-colors"
                >
                  javascript
                </a>
                <a
                  href="#"
                  className="bg-gray-200 p-1.5 text-sm rounded-sm hover:bg-gray-300 transition-colors"
                >
                  Redux
                </a>
                <a
                  href="#"
                  className="bg-gray-200 p-1.5 text-sm rounded-sm hover:bg-gray-300 transition-colors"
                >
                  state
                </a>
                <a
                  href="#"
                  className="bg-gray-200 p-1.5 text-sm rounded-sm hover:bg-gray-300 transition-colors"
                >
                  FrontEnd
                </a>
              </div>
            </div>
          </div>
          {/* {Finish left section} */}
        </div>
      </section>
      {/* Finish main section */}
    </div>
  );
}
