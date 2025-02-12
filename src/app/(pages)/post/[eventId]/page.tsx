"use client";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from "react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { useParams } from "next/navigation";
import axios from "axios";
import { eventInterface } from "@/Model/EventModel";
import Def_loader from "@/components/Def_loader";


let carouselItems: string[] ;
let desc:string;



export default function Page() {
  const params=useParams();
    const[data,setdata]=useState<eventInterface | null>(null)

    const[load,setload]=useState<boolean>(true)
  useEffect(()=>{
    setload(true)
    const view=async()=>{
      const res=await axios.post(`/api/blog`,{blogNo:params.eventId})
      console.log(res.data)
      setdata(res.data.event)
      desc=res.data.event.description
      console.log(res.data.event.carousel)
      carouselItems=res.data.event.carousel
      setload(false)
    }
    view()

  },[params.eventId]);
  
  return (
    <>
    <Def_loader isvisible={load}/>
    <Navbar/>
    {data!==null && (
      <div className="min-h-screen bg-white w-full flex justify-center items-center flex-col">
      {/* Header Image */}
      <div className="relative h-[30vh] md:h-[30vh] lg:h-[50vh] w-[90%] rounded-lg overflow-hidden shadow-lg mb-8">
        <Image
          src={data?.coverImage as string}
          width={100}
          height={100}
          alt="Modern Architecture Header"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center flex-col p-4 gap-11">

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-white font-bold text-center">
            {data?.title}
          </h1>
          <p className="text-4xl text-white">
  {new Date(data.start).toLocaleDateString("en-US", { 
    month: "long", day: "numeric" 
  })}  
  - 
  {new Date(data.end).toLocaleDateString("en-US", { 
    month: "long", day: "numeric", year: "numeric" 
  })}
</p>

        </div>
      </div>

      {/* Carousel Section */}
      <section className="min-w-full mx-auto flex justify-center items-center">
        <Carousel />
      </section>
      <Footer/>
    </div>
    )}
    
    </>
  );
  }
  

  function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(()=>{
      const interval = setInterval(() => {
        setCurrentIndex((current) => 
        current === carouselItems.length - 1 ? 0 : current + 1
      );
      }, 4000);
      return () => clearInterval(interval);
    })
  
    const next = () => {
      setCurrentIndex((current) => 
        current === carouselItems.length - 1 ? 0 : current + 1
      );
    };
  
    const prev = () => {
      setCurrentIndex((current) => 
        current === 0 ? carouselItems.length - 1 : current - 1
      );
    };
  
    return (
      <div className="relative w-[90%]">
        <div className="flex w-full flex-col lg:flex-row ">
          {/* Image Section */}
          <div className=" relative w-full lg:w-1/2 h-[200px] sm:h-[300px] lg:h-[400px] rounded-lg overflow-hidden shadow-lg mb-4 lg:mb-0">
            <Image
             width={100}
             height={100}
              src={carouselItems[currentIndex]}
              alt={"loading"}
              className="w-full h-full object-cover"
            />
            
            {/* Navigation Buttons */}
            <div className="absolute inset-y-0 left-0 flex items-center">
              <button
                onClick={prev}
                className="p-2 sm:p-3 m-2 bg-white/80 rounded-full hover:bg-white transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center">
              <button
                onClick={next}
                className="p-2 sm:p-3 m-2 bg-white/80 rounded-full hover:bg-white transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
  
            {/* Dots */}
            
          </div>
  
          {/* Text Section */}
          <div className=" w-full lg:w-1/2 bg-red-00 p-6 flex flex-col justify-center">
            <p className="text-gray-600 text-base text-center sm:text-lg leading-relaxed">
              {desc} </p>
          </div>
        </div>
      </div>
    );
  }