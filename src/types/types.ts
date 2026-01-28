export type Recipe = {
    id: number,
    title: string,
    category: string,
    ingredients: string[],
    img: string,
    time: string,
    description: string,
    allergens: string[],
    instructions: string[]
}
