import { recipes } from "../data/data";
import type {Recipe}  from "../types/types";
import { useState, useEffect } from "react";
import { useCategories } from "../contexts/RecipesContext";

export function useRecipeSearch(){
const [query, setQuery] = useState<string>("")
const {selectedCategories, setSelectedCategories }= useCategories()
const [results, setResults] = useState<Recipe[]>(recipes)

useEffect(() => {
getFilteredRecipes(query, selectedCategories, recipes)
}, [query, selectedCategories])


const getFilteredRecipes = (q: string, categories: string[], recipes: Recipe[]) => {
if(categories.length === 0 && !q) return;
if(categories.length === 0 && q){
setResults(filterByQuery(q, recipes))
}else{
let filtered: Recipe[] = filterByCategories(categories, recipes)
setResults(filterByQuery(q, filtered))
}
}

const filterByQuery = (q: string, recipes: Recipe[]) : Recipe[]=> {
if(!q) return recipes;
const filtered : Recipe[] = recipes.filter((r) => r.title.toLowerCase().trim().includes(q.trim().toLowerCase()))
return filtered
}

const filterByCategories = (categories: string[], recipes: Recipe[]) : Recipe[] => {
    if(categories.length === 0) return recipes;
    const filtered = recipes.filter((r) => categories.includes(r.category.trim().toLowerCase()))
    return filtered 
}

return {
    query, results, setQuery, getFilteredRecipes, setSelectedCategories, selectedCategories
}
}