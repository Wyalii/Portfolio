"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      className="w-full flex items-center justify-center h-[600px] gap-5 pt-7 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col md:flex-row justify-center items-center gap-10">
        <div className='bg-[url("/looks.jpg")] bg-contain bg-no-repeat rounded-full h-[250px] w-[250px] lg:h-[400px] lg:w-[400px]'></div>
        <div className="flex flex-col gap-3 justify-center items-center">
          <div className="font-GeistMono text-center text-2xl lg:text-5xl typing-effect">
            Giorgi Gigauri
          </div>
          <div className="font-GeistMono text-lg lg:text-2xl">
            a bit about me
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <div className="font-GeistMono text-sm">
              im a 17 years old Frontend developer, currently
            </div>
            <div className="font-GeistMono text-sm ">
              studing a Fullstack development at ItStepAcademy,
            </div>
            <div className="font-GeistMono text-sm">
              im highly motivated, disciplined student of
            </div>
            <div className="font-GeistMono text-sm">
              software development and i pride myself in being
            </div>
            <div className="font-GeistMono text-sm">
              really adaptive to new technologies.
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
