"use client";
import { VideoList } from "../VideoList/VideoList";
export default function Protfolio() {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center gap-32 pt-7 pb-7">
      <div className="font-GeistMono text-4xl text-white">Portfolio</div>
      <VideoList></VideoList>
    </div>
  );
}
