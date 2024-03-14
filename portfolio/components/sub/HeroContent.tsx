"use client";
import { TypeAnimation } from "react-type-animation";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <p className="cursive text-[24px]">Hi , my name is</p>
          <span className="text-5xl">
            Rengaraj K
          </span>
          <TypeAnimation
      sequence={[
        'I am a FullStack Developer',
        1000, 
        'I am a AI Developer',
        1000,
        'I am a App Developer',
        1000,
        'I am a Frontend Developer',
        1000,
        'I am a Backend Developer',
        1000
      ]}
      wrapper="span"
      speed={50}
      className="opacity-70 text-3xl"
      style={{ fontSize: '', display: 'inline-block' }}
      repeat={Infinity}
    />
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I'm an undergrad student who constantly seeks out innovative solutions to everyday problems using Technology. I've experience in Web Development using different Tech Stacks.

        </motion.p>
        
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >

<Image
className="rounded-full border-4 border-indigo-500"
src="/image2.jpeg"
width={300}
height={300}
alt='skill image'
    />
  
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
