import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedin as Linkedin } from "react-icons/fa";
import { FaGithub as GitHub } from "react-icons/fa6";
import { FaFacebook as FaceBook } from "react-icons/fa";
import { IoDocumentTextOutline as Resume } from "react-icons/io5";
const Header = () => {
  return (
    <div className="flex lg:h-screen flex-col-reverse lg:flex-row items-center justify-between mt-10 text-gray-600 bg-[#F1F1F1]">
      <div className="w-full lg:w-[45%] flex items-center gap-8 p-2 lg:p-0">
        <div className="flex flex-col  items-center ">
          <span className="block w-[1px] h-16 my-8 bg-black"></span>

          <a
            href="https://www.linkedin.com/in/umayer-hossain-a4b8052b1/"
            target="_blank"
          >
            <button className="relative border border-black rounded-xl w-14 h-14 flex items-center justify-center rotate-[35deg] transition-all ease-linear duration-300  hover:bg-[#1F2937] hover:text-white group">
              <span className="rotate-[-35deg]">
                <Linkedin className="text-2xl" />
              </span>

              <span className=" absolute text-xs top-[-25px] bg-[#1F2937] text-white p-1 rounded-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Linkedin
              </span>
            </button>
          </a>

          <a href="https://github.com/UmayerCoding1" target="_blank">
            <button className="relative border border-black rounded-xl w-14 h-14 flex items-center justify-center rotate-[35deg] transition-all ease-linear duration-300  hover:bg-[#1F2937] hover:text-white group">
              <span className="rotate-[-35deg]">
                <GitHub className="text-2xl" />
              </span>

              <span className=" absolute text-xs top-[-25px] bg-[#1F2937] text-white p-1 rounded-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Github
              </span>
            </button>
          </a>

          <a href="https://www.facebook.com/umayer.rana.1" target="_blank">
            <button className="relative border border-black rounded-xl w-14 h-14 flex items-center justify-center rotate-[35deg] transition-all ease-linear duration-300  hover:bg-[#1F2937] hover:text-white group">
              <span className="rotate-[-35deg]">
                <FaceBook className="text-2xl" />
              </span>

              <span className=" absolute text-xs top-[-25px] bg-[#1F2937] text-white p-1 rounded-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Facebook
              </span>
            </button>
          </a>

          <span className="block w-[1px] h-16 my-8 bg-black"></span>
        </div>

        <div className="">
          <div className="flex items-center justify-between">
            <span className="h-[1px] w-20 lg:w-28 block bg-black"></span>
            <h3>Hello Everyone</h3>
            <span className="h-[1px] w-20 lg:w-28 block bg-black"></span>
          </div>
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "I'M  Umayer Hossain >",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "a dedicated & passionate >",
              1000,
              "MERN stack developer >",
              1000,
            ]}
            wrapper="span"
            speed={50}
            // style={{ fontSize: "2em", display: "inline-block" }}
            repeat={Infinity}
            className="text-2xl lg:text-3xl"
          />

          <p className="text-xs mt-4">
            I am a skilled{" "}
            <span className="text-lg font-semibold">MERN stack developer</span>.
          </p>

          <p className="text-xs ">
            With a passion for building full-stack web applications that deliver
            seamless user experiences. With hands-on experience across the
            entire development lifecycle, from designing intuitive user
            interfaces with React to implementing robust back-end systems using
            Node.js and Express.js, I aim to create scalable, high-performance
            web solutions.
          </p>

          <a
            href="https://drive.google.com/file/d/1WvOmJItmRRlcZUit-ikXKIFrg3jRC6jy/view?usp=sharing"
            target="_blank"
          >
            <button className="flex items-center p-3 border border-black gap-2 mt-5 rounded-xl">
              <Resume />
              Resume
            </button>
          </a>
        </div>
      </div>

      <div className="w-full lg:w-[55%] ">
        <DotLottieReact
          src="https://lottie.host/9c6f9128-1129-4908-80d5-462ef053dbe4/l1cPXVkUAw.lottie"
          loop
          autoplay
          className=" lg:w-[100%]  "
        />
      </div>
    </div>
  );
};

export default React.memo(Header);
