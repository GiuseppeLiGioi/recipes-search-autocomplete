import { useCategories } from "../../contexts/RecipesContext";

type CategoryProps = {
  title: string;
};

export default function Category({ title }: CategoryProps) {
  const { setSelectedCategories } = useCategories();
  const normalizedTitle = title.trim().toLowerCase();
  return (
    <div className="container-category">
      <button
        className="btn-category"
        onClick={() =>
          setSelectedCategories((prev) =>
            prev.includes(normalizedTitle)
              ? prev.filter((cat) => cat !== normalizedTitle)
              : [...prev, normalizedTitle],
          )
        }
      >
        {title}
      </button>
    </div>
  );
}
