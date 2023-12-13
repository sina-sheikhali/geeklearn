import React from "react";

export default function CommentTextArea() {
  return (
    <div className="border border-solid border-gray-100 shadow-mainShadow p-5 rounded-sm">
      <div className="flex flex-col">
        <h3 className="font-bold">دیدگاه خود را به اشتراک بگذارید :</h3>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          className="border border-solid w-full my-5 p-3 focus-within:border-black transition-colors"
        ></textarea>
        <button className="bg-mainColor py-2 px-3 text-white rounded-md hover:bg-hoverColor transition-colors  self-end">
          ثبت دیدگاه
        </button>
      </div>
    </div>
  );
}
