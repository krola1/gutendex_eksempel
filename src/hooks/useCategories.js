import { useState, useEffect } from "react";

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

export const useCategories = (category) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      setIsLoading(true);
      const res = await fetch(`https://gutendex.com/books/?topic=${category}`);
      console.log("res", res);

      const result = await res.json();
      console.log("result", result);

      if (result) {
        setIsLoading(false);

        setData(result.results);
      }
    };
    fetchCategories();
  }, [category]);

  return { data, isLoading };
};
