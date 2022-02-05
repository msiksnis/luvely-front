import tw, { styled } from "twin.macro";
import "styled-components/macro";
import Link from "next/link";
import formatMoney from "../../lib/formatMoney";
// import DeleteProduct from "../DeleteProduct";
import Image from "next/image";
import { useMutation } from "@apollo/client";
import gql from "graphql-tag";
import { CURRENT_USER_QUERY } from "../User";

export const ADD_TO_CART_MUTATION = gql`
  mutation ADD_TO_CART_MUTATION($id: ID!) {
    addToCart(productId: $id) {
      id
    }
  }
`;

const Ellipsis = styled.div`
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default function Product({ product, id }) {
  const [addToCart, { loading }] = useMutation(ADD_TO_CART_MUTATION, {
    variables: { id },
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });
  return (
    <>
      <div className="group relative h-[570px] w-96 cursor-pointer bg-[#FDFAFB] px-10 font-quicksand">
        <Link href={`/product/${product.id}`}>
          <a>
            <div tw="absolute inset-0 w-96 h-[570px] group-hover:(border transition scale-105 duration-300 ease-in-out)" />
            <div tw="grid mx-auto group-hover:(transition scale-105 duration-300 ease-in-out)">
              <Image
                height={300}
                width={200}
                src={product?.photo?.image?.publicUrlTransformed}
                alt={product.name}
              />
            </div>
          </a>
        </Link>

        <Ellipsis tw="h-16 text-2xl font-medium text-center">
          {product.name}
        </Ellipsis>
        <Ellipsis tw="mb-5 pt-3 text-center">{product.description}</Ellipsis>
        <div tw="text-center font-bold text-sm ">
          {formatMoney(product.price)}
        </div>
        <div tw="hidden group-hover:flex justify-center mt-10">
          <button
            tw="absolute border border-black rounded px-20 py-2 font-bold text-white bg-black text-sm
              hover:(text-black bg-white) transition duration-300 ease-in-out shadow"
            disabled={loading}
            type="button"
            onClick={addToCart}
            id={product.id}
          >
            ADD{loading && "ING"} TO BAG
          </button>
        </div>
      </div>
    </>
  );
}

// Button for edditing the single product
{
  /* <Link
  href={{
    pathname: "/update",
    query: {
      id: product.id,
    },
  }}
  >
  Edit ✏️
</Link> */
}

// Button to delete the single product
{
  /* <DeleteProduct id={product.id}>Delete</DeleteProduct> */
}
