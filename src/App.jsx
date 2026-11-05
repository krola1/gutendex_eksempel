import { useState } from "react";
import "./App.css";
import Categories from "./components/Categories";
import List from "./components/List";
import { categories, useCategories } from "./hooks/useCategories";

/**
 * App is the root component – everything else is rendered inside it.
 *
 * The selected category is stored HERE, in the parent, because two
 * components need it:
 *   - <Categories> needs to show it AND change it
 *   - <List> needs to read it to know which books to fetch
 *
 * This pattern is called "lifting state up": when sibling components need
 * to share data, keep the state in their closest common parent and pass
 * it down as props.
 */
export default function App() {
  // useState returns an array with two things:
  //   category    -> the current value ("Fiction" the first time)
  //   setCategory -> a function that updates the value and makes React re-render
  const [category, setCategory] = useState("Fiction");

  return (
    // <>...</> is a Fragment. A component can only return ONE element,
    // and a Fragment lets us group several without adding an extra <div>.
    <>
      {/* We pass both the value and the setter function as props,
          so the child component can change the parent's state. */}
      <Categories currentCategory={category} setCurrentCategory={setCategory} />

      {/* Whenever `category` changes, List gets a new prop and re-renders. */}
      <List category={category} />
    </>
  );
}
