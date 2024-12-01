import { ContactMe } from "../ContactMe/ContactMe";
import { MySocial } from "../MySocial/MySocial";

export default function Contacts() {
  return (
    <div className="w-full flex flex-col h-auto justify-center items-center gap-5 mb-5">
      <h1 className="font-GeistMono text-4xl text-white">Contacts:</h1>
      <div className="flex flex-col lg:flex-row gap-6 w-full justify-center items-center">
        <ContactMe></ContactMe>
        <MySocial></MySocial>
      </div>
    </div>
  );
}
