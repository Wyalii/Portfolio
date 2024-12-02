"use client";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

export function VideoList() {
  const projects = [
    {
      id: 1,
      name: "Chat-App",
      git: "https://github.com/Wyalii/chat-app",
      videoUrl: "/ChatApp.mp4",
      websiteUrl: "Project is Not Deployed.",
    },

    {
      id: 2,
      name: "TaskManagementApp",
      git: "https://github.com/Wyalii/TaskManagementApp",
      videoUrl: "Video Coming Soon...",
      websiteUrl: "Website Coming Soon...",
    },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    swipe: true,
    draggable: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full sm:w-[500px] lg:w-full max-w-5xl h-auto p-6 sm:p-12">
      <Slider {...settings}>
        {projects.map((p) => (
          <div key={p.id} className="flex">
            <div className="w-full sm:w-[400px] h-[400px] bg-blue-600 rounded text-white flex flex-col  text-xl text-left font-GeistMono">
              {p.videoUrl === "Video Coming Soon..." ? (
                <video
                  controls
                  className="w-full h-auto"
                  style={{ margin: 0, padding: 0 }}
                  poster="/videoerror.png"
                >
                  <source src={p.videoUrl} type="video/mp4"></source>
                </video>
              ) : (
                <video
                  controls
                  className="w-full h-auto"
                  style={{ margin: 0, padding: 0 }}
                >
                  <source src={p.videoUrl} type="video/mp4"></source>
                </video>
              )}
              <h1 className="font-bold pl-3 ">Project: {p.name}</h1>
              <a
                href={p.git}
                target="_blank"
                className="flex gap-2 justify-start items-center pl-3"
                title={`GitHub Repository: ${p.git}`}
              >
                <p>Github: </p>
                <Image
                  src="/gitlogo.webp"
                  className="h-[40px] w-[40px] rounded-full"
                  alt="Github Logo"
                  width={40}
                  height={40}
                ></Image>
              </a>
              <a
                href={p.websiteUrl}
                target="_blank"
                className="flex flex-col justify-start pl-3"
              >
                <p>WebsiteUrl:</p>
                <p className="text-sm md:text-lg">{p.websiteUrl}</p>
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
