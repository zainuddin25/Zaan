import Header from "../components/header";
import SideMenu from "../components/sidemenu";
import Content from "./content";

export default function Home() {
  return (
    <>
      <Header />
      <div className="relative z-10 flex items-center w-screen h-screen">
        <Content />
        <div className="absolute bottom-4 left-4">
          <SideMenu />
        </div>
      </div>
    </>
  )
}
