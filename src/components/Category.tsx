import { useRecipeSearch } from "../hooks/useRecipesSearch"

type CategoryProps = {
title: string
}

export default function Category({title} : CategoryProps){
const {setSelectedCategories} = useRecipeSearch()
return(
<div className="container-category">
<button className="btn-category" onClick={() => setSelectedCategories(prev => [...prev, title.trim().toLowerCase()])}>{title}</button>
</div>
)
}