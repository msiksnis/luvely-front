import SingleProduct from "../../components/Product/SingleProduct";

export default function SingleProductPage({ query }) {
  return (
    <div className="">
      <SingleProduct id={query.id} />
    </div>
  );
}
