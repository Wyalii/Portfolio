import Image from "next/image";

export function MySocial() {
  return (
    <div className="flex flex-col text-white gap-2 bg-purple-600 p-3 rounded w-full md:w-[500px] items-center h-[240px]">
      <h1 className="lg:text-lg font-GeistMono">My Email:</h1>
      <p className="font-GeistMono">gigaurigiorgi2727@gmail.com</p>
      <a
        href="https://www.linkedin.com/in/gigauri-giorgi27/"
        target="_blank"
        title="https://www.linkedin.com/in/gigauri-giorgi27/"
        className="flex items-center gap-2 font-GeistMono lg:text-lg"
      >
        My Linkedin{" "}
        <Image
          src={"/linkedinlogo.webp"}
          alt="Github Logo"
          height={35}
          width={35}
          className=""
        ></Image>
      </a>

      <a
        href="https://github.com/Wyalii"
        target="_blank"
        title="https://github.com/Wyalii"
        className="flex items-center gap-4 font-GeistMono lg:text-lg"
      >
        My Github:{" "}
        <Image
          src={"/gitlogo.webp"}
          alt="Github Logo"
          height={35}
          width={35}
          className="rounded-full"
        ></Image>
      </a>
    </div>
  );
}
