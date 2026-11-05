import { useCategories } from "../hooks/useCategories";

export default function List({ category }) {
  const { data, isLoading } = useCategories(category);

  if (isLoading) return <h1>Loading....</h1>;

  console.log(data);

  return (
    <div style={{ border: "solid white" }}>
      {data.map((book) => (
        <p>{book.title}</p>
      ))}{" "}
    </div>
  );
}
