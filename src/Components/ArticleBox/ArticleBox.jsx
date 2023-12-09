import React from "react";

export default function ArticleBox() {
  return (
    <div className="flex flex-col bg-white shadow-[0_0_10px_0_rgba(62,28,131,0.07)] rounded-lg border border-solid border-[#00000020] overflow-hidden">
      <div className="w-full">
        <a href="#" className="flex overflow-hidden">
          <img
            src="/images/article-img.jpg"
            alt=""
            className="w-full rounded-t-lg hover:scale-[1.15] hover:rotate-2 transition-transform"
          />
        </a>
      </div>
      <div className="flex flex-wrap gap-6 py-5 px-3 border-t border-solid border-[#00000020]">
        <a
          href="#"
          className="hover:text-mainColor transition-colors text-[1.1rem]"
        >
          نحوه نصب کتابخانه در پایتون | آموزش نصب کتابخانه پایتون
        </a>
        <p className="text-[#898989] whitespace-nowrap overflow-hidden p-2 text-ellipsis text-sm ">
          زبان پایتون هم مانند دیگر زبان­های برنامه نویسی رایج، دارای کتابخانه
          های مختلفی برای تسریع...
        </p>
        <a
          href="#"
          className="border-2 border-solid border-mainColor p-2 text-mainColor rounded-md hover:bg-mainColor hover:text-white transition-colors"
        >
          بیشتر بخوانید
        </a>
      </div>
    </div>
  );
}
