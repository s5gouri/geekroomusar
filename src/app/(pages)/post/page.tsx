/* eslint-disable */
"use client";
import Navbar from "@/components/ui/Navbar";
import { eventInterface } from "@/Model/EventModel";
import axios from "axios";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Page() {
  const[data,setdata]=useState<eventInterface[] | null>(null)
  const { data: session, status } = useSession();
  const route = useRouter();
  useEffect(() => {
    if (status !== "loading") {
      if (session?.user.email === undefined) {
        route.push("/log/signin");
      }
    }
    const view=async()=>{
      const res=await axios.get('/api/posts',{})
      setdata(res.data.events)
    }
    view()
  }, []);
  return (
    <>
    <Navbar/>
    <div className="w-full flex justify-center items-center">

        <Link href={"/post/add"} className="p-3 rounded-lg border-2 border-teal-300 hover:bg-gray-400 text-xl">Add Blog</Link>
    </div>
      <div className=" mt-11 w-full h-screen flex flex-wrap  justify-center items-center  gap-11">
        {data?.map((item)=>{
          return(

            <div key={item.num} className="lg:w-[25%] md:w-[35%] sm:w-[45%] w-[90%] h-[200px] rounded-xl flex justify-center items-center border-2 border-gray-400 relative">
          <Image
            src={
              item.coverImage
            }
            height={100}
            width={100}
            alt="loading"
            className="h-full w-full object-cover rounded-lg absolute"
          />
          <div className="w-full h-full bg-teal-300 flex justify-center items-center opacity-0 hover:opacity-50 duration-500 z-10 rounded-lg">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                className="bi bi-trash3 "
                viewBox="0 0 16 16"
              >
                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
              </svg>
            </button>
          </div>
        </div>
          )
        })}
        </div>
    </>
  );
}
