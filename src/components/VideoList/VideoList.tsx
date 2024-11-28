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
      websiteUrl: "Not Deployed.",
    },

    {
      id: 2,
      name: "TaskManagementApp",
      git: "https://github.com/Wyalii/chat-app",
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
            <div className="w-full sm:w-[400px] h-[400px] bg-purple-600 rounded text-white flex flex-col justify-center items-center text-xl text-center font-bold">
              <video controls className="w-full object-fill">
                <source src={p.videoUrl} type="video/mp4"></source>
              </video>
              <h1>{p.name}</h1>
              <a>{p.git}</a>
              <a>{p.websiteUrl}</a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
