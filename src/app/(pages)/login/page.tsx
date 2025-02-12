"use client";
import { signIn } from "next-auth/react";
import React from "react";

export default function Page() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const send = async () => {
      try {
        signIn("credentials", { 
          email,
          password,
          callbackUrl: "/post",
        });
      } catch {
        alert("Something went wrong");
      }
    };
    send();
  };
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <form onSubmit={(e)=>handleSubmit(e)} className="w-full flex justify-center items-center">
          <div className="w-full sm:w-[40%] flex flex-col gap-4">
            <div className="w-full flex justify-center items-start flex-col  ">
              <label htmlFor="a1" className="text-2xl">
                Email:
              </label>
              <input
                type="email"
                name="email"
                id="a1"
                className="p-3 border-2 border-gray-400 rounded-lg w-full"
              />
            </div>
            <div className="w-full flex justify-center items-start flex-col ">
              <label htmlFor="a2" className="text-2xl">
                Password:
              </label>
              <input
                type="password"
                name="password"
                id="a2"
                className="p-3 border-2 border-gray-400 rounded-lg w-full"
              />
            </div>
            <div className="w-full flex justify-center items-start flex-col ">
              <button type="submit" className="p-2 border-2 border-gray-400 rounded-lg text-2xl hover:bg-teal-200">
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
