import React from "react";
import profilepic from "../assets/profilepic.png";
import notebookL from "../assets/notebookL.png";
import notebookM from "../assets/notebookM.png";
import mobileR from "../assets/mobileR.png";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className="relative grid sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8">
      <img src={notebookL} alt="" className="absolute z-[-1] w-[400px] bottom-0 left-[-170px]" />
      <img src={notebookM} alt="" className="absolute z-[-1] w-[400px] bottom-0 left-[320px]" />
      <img src={mobileR} alt="" className="absolute z-[-1] w-[200px] bottom-[500px] left-[450px]" />

      <div className="glass px-5 col-span-2 px-5 my-auto">
        <h1 className="text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold">
            <p className="mb-4 text-gray-500">I`m a</p>
          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              1000,
              "Web Designer",
              1000,
              "Problem Solver",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <p className="font-bold my-6 sm: text-lg lg:text-xl max-w-[200px] md:max-w-[600px] ml-1 text-gray-300">My name is Hassan ELDash and I am a passionate Full-Stack Software Engineer and a dynamic Mobile Developer (Native/Cross-Platform) with Master’s degree in Engineering from Egypt</p>
      </div>


      <div className="absolute bottom-0 right-0 w-[200px] lg:w-[600px] " >
        <img src={profilepic} alt="" />
      </div>
    </div>
  );
};

export default Hero;
