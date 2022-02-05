import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import Treatment from "../../Treatment/Treatment";
import Loading from "../../Loading";

export const ALL_TREATMENTS_QUERY = gql`
  query ALL_TREATMENTS_QUERY($skip: Int = 0, $first: Int) {
    allTreatments(
      first: $first
      skip: $skip
      where: { subcategory: "FOTPLEIE HERRE" }
    ) {
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

export default function FotpleieHerre({ page }) {
  const { data, error, loading } = useQuery(ALL_TREATMENTS_QUERY);
  if (loading) return <Loading />;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div>
      {data.allTreatments.map((treatment) => (
        <Treatment key={treatment.id} treatment={treatment} />
      ))}
    </div>
  );
}
