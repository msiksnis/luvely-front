import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import Treatment from "./Treatment";

export const ALL_TREATMENTS_QUERY = gql`
  query ALL_TREATMENTS_QUERY($skip: Int = 0, $first: Int) {
    allTreatments(first: $first, skip: $skip) {
      id
      treatmentName
      price
      shortDescription
      fullDescription
      sex
      status
      treatmentPhoto {
        id
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

export default function Treatments({ page }) {
  const { data, error, loading } = useQuery(ALL_TREATMENTS_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div>
      {data.allTreatments.map((treatment) => (
        <Treatment key={treatment.id} treatment={treatment} />
      ))}
    </div>
  );
}
