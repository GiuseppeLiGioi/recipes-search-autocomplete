import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type LikesContextType = {
  favoriteIds: number[];
  toggleFavorite: (id: number) => void;
};
const LikesContext = createContext<LikesContextType | undefined>(undefined);

export function LikesProvider({ children }: { children: ReactNode }) {
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);
  const toggleFavorite = (id: number): void => {
    if (favoriteIds.includes(id)) {
      setFavoriteIds(favoriteIds.filter((f) => f !== id));
      return;
    }
    setFavoriteIds([...favoriteIds, id]);
  };
  return (
    <LikesContext.Provider value={{ favoriteIds, toggleFavorite }}>
      {children}
    </LikesContext.Provider>
  );
}

export function useLikes() {
  const context = useContext(LikesContext);
  if (!context) {
    throw new Error("useLikes must be used within a LikesProvider");
  }
  return context;
}
