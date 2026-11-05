import { useState } from "react";
import "./App.css";
import Categories from "./components/Categories";
import List from "./components/List";
import { categories, useCategories } from "./hooks/useCategories";

export default function App() {
  const [category, setCategory] = useState("Fiction");
  return (
    <>
      <Categories currentCategory={category} setCurrentCategory={setCategory} />
      <List category={category} />
    </>
  );
}
