import { useRecipeSearch } from "../../hooks/useRecipesSearch";
import { PiClockCountdownFill } from "react-icons/pi";
import { BiCategoryAlt } from "react-icons/bi";
import { GoArrowUpRight } from "react-icons/go";
import "./recipeList.css";
export default function RecipeList() {
  const { results } = useRecipeSearch();
  return (
    <>
      <div className="container-recipes">
        {results.length > 0 &&
          results.map((r) => (
            <div className="container-recipe" key={r.id}>
              <figure>
                <img src={r.img} className="img-recipe" />
              </figure>
              <h2 className="title-recipe">{r.title}</h2>
              <div className="container-info-recipe">
                <p className="p-info-recipe">
                  <span>
                    <BiCategoryAlt />
                  </span>
                  {r.category}
                </p>
                <p className="p-info-recipe">
                  <span>
                    <PiClockCountdownFill />
                  </span>
                  {r.time}
                </p>
              </div>

              <div className="container-ingredients-recipe">
                <div className="ingredients-list">
                  {Array.isArray(r.ingredients)
                    ? r.ingredients.map((ing, idx) => (
                        <span className="ingredient-item" key={idx}>
                          {ing}
                        </span>
                      ))
                    : r.ingredients}
                </div>
                {r.allergens &&
                  Array.isArray(r.allergens) &&
                  r.allergens.length > 0 && (
                    <div className="allergens-list">
                      <span className="allergens-label">Allergeni:</span>
                      {r.allergens.map((all, idx) => (
                        <span className="allergen-item" key={idx}>
                          {all}
                        </span>
                      ))}
                    </div>
                  )}
              </div>

              <button className="visit-recipe-btn" type="button">
                <span className="visit-recipe-text">Visita ricetta</span>
                <GoArrowUpRight className="visit-recipe-icon" />
              </button>
            </div>
          ))}
      </div>
    </>
  );
}
