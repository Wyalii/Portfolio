import React, { useContext } from "react";
import { useEffect } from "react";
import { useFormContext } from "@/types/FormContextType";
export default function Header() {
  const {
    setContactPage,
    setProjectPage,
    setAboutPage,
    aboutPage,
    projectPage,
    contactPage,
  } = useFormContext();

  function FormSwitch(e: React.MouseEvent<HTMLButtonElement>) {
    const buttons = e.currentTarget.parentElement?.querySelectorAll("button");

    if (buttons) {
      buttons.forEach((btn) => {
        const button = btn as HTMLButtonElement;
        button.style.backgroundColor = "";
      });
    }
    const button = e.target as HTMLButtonElement;
    button.style.backgroundColor = "gray";
    if (button.value === "Home") {
      setProjectPage(false);
      setContactPage(false);
      setAboutPage(true);
    } else if (button.value === "Projects") {
      setProjectPage(true);
      setContactPage(false);
      setAboutPage(false);
    } else if (button.value === "Contact") {
      setProjectPage(false);
      setContactPage(true);
      setAboutPage(false);
    }
  }
  return (
    <header className="w-full bg-transparent h-[60px] flex items-center justify-center gap-32 font-GeistMono text-white mt-8">
      <section className="bg-zinc-800 flex items-center justify-center gap-7 p-4 rounded">
        <button
          onClick={(e) => FormSwitch(e)}
          value="Home"
          className="p-2 rounded transition-colors duration-300 ease-in-out font-GeistMono"
        >
          About
        </button>
        <button
          onClick={(e) => FormSwitch(e)}
          value="Projects"
          className="p-2 rounded transition-colors duration-300 ease-in-out font-GeistMono"
        >
          Projects
        </button>
        <button
          onClick={(e) => FormSwitch(e)}
          value="Contact"
          className="p-2 rounded transition-colors duration-300 ease-in-out font-GeistMono"
        >
          Contact
        </button>
      </section>
    </header>
  );
}
