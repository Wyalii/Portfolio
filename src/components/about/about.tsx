"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <motion.section
      className="w-full flex items-center justify-center h-[800px] gap-5 pt-7 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col md:flex-row justify-center items-center gap-28">
        <figure>
          <Image
            className="rounded-full h-[250px] w-[250px] lg:h-[400px] lg:w-[400px]"
            src="/looks.jpg"
            alt="Giorgi Gigauri portrait"
            width={250} // Set the default width
            height={250} // Set the default height
            sizes="(min-width: 1024px) 400px, 250px"
          ></Image>
        </figure>
        <article className="flex flex-col gap-3 justify-center items-center">
          <header className="font-GeistMono text-center text-2xl lg:text-5xl typing-effect">
            Giorgi Gigauri
          </header>
          <h2 className="font-GeistMono text-lg lg:text-2xl">a bit about me</h2>
          <div className="flex flex-col justify-center items-center text-center">
            <p className="font-GeistMono text-sm">
              i&#39;m a 17 years old Frontend developer, currently
            </p>
            <p className="font-GeistMono text-sm ">
              studying a Fullstack development at ItStepAcademy,
            </p>
            <p className="font-GeistMono text-sm">
              i&#39;m highly motivated, disciplined student of
            </p>
            <p className="font-GeistMono text-sm">
              software development and i pride myself in being
            </p>
            <p className="font-GeistMono text-sm">
              really adaptive to new technologies.
            </p>
          </div>
        </article>
      </div>
    </motion.section>
  );
}
