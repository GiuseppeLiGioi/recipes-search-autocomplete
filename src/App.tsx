import SearchBar from "./components/SearchBar/SearchBar"
import CategoriesList from "./components/CategoriesList/CategoriesList"
import {CategoriesProvider} from "./contexts/RecipesContext"
function App() {

  return (
    <>
    <CategoriesProvider>
      <SearchBar />
      <CategoriesList />
    </CategoriesProvider>
    </>
  )
}

export default App
