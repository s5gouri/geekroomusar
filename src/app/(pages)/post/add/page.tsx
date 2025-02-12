"use client";
import Image from "next/image";

import "@/app/globals.css";
import { useEffect, useState } from "react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { CldUploadWidget } from "next-cloudinary";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

interface cloudinaryurl{
  secure_url:string

}

export default function Page() {
  const { data: session, status } = useSession();

  const [images, setImages] = useState<string[]>([]);
  const [htemp, sethTemp] = useState<string | null>(null);
  const router=useRouter()
  useEffect(() => {
    if (status !== "loading") {
      if (session?.user.email === undefined) {
        router.push("/log/signin");
      }
    }
  }, [router , status, session]);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const description = formData.get("desc") as string;
    const startDate = formData.get("start") as string;
    const Heading = formData.get("title") as string;
    const Numb = formData.get("numb") as string;
    
    const endDate = formData.get("end") as string;
    const formdataNew = new FormData();
    formdataNew.append("description", description);
    formdataNew.append("Heading", Heading);
    formdataNew.append("Numb", Numb);
    formdataNew.append("header", htemp as string);
    formdataNew.append("start", startDate);
  formdataNew.append("end", endDate);
    formdataNew.append("images", JSON.stringify(images));
    const send = async () => {
      try {
       const result= await axios.post("/api/addevent",formdataNew);
        console.log(result.data)
        if(result.data.success){
          alert("Data sent successfully")
        }
        router.push("/post")
      } catch {
        alert("Something went wrong");
      }
    };
    send();
  };
  return (
    <>
      <Navbar />
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className="min-h-screen bg-white w-full flex justify-center items-center flex-col">
          <CldUploadWidget
            uploadPreset="just trying"
            onSuccess={(results) => {
              sethTemp((results?.info as cloudinaryurl)?.secure_url as string);
            }}
          >
            {({ open }) => (
              <label
                onClick={() => open()}
                className="hover:cursor-pointer relative h-[30vh] md:h-[30vh] lg:h-[50vh] w-[90%] rounded-lg overflow-hidden border-2 border-gray shadow-lg mb-8"
              >
                {htemp && (
                  <Image
                    src={htemp as string}
                    width={100}
                    height={100}
                    alt="Modern Architecture Header"
                    className="w-full h-full object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center flex-col p-4 gap-11">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-white font-bold text-center">
                    Click to add Image
                  </h1>
                </div>
              </label>
            )}
          </CldUploadWidget>

          <div className="w-full flex-col flex justify-center items-center gap-4 text-xl">
            <label htmlFor="aaa1">Title:</label>
            <input type="text" name="title" id="aaa1" className="p-3 border-2 border-gray-400 rounded-lg" />
          </div> 
          <div className="w-full my-4 flex-col flex justify-center items-center gap-4 text-xl">
            <label htmlFor="aaa2">Number:</label>
            <input type="number" name="numb" id="aaa2" className="p-3 border-2 border-gray-400 rounded-lg" />
          </div>

          <section className="w-full mx-auto flex justify-center items-center ">
            <div className="relative w-[90%] ">
              <div className="flex flex-col lg:flex-row w-full ">
                {/* Image Section */}
                <div className="relative  w-full flex flex-col justify-center items-center lg:w-[50%] h-[300px] sm:h-[400px] lg:h-[400px] rounded-lg overflow-hidden  mb-4 lg:mb-0 bg-red-00">
                  
                  <CldUploadWidget
                    uploadPreset="just trying"
                    onSuccess={(results) => {
                      setImages((prevImages) => [...prevImages, (results?.info as cloudinaryurl)?.secure_url as string]);
                    }}
                    
                  >
                    {({ open }) => (
                      <label
                        onClick={() => open()}
                        className="w-[40%] my-5 border-2 border-teal-400 text-2xl rounded-lg hover:bg-teal-400 duration-500 text-center"
                      >
                        Add image
                      </label>
                    )}
                  </CldUploadWidget>
                  <div className="w-[95%] h-[95%] flex flex-wrap gap-4 justify-center items-start overflow-hidden overflow-y-auto overflow-x-hidden rounded-lg noscroll">
                    {images?.map((imgs) => {
                      return (
                        <div className="w-[40%] h-auto" key={imgs}>
                          <Image
                            src={imgs as string}
                            alt="loading"
                            width={100}
                            height={100}
                            className="w-full rounded-lg"
                          />
                        </div>
                      );
                    })}
                     <div className="w-[40%] h-auto" >
                          <Image
                            src={"https://images.unsplash.com/photo-1492571350019-22de08371fd3?auto=format&fit=crop&q=80&w=1200" as string}
                            alt="loading"
                            width={100}
                            height={100}
                            className="w-full rounded-lg"
                          />
                        </div> <div className="w-[40%] h-auto" >
                          <Image
                            src={"https://images.unsplash.com/photo-1492571350019-22de08371fd3?auto=format&fit=crop&q=80&w=1200" as string}
                            alt="loading"
                            width={100}
                            height={100}
                            className="w-full rounded-lg"
                          />
                        </div> <div className="w-[40%] h-auto" >
                          <Image
                            src={"https://images.unsplash.com/photo-1492571350019-22de08371fd3?auto=format&fit=crop&q=80&w=1200" as string}
                            alt="loading"
                            width={100}
                            height={100}
                            className="w-full rounded-lg"
                          />
                        </div> <div className="w-[40%] h-auto" >
                          <Image
                            src={"https://images.unsplash.com/photo-1492571350019-22de08371fd3?auto=format&fit=crop&q=80&w=1200" as string}
                            alt="loading"
                            width={100}
                            height={100}
                            className="w-full rounded-lg"
                          />
                        </div>
                  </div>
                </div>

                {/* Text Section */}
                <div className="w-full bg-repeat-round lg:w-1/2 bg-red-00 p-6 flex flex-col h-[500px] justify-center ">
                  <textarea
                    name="desc"
                    className="w-full noscroll p-4 border-2 border-gray-400 rounded-lg h-full text-gray-600 text-base text-center sm:text-lg leading-relaxed"
                  >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quos voluptate vel, enim dolorum iste doloribus, dolorem
                    voluptas dignissimos cupiditate adipisci amet aliquid eaque
                    aperiam impedit necessitatibus? Vero atque voluptatem aut!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ullam ipsum temporibus, aliquid architecto dolores in ea ut
                    debitis repudiandae iste ipsa deleniti repellendus
                    laboriosam eos delectus ratione eius accusantium illo?
                    Facere rerum accusantium similique officia tenetur
                    laboriosam aspernatur praesentium velit impedit quas aliquam
                    corporis sed debitis hic dolore ipsa quos saepe fuga iste,
                    excepturi soluta enim odio. Sequi, consequuntur cumque. Iste
                    error dignissimos veniam ab reprehenderit tenetur, quisquam
                    quam praesentium ex molestias laborum incidunt, inventore
                    maiores possimus deserunt qui aliquid? Explicabo doloribus
                    mollitia, a aliquid accusamus ullam? Impedit, quibusdam
                    sint?
                  </textarea>
                </div>
              </div>
            </div>
          </section>
          <div className="w-full my-4  justify-center items-center gap-11">
          <div className="flex gap-3 my-4 justify-center items-center">
          <label htmlFor="aa2" className="text-xl">Start:</label>
          <input type="date" name="start" id="aa2" className="p-3 border-2 border-gray-400 rounded-lg" />
            </div>
            <div className="flex gap-3 justify-center items-center">
          <label htmlFor="aa1" className="text-xl">End:</label>
          <input type="date" name="end" id="aa1" className="p-3 border-2 border-gray-400 rounded-lg" />
            </div>
          
          </div>
          <div className="w-full my-4 flex justify-center items-center">
            <button
              type="submit"
              className="p-3 bg-teal-400 text-white rounded-lg text-2xl duration-500 hover:bg-teal-500"
            >
              Add Blog
            </button>
          </div>
          <Footer />
        </div>
      </form>
    </>
  );
}
