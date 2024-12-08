import { ContactMe } from "../ContactMe/ContactMe";

export default function Contacts() {
  return (
    <div className="w-full flex flex-col h-auto justify-center items-center gap-7 mb-5">
      <h1 className="font-GeistMono text-6xl text-white font-bold">
        Contact Me
      </h1>
      <div className="flex flex-col lg:flex-row gap-6 w-full justify-center items-center h-[300px]">
        <ContactMe></ContactMe>
      </div>
    </div>
  );
}
