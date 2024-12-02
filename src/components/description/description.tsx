import Image from "next/image";
export function Description() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-20 mt-[300px]">
      <div className="flex flex-col text-white gap-2">
        <p className="font-GeistMono text-sm">
          i&#39;m a 17 years old Frontend developer, currently
        </p>
        <p className="font-GeistMono text-sm ">
          studying a Fullstack development at ItStepAcademy,
        </p>
        <p className="font-GeistMono text-sm">
          i&#39;m highly motivated, disciplined student of
        </p>
        <p className="font-GeistMono text-sm">
          software development and i pride myself in being
        </p>
        <p className="font-GeistMono text-sm">
          really adaptive to new technologies.
        </p>
      </div>

      <Image
        src="/looks2.jpg"
        height={400}
        width={400}
        alt="Looks picture"
        className="rounded border-[10px] border-blue-600 w-[350px] h-[350px] lg:w-[400px] lg:h-[400px] "
      ></Image>
    </div>
  );
}
