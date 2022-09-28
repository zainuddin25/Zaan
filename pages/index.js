import Header from "../components/header";
import SideMenu from "../components/sidemenu";
import Content from "./content";

export default function Home() {
  return (
    <>
      <Header />
      <div className="relative z-10 w-screen h-screen py-36">
        <Content />
      </div>
    </>
  )
}
