"use client";
import CountUp from "@/components/TextAnimations/CountUp/CountUp";


export default function Page() {
    return (
     <>

<CountUp
  from={0}
  to={100}
  separator=","
  direction="up"
  duration={1}
  className="count-up-text"
/></>
    );
  }
  