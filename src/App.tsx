import SearchBar from "./components/SearchBar/SearchBar";
import CategoriesList from "./components/CategoriesList/CategoriesList";
import { CategoriesProvider } from "./contexts/RecipesContext";
import RecipeList from "./components/RecipeList/RecipeList";
function App() {
  return (
    <>
      <CategoriesProvider>
        <SearchBar />
        <CategoriesList />
        <RecipeList />
      </CategoriesProvider>
    </>
  );
}

export default App;
