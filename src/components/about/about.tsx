"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function About() {
  return (
    <motion.section
      className="w-3/4 flex justify-center"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full max-w-[1000px] h-auto grid  grid-cols-5 lg:grid-rows-6 gap-5 justify-center mb-4">
        <motion.div
          className="bg-[#2A2A2A] w-auto rounded flex justify-center items-center gap-6 col-span-6 lg:col-span-3 lg:row-span-2 p-7 text-center"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/looks.jpg"
            width={150}
            height={150}
            alt="looks Giorgi Gigauri"
            className="rounded-full cursor-pointer w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] lg:w-[150px] lg:h-[150px]"
          ></Image>

          <div className="felex flex-col ">
            <h1 className="font-GeistMono text-center">Im Giorgi Gigauri</h1>
            <h2 className="font-GeistMono text-white text-center">
              A Frontend Developer.
            </h2>
          </div>
        </motion.div>
        <motion.div
          className="bg-fuchsia-800 rounded w-full h-auto row-start-2 col-span-6 lg:row-span-6 lg:col-start-4 lg:col-span-2 flex flex-col items-center justify-center gap-6 p-6"
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-white font-GeistMono p-3 text-center">
            Technologies i have used.
          </h1>
          <div className="flex flex-col items-center justify-center w-ful gap-6">
            <div className="flex justify-center items-center w-full gap-3">
              <div>
                <Image
                  src="/html.png"
                  alt="html logo"
                  height={40}
                  width={40}
                ></Image>
              </div>

              <Image
                src="/css-3.png"
                alt="css logo"
                height={40}
                width={40}
              ></Image>

              <Image
                src="/js.png"
                alt="javascript logo"
                height={40}
                width={40}
              ></Image>
            </div>

            <div className="flex justify-center items-center w-full gap-3">
              <Image
                src="/typescript.png"
                alt="typescript logo"
                height={40}
                width={40}
              ></Image>

              <Image
                src="/science.png"
                alt="react logo"
                height={40}
                width={40}
              ></Image>

              <Image
                src="/next-js.svg"
                alt="next.js logo"
                height={40}
                width={40}
              ></Image>
            </div>

            <div className="flex justify-center items-center w-full gap-3">
              <Image
                src="/sql-server.png"
                alt="sql server logo"
                height={40}
                width={40}
              ></Image>

              <Image
                src="/mongodb.png"
                alt="mongodb logo"
                height={40}
                width={40}
              ></Image>

              <Image
                src="/tailwind.png"
                alt="tailwind logo"
                height={40}
                width={40}
                className="rounded-full"
              ></Image>
            </div>
          </div>

          <h1 className="text-white font-GeistMono p-3 text-center">
            Technologies i specialize in.
          </h1>
          <div className="flex flex-col items-center justify-center w-ful gap-6">
            <div className="flex justify-center items-center w-full gap-3">
              <Image
                src="/html.png"
                alt="html logo"
                height={40}
                width={40}
              ></Image>

              <Image
                src="/css-3.png"
                alt="css logo"
                height={40}
                width={40}
              ></Image>

              <Image
                src="/js.png"
                alt="javascript logo"
                height={40}
                width={40}
              ></Image>
            </div>

            <div className="flex justify-center items-center w-full gap-3">
              <Image
                src="/typescript.png"
                alt="typescript logo"
                height={40}
                width={40}
              ></Image>

              <Image
                src="/science.png"
                alt="react logo"
                height={40}
                width={40}
              ></Image>

              <Image
                src="/next-js.svg"
                alt="next.js logo"
                height={40}
                width={40}
              ></Image>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="p-3 bg-fuchsia-800 row-start-6 col-span-6 lg:row-start-3 lg:col-span-1 lg:row-span-2 rounded w-full font-GeistMono text-sm gap-2 text-white flex flex-col xl:flex-row items-center justify-center"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-center">Located in Georgia,Tbilisi</p>
          <Image
            src="/georgia.png"
            height={40}
            width={40}
            alt="Georgian Flag"
          ></Image>
        </motion.div>
        <motion.a
          className="bg-[#2A2A2A] p-4 col-span-6 lg:row-start-3 lg:col-start-2 lg:row-span-2 lg:col-span-1 flex flex-col items-center justify-center gap-4 cursor-pointer"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
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
          <p className="text-white font-GeistMono text-center">My Github</p>
        </motion.a>
        <motion.a
          className="bg-[#2A2A2A] p-4 col-span-6 lg:row-start-3 lg:col-start-3 lg:row-span-2 lg:col-span-1 flex flex-col items-center justify-center gap-4 cursor-pointer"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
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
          <p className="text-white font-GeistMono text-center">My Linkedin</p>
        </motion.a>
        <motion.div
          className="bg-[#2A2A2A] p-4 row-start-3 col-span-6 lg:col-span-3 lg:row-span-2 lg:row-start-5 flex flex-col items-center justify-center gap-7"
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-white font-GeistMono">My Education.</h1>
          <div className="">
            <a
              className="text-white font-GeistMono cursor-pointer text-center"
              href="https://en.wikipedia.org/wiki/Tbilisi"
              target="_blank"
            >
              12 Grade Highscool Student in Tbiisi, Georgia.
            </a>
            <hr></hr>
            <a
              className="text-white font-GeistMono cursor-pointer text-center"
              href="https://ge.itstep.org/"
              target="_blank"
            >
              Studying Fullstack Development at ItStepAcademy.
            </a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
