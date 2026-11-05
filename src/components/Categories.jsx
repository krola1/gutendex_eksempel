import { categories } from "../hooks/useCategories";

/**
 * Categories shows a dropdown (<select>) where the user picks a topic.
 *
 * Props (values sent in from the parent component, App):
 *   currentCategory    - the category that is selected right now
 *   setCurrentCategory - a function from App that changes the category
 *
 * The { } in the parameter list is "destructuring": it pulls the props
 * out of the props object so we can write `currentCategory` instead of
 * `props.currentCategory`.
 */
export default function Categories({ setCurrentCategory, currentCategory }) {
  return (
    <>
      {/* This is a CONTROLLED input:
          - `value` makes React decide what is shown (it comes from state)
          - `onChange` runs every time the user picks something new.
            `e` is the event, and e.target.value is the option they chose.
            We send it up to App, which updates its state and re-renders. */}
      <select
        value={currentCategory}
        onChange={(e) => setCurrentCategory(e.target.value)}
      >
        {/* .map() turns each string in the array into an <option> element.
            React needs a unique `key` on each item in a list so it can
            keep track of which element is which when the list changes. */}
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </>
  );
}
