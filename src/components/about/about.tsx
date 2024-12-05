"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function About() {
  return (
    <motion.section className="w-3/4 flex justify-center">
      <div className="w-full max-w-[1000px] h-auto grid grid-cols-5 grid-rows-6 gap-5 justify-center">
        <div className="bg-[#2A2A2A] w-auto rounded flex justify-center items-center gap-6 col-span-3 row-span-2 p-7">
          <Image
            src="/looks.jpg"
            width={150}
            height={150}
            alt="looks Giorgi Gigauri"
            className="rounded-full cursor-pointer"
          ></Image>

          <div className="felex flex-col ">
            <h1 className="font-GeistMono">Im Giorgi Gigauri</h1>
            <h2 className="font-GeistMono text-white">A Frontend Developer.</h2>
          </div>
        </div>
        <div className="bg-[#2A2A2A] rounded w-full h-auto row-span-6 col-start-4 col-span-2">
          <h1 className="text-white font-GeistMono p-3">
            Technologies i have used.
          </h1>
        </div>
        <div className="p-3 bg-fuchsia-800 row-start-3 row-span-2 rounded w-full font-GeistMono text-sm gap-2 text-white flex flex-col xl:flex-row items-center justify-center">
          <p>Located in Georgia,Tbilisi</p>
          <Image
            src="/georgia.png"
            height={40}
            width={40}
            alt="Georgian Flag"
          ></Image>
        </div>
        <a
          className="bg-[#2A2A2A] col-start-2 row-span-2 col-span-1 flex flex-col items-center justify-center gap-4 cursor-pointer"
          href="https://github.com/Wyalii"
          target="_blank"
        >
          <Image
            src="/github.png"
            height={80}
            width={80}
            alt="Github Profile Image"
            className="rounded-full"
          ></Image>
          <p className="text-white font-GeistMono">My Github</p>
        </a>
        <a
          className="bg-[#2A2A2A] col-start-3 row-span-2 col-span-1 flex flex-col items-center justify-center gap-4 cursor-pointer"
          href="https://www.linkedin.com/in/gigauri-giorgi27/"
          target="_blank"
        >
          <Image
            src="/linkedin.png"
            height={80}
            width={80}
            alt="Github Profile Image"
            className="rounded-full"
          ></Image>
          <p className="text-white font-GeistMono">My Linkedin</p>
        </a>
        <div className="bg-[#2A2A2A] col-span-3 row-span-2">my education</div>
      </div>
    </motion.section>
  );
}
