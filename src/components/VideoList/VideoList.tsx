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
          <div key={p.id} className="flex items-center justify-center">
            <div className="w-full sm:w-[400px] h-[400px] bg-purple-600 rounded text-white flex flex-col justify-start items-center text-xl font-bold text-center">
              {p.videoUrl === "Video Coming Soon..." ? (
                <div className="flex justify-center items-center">
                  <p>{p.videoUrl}</p>
                  <img
                    src="/corrupted video file.png"
                    className="h-[60px] w-[60px]"
                  ></img>
                </div>
              ) : (
                <video
                  controls
                  className="w-full h-auto"
                  style={{ margin: 0, padding: 0 }}
                >
                  <source src={p.videoUrl} type="video/mp4"></source>
                </video>
              )}
              <h1>Project: {p.name}</h1>
              <a
                href={p.git}
                target="_blank"
                className="flex gap-2 items-center justify-center"
                title={`GitHub Repository: ${p.git}`}
              >
                <p>Github: </p>
                <img
                  src="gitlogo.webp"
                  className="h-[40px] w-[40px] rounded-full"
                  alt="Github Logo"
                ></img>
              </a>
              <a
                href={p.websiteUrl}
                target="_blank"
                className="flex flex-col items-center justify-center"
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
