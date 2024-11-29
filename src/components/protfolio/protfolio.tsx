"use client";
import { VideoList } from "../VideoList/VideoList";
export default function Protfolio() {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center gap-32 pt-7 pb-7">
      <header className="font-GeistMono text-4xl text-white">Portfolio</header>
      <main className="w-full sm:w-[500px] lg:w-full max-w-5xl h-auto p-6 sm:p-12">
        <VideoList></VideoList>
      </main>
    </div>
  );
}
