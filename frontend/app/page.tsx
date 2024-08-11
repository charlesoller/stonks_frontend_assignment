import Image from "next/image";
import TopNav from "./components/TopNav";
import SideNav from "./components/SideNav";
import MainContent from "./components/MainContent";
import Chat from "./components/Chat/Chat";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-screen h-screen bg-blue-200">
      <TopNav />
      <div className="flex w-full h-full bg-red-100">
        <SideNav />
        <MainContent />
        <Chat />
      </div>
    </main>
  );
}
