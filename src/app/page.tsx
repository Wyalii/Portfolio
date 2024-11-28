import Header from "@/components/header/header";
import About from "@/components/about/about";
import Protfolio from "@/components/protfolio/protfolio";
import Contacts from "@/components/contacts/Contacts";
export default function Home() {
  return (
    <main className="w-full h-auto flex flex-col items-center gap-28">
      <section className=" w-auto h-[1000px] bg-[url('/bg1.jpg')] bg-cover">
        <Header></Header>
        <About></About>
      </section>
      <section className="w-full h-auto">
        <Protfolio></Protfolio>
      </section>
      <footer>
        <Contacts></Contacts>
      </footer>
    </main>
  );
}
