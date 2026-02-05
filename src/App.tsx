import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CategoriesProvider } from "./contexts/RecipesContext";
import { SearchProvider } from "./contexts/SearchContext";
import { LikesProvider } from "./contexts/LikesContext";
import HomePage from "./pages/HomePage";
import RecipePage from "./pages/RecipePage";
function App() {
  return (
    <BrowserRouter>
      <LikesProvider>
        <CategoriesProvider>
          <SearchProvider>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/recipes/:id" element={<RecipePage />} />
            </Routes>
          </SearchProvider>
        </CategoriesProvider>
      </LikesProvider>
    </BrowserRouter>
  );
}

export default App;
