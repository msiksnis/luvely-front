import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import Promoted from "../Promotions/Promoted";

const ALL_PROMOTED_TREATMENTS_QUERY = gql`
  query ALL_PROMOTED_TREATMENTS_QUERY($skip: Int = 0, $first: Int) {
    allTreatments(first: $first, skip: $skip, where: { promoted: "TRUE" }) {
      id
      treatmentPhoto {
        id
        image {
          publicUrlTransformed
        }
      }
      treatmentName
      fullDescription
    }
  }
`;

export default function PromotedTreatments() {
  const { data, error, loading } = useQuery(ALL_PROMOTED_TREATMENTS_QUERY);
  if (loading) return <p>Loading... </p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <Promoted data={data} />
    </>
  );
}
