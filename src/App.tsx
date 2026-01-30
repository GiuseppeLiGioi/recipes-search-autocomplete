import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CategoriesProvider } from "./contexts/RecipesContext";
import { SearchProvider } from "./contexts/SearchContext";
import HomePage from "./pages/HomePage";
function App() {
  return (
    <BrowserRouter>
      <CategoriesProvider>
        <SearchProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </SearchProvider>
      </CategoriesProvider>
    </BrowserRouter>
  );
}

export default App;
