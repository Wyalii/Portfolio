"use state";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { ProjectsInterface } from "@/types/ProjectsInterface";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function ProjectElement({
  Projects,
}: {
  Projects: ProjectsInterface[];
}) {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  function HandleMobileClick(index: number) {
    if (activeProject === index) {
      setActiveProject(null);
    } else {
      setActiveProject(index);
    }
  }

  return (
    <motion.section
      className="w-full h-auto flex flex-col items-center gap-3"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 100, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {Projects.map((project, index) => {
        return (
          <div
            key={index}
            className="group relative w-4/5 h-auto sm:w-[500px] sm:h-[300px] bg-[#2A2A2A] cursor-pointer rounded"
            onClick={() => HandleMobileClick(index)}
          >
            <Image
              alt="Project Image"
              height={400}
              width={500}
              src={project.ProjectImage}
              className="h-full w-full object-center rounded"
            ></Image>

            <div
              className={`absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center rounded ${
                activeProject === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <h1 className="text-black text-lg font-bold font-GeistMono">
                Chat Appliaction.
              </h1>
              <Dialog>
                <DialogTrigger>click here for more information</DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{project.ProjectName}</DialogTitle>
                    <span>{project.ProjectDes}</span>
                  </DialogHeader>
                  <DialogHeader>
                    <DialogTitle>Technologies Used:</DialogTitle>
                    <div className="flex items-center justify-start gap-2">
                      {project.TechStack.map((tech, techIndex) => {
                        return (
                          <div key={techIndex}>
                            <Image
                              src={tech}
                              height={40}
                              width={40}
                              alt="tech logo"
                            ></Image>
                          </div>
                        );
                      })}
                    </div>
                  </DialogHeader>
                  <DialogHeader>
                    <DialogTitle>Website Socials:</DialogTitle>
                    <a href={project.WebsiteURL}>
                      Website Url: {project.WebsiteURL}
                    </a>
                    <a
                      href={project.Github}
                      target="_blank"
                      className="flex items-center gap-4 justify-start"
                    >
                      <p>Project Github:</p>
                      <Image
                        src="/github.png"
                        height={40}
                        width={40}
                        alt="github logo"
                      ></Image>
                    </a>
                    <a
                      href={project.Video}
                      target="_blank"
                      className="flex items-center gap-1 justify-start"
                    >
                      <p>Video Showcase:</p>
                      <Image
                        src="/linkedin.png"
                        height={40}
                        width={40}
                        alt="github logo"
                      ></Image>
                    </a>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        );
      })}
    </motion.section>
  );
}
