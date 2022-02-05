import UpdateProduct from "../components/UpdateProduct";

export default function UpdatePage({ query }) {
  return (
    <div className="mt-44">
      <UpdateProduct id={query.id} />
    </div>
  );
}
