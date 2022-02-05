import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import Head from "next/head";
import DisplayError from "./ErrorMessage";
import "styled-components/macro";
import formatMoney from "../lib/formatMoney";

const SINGLE_TREATMENT_QUERY = gql`
  query SINGLE_TREATMENT_QUERY($id: ID!) {
    Treatment(where: { id: $id }) {
      id
      treatmentName
      price
      shortDescription
      fullDescription
      sex
      status
      treatmentPhoto {
        id
        altText
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

export default function SingleTreatment({ id }) {
  const { data, loading, error } = useQuery(SINGLE_TREATMENT_QUERY, {
    variables: {
      id,
    },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <DisplayError error={error} />;
  const { Treatment } = data;
  return (
    <div>
      <Head>
        <title>Luvely | {Treatment.treatmentName}</title>
      </Head>
      <img
        src={Treatment?.treatmentPhoto?.image.publicUrlTransformed}
        alt={Treatment?.treatmentPhoto?.altText}
      />
      <div className="mx-4 mt-6 text-center font-quicksand">
        <h2 tw="text-4xl mb-4">{Treatment.treatmentName}</h2>
        <p tw="text-gray-500">{Treatment.fullDescription}</p>
        <p tw="text-3xl pt-10">{formatMoney(Treatment.price)}</p>
      </div>
    </div>
  );
}
