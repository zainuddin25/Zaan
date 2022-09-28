import Header from "../components/header";
import SideMenu from "../components/sidemenu";
import Content from "./content";

export default function Home() {
  return (
    <>
      <Header />
      <div className="relative z-10 flex items-center w-screen h-screen">
        <Content />
        <div className="absolute bottom-8 left-10">
          <SideMenu />
        </div>
      </div>
    </>
  )
}
