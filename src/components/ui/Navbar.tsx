import Image from "next/image";
import React, { useState } from "react";

export default function Navbar() {
  const [open, setopen] = useState<boolean>(false);
  return (
    <>
      <div className="w-full h-[10vh] flex justify-between items-center gap-4 bg-teal-00">
        <div className="h-full sm:w-[10vw] w-[20vw] flex justify-center items-center sm:ms-0 ms-[40px]">
          <Image
            src={"/geeklogo.png"}
            height={90}
            width={90}
            alt="..loading"
            className="m-2 sm:w-auto w-[70%]"
          />
        </div>
        <div className=" sm:flex hidden gap-3  h-full  justify-center items-center me-2">
          <button className="mx-1  text-xl hover:text-teal-500 group relative duration-500">
            Home
            <span className="absolute left-0 bottom-[-3px] w-0 h-[2px] bg-teal-500 transition-all duration-500 ease-in-out group-hover:w-full group-hover:opacity-100 opacity-0"></span>
          </button>
          <button className="mx-1 text-xl hover:text-teal-500 group relative duration-500">
            About
            <span className="absolute left-0 bottom-[-3px] w-0 h-[2px] bg-teal-500 transition-all duration-500 ease-in-out group-hover:w-full group-hover:opacity-100 opacity-0"></span>
          </button>
          <button className="mx-1 text-xl hover:text-teal-500 group relative duration-500">
            Events
            <span className="absolute left-0 bottom-[-3px] w-0 h-[2px] bg-teal-500 transition-all duration-500 ease-in-out group-hover:w-full group-hover:opacity-100 opacity-0"></span>
          </button>
          <button className="mx-1 text-xl hover:text-teal-500 group relative duration-500">
            Contact
            <span className="absolute left-0 bottom-[-3px] w-0 h-[2px] bg-teal-500 transition-all duration-500 ease-in-out group-hover:w-full group-hover:opacity-100 opacity-0"></span>
          </button>
        </div>
        <div className="   w-[10vw] sm:hidden flex relative flex-col  me-[40px] h-full  justify-center items-center">
          <button className="absolute me-3 ">
            <svg
              onClick={() => setopen(open == true ? false : true)}
              className=""
              xmlns="http://www.w3.org/2000/svg"
              height="40px"
              viewBox="0 -960 960 960"
              width="40px"
              fill="#000000"
            >
              <path d="M120-240v-66.67h720V-240H120Zm0-206.67v-66.66h720v66.66H120Zm0-206.66V-720h720v66.67H120Z" />
            </svg>
          </button>
          {open && (
            <div className="flex mt-[200px]  flex-col justify-center items-center bg-white border-2 border-gray-400 rounded-xl me-3 ">
              <button onClick={()=>setopen(false)} className=" text-2xl hover:text-teal-500 group relative duration-500 m-1 mx-3">
                Home
              </button>
              <button onClick={()=>setopen(false)} className=" text-2xl hover:text-teal-500 group relative duration-500 m-1 mx-3">
                About
              </button>
              <button onClick={()=>setopen(false)} className=" text-2xl hover:text-teal-500 group relative duration-500 m-1 mx-3">
                Events
              </button>
              <button onClick={()=>setopen(false)} className=" text-2xl hover:text-teal-500 group relative duration-500 m-1 mx-3">
                Contact
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
