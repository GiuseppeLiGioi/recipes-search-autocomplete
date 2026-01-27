import { recipes } from "../data/data";
import type {Recipe}  from "../types/types";
import { useState, useEffect } from "react";

export function useRecipeSearch(){
const [query, setQuery] = useState<string>("")
const [results, setResults] = useState<Recipe[]>(recipes)

return {
    query, results, setQuery
}
}