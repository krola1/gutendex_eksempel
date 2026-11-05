import { categories } from "../hooks/useCategories";

export default function Categories({ setCurrentCategory, currentCategory }) {
  return (
    <>
      <select
        value={currentCategory}
        onChange={(e) => setCurrentCategory(e.target.value)}
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </>
  );
}
