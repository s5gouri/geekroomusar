"use client";
import AnimatedContent from "@/components/Animations/AnimatedContent/AnimatedContent";
import CountUp from "@/components/TextAnimations/CountUp/CountUp";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [faq1, setfaq1] = useState<boolean>(false);
  const [faq2, setfaq2] = useState<boolean>(false);
  const [faq3, setfaq3] = useState<boolean>(false);
  const [faq4, setfaq4] = useState<boolean>(false);
  const faq = [
    {
      question: "What is Geek Room?",
      answer:
        "Geek Room is a widespread coding community with over 7500+ active coders nationwide. It was started by three 1st-year coding enthusiasts with the main objective to create a transparent community where sharing of ideas and helping other people is the main goal. Geek Room boasts various hackathon-winning teams, 6 independent institutes with Geek Room chapters, and so much more.",
      state: faq1,
      setState: setfaq1,
    },
    {
      question: "How to become a Community Partner for Geek Room events?",
      answer:
        "To become a Community Partner, you need to reach out via our official website or social media handles and follow the given process. We collaborate with institutes, organizations, and independent developers.",
      state: faq2,
      setState: setfaq2,
    },
    {
      question: "How do I connect with Geek Room? Do I need to pay any fees?",
      answer:
        "No, joining Geek Room is completely free! Just follow our official pages and join the community on Discord and Telegram.",
      state: faq3,
      setState: setfaq3,
    },
    {
      question: "What makes Geek Room unique?",
      answer:
        "No, joining Geek Room is completely free! Just follow our official pages and join the community on Discord and Telegram.",
      state: faq4,
      setState: setfaq4,
    },
  ];
  return (
    <>
      <div className="w-full">
        <Navbar />
        <div className="w-full h-screen flex flex-col justify-center items-center">
          <div className="md:w-[20vw] sm:w-[20%] w-[40%] mb-5">
            <Image
              src={"/geeklogo.png"}
              height={100}
              width={100}
              alt="..loading"
              className=" w-full"
            />
          </div>

          <div className="mt-3 sm:text-[5vw] text-4xl font-semibold">
            <AnimatedContent
              distance={150}
              direction="vertical"
              reverse={false}
              config={{ tension: 80, friction: 20 }}
              initialOpacity={0}
              animateOpacity
              scale={1.1}
              threshold={0.2}
            >
              <div>GEEK ROOM - USAR</div>
            </AnimatedContent>
          </div>
          <p className="mt-[2vw]  sm:w-[90%] w-[80%] text-center sm:text-4xl text-xl font-bold">
          <AnimatedContent
              distance={150}
              direction="vertical"
              reverse={false}
              config={{ tension: 80, friction: 20 }}
              initialOpacity={0}
              animateOpacity
              scale={1.1}
              threshold={0.2}
            >
              <div>
            Unleash The Power Of Innovation - Where Every Geek Thrives!
                </div>
            </AnimatedContent>
          </p>
        </div>
        <div className="w-full  flex justify-center flex-wrap gap-3 items-center">
          <div className="flex flex-col justify-center  items-center lg:w-[30%] md:w-[40%] sm:w-[60%] w-[90%]  rounded-xl border-2 text-white border-gray-400 p-3 text-[100px]   bg-red-500">
            <div className="">
              <CountUp
                from={0}
                to={25}
                separator=","
                direction="up"
                duration={3}
                className="count-up-text font-semibold"
              />
              +
            </div>
            <p className="text-4xl">Active Members</p>
          </div>
          <div className="flex flex-col justify-center items-center lg:w-[30%] md:w-[40%] sm:w-[60%] w-[90%]  rounded-xl border-2  border-gray-400 p-3 text-[100px]   bg-red-00">
            <div className="">
              <CountUp
                from={0}
                to={4}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text font-semibold"
              />
              +
            </div>
            <p className=" text-4xl break-all text-center">Events Organised</p>
          </div>
          <div className="flex flex-col justify-center items-center lg:w-[30%] md:w-[40%] sm:w-[60%] w-[90%]  rounded-xl border-2 text-white border-gray-400 p-3 text-[100px]   bg-[#67CACF]">
            <div className="">
              <CountUp
                from={0}
                to={40}
                separator=","
                direction="up"
                duration={3}
                className="count-up-text font-semibold"
              />
              +
            </div>
            <p className=" text-4xl">Team Members</p>
          </div>
        </div>
        <div className="mt-14 w-full flex justify-center items-center">
          <div className="sm:text-[100px] text-[50px] font-semibold">About US</div>
        </div>
        <div className="mt-14 w-full flex justify-center items-center">
          <div className="text-gray-600 w-[80%] font-bold text-center sm:text-2xl">
            Geek Room is a widespread coding community with over 25000+ active
            coders nationwide. It was started by three coding enthusiasts with
            the main objective to create a transparent community where sharing
            of ideas and helping other people is the main goal . Geek Room
            boasts of various hackathon winning teams, 6 independent institutes
            with Geek Room chapters and so much more.
          </div>
        </div>
        <div className="mt-14 w-full flex justify-center items-center">
          <div className="sm:text-[100px] text-[50px] font-semibold">FAQS</div>
        </div>

        <div className="mt-14 w-full flex justify-center items-center mb-3">
          <div className="lg:w-[60%] md:w-[80%] sm:w-[90%] w-[95%] flex justify-center items-center flex-col">
            {faq.map((item, index) => (
              <div
                key={index}
                className="w-full bg-gray-400 rounded-xl flex flex-col justify-center items-center my-2"
              >
                <div className="w-full flex justify-between items-center p-4">
                  <div className="text-2xl">{item.question}</div>
                  <button onClick={() => item.setState(!item.state)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="currentColor"
                      className={`bi duration-500 ${
                        item.state ? "bi-dash-circle" : "bi-plus-circle"
                      }`}
                      viewBox="0 0 16 16"
                    >
                      {item.state ? (
                        <>
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                          <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
                        </>
                      ) : (
                        <>
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                        </>
                      )}
                    </svg>
                  </button>
                </div>
                <div
                  className={`w-full text-center text-xl overflow-hidden transition-all duration-500 ease-in-out ${
                    item.state
                      ? "max-h-60 opacity-100 p-4"
                      : "max-h-0 opacity-0 p-0"
                  }`}
                >
                  {item.answer}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 w-full flex justify-center items-center">
          <div className="lg:text-[100px] md:text-[80px] text-[40px] font-semibold">PAST PARTNERS</div>
        </div>
        <div className="w-full sm:text-3xl text-xl mb-11  flex justify-center">
          <div className="w-[85%] text-center mb-11">
            We&apos;re proud to partner with industry leaders who share our vision
            for a tech-empowered future.
          </div>
        </div>




        <div className="w-full  my-10 border- flex flex-wrap border-black justify-center items-center">
          <div className="lg:w-[50%] w-[90%] flex flex-col justify-center lg:items-start items-center">
            <div className="lg:text-[100px] md:text-[80px] text-[50px] font-semibold lg:ms-10">Reach US!</div>
            <div className="w-[85%] text-center ms-10 md:mb-0 mb-11 text-xl">
              We are here to help. Send us your query and our team will get back to you as soon as possible!!
            </div>
          </div>












          <div className="lg:w-[45%] w-[90%] bg-teal-00 flex flex-col justify-center items-center gap-4 ">
            <div className="ms-3 w-full flex justify-center items-start  flex-col">
              <label htmlFor="a1" className="text-xl text-gray-00 mb-1">
                Name:
              </label>
              <input
                type="text"
                id="a1"
                className="border-2 border-gray-400 w-[90%] p-3 rounded-lg text-black"
              />
            </div>

            <div className="ms-3 w-full flex justify-center items-start  flex-col">
              <label htmlFor="a2" className="text-xl text-gray-00 mb-1">
                Email:
              </label>
              <input
                type="email"
                id="a2"
                className="border-2 border-gray-400 w-[90%] p-3 rounded-lg text-black"
              />
            </div>
            <div className="ms-3 w-full flex justify-center items-start  flex-col">
              <label htmlFor="a3" className="text-xl text-gray-00 mb-1">
                Message:
              </label>
              <textarea
                rows={5}
                id="a3"
                className="border-2 border-gray-400 w-[90%] p-3 rounded-lg text-black "
              />
            </div>
            <div className="ms-3 w-full flex justify-center items-start  flex-col">
              <button className="p-3 border-2 rounded-lg bg-teal-300 text-lg font-semibold border-gray-400">
                Send Message!
              </button>
            </div>
          </div>
        </div>
       <Footer/>
      </div>
    </>
  );
}
