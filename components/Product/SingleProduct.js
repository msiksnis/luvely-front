import tw, { styled } from "twin.macro";
import "styled-components/macro";
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import Head from "next/head";
import DisplayError from "../ErrorMessage";
import formatMoney from "../../lib/formatMoney";
import AddToCart from "../AddToCart";
import DetailsHeader from "./DetailsHeader";

const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($id: ID!) {
    Product(where: { id: $id }) {
      name
      price
      shortDescription
      description
      id
      photo {
        id
        altText
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

export default function SingleProduct({ id }) {
  const { data, loading, error } = useQuery(SINGLE_ITEM_QUERY, {
    variables: {
      id,
    },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <DisplayError error={error} />;
  const { Product } = data;
  const description = Product.description;

  return (
    <div tw="bg-[#F4FBF4]">
      <div tw="mx-0 md:mx-20 lg:mx-40 pt-44">
        <Head>
          <title>Enga Beauty | {Product.name}</title>
        </Head>
        <div tw="flex font-quicksand pr-10 pt-10 pb-40">
          <div tw="w-[60%]">
            <img
              src={Product.photo.image.publicUrlTransformed}
              alt={Product.photo.altText}
            />
          </div>
          <div tw="w-[40%]">
            <h2 tw="text-3xl pt-6 font-semibold">{Product.name}</h2>
            <h3 tw="text-xl border-b py-6">{Product.shortDescription}</h3>
            <p tw="text-lg font-semibold border-b py-6">
              {formatMoney(Product.price)}
            </p>
            <div tw="pb-40">
              <DetailsHeader description={description} />
            </div>
            <button
              tw="border border-black rounded px-32 py-3 text-white bg-black tracking-wider
              hover:(text-black bg-white) transition duration-300 ease-in-out"
            >
              <AddToCart id={id} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
