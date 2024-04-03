import React from "react";
import notebookM from "../assets/notebookM.png";
import mobileR from "../assets/mobileR.png";

const About = () => {
  return (
    <div className="text-white gap-4 mx-auto my-12 grid max-w-[1200px] sm:grid-cols-3" id="about">
      <div className="sm:col-span-2 glass sm:py-16 my-auto text-left p-4">
        <div className=" mx-auto max-w-[80%]">
          <h2 className="text-3xl font-bold mb-4">Hello There</h2>
          <p className="text-gray-200">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum perferendis consectetur cumque sit eius aliquid reiciendis doloremque accusantium quidem nisi fuga porro mollitia vel accusamus eaque totam optio, modi quis?</p>
        </div>
      </div>

      <div className="hidden md:block sm:col-span-1 glass overflow-hidden ">
        <img src={notebookM} alt="" className="w-[200px] md:w-[500px] absolute"/>
      </div>

      <div className="hidden md:block sm:col-span-1 glass overflow-hidden">
        <img src={mobileR} alt="" className="w-[200px] md:w-[500px] absolute"/>
      </div>

      <div className="md:hidden relative overflow-hidden h-[200px] glass">
        <img src={notebookM} alt="" className="absolute w-[400px]"/>
        <img src={mobileR} alt="" className="w-[200px] right-0 absolute"/>
      </div>
      
      <div className="sm:col-span-2 glass sm:py-16 my-auto text-left p-4">
        <div className=" mx-auto max-w-[80%]">
          <h2 className="text-3xl font-bold mb-4">Hello There</h2>
          <p className="text-gray-200">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum perferendis consectetur cumque sit eius aliquid reiciendis doloremque accusantium quidem nisi fuga porro mollitia vel accusamus eaque totam optio, modi quis?</p>
        </div>
      </div>
    </div>
  );
};

export default About;
