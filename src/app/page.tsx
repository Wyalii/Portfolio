"use client";
import Header from "@/components/header/header";
import About from "@/components/about/about";
import Protfolio from "@/components/protfolio/protfolio";
import Contacts from "@/components/contacts/Contacts";
import { Description } from "@/components/description/description";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
export default function Home() {
  const headerControls = useAnimation();
  const portfolioControls = useAnimation();
  const footerControls = useAnimation();
  const descriptionControls = useAnimation();

  const [desRef, desInView] = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });
  const [headerRef, headerInView] = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });
  const [portfolioRef, portfolioInView] = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  const [footerRef, footerInView] = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  useEffect(() => {
    if (headerInView) {
      headerControls.start({ opacity: 1, y: 0 });
    } else {
      headerControls.start({ opacity: 0, y: 50 });
    }

    if (portfolioInView) {
      portfolioControls.start({ opacity: 1, x: 0 });
    } else {
      portfolioControls.start({ opacity: 0, x: -100 });
    }

    if (footerInView) {
      footerControls.start({ opacity: 1, y: 0 });
    } else {
      footerControls.start({ opacity: 0, y: 50 });
    }

    if (desInView) {
      descriptionControls.start({ opacity: 1, y: 0 });
    } else {
      descriptionControls.start({ opacity: 0, y: 50 });
    }
  }, [headerInView, portfolioInView, footerInView, desInView]);

  return (
    <main className="w-full h-auto flex flex-col items-center justify-center gap-28">
      <motion.section
        className=" w-auto"
        ref={headerRef}
        initial={{ opacity: 0, y: 50 }}
        animate={headerControls}
        transition={{ duration: 0.6 }}
      >
        <Header></Header>
        <About></About>
      </motion.section>

      <motion.section
        className="w-full h-auto"
        ref={desRef}
        initial={{ opacity: 0, y: 50 }}
        animate={descriptionControls}
        transition={{ duration: 0.6 }}
      >
        <h1 className="font-GeistMono font-bold text-5xl text-center text-blue-600">
          About Me
        </h1>
        <Description></Description>
      </motion.section>

      <motion.section
        className="w-full h-auto"
        ref={portfolioRef}
        initial={{ opacity: 0, x: -100 }}
        animate={portfolioControls}
        transition={{ duration: 0.6 }}
      >
        <Protfolio></Protfolio>
      </motion.section>
      <motion.footer
        className="w-full h-auto"
        ref={footerRef}
        initial={{ opacity: 0, y: 50 }}
        animate={footerControls}
        transition={{ duration: 0.6 }}
      >
        <Contacts></Contacts>
      </motion.footer>
    </main>
  );
}
