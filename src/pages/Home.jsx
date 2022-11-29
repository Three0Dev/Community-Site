import "../styles/Home.css"
import NavBar from "./Header/NavBar";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <NavBar />
      <Outlet />
    </div>
  )
}

export default Home;