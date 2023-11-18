import React from "react";
import FooterBox from "../FooterBox/FooterBox";

export default function Footer() {
  return (
    <footer className="shadow-[0_10px_50px_rgba(54,201,244,0.22)] p-10 mt-4">
      <div className="container max-w-[1280px] px-4">
        <img src="/images/logo.png" alt="" className="mb-6 w-16" />
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-y-10  px-7">
          <FooterBox
            menuItems={[
              { id: 1, title: "درباره ما" },
              { id: 2, title: "تماس با ما" },
              { id: 3, title: "سوالات متداول" },
            ]}
            title={"معرفی"}
          ></FooterBox>
          <FooterBox
            menuItems={[
              { id: 1, title: "آموزش HTML" },
              { id: 2, title: "آموزش CSS" },
              { id: 3, title: "آموزش پایتون" },
            ]}
            title={"لینک های مفید"}
          ></FooterBox>
          <FooterBox
            menuItems={[
              { id: 1, title: "دوره ها" },
              { id: 2, title: "وبلاگ" },
              { id: 3, title: "سبد خرید" },
              { id: 4, title: "ثبت نام" },
            ]}
            title={"دسترسی سریع"}
          ></FooterBox>
          <div className="flex flex-col">
            <h5 className="text-xl relative pr-4 text-[#53565d] font-bold  before:block before:w-2.5 before:h-0.5 before:absolute before:top-4 before:right-[-5px] before:bg-mainColor  before:text-mainColor">
              نماد ها
            </h5>

            <div className="flex flex-col gap-y-4 sm:flex-row mt-3">
              <img
                src="/images/enamad.png"
                alt="enamad"
                className="max-w-[170px]"
              />
              <img
                src="/images/samandehi.png"
                alt="samandehi"
                className="max-w-[170px]"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
