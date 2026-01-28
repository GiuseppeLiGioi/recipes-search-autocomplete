import { createContext, useContext, useState, ReactNode } from "react";

type CategoriesContextType = {
	selectedCategories: string[];
	setSelectedCategories: React.Dispatch<React.SetStateAction<string[]>>;
};

const CategoriesContext = createContext<CategoriesContextType | undefined>(undefined);

export function CategoriesProvider({ children }: { children: ReactNode }) {
	const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
	return (
		<CategoriesContext.Provider value={{ selectedCategories, setSelectedCategories }}>
			{children}
		</CategoriesContext.Provider>
	);
}

export function useCategories() {
	const context = useContext(CategoriesContext);
	if (!context) {
		throw new Error("useCategories must be used within a CategoriesProvider");
	}
	return context;
}