import React from "react";
import me from "./../../assets/me.jpg";
import stactur from './../../assets/about1.webp'
import "./about.css";
const About = () => {
  return (
    <div id="about" className="h-screen lg:flex items-center justify-evenly p-10 pt-0 ">
      <div className="bg-[#F1F1F1] flex items-center justify-center relative    lg:p-4 animate-border-animate">
        <img className="w-60 " src={me} alt="" />
        <img className="absolute w-28 left-[-15px] top-0" src={stactur} alt="" />
      <img className="absolute w-28 right-[-30px] rotate-180 top-1/2" src={stactur} alt="" />
      </div>

      <div className="w-full lg:w-1/2 lg:ml-10">
        <div className="flex items-center gap-2  my-4">
          <span className="h-[1px] w-20 lg:w-28 block bg-black"></span>
          <h3>Who am i</h3>
          <span className="h-[1px] w-20 lg:w-28 block bg-black"></span>
        </div>

        <p className="">
          Hi, I'm <span className="text-xl text-[#0D5469]"> Umayer Hossain,</span> a passionate MERN (MongoDB, Express.js,
          React.js, Node.js) stack web developer .
        </p>

        <p className=" mt-5">
        With a love for creating
          dynamic and responsive web applications. My goal is to build
          intuitive, user-centric digital experiences while leveraging
          cutting-edge technologies to solve real-world problems. I'm excited to
          learn and adapt to the ever-evolving world of web development, and I'm
          committed to turning ideas into reality through code."!!!
        </p>

       <div className="mt-5">
       <h2 className="font-bold underline">Education:</h2>
       <p className="text-xs mt-1">HSC - kachua Bangabandhu Degree college (2023);</p>
       <p className="text-xs mt-1">Degree (BBA)- kachua Bangabandhu Degree College(2024-Runnig);</p>
       </div>
      </div>


      
      
    </div>
  );
};

export default React.memo(About);
