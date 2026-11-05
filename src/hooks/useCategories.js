import { useState, useEffect } from "react";

// The list of topics the user can choose from.
// It is defined OUTSIDE the hook/component so it is created only once,
// and it is exported so other files (like Categories.jsx) can import it.
export const categories = [
  "Fiction",
  "Mystery",
  "Thriller",
  "Romance",
  "Fantasy",
  "Morality",
  "Society",
  "Power",
  "Justice",
  "Adventure",
  "Tragedy",
  "War",
  "Philosophy",
];

/**
 * useCategories is a CUSTOM HOOK.
 *
 * A custom hook is just a function whose name starts with "use" and that
 * calls other hooks (useState, useEffect, ...). It lets us move logic
 * (here: fetching data) out of a component, so the component stays small
 * and the logic can be reused in other components.
 *
 * @param {string} category - the topic to search for, e.g. "Fantasy"
 * @returns {{ data: Array | null, isLoading: boolean }}
 *   data      -> the list of books from the API (null before the first fetch)
 *   isLoading -> true while we are waiting for the API to answer
 */
export const useCategories = (category) => {
  // State for the books we get back from the API.
  // It starts as null because we have no data yet.
  const [data, setData] = useState(null);

  // State that tells the component whether we are still waiting for data.
  // It starts as true because we start fetching right away.
  const [isLoading, setIsLoading] = useState(true);

  // useEffect runs code AFTER the component has rendered.
  // It is the right place for "side effects" like fetching data,
  // timers, or talking to things outside React.
  useEffect(() => {
    // The function passed to useEffect cannot be async itself,
    // so we create an async function inside it and call it right after.
    const fetchCategories = async () => {
      // Show "Loading..." again every time a new category is fetched.
      setIsLoading(true);

      // fetch() sends an HTTP request. `await` pauses this function
      // until the server answers. The template string (backticks)
      // puts the chosen category into the URL.
      const res = await fetch(`https://gutendex.com/books/?topic=${category}`);
      console.log("res", res);

      // The answer arrives as text – .json() turns it into a JS object.
      const result = await res.json();
      console.log("result", result);

      if (result) {
        setIsLoading(false);

        // Gutendex puts the list of books in a property called `results`.
        // Calling setData stores it in state and triggers a re-render.
        setData(result.results);
      }
    };
    fetchCategories();

    // The DEPENDENCY ARRAY: React re-runs this effect only when a value
    // in this array changes. So we fetch once on the first render, and
    // again every time `category` changes – not on every render.
  }, [category]);

  // Return an object so the component can pick out what it needs:
  // const { data, isLoading } = useCategories(category);
  return { data, isLoading };
};
