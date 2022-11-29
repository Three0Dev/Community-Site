import SearchBar from "./Header/SearchBar";
import MainBody from "./Body/MainBody";
import FilterBar from "./Header/FilterBar";

function DiscoverPage() {
  return (
    <div>
      <SearchBar />
      <FilterBar />
      <MainBody />
    </div>
  )
}

export default DiscoverPage;