import { useParams } from "react-router-dom";
import { recipes } from "../data/data";

export default function SingleRecipes() {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id.toString() === id);
  if (!recipe) {
    return <div>{`Nessuna Ricetta trovata con id: ${id}`}</div>;
  }
  return (
    <div className="container-single-recipe">
      <div className="box-title-like">
        <h2 className="title-recipe">{recipe.title}</h2>
        <button className="btn-like">Mi Piace</button>
      </div>
      <div className="box-category-time">
        <div className="pillol category">{recipe.category}</div>
        <div className="pillol time">{recipe.time}</div>
      </div>
      <figure className="card_image-recipe">
        <img src={recipe.img} alt={recipe.title} />
      </figure>
    </div>
  );
}
