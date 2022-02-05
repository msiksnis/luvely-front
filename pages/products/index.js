import { useRouter } from "next/dist/client/router";
import Pagination from "../../components/Pagination";
import Products from "../../components/Product/Products";

export default function ProductsPage() {
  const { query } = useRouter();
  const page = parseInt(query.page);
  return (
    <div className="">
      <Products page={page || 1} />
      <Pagination page={page || 1} />
    </div>
  );
}
