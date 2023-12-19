import React from "react";
import Input from "../../Components/Form/Input";
import { Link } from "react-router-dom";
export default function Register() {
  return (
    <div
      className="text-white min-h-[600px] h-screen flex items-center justify-center  bg-[url('../public/images/bg-login.jpg')] bg-cover bg-center bg-no-repeat overflow-auto"
      style={{ direction: "ltr" }}
    >
      <div className="bg-slate-800 border border-slate-600 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30 relative">
        <h1 className="text-4xl font-bold text-center mb-6">ثبت نام</h1>
        <form action="">
          <div className="relative my-5">
            <Input
              className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"
              type="text"
              placeholder=""
              element="input"
            />
            <label
              htmlFor=""
              className="absolute text-sm duration-300 transform translate scale-100 top-3 right-0 z-10 origin-[0] peer-focus:right-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100  peer-focus:-translate-y-6"
            >
              نام کاربری
            </label>
          </div>
          <div className="relative my-5">
            <Input
              className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"
              type="password"
              placeholder=""
              element="input"
            />
            <label
              htmlFor=""
              className="absolute text-sm duration-300 transform translate scale-100 top-3 right-0 z-10 origin-[0] peer-focus:right-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6"
            >
              کلمه عبور
            </label>
          </div>
          <div className="relative">
            <Input
              className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"
              type="password"
              placeholder=""
              element="input"
            />
            <label
              htmlFor=""
              className="absolute text-sm  duration-300 transform translate scale-100 top-3 right-0  z-10 origin-[0] peer-focus:right-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100  peer-focus:-translate-y-6"
            >
              تکرار کلمه عبور
            </label>
          </div>
          <button
            type="submit"
            className="w-full mb-4 text-[18px] rounded mt-6 bg-blue-500 py-2 hover:bg-blue-600 transition-colors duration-300"
          >
            ثبت
          </button>
        </form>
        <div className="flex justify-end">
          <Link
            to={"/login"}
            className=" p-2 text-sm rounded  bg-red-500 py-2 hover:bg-red-600 transition-colors duration-300"
          >
            ورود
          </Link>
        </div>
      </div>
    </div>
  );
}
