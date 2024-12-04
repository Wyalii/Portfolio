"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import BackendSkillsForm from "../BackendSkills/BackendSkills";
import FrontendSkillsForm from "../Frontend Skills/FrontendSkills";

export default function About() {
  const [frontEndForm, setFrontEndForm] = useState<boolean>(true);
  const [backendEndForm, setBackendEndForm] = useState<boolean>();
  const [buttonText, setButtonText] = useState<string>();

  useEffect(() => {
    if (frontEndForm === true) {
      setButtonText("Backend Set");
    } else {
      setButtonText("Frontend Set");
    }
  }, [frontEndForm, backendEndForm]);

  function HandleChangeForm() {
    if (frontEndForm === true) {
      setFrontEndForm(false);
      setBackendEndForm(true);
    } else {
      setBackendEndForm(false);
      setFrontEndForm(true);
    }
  }
  return (
    <motion.section
      className="w-full flex flex-col items-center justify-center h-[700px] gap-[200px] pt-7 bg-cover mt-[400px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col md:flex-row justify-center items-center gap-28">
        <figure className="bg-blue-600 rounded-full  p-2">
          <Image
            className="rounded-full h-[250px] w-[250px] lg:h-[400px] lg:w-[400px]"
            src="/looks.jpg"
            alt="Giorgi Gigauri portrait"
            width={250}
            height={250}
            sizes="(min-width: 1024px) 400px, 250px"
          ></Image>
        </figure>
        <article className="flex flex-col gap-3 justify-center items-center text-blue-600 font-bold">
          <header className="flex items-center justify-center font-GeistMono text-center text-2xl lg:text-5xl typing-effect">
            <div className="flex gap-6 font-bold items-center justify-center">
              <p className="text-white">Im</p>{" "}
              <p className="text-white">Giorgi Gigauri</p>
            </div>
          </header>
          <header className="font-GeistMono text-center text-2xl lg:text-4xl typing-effect">
            <p> a Frontend Developer.</p>
          </header>
        </article>
      </div>

      <div className="w-full h-auto flex flex-col items-center gap-36">
        <h1 className="text-white text-4xl font-GeistMono font-bold ">
          Skills
        </h1>
        <div>
          {frontEndForm ? (
            <FrontendSkillsForm></FrontendSkillsForm>
          ) : (
            <BackendSkillsForm></BackendSkillsForm>
          )}
        </div>
        <button onClick={HandleChangeForm}>{buttonText}</button>
      </div>
    </motion.section>
  );
}
