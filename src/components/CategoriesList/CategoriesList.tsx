import Category from "../Category/Category"
import { useCategories } from "../../contexts/RecipesContext";
export default function CategoriesList(){
    const {selectedCategories} = useCategories()
    console.log(selectedCategories)
    return(
       <div className="container-categories">
        <Category title="Colazione"/>
        <Category title="Pranzo"/>
        <Category title="Cena"/>
        <Category title="Dessert"/>

       </div>
    )
}