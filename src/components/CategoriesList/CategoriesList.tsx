import Category from "../Category/Category";
import { useCategories } from "../../contexts/RecipesContext";
import { GoSun } from "react-icons/go";
import { PiForkKnife } from "react-icons/pi";
import { TbMeat } from "react-icons/tb";
import { LuDessert } from "react-icons/lu";
import "./categoriesList.css";
export default function CategoriesList() {
  const { selectedCategories } = useCategories();
  console.log(selectedCategories);
  return (
    <div className="container-categories">
      <Category title="Colazione" icon={<GoSun size={12} />} />
      <Category title="Pranzo" icon={<PiForkKnife size={12} />} />
      <Category title="Cena" icon={<TbMeat size={12} />} />
      <Category title="Dessert" icon={<LuDessert size={12} />} />
    </div>
  );
}
