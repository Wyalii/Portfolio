import Image from "next/image";

export default function FrontendSkillsForm() {
  return (
    <div className="w-full h-auto font-GeistMono flex flex-col justify-center gap-14">
      <h1 className="text-blue-600 font-bold text-center text-2xl">
        Fronted Skills Set
      </h1>
      <section className="flex">
        <div className="flex flex-col items-center gap-3">
          <h2 className="text-white font-GeistMono">HTML</h2>
          <Image
            src="/html.png"
            alt="HTML image"
            height={50}
            width={50}
          ></Image>
        </div>
      </section>
    </div>
  );
}
