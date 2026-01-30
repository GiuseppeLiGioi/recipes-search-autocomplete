import SearchBar from ".././components/SearchBar/SearchBar";
import CategoriesList from ".././components/CategoriesList/CategoriesList";
import RecipeList from ".././components/RecipeList/RecipeList";

export default function HomePage() {
  return (
    <>
      <SearchBar />
      <CategoriesList />
      <RecipeList />
    </>
  );
}
