import { useCategories } from "../../contexts/RecipesContext";
import { useState } from "react";
import "./category.css";
type CategoryProps = {
  title: string;
};

export default function Category({ title }: CategoryProps) {
  const [isActive, setIsActive] = useState<boolean>(false);
  const { setSelectedCategories } = useCategories();
  const normalizedTitle = title.trim().toLowerCase();
  return (
    <div className="container-category">
      <button
        className={isActive ? "btn-category-active" : "btn-category"}
        onClick={() => {
          setSelectedCategories((prev) =>
            prev.includes(normalizedTitle)
              ? prev.filter((cat) => cat !== normalizedTitle)
              : [...prev, normalizedTitle],
          );
          setIsActive(!isActive);
        }}
      >
        {title}
      </button>
    </div>
  );
}
