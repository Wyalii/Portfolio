"use client";
import { motion } from "framer-motion";
import ProjectEelement from "../ProjectElement/ProjectElement";
export default function protfolio() {
  const Projects = [
    {
      ProjectName: "Chat App.",
      ProjectDes:
        "this is async chat application where we have singup, singin,user auth, middleware, and sending messages to other users.",
      TechStack: [
        "/html.png",
        "/css-3.png",
        "/js.png",
        "/Vitejs-logo.svg",
        "/nextauth.png",
        "/socketio.png",
        "/express-js.png",
        "/mongodb.png",
        "/tailwind.png",
      ],
      WebsiteURL: "Not deployed yet.",
      Github: "https://github.com/Wyalii/chat-app",
      Video:
        "/https://www.linkedin.com/posts/gigauri-giorgi27_i-am-here-to-provide-details-on-my-project-activity-7264956592444293120-U2Qd?utm_source=share&utm_medium=member_desktop",
      ProjectImage: "/ProjectScreenshot1.png",
    },

    {
      ProjectName: "Chat App.",
      ProjectDes:
        "this is async chat application where we have singup, singin,user auth, middleware, and sending messages to other users.",
      TechStack: [
        "/html.png",
        "/css-3.png",
        "/js.png",
        "/Vitejs-logo.svg",
        "/nextauth.png",
        "/socketio.png",
        "/express-js.png",
        "/mongodb.png",
        "/tailwind.png",
      ],
      WebsiteURL: "Not deployed yet.",
      Github: "https://github.com/Wyalii/chat-app",
      Video:
        "/https://www.linkedin.com/posts/gigauri-giorgi27_i-am-here-to-provide-details-on-my-project-activity-7264956592444293120-U2Qd?utm_source=share&utm_medium=member_desktop",
      ProjectImage: "/ProjectScreenshot1.png",
    },
  ];
  return (
    <motion.section
      className="mt-20 w-full h-auto flex flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="font-GeistMono text-white font-bold text-lg">
        My Projects.
      </h1>
      <ProjectEelement Projects={Projects}></ProjectEelement>
    </motion.section>
  );
}
