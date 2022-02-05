import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import styled from "styled-components";
import { perPage } from "../../config";
import Loading from "../Loading";
import Product from "./Product";

export const ALL_PRODUCTS_QUERY = gql`
  query ALL_PRODUCTS_QUERY($skip: Int = 0, $first: Int) {
    allProducts(first: $first, skip: $skip) {
      id
      name
      price
      description
      photo {
        id
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

const ProductsListStyles = styled.div`
  margin-top: 5rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
`;

export default function Products({ page }) {
  const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY, {
    variables: {
      skip: page * perPage - perPage,
      first: perPage,
    },
  });
  if (loading) return <Loading />;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div className="flex justify-center">
      <ProductsListStyles>
        {data?.allProducts.map((product) => (
          <Product key={product.id} product={product} id={product.id} />
        ))}
      </ProductsListStyles>
    </div>
  );
}
