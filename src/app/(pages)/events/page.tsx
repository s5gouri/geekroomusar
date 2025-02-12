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


      <div className=" mt-11 w-[95%]  h-screen flex flex-wrap   justify-center items-start  gap-11">
        {data?.map((item)=>(

            <Link href={`/post/${item.num}`} key={item.num} className=" m-2 lg:w-[30%] md:w-[45%] sm:w-[60%] w-[90%] h-[200px] rounded-xl flex justify-center items-center border-2 border-gray-400 relative">
          <Image
            src={
              item.coverImage
            }
            height={100}
            width={100}
            alt="loading"
            className="h-full w-full object-cover rounded-lg absolute"
          />
          <div className="w-full sm:flex hidden text-4xl font-semibold text-black h-full bg-teal-300  justify-center items-center opacity-0 hover:opacity-50 duration-500 z-10 rounded-lg">
            View
          </div>
        </Link>
          )
        )}
        </div>
    </div>
    </>
  );
}
