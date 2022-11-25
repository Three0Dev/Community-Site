import "../styles/Home.css"
import SearchBar from "./Header/SearchBar";
import NavBar from "./Header/NavBar";
import ProjectCard from "./Body/ProjectCard";
import MainBody from "./Body/MainBody";
function Home() {
  return (
    <div className="home">
      <NavBar />
      <SearchBar />
    </div>
  )
}

export default Home;