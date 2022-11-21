import "../styles/Home.css"
import SearchBar from "./Header/SearchBar";
import NavBar from "./Header/NavBar";

function Home() {
  return (
    <div className="home">
      <NavBar />
      <SearchBar />
    </div>
  )
}

export default Home;