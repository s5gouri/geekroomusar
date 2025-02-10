"use client";
import AnimatedContent from "@/components/Animations/AnimatedContent/AnimatedContent";
import CountUp from "@/components/TextAnimations/CountUp/CountUp";
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
        <div className="w-full flex flex-wrap justify-center items-center my-10  gap-4">
          <Image
            src={"/geeklogo.png"}
            height={90}
            width={90}
            alt="..loading"
            className="m-2"
          />
          <div className="text-4xl font-semibold">GEEK ROOM - USAR</div>
        </div>
        <div className="w-full text-2xl gap-10 flex flex-wrap justify-center items-center">
          <button className="hover:text-teal-400 duration-500">Home</button>
          <button className="hover:text-teal-400 duration-500">About</button>
          <button className="hover:text-teal-400 duration-500">Events</button>
          <button className="hover:text-teal-400 duration-500">Contacts</button>
        </div>
        <div className="w-full my-11 text-gray-700 text-xl flex justify-center items-center">
          <div className="w-[80%] bg-teal-00 flex flex-wrap justify-around items-center my-11 sm:gap-0 gap-10">
            <p>© Copyrights@GeekRoomUSAR</p>
            <div className="flex gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-instagram me-5"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-linkedin me-5"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-twitter "
                viewBox="0 0 16 16"
              >
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
              </svg>
            </div>
            <p>Learn.Connect.Grow</p>
          </div>
        </div>
      </div>
    </>
  );
}
