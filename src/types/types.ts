export type Recipe = {
  id: number;
  title: string;
  category: "colazione" | "pranzo" | "cena" | "dessert";
  ingredients: string[];
  img: string;
  time: string;
  description: string;
  allergens: string[];
  instructions: string[];
  nutrition: Nutrition;
  tips: string[];
  variants: string[];
  relatedIds: number[];
};

export type Nutrition = {
  energyKcal: number;
  carbohydratesG: number;
  proteinsG: number;
  fatsG: number;
};
