import { useCategories } from "../hooks/useCategories";

/**
 * List shows the titles of the books in the chosen category.
 *
 * Props:
 *   category - the topic to show books for (comes from App)
 *
 * All the fetching logic lives in the custom hook useCategories,
 * so this component only has to care about what to SHOW.
 */
export default function List({ category }) {
  // Call our custom hook. Every time `category` changes, the hook
  // fetches new books and this component re-renders with the new data.
  const { data, isLoading } = useCategories(category);

  // "Early return": while we wait for the API, show a loading message
  // and stop here. This also protects us from calling .map() on null.
  if (isLoading) return <h1>Loading....</h1>;

  console.log(data);

  return (
    // Inline styles in React are written as a JS object, so we use
    // double curly braces: the outer {} means "JavaScript here",
    // the inner {} is the object itself.
    <div style={{ border: "solid white" }}>
      {/* Loop over every book and show its title in a <p> tag. */}
      {data.map((book) => (
        <p>{book.title}</p>
      ))}{" "}
    </div>
  );
}
