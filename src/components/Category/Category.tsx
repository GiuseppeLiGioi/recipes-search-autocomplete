import { useCategories } from "../../contexts/RecipesContext";

type CategoryProps = {
title: string
}

export default function Category({title} : CategoryProps){
const {setSelectedCategories} = useCategories()
return(
<div className="container-category">
<button className="btn-category" onClick={() => setSelectedCategories(prev => [...prev, title.trim().toLowerCase()])}>{title}</button>
</div>
)
}