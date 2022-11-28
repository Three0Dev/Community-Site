import "../styles/Home.css"
import SearchBar from "./Header/SearchBar";
import NavBar from "./Header/NavBar";
import ProjectCard from "./Body/ProjectCard";
import MainBody from "./Body/MainBody";
import FilterBar from "./Header/FilterBar";

function Home() {
  return (
    <div className="home">
      <NavBar />
      <SearchBar />
      <FilterBar />
    </div>
  )
}

export default Home;