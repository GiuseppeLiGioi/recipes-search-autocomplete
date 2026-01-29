import SearchBar from "./components/SearchBar/SearchBar";
import CategoriesList from "./components/CategoriesList/CategoriesList";
import { CategoriesProvider } from "./contexts/RecipesContext";
import { SearchProvider } from "./contexts/SearchContext";
import RecipeList from "./components/RecipeList/RecipeList";
function App() {
  return (
    <>
      <CategoriesProvider>
        <SearchProvider>
          <SearchBar />
          <CategoriesList />
          <RecipeList />
        </SearchProvider>
      </CategoriesProvider>
    </>
  );
}

export default App;
