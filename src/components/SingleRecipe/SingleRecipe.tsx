import { useParams } from "react-router-dom";
import { recipes } from "../../data/data";
import { FaRegHeart } from "react-icons/fa";
import { TbCategory2 } from "react-icons/tb";
import { PiClockCountdownFill } from "react-icons/pi";
import { BiCategory } from "react-icons/bi";
import { CiCircleCheck } from "react-icons/ci";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GiForkKnifeSpoon } from "react-icons/gi";
import SharedButtons from "../SharedButtons/SharedButtons";
import "./singleRecipe.css";
export default function SingleRecipes() {
  const [doneSteps, setDoneSteps] = useState<boolean[]>([]);

  const toggleStep = (index: number) => {
    setDoneSteps((prev) => prev.map((v, i) => (i === index ? !v : v)));
  };

  const { id } = useParams();
  const navigate = useNavigate();
  const currentId = Number(id);
  const sharedUrl: string = window.location.href;

  const recipe = recipes.find((r) => r.id === currentId);

  const relatedRecipes = recipe
    ? recipes.filter((r) => recipe.relatedIds.includes(r.id))
    : [];

  if (!recipe) {
    return <div>{`Nessuna Ricetta trovata con id: ${id}`}</div>;
  }

  useEffect(() => {
    if (!recipe) return;
    setDoneSteps(recipe.instructions.map(() => false));
  }, [recipe]);

  return (
    <div className="container-single-recipe">
      <div className="box-title-like">
        <h2 className="title-recipe">{recipe.title}</h2>
        <button className="btn-like">
          <FaRegHeart />
          <span>Mi Piace</span>
        </button>
      </div>
      <div className="box-category-time">
        <div className="pillol category">
          <TbCategory2 />
          <span>{recipe.category}</span>
        </div>
        <div className="pillol time">
          <PiClockCountdownFill />
          <span>{recipe.time}</span>
        </div>
      </div>
      <figure className="card_image-recipe">
        <img src={recipe.img} alt={recipe.title} />
      </figure>

      <div className="container-recipe-left">
        <h4>
          <BiCategory />
          <span>{recipe.time}</span>
        </h4>
        <div className="container-recipe-ingredients">
          <h5 className="semititle-recipe">Ingredienti</h5>
          {recipe.ingredients.length > 0 &&
            Array.isArray(recipe.ingredients) &&
            recipe.ingredients.map((r, index) => (
              <div className="single-ingredient" key={index}>
                {r}
              </div>
            ))}

          {recipe.allergens.length > 0 &&
            Array.isArray(recipe.allergens) &&
            recipe.allergens.map((r, index) => (
              <div className="single-ingredient allergen" key={index}>
                {r}
              </div>
            ))}
        </div>

        <h5 className="semititle-recipe">Istruzioni</h5>
        <ul className="container-recipe-instructions">
          {recipe.instructions.map((r, index) => (
            <li className="single-instruction" key={index}>
              <button
                className={doneSteps[index] ? "btn-done-active" : "btn-done"}
                onClick={() => toggleStep(index)}
              >
                <CiCircleCheck />
              </button>
              <span>{r}</span>
            </li>
          ))}
        </ul>

        <h5 className="semititle-recipe">Ricette Correlate</h5>
        <div className="container-related-recipes">
          {relatedRecipes &&
            relatedRecipes.length > 0 &&
            relatedRecipes.map((r, index) => (
              <div
                className="container-card-related"
                key={index}
                onClick={() => navigate(`/recipes/${r.id}`)}
              >
                <figure className="figure-related">
                  <img src={r.img} alt={r.title} />
                </figure>
                <h5 className="title-related">{r.title}</h5>
                <div className="box-info-related">
                  <p className="related-category">
                    <BiCategory />
                    <span>{r.category}</span>
                  </p>
                  <p className="related-time">
                    <PiClockCountdownFill />
                    <span>{r.time}</span>
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="container-recipe-right">
        <div className="container-recipe-nutritional">
          <h5 className="title-nutritional">
            <GiForkKnifeSpoon />
            <span>Informazioni Nutrizionali</span>
          </h5>
          <div className="line-divider"></div>
          {recipe.nutrition && (
            <div className="values-box-recipe">
              <p className="nutritional-item">
                <span className="span-nutritional">Ener. Kcal</span>
                {recipe.nutrition.energyKcal}
              </p>
              <p className="nutritional-item">
                <span className="span-nutritional">Carboidrati</span>
                {recipe.nutrition.carbohydratesG}
              </p>
              <p className="nutritional-item">
                <span className="span-nutritional">Proteine</span>
                {recipe.nutrition.proteinsG}
              </p>
              <p className="nutritional-item">
                <span className="span-nutritional">Grassi</span>
                {recipe.nutrition.fatsG}
              </p>
            </div>
          )}
          <div className="line-divider"></div>
          <div className="container-share">
            <h5 className="title-share-recipe">Condividi questa ricetta:</h5>
            <SharedButtons url={sharedUrl} title={recipe.title} />
          </div>
        </div>
      </div>
    </div>
  );
}
