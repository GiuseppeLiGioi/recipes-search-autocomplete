import { useSearch } from "../../contexts/SearchContext";
import { IoSearchOutline } from "react-icons/io5";
import "./searchBar.css";

export default function SearchBar() {
  const { query, setQuery } = useSearch();
  return (
    <div className="container-searchbar">
      <div className="searchbar-wrap">
        <input
          className="searchbar"
          type="text"
          placeholder="Cerca un ricetta..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <span className="searchbar-icon">
          <IoSearchOutline width={24} height={24} />
        </span>
      </div>
    </div>
  );
}
