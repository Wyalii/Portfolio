"use client";
import Header from "@/components/header/header";
import About from "@/components/about/about";
import Protfolio from "@/components/protfolio/protfolio";
import Contacts from "@/components/contacts/Contacts";
import Image from "next/image";
import { useFormContext } from "@/types/FormContextType";

export default function Home() {
  const { aboutPage, projectPage, contactPage } = useFormContext();
  return (
    <main className="w-full h-full flex flex-col items-start ">
      <Header></Header>
      {aboutPage === false && projectPage === false && contactPage === false ? (
        <div className="mt-40 text-white text-5xl text-center w-full font-GeistMono flex flex-col items-center gap-9">
          <p>Welcome to my Portfolio website.</p>
          <Image
            src="/bocchi1.gif"
            alt="bocchi1 gif"
            height={500}
            width={500}
            className="rounded"
          ></Image>
        </div>
      ) : null}

      {aboutPage ? <About></About> : null}
      {projectPage ? <Protfolio></Protfolio> : null}
      {contactPage ? <Contacts></Contacts> : null}
    </main>
  );
}
