import { useRecipeSearch } from "../../hooks/useRecipesSearch";
import "./searchBar.css";

export default function SearchBar() {
  const { query, setQuery } = useRecipeSearch();
  return (
    <div className="container-searchbar">
      <input
        className="searchbar"
        type="text"
        placeholder="Cerca un ricetta..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
