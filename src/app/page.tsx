import Header from "@/components/header/header";
import About from "@/components/about/about"
import Protfolio from "@/components/protfolio/protfolio";
import Contacts from "@/components/contacts/Contacts";
export default function Home() {
  return (
    <div className="h-full flex flex-col items-center">
       <Header></Header>
       <About></About>
       <Protfolio></Protfolio>
       <Contacts></Contacts>
    </div>
  );
}
